'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <h2>{t.cta.title}</h2>
          <p>{t.cta.description}</p>
        </div>

        <a href="#contact" className="btn cta-button">
          {t.cta.button}
        </a>
      </div>
    </section>
  );
}


