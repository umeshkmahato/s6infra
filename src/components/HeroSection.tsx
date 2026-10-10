'use client';

import Reveal from '@/components/Reveal';
import { useLanguage } from '@/hooks/useLanguage';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="container">
        <Reveal className="hero-content" aria-label="Hero content">
          <div className="hero-badge">
            <span></span>
            {t.hero.badge}
          </div>

          <h1>
            {t.hero.titleLine1}
            <br />
            <span>{t.hero.titleHighlight}</span>
          </h1>

          <p>{t.hero.description}</p>

          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              {t.hero.primaryCta}
            </a>

            <a href="#contact" className="btn btn-outline">
              {t.hero.secondaryCta}
            </a>
          </div>

          <div className="hero-stats">
            {t.hero.stats.map((stat) => (
              <div key={stat.title} className="hero-stat">
                <strong>{stat.title}</strong>
                <span>{stat.description}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
