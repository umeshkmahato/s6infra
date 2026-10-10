'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo-circle">
              <img
                src="/images/s6infra.svg"
                alt="S6 Infra"
                className="site-logo site-logo--footer"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="footer-about">{t.footer.about}</p>
          </div>

          <div>
            <h4>{t.footer.quickLinksTitle}</h4>

            <ul className="footer-links">
              {t.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t.footer.servicesTitle}</h4>

            <ul className="footer-links">
              {t.footer.serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {currentYear} S6 Infra. {t.footer.rights}
          </div>
          <div>{t.footer.tagline}</div>
        </div>
      </div>
    </footer>
  );
}
