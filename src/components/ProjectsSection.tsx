'use client';

import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/hooks/useLanguage';
import { PROJECT_IMAGES } from '@/constants/images';

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section-heading">
          <div className="section-label">{t.projects.label}</div>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-text">{t.projects.description}</p>
        </Reveal>

        <div className="projects-grid">
          {t.projects.items.map((project, index) => (
            <Reveal key={project.title} className="project-card">
              <Image
                src={PROJECT_IMAGES[index]}
                alt={project.title}
                fill
                sizes="(max-width: 650px) 100vw, (max-width: 950px) 50vw, 33vw"
                className="project-image"
              />
              <div className="project-image__overlay" />
              <div className="project-overlay">
                <div className="project-tag">{project.tag}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


