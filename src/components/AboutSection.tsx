'use client';

import Reveal from '@/components/Reveal';
import { useLanguage } from '@/hooks/useLanguage';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <div className="visual-card">
            <h3>{t.about.visualTitle}</h3>
            <p>{t.about.visualDescription}</p>
          </div>
        </Reveal>

        <Reveal className="about-content">
          <div className="section-label">{t.about.label}</div>

          <h2 className="section-title">{t.about.title}</h2>

          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="section-text">
              {paragraph}
            </p>
          ))}

          <div className="about-list">
            {t.about.highlights.map((item) => (
              <div key={item.title} className="about-item">
                <div className="check">✓</div>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}


