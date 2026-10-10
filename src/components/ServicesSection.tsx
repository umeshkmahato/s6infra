'use client';

import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/hooks/useLanguage';
import { SERVICE_IMAGES } from '@/constants/images';

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal className="section-heading">
          <div className="section-label">{t.services.label}</div>

          <h2 className="section-title">{t.services.title}</h2>

          <p className="section-text">{t.services.description}</p>
        </Reveal>

        <div className="services-grid">
          {t.services.items.map((service, index) => (
            <Reveal key={service.title} className="service-card">
              <div className="service-media">
                <Image
                  src={SERVICE_IMAGES[index]}
                  alt={service.title}
                  fill
                  sizes="(max-width: 650px) 100vw, (max-width: 950px) 50vw, 33vw"
                  className="service-image"
                />
                <div className="service-media__overlay" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
