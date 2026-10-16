import React from 'react';
import { COMPANY } from '../data/company';
import { buildWhatsAppUrl } from '../lib/simulator';
import { TrincaLogo } from './TrincaLogo';

export const Footer: React.FC = () => {
  const whatsappHref = buildWhatsAppUrl(
    'Olá, equipe da Trinca Engenharia! Vim pelo site e gostaria de falar com um especialista.',
  );

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <TrincaLogo variant="dark" showTagline />
            <p className="footer-desc">
              {COMPANY.headlineSlogan} Gestão completa de projetos arquitetônicos, aprovação municipal, financiamento Caixa e execução de obras residenciais e comerciais em Maringá e região.
            </p>
          </div>

          <div className="footer-nav-col">
            <h3 className="footer-col-title">Seções da página</h3>
            <ul className="footer-links">
              <li>
                <a href="#simulador">Simulador de faixa Caixa 2026</a>
              </li>
              <li>
                <a href="#modalidades">Modalidades de construção</a>
              </li>
              <li>
                <a href="#obras">Acervo de obras executadas</a>
              </li>
              <li>
                <a href="#engenharia">Caderno de engenharia executiva</a>
              </li>
              <li>
                <a href="#etapas">As 6 etapas do processo</a>
              </li>
              <li>
                <a href="#duvidas">Perguntas frequentes</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h3 className="footer-col-title">Atendimento e endereço</h3>
            <ul className="footer-contact-list">
              <li>
                <strong>Escritório:</strong> {COMPANY.address.street}, {COMPANY.address.complement},{' '}
                {COMPANY.address.neighborhood}, {COMPANY.address.city}/{COMPANY.address.state} (CEP{' '}
                {COMPANY.address.zipCode})
              </li>
              <li>
                <strong>WhatsApp:</strong>{' '}
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  {COMPANY.whatsappDisplay}
                </a>
              </li>
              <li>
                <strong>Telefone fixo:</strong> <a href={COMPANY.landlineHref}>{COMPANY.landlineDisplay}</a>
              </li>
              <li>
                <strong>Instagram:</strong>{' '}
                <a href={COMPANY.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {COMPANY.instagramHandle}
                </a>
              </li>
              <li>
                <strong>Mapa:</strong>{' '}
                <a href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Ver rota no Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>
            © 2026 {COMPANY.legalName} (CNPJ {COMPANY.cnpj}) e {COMPANY.secondaryLegalName} (CNPJ{' '}
            {COMPANY.secondaryCnpj}). Todos os direitos reservados.
          </p>
          <p className="footer-tagline-right">{COMPANY.institutionalTagline}</p>
        </div>
      </div>
    </footer>
  );
};
