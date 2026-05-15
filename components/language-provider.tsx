'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'en' | 'fr' | 'de' | 'it' | 'es';

const SUPPORTED_LOCALES: Locale[] = ['en', 'fr', 'de', 'it', 'es'];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Locked to English. All other translations (fr/de/it/es) stay in the codebase
  // for future use; the language switcher in the nav has been removed.
  // To re-enable user-facing language switching, restore the auto-detection
  // useEffect below from git history and re-mount the locale dropdown in site-nav.
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const contextValue = useMemo(() => ({ locale, setLocale }), [locale]);

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
