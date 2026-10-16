import React, { useEffect, useState } from 'react';
import { COMPANY } from '../data/company';
import { buildWhatsAppUrl } from '../lib/simulator';
import { TrincaLogo } from './TrincaLogo';

interface NavItem {
  readonly code: string;
  readonly href: string;
  readonly label: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { code: '01', href: '#simulador', label: 'Simulador Caixa' },
  { code: '02', href: '#modalidades', label: 'Modalidades' },
  { code: '03', href: '#obras', label: 'Obras' },
  { code: '04', href: '#engenharia', label: 'Engenharia' },
  { code: '05', href: '#etapas', label: 'Etapas' },
  { code: '06', href: '#duvidas', label: 'Dúvidas' },
  { code: '07', href: '#contato', label: 'Escritório' },
];

export const SiteHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const defaultWhatsAppHref = buildWhatsAppUrl(
    'Olá, equipe da Trinca Engenharia! Vim pelo site e gostaria de informações sobre construção financiada em Maringá.',
  );

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="tech-topbar" role="region" aria-label="Informações institucionais">
        <div className="container tech-topbar-inner">
          <div className="tech-topbar-group">
            <span className="tech-topbar-badge">MARINGÁ, PR</span>
            <span className="tech-topbar-item tech-topbar-hide-mobile">
              {COMPANY.address.street} ({COMPANY.address.neighborhood})
            </span>
            <span className="tech-topbar-sep tech-topbar-hide-mobile" aria-hidden="true">
              /
            </span>
            <span className="tech-topbar-item tech-topbar-hide-mobile">CNPJ {COMPANY.cnpj}</span>
          </div>
          <div className="tech-topbar-group">
            <a
              href={COMPANY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-topbar-link tech-topbar-hide-xs"
            >
              Instagram {COMPANY.instagramHandle}
            </a>
            <span className="tech-topbar-sep tech-topbar-hide-mobile" aria-hidden="true">
              /
            </span>
            <a href={COMPANY.landlineHref} className="tech-topbar-link tech-topbar-hide-mobile">
              Fixo {COMPANY.landlineDisplay}
            </a>
            <span className="tech-topbar-sep tech-topbar-hide-xs" aria-hidden="true">
              /
            </span>
            <a
              href={defaultWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-topbar-link tech-topbar-link-highlight"
            >
              WhatsApp {COMPANY.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header-inner">
          <a
            href="#topo"
            className="site-header-brand"
            aria-label="Trinca Engenharia, voltar ao topo"
            onClick={closeMobileMenu}
          >
            <TrincaLogo variant="dark" />
          </a>

          <nav className="site-nav" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="site-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header-actions">
            <a
              href={defaultWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm site-header-cta"
            >
              Falar com engenheiro
            </a>

            <button
              type="button"
              className="mobile-menu-toggle"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="mobile-menu-toggle-label">Menu</span>
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="mobile-menu-icon"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav
            id="mobile-nav-drawer"
            className="mobile-nav-drawer"
            aria-label="Menu de navegação móvel"
          >
            <div className="container mobile-nav-drawer-inner">
              <div className="mobile-nav-links">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span className="mobile-nav-code">{item.code}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>

              <div className="mobile-nav-footer">
                <a
                  href={defaultWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-brass btn-block"
                  onClick={closeMobileMenu}
                >
                  Falar com engenheiro no WhatsApp
                </a>
                <div className="mobile-nav-meta">
                  <span>
                    {COMPANY.address.street} ({COMPANY.address.neighborhood}, Maringá/PR)
                  </span>
                  <span>
                    Fixo: <a href={COMPANY.landlineHref}>{COMPANY.landlineDisplay}</a> · Instagram:{' '}
                    <a href={COMPANY.instagramUrl} target="_blank" rel="noopener noreferrer">
                      {COMPANY.instagramHandle}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
