'use client';

import Reveal from '@/components/Reveal';
import CapabilityCard from '@/components/CapabilityCard';
import { useLanguage } from '@/hooks/useLanguage';

const svgIcons = [
  '/images/service-1.svg',
  '/images/service-2.svg',
  '/images/service-3.svg',
  '/images/service-4.svg',
  '/images/service-5.svg',
  '/images/service-6.svg',
  '/images/service-1.svg',
  '/images/service-2.svg',
];

export default function CapabilitiesSection() {
  const { t } = useLanguage();

  return (
    <section className="section capabilities" id="capabilities">
      <div className="container">
        <Reveal className="section-heading">
          <div className="section-label">{t.capabilities.label}</div>
          <h2 className="section-title">{t.capabilities.title}</h2>
          <p className="section-text">{t.capabilities.description}</p>
        </Reveal>

        <div className="capability-cards-grid">
          {t.capabilities.items.map((capability, index) => (
            <Reveal key={capability.number}>
              <CapabilityCard
                number={capability.number}
                title={capability.title}
                description={capability.description}
                icon={svgIcons[index % svgIcons.length]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


