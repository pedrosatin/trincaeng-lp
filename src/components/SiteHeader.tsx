import React from 'react';
import { COMPANY } from '../data/company';
import { buildWhatsAppUrl } from '../lib/simulator';
import { TrincaLogo } from './TrincaLogo';

export const SiteHeader: React.FC = () => {
  const defaultWhatsAppHref = buildWhatsAppUrl(
    'Olá, equipe da Trinca Engenharia! Vim pelo site e gostaria de informações sobre construção financiada em Maringá.',
  );

  return (
    <>
      <div className="tech-topbar" role="region" aria-label="Informações institucionais">
        <div className="container tech-topbar-inner">
          <div className="tech-topbar-group">
            <span className="tech-topbar-badge">MARINGÁ, PR</span>
            <span className="tech-topbar-item">
              {COMPANY.address.street} ({COMPANY.address.neighborhood})
            </span>
            <span className="tech-topbar-sep" aria-hidden="true">
              /
            </span>
            <span className="tech-topbar-item">CNPJ {COMPANY.cnpj}</span>
          </div>
          <div className="tech-topbar-group">
            <a
              href={COMPANY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-topbar-link"
            >
              Instagram {COMPANY.instagramHandle}
            </a>
            <span className="tech-topbar-sep" aria-hidden="true">
              /
            </span>
            <a href={COMPANY.landlineHref} className="tech-topbar-link">
              Fixo {COMPANY.landlineDisplay}
            </a>
            <span className="tech-topbar-sep" aria-hidden="true">
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
          <a href="#topo" className="site-header-brand" aria-label="Trinca Engenharia, voltar ao topo">
            <TrincaLogo variant="dark" />
          </a>

          <nav className="site-nav" aria-label="Navegação principal">
            <a href="#simulador" className="site-nav-link">
              Simulador Caixa
            </a>
            <a href="#modalidades" className="site-nav-link">
              Modalidades
            </a>
            <a href="#obras" className="site-nav-link">
              Obras
            </a>
            <a href="#engenharia" className="site-nav-link">
              Engenharia
            </a>
            <a href="#etapas" className="site-nav-link">
              Etapas
            </a>
            <a href="#duvidas" className="site-nav-link">
              Dúvidas
            </a>
            <a href="#contato" className="site-nav-link">
              Escritório
            </a>
          </nav>

          <div className="site-header-actions">
            <a
              href={defaultWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Falar com engenheiro
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
