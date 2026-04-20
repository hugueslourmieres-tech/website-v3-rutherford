import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dataPath = path.join(root, 'data', 'blog-articles.json');
const articles = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const COUNTRY_PATTERNS = [
  'Saudi Arabia',
  'Japan',
  'France',
  'Mexico',
  'India',
  'Monaco',
  'Indonesia',
  'Spain',
  'Germany',
  'United States',
  'USA',
  'Belgium',
  'China',
];

const TECH_PATTERNS = [
  'ColorLoop',
  'IntelliPack',
  'IntelliLoop',
  'IntelliSet',
  'IntelliTrax2',
  'MeasureColor',
  'ColorCert',
  'Colorware',
  'Esko',
  'Equinox',
  'X-Rite',
  'Pantone',
  'CIP3',
  'CIP4',
  'closed-loop',
  'Extended Gamut',
];

function uniq(values) {
  return [...new Set(values.filter(Boolean))];
}

function extractMatches(text, patterns) {
  return uniq(
    patterns.filter((item) => new RegExp(item.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i').test(text))
  );
}

function companyFromTitle(title) {
  return title
    .replace(/\s+Testimonial/i, '')
    .replace(/\s+Video/i, '')
    .replace(/\s+UNDER CONTROL/i, '')
    .trim();
}

function joinList(items) {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')}, and ${items.at(-1)}`;
}

function buildCaseStudy(article) {
  const sourceText = article.paragraphs.join(' ');
  const company = companyFromTitle(article.title);
  const countries = extractMatches(sourceText, COUNTRY_PATTERNS);
  const tech = extractMatches(sourceText, TECH_PATTERNS);
  const market = /packaging/i.test(sourceText + article.title)
    ? 'packaging and label production'
    : 'sheetfed offset production';
  const location = countries.length ? ` in ${joinList(countries)}` : '';
  const techLine = tech.length
    ? `${company} is highlighted with a workflow built around ${joinList(tech)}.`
    : `${company} is presented as a print operation focused on color consistency, makeready control, and repeatability.`;

  return {
    excerpt: `${company} case study for offset printing standardization, quality control, and faster makeready.`,
    lead: `${company}${location} shows how disciplined color workflows, measurement, and automation can improve productivity in ${market}.`,
    paragraphs: [
      `${company} is featured here as a practical example of how print businesses are modernizing ${market}. The story is not just about adding software or hardware: it is about reducing variation, reaching color faster, and making daily production easier for operators and managers alike.`,
      techLine,
      `For offset printers, the real value of this type of deployment is operational stability. Better presets, faster measurements, and more reliable feedback loops help teams reach target color with less paper, fewer correction cycles, and a more controlled startup on every repeat job.`,
      `This article also reflects a wider trend in industrial print: customers expect measurable consistency across shifts, presses, and production sites. Standardized workflows make it easier to onboard operators, scale quality procedures, and give brand owners more confidence in the result.`,
      `Rutherford’s role in these projects is to connect the console, the measurement layer, and the reporting workflow into one usable process. The outcome is a production environment where quality becomes easier to repeat, easier to document, and easier to improve over time.`,
    ],
  };
}

function buildCultureArticle(article, topic, angle) {
  return {
    excerpt: `${topic} in offset printing: why people, skills, and operational culture still matter.`,
    lead: angle,
    paragraphs: [
      angle,
      `Printing performance is never only about equipment. It is also about people, know-how, and the ability to maintain standards every day. In offset production, the best results usually come from teams that combine technical discipline with a strong sense of craft.`,
      `That is why Rutherford regularly highlights the people behind the presses: operators, production managers, color specialists, and plant teams who make stability possible in real working conditions.`,
      `From a business perspective, a strong production culture leads to fewer do-overs, better communication with customers, and a more repeatable quality level. It also makes automation easier to adopt because the team understands what the system should deliver and how to verify it.`,
      `This article is a reminder that sustainable print performance depends on both technology and people. The strongest plants are the ones that invest in both.`,
    ],
  };
}

function buildProductArticle(title, lead, points) {
  return {
    excerpt: lead,
    lead,
    paragraphs: points,
  };
}

function buildArticle(article) {
  const title = article.title;
  const slug = article.slug;

  switch (slug) {
    case 'paper-crisis':
      return buildProductArticle(
        'Paper crisis',
        'How offset printers can respond to substrate volatility by reducing waste, stabilizing makeready, and protecting margin.',
        [
          'Paper cost inflation changes the economics of print very quickly. When substrate prices rise and lead times get longer, the traditional “start, adjust, and throw away sheets” approach becomes much more expensive than before.',
          'For offset printers, the first priority is to reduce avoidable waste. Better presetting and stronger closed-loop control shorten the path to saleable sheets, which directly lowers paper consumption and improves cost control during unstable market conditions.',
          'This is why Rutherford positions accurate ink-key behavior, job-by-job learning, and consistent color guidance as practical tools rather than abstract automation features. In a volatile substrate market, every avoided adjustment matters.',
          'The article’s message remains highly relevant today: the more expensive paper becomes, the more value there is in precise setup, repeatable color, and stable production data. Waste reduction is no longer just a quality topic; it is a margin-protection strategy.',
          'For print businesses serving demanding packaging, label, and commercial customers, efficient makeready is one of the fastest ways to protect profitability while keeping delivery times and customer expectations under control.',
        ]
      );
    case 'measure-color-21.1':
      return buildProductArticle(
        'MeasureColor 21.1',
        'A product update focused on stronger integrations, better quality reporting, and improved data flow across the print workflow.',
        [
          'MeasureColor 21.1 represents the kind of software evolution that matters in production: not cosmetic change, but stronger connectivity, smoother score handling, and better visibility from the pressroom to quality management.',
          'For offset printers, this matters because quality systems only create value when they connect easily with the devices and platforms already used on site. Integrations with tools such as ColorCert, GMG, IntelliTrax2, and MeasureColor Reports make the workflow more reliable and easier to scale.',
          'The operational benefit is straightforward: more consistent reporting, less friction in target management, and faster access to quality information for operators, supervisors, and brand-facing teams.',
          'In practical terms, software updates like this help standardize communication between measurement, reference management, and reporting. That creates a more robust quality loop and reduces the manual work needed to keep systems aligned.',
          'For printers looking to industrialize quality control, these improvements are part of a bigger trend: color data is becoming more connected, more actionable, and more central to production performance.',
        ]
      );
    case 'pantone-2021':
      return buildProductArticle(
        'Pantone 2021',
        'Why color trends still matter in packaging, branding, and premium print production.',
        [
          'Pantone’s color announcements are often seen as a design story, but they also have practical implications for print. When brands adopt new reference colors, printers need to evaluate how those hues translate in production and how to maintain consistency across jobs and substrates.',
          'For offset printing, that means checking gamut capability, ink behavior, and the control strategy required to reproduce vibrant shades reliably. Trend colors become a production challenge as soon as they move from screen to press.',
          'This is especially true in packaging and premium commercial work, where color is tied directly to brand recognition and shelf impact. Strong color management processes help printers respond to trend-driven briefs without compromising repeatability.',
          'The broader lesson is simple: color communication starts in design, but it only delivers value when it can be printed consistently. That is where measurement, standards, and controlled workflows make the difference.',
        ]
      );
    case 'girl-power':
      return buildCultureArticle(
        article,
        'Women in print',
        'The printing industry grows stronger when it values diverse profiles, technical expertise, and more inclusive leadership across production, quality, and innovation roles.'
      );
    case 'offset-machinist':
      return buildCultureArticle(
        article,
        'Offset press expertise',
        'Behind every stable pressroom, there are operators who understand how to combine technical control, discipline, and print craftsmanship.'
      );
    case 'keep-your-production-under-control':
      return buildProductArticle(
        'Keep your production under control',
        'How connected presetting, closed-loop color control, and quality reporting create a more predictable offset workflow.',
        [
          'Production control in offset printing depends on more than a single device or a single console. It depends on how presetting, measurement, guidance, and reporting work together across the entire production cycle.',
          'This article highlights a workflow philosophy built around Rutherford applications, IntelliTrax2 from X-Rite, and MeasureColor. The aim is to create a continuous process from setup to verification instead of relying on disconnected steps.',
          'When these layers are connected, printers gain faster makeready, better visibility into variation, and a more reliable path to target color. That reduces paper waste while making operators more effective under production pressure.',
          'The result is not only higher quality. It is also better control of time, substrate, and customer expectations. For modern print plants, that combination is essential.',
        ]
      );
    case 'intelliloop-v.1.20':
      return buildProductArticle(
        'IntelliLoop v.1.20',
        'A workflow update focused on strengthening closed-loop color control and production consistency.',
        [
          'IntelliLoop updates matter because closed-loop color control is only as effective as the quality of the logic behind it. When software evolves, the practical goal is always the same: reach target faster and keep the process stable job after job.',
          'For offset printers, this type of release improves day-to-day production by refining how measurement data is interpreted and translated into console guidance. That helps reduce unnecessary intervention and improves operator confidence.',
          'In the broader Rutherford ecosystem, IntelliLoop plays a central role between measurement and on-press action. It helps transform reading data into useful production decisions rather than passive reporting.',
          'Version updates therefore support a bigger operational objective: better repeatability, better waste control, and more reliable color performance over time.',
        ]
      );
    case 'roi':
      return buildProductArticle(
        'ROI',
        'Why return on investment in offset print automation should be measured through waste reduction, time savings, and repeatability.',
        [
          'In offset printing, ROI is rarely driven by one spectacular metric. It is usually built through many small operational gains: fewer startup sheets, shorter makeready, less manual correction, and better repeatability on repeat jobs.',
          'That is why Rutherford frames ROI through real production behavior. If a plant can reach color faster and hold quality more consistently, it saves substrate, operator time, and rework across the full year.',
          'The financial effect is often stronger than expected because the same improvements touch multiple cost areas at once: paper, ink, labor, downtime, and customer-facing quality issues.',
          'Viewed this way, automation is not only a technical upgrade. It is a decision about how efficiently the pressroom converts time and materials into sellable sheets.',
        ]
      );
    case 'worldwide-support-':
      return buildProductArticle(
        'Worldwide Support',
        'Why remote support and structured service matter for fast-moving print plants.',
        [
          'Support is a critical part of print automation. Even the best workflow loses value if a plant cannot get a quick answer when a console, device, or job setup issue appears during production.',
          'Worldwide support allows print sites to keep moving with faster troubleshooting, clearer escalation, and more consistent guidance across time zones and production environments.',
          'For printers, that means shorter interruptions and a better chance of resolving issues before they become costly production delays. It also helps teams adopt new tools more confidently.',
          'Rutherford’s support story is therefore part of the product story: a workflow is only useful when the teams using it can rely on practical, fast, and knowledgeable assistance.',
        ]
      );
    case 'self-financed-rutherford-system':
      return buildProductArticle(
        'Self-financed Rutherford system',
        'How waste reduction and faster makeready can help automation projects pay for themselves.',
        [
          'Automation projects in print are often evaluated through upfront cost alone, but the more relevant question is how quickly they reduce recurring waste and inefficiency.',
          'When presetting, closed-loop control, and measurement are working together, printers often recover value through lower paper waste, less manual tuning, and faster access to saleable sheets.',
          'That is why a Rutherford system can be described as self-financed in practical terms: the operational gains accumulate every day, and those gains help offset the initial investment.',
          'For plant managers, this approach reframes automation from a capital expenditure into a productivity engine. It connects technical change directly to margin improvement.',
        ]
      );
    case 'stopplayingpiano':
      return buildProductArticle(
        'Stop playing the piano',
        'Why printers should replace manual ink-key correction with a more stable, data-driven workflow.',
        [
          '“Playing the piano” on a press console is a familiar image in offset printing: operators chasing color manually across the width of the sheet, one key at a time. It is also a sign that the preset and control workflow is not doing enough on its own.',
          'Rutherford uses this phrase to describe a problem that many plants still accept as normal. When the setup baseline is weak, operators spend valuable time compensating for variation instead of controlling production efficiently.',
          'The answer is not removing operator expertise. It is giving operators a better starting point through stronger presets, better measurement, and a more responsive closed-loop system.',
          'The less the team has to “play the piano,” the faster it can reach target color, reduce waste, and make repeat jobs more predictable. That is the production logic behind the ColorLoop message.',
        ]
      );
    default:
      return buildCaseStudy(article);
  }
}

const refreshed = articles.map((article) => {
  const generated = buildArticle(article);
  return {
    ...article,
    excerpt: generated.excerpt,
    lead: generated.lead,
    paragraphs: generated.paragraphs,
  };
});

refreshed.unshift({
  slug: 'ppwr-dpp-for-offset-printing',
  title: 'PPWR and Digital Product Passport: What Offset Printers Should Prepare For',
  excerpt:
    'A practical guide to PPWR and DPP readiness for packaging, labels, and offset printing operations serving the European market.',
  lead:
    'What the new EU packaging rules and Digital Product Passport model mean for offset printers, converters, and print supply chains.',
  image: '/images/PPWR EU norme.png',
  paragraphs: [
    'PPWR and Digital Product Passport requirements are becoming strategic topics for packaging printers and converters. Even when the detailed obligations vary by product category, the direction is clear: packaging and printed products sold into the European market will require stronger data, better traceability, and clearer evidence of compliance.',
    'The Packaging and Packaging Waste Regulation (PPWR) entered into force in February 2025 and will generally apply from August 2026. According to the European Commission, the regulation is designed to reduce packaging waste, improve recyclability, increase recycled content where relevant, and harmonize packaging rules across the EU market.',
    'In parallel, the Ecodesign for Sustainable Products Regulation introduces the Digital Product Passport concept. The European Commission describes the DPP as a digital identity card for products, components, and materials, built to support sustainability, circularity, and legal compliance. GS1 also frames the DPP as a digital record that improves traceability and transparency throughout the value chain.',
    'For offset printing companies, the operational implication is straightforward: product, substrate, job, and quality data will matter more. Printers that can connect production data, specifications, approvals, and traceability records in a structured way will be better positioned to answer customer requests and future compliance checks.',
    'This does not mean every printer needs to rebuild its workflow overnight. It does mean that investments in standardization, connected quality systems, and better production visibility are becoming more strategic. The print businesses that prepare now will be in a stronger position to support brand owners, packaging buyers, and regulatory expectations over the next few years.',
  ],
  originalUrl: 'https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en',
  category: 'Rutherford Insights',
  sources: [
    {
      label: 'European Commission – Packaging waste and PPWR overview',
      href: 'https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en',
    },
    {
      label: 'European Commission – Ecodesign for Sustainable Products Regulation',
      href: 'https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/sustainable-products/ecodesign-sustainable-products-regulation_en',
    },
    {
      label: 'GS1 – What is a Digital Product Passport?',
      href: 'https://support.gs1.org/support/solutions/articles/43000758761-what-is-a-digital-product-passport-',
    },
  ],
});

fs.writeFileSync(dataPath, `${JSON.stringify(refreshed, null, 2)}\n`);
console.log(`Regenerated ${refreshed.length} articles.`);
