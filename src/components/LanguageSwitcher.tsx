'use client';

import { languageLabels, languages } from '@/lib/translations';
import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="language-switcher" aria-label={t.languageSwitcher.label} role="group">
      {languages.map((locale) => (
        <button
          key={locale}
          type="button"
          className={`language-switcher__button ${language === locale ? 'is-active' : ''}`}
          onClick={() => setLanguage(locale)}
          aria-pressed={language === locale}
        >
          {languageLabels[locale]}
        </button>
      ))}
    </div>
  );
}

