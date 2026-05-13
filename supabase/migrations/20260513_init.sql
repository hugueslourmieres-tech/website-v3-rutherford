-- Rutherford Academy schema
-- Run this in the Supabase SQL editor (Project: cawumjturiizzhzjtuiy)

-- =============================================================================
-- profiles: 1:1 with auth.users, public-readable subset
-- =============================================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  avatar_url text,
  stripe_customer_id text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Trigger: when a new auth.users row is created, insert a profile row
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- =============================================================================
-- enrollments: which course a user has access to, and how they got it
-- =============================================================================
create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  course_slug text not null,
  source text not null check (source in ('free', 'purchase', 'pass', 'grant')),
  stripe_session_id text unique,
  granted_at timestamptz not null default now(),
  expires_at timestamptz,
  unique (user_id, course_slug)
);

create index if not exists enrollments_user_id_idx on public.enrollments (user_id);
create index if not exists enrollments_course_slug_idx on public.enrollments (course_slug);

-- =============================================================================
-- pass_subscriptions: Rutherford Academy Pass (all-access)
-- =============================================================================
create table if not exists public.pass_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  stripe_subscription_id text unique,
  stripe_customer_id text,
  status text not null check (status in ('active', 'past_due', 'canceled', 'incomplete')),
  current_period_end timestamptz,
  cancel_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists pass_subscriptions_user_id_idx on public.pass_subscriptions (user_id);

-- =============================================================================
-- course_progress: per-lesson completion tracking (for Phase 5)
-- =============================================================================
create table if not exists public.course_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  course_slug text not null,
  lesson_index integer not null,
  completed_at timestamptz not null default now(),
  unique (user_id, course_slug, lesson_index)
);

create index if not exists course_progress_user_id_idx on public.course_progress (user_id);

-- =============================================================================
-- Row Level Security
-- =============================================================================
alter table public.profiles enable row level security;
alter table public.enrollments enable row level security;
alter table public.pass_subscriptions enable row level security;
alter table public.course_progress enable row level security;

-- Profiles: users can read & update their own profile
drop policy if exists "Profiles: self read" on public.profiles;
create policy "Profiles: self read" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "Profiles: self update" on public.profiles;
create policy "Profiles: self update" on public.profiles
  for update using (auth.uid() = id);

-- Enrollments: users can read their own enrollments
drop policy if exists "Enrollments: self read" on public.enrollments;
create policy "Enrollments: self read" on public.enrollments
  for select using (auth.uid() = user_id);

-- Pass subscriptions: users can read their own
drop policy if exists "Pass: self read" on public.pass_subscriptions;
create policy "Pass: self read" on public.pass_subscriptions
  for select using (auth.uid() = user_id);

-- Course progress: users can read & write their own
drop policy if exists "Progress: self read" on public.course_progress;
create policy "Progress: self read" on public.course_progress
  for select using (auth.uid() = user_id);

drop policy if exists "Progress: self insert" on public.course_progress;
create policy "Progress: self insert" on public.course_progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "Progress: self delete" on public.course_progress;
create policy "Progress: self delete" on public.course_progress
  for delete using (auth.uid() = user_id);

-- Note: enrollments and pass_subscriptions can ONLY be written by the service_role
-- (Stripe webhook handler), never by the user directly. The absence of insert/update
-- policies for the regular role enforces this.

-- =============================================================================
-- Helper view: active course access
-- =============================================================================
create or replace view public.user_course_access as
select
  e.user_id,
  e.course_slug,
  e.source,
  e.granted_at,
  e.expires_at
from public.enrollments e
where e.expires_at is null or e.expires_at > now()
union
-- Pass holders get access to every premium course
select
  p.user_id,
  c.slug as course_slug,
  'pass' as source,
  p.created_at as granted_at,
  p.current_period_end as expires_at
from public.pass_subscriptions p
cross join (
  values
    ('closed-loop-flagship'),
    ('measurecolor-production'),
    ('measurecolor-reports'),
    ('intellitrax2'),
    ('colorloop-ai'),
    ('offset360')
) as c(slug)
where p.status = 'active'
  and (p.current_period_end is null or p.current_period_end > now());
