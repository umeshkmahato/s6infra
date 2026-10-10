'use client';

import { useState, useEffect } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${hasScroll ? 'scrolled' : ''}`}>
      <nav className="container navbar">
        <a href="#home" onClick={() => setIsMenuOpen(false)}>
          <div>
            <div className="logo-circle">
              <img
                src="/images/s6infra.svg"
                alt="S6 Infra"
                className="site-logo--header"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="menu-btn"
          aria-label={t.ui.openNavigation}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {t.nav.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={link.href === '#contact' ? 'nav-cta' : ''} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <LanguageSwitcher />
      </nav>
    </header>
  );
}
