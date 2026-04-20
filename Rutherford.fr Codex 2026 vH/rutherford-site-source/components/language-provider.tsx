'use client';

import { createContext, useContext, useEffect, useMemo } from 'react';

export type Locale = 'en' | 'fr';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = 'en';
    window.localStorage.setItem('rutherford-locale', 'en');
  }, []);

  const setLocale = () => {
    document.documentElement.lang = 'en';
    window.localStorage.setItem('rutherford-locale', 'en');
  };

  const contextValue = useMemo(() => ({ locale: 'en' as Locale, setLocale }), []);

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
