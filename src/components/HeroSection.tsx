import React from 'react';
import { COMPANY } from '../data/company';
import { buildWhatsAppUrl } from '../lib/simulator';

export const HeroSection: React.FC = () => {
  const directWhatsAppUrl = buildWhatsAppUrl(
    'Olá, equipe da Trinca Engenharia! Vim pelo site e gostaria de avaliar uma construção financiada em Maringá.',
  );

  return (
    <section id="topo" className="hero-section" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="blueprint-tag">
            <span className="blueprint-tag-code">ESPECIALISTAS EM OBRAS FINANCIADAS</span>
            <span className="blueprint-tag-loc">MARINGÁ E REGIÃO METROPOLITANA</span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            Construa sua casa sob medida com financiamento Caixa e economize de 20% a 30% frente a um imóvel pronto.
          </h1>

          <p className="hero-lead">
            {COMPANY.headlineSlogan} Conduzimos a escolha técnica do terreno, os projetos arquitetônicos e complementares, a aprovação na Prefeitura de Maringá, a contratação na Caixa Econômica Federal e a execução integral da obra com orçamento fechado.
          </p>

          <div className="hero-cta-row">
            <a href="#simulador" className="btn btn-brass btn-lg">
              Simular minha faixa na Caixa
            </a>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              Agendar análise gratuita no WhatsApp
            </a>
          </div>

          <dl className="hero-metrics" aria-label="Indicadores operacionais de construção financiada">
            <div className="hero-metric-card">
              <dt className="hero-metric-label">Economia patrimonial</dt>
              <dd className="hero-metric-value">20% a 30%</dd>
              <dd className="hero-metric-note">Abaixo do valor de compra de imóvel pronto equivalente</dd>
            </div>
            <div className="hero-metric-card">
              <dt className="hero-metric-label">Teto MCMV 2026</dt>
              <dd className="hero-metric-value">Até R$ 600 mil</dd>
              <dd className="hero-metric-note">Faixas 1 a 4 para renda familiar até R$ 13.000</dd>
            </div>
            <div className="hero-metric-card">
              <dt className="hero-metric-label">Contrato unificado</dt>
              <dd className="hero-metric-value">Lote + Obra</dd>
              <dd className="hero-metric-note">Aquisição de terreno e construção no mesmo financiamento</dd>
            </div>
          </dl>
        </div>

        <aside className="hero-blueprint-panel" aria-label="Prancha técnica demonstrativa de residência">
          <div className="blueprint-card">
            <div className="blueprint-card-header">
              <span className="mono-label">PRANCHA EXECUTIVA // ESTUDO PRELIMINAR</span>
              <span className="blueprint-status-pill">CAIXA / MCMV &amp; SBPE</span>
            </div>

            <div className="blueprint-canvas">
              <div className="blueprint-axis-bar" aria-hidden="true">
                <span className="blueprint-axis-chip">EIXO A // GARAGEM DUPLA (6,00 m)</span>
                <span className="blueprint-axis-chip blueprint-axis-chip-highlight">
                  EIXO B-C // PÉ-DIREITO +4,65 m
                </span>
              </div>

              <svg
                viewBox="0 0 520 220"
                className="blueprint-elevation-svg"
                role="img"
                aria-label="Elevação frontal técnica de residência contemporânea com platibanda, garagem para dois carros, brises metálicos e fundação em baldrame"
              >
                <defs>
                  <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="rgba(148, 167, 196, 0.12)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>

                <rect width="520" height="220" fill="url(#bp-grid)" />

                {/* Linhas de eixo estrutural */}
                <line x1="56" y1="14" x2="56" y2="204" stroke="#547EC9" strokeDasharray="4 4" strokeWidth="1.2" />
                <line x1="246" y1="14" x2="246" y2="204" stroke="#547EC9" strokeDasharray="4 4" strokeWidth="1.2" />
                <line x1="464" y1="14" x2="464" y2="204" stroke="#547EC9" strokeDasharray="4 4" strokeWidth="1.2" />

                {/* Marcadores de eixo geométricos */}
                <circle cx="56" cy="16" r="6" fill="#0B1D36" stroke="#84A9EA" strokeWidth="1.5" />
                <circle cx="246" cy="16" r="6" fill="#0B1D36" stroke="#84A9EA" strokeWidth="1.5" />
                <circle cx="464" cy="16" r="6" fill="#0B1D36" stroke="#DFB468" strokeWidth="1.5" />

                {/* Linha do solo / Cota 0.00 */}
                <line x1="24" y1="176" x2="496" y2="176" stroke="#DFB468" strokeWidth="2.2" />

                {/* Fundação, vigas baldrame e estacas */}
                <rect
                  x="56"
                  y="176"
                  width="408"
                  height="14"
                  fill="rgba(223, 180, 104, 0.24)"
                  stroke="#DFB468"
                  strokeWidth="1.4"
                />
                <rect x="74" y="190" width="14" height="20" fill="rgba(84, 126, 201, 0.38)" stroke="#84A9EA" strokeWidth="1.2" />
                <rect x="239" y="190" width="14" height="20" fill="rgba(84, 126, 201, 0.38)" stroke="#84A9EA" strokeWidth="1.2" />
                <rect x="438" y="190" width="14" height="20" fill="rgba(84, 126, 201, 0.38)" stroke="#84A9EA" strokeWidth="1.2" />

                {/* Volume esquerdo: Garagem dupla e acesso coberto */}
                <rect
                  x="56"
                  y="68"
                  width="190"
                  height="108"
                  fill="rgba(37, 62, 115, 0.42)"
                  stroke="#94B5F2"
                  strokeWidth="1.6"
                />
                {/* Viga superior da garagem / marquise em balanço */}
                <rect
                  x="46"
                  y="56"
                  width="208"
                  height="18"
                  fill="rgba(84, 126, 201, 0.46)"
                  stroke="#BFD4FA"
                  strokeWidth="1.6"
                />
                {/* Vão interno da garagem */}
                <rect
                  x="74"
                  y="92"
                  width="154"
                  height="84"
                  fill="rgba(8, 24, 48, 0.45)"
                  stroke="#547EC9"
                  strokeWidth="1.2"
                />

                {/* Volume direito: Sala com pé-direito duplo e platibanda alta */}
                <rect
                  x="246"
                  y="30"
                  width="218"
                  height="146"
                  fill="rgba(24, 45, 87, 0.68)"
                  stroke="#D1E1FC"
                  strokeWidth="1.8"
                />
                {/* Rufo superior da platibanda */}
                <line x1="244" y1="30" x2="466" y2="30" stroke="#DFB468" strokeWidth="2.6" />
                {/* Detalhe da junta laje/platibanda reforçada com tela */}
                <line
                  x1="246"
                  y1="54"
                  x2="464"
                  y2="54"
                  stroke="#DFB468"
                  strokeWidth="2.2"
                  strokeDasharray="6 4"
                />

                {/* Brises verticais metálicos na fachada */}
                <g stroke="#DFB468" strokeWidth="1.6" opacity="0.9">
                  <line x1="268" y1="56" x2="268" y2="176" />
                  <line x1="278" y1="56" x2="278" y2="176" />
                  <line x1="288" y1="56" x2="288" y2="176" />
                  <line x1="298" y1="56" x2="298" y2="176" />
                  <line x1="308" y1="56" x2="308" y2="176" />
                </g>

                {/* Esquadria de vidro de pé-direito elevado */}
                <rect
                  x="328"
                  y="68"
                  width="116"
                  height="108"
                  fill="rgba(132, 169, 234, 0.18)"
                  stroke="#84A9EA"
                  strokeWidth="1.5"
                />
                <line x1="386" y1="68" x2="386" y2="176" stroke="#84A9EA" strokeWidth="1.2" />
                <line x1="328" y1="120" x2="444" y2="120" stroke="#84A9EA" strokeWidth="1.1" />
              </svg>

              <ul className="blueprint-callouts" aria-label="Destaques técnicos da prancha">
                <li className="blueprint-callout-item">
                  <span className="blueprint-callout-dot" aria-hidden="true" />
                  <span>Platibanda impermeabilizada com junta elástica em tela</span>
                </li>
                <li className="blueprint-callout-item">
                  <span className="blueprint-callout-dot" aria-hidden="true" />
                  <span>Baldrame blindado nas 3 faces + estacas em concreto (cota 0,00 m)</span>
                </li>
              </ul>
            </div>

            <div className="blueprint-specs-grid">
              <div className="blueprint-spec-cell">
                <span className="blueprint-spec-key">ESCOPO INTEGRAL</span>
                <strong className="blueprint-spec-val">Terreno + Projetos + Caixa + Obra</strong>
              </div>
              <div className="blueprint-spec-cell">
                <span className="blueprint-spec-key">PERFIS ACEITOS</span>
                <strong className="blueprint-spec-val">CLT, Servidor, Autônomo, MEI e PJ</strong>
              </div>
              <div className="blueprint-spec-cell">
                <span className="blueprint-spec-key">CONTROLE DE CUSTO</span>
                <strong className="blueprint-spec-val">Orçamento fechado antes do início</strong>
              </div>
              <div className="blueprint-spec-cell">
                <span className="blueprint-spec-key">ATENDIMENTO LOCAL</span>
                <strong className="blueprint-spec-val">Av. XV de Novembro, 462 (Zona 01)</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
