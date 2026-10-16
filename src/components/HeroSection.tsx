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
              <span className="hero-metric-note">Abaixo do valor de compra de imóvel pronto equivalente</span>
            </div>
            <div className="hero-metric-card">
              <dt className="hero-metric-label">Teto MCMV 2026</dt>
              <dd className="hero-metric-value">Até R$ 600 mil</dd>
              <span className="hero-metric-note">Faixas 1 a 4 para renda familiar até R$ 13.000</span>
            </div>
            <div className="hero-metric-card">
              <dt className="hero-metric-label">Contrato unificado</dt>
              <dd className="hero-metric-value">Lote + Obra</dd>
              <span className="hero-metric-note">Aquisição de terreno e construção no mesmo financiamento</span>
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
              <svg
                viewBox="0 0 540 310"
                className="blueprint-elevation-svg"
                role="img"
                aria-label="Elevação frontal técnica de residência contemporânea com platibanda, garagem para dois carros e pé-direito elevado"
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

                <rect width="540" height="310" fill="url(#bp-grid)" />

                {/* Linhas de eixo estrutural */}
                <line x1="60" y1="20" x2="60" y2="275" stroke="#547EC9" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="250" y1="20" x2="250" y2="275" stroke="#547EC9" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="480" y1="20" x2="480" y2="275" stroke="#547EC9" strokeDasharray="4 4" strokeWidth="1" />

                <circle cx="60" cy="20" r="9" fill="#0B1D36" stroke="#84A9EA" strokeWidth="1.2" />
                <text x="60" y="23" textAnchor="middle" fill="#E2ECF9" fontSize="9" fontFamily="monospace">
                  A
                </text>
                <circle cx="250" cy="20" r="9" fill="#0B1D36" stroke="#84A9EA" strokeWidth="1.2" />
                <text x="250" y="23" textAnchor="middle" fill="#E2ECF9" fontSize="9" fontFamily="monospace">
                  B
                </text>
                <circle cx="480" cy="20" r="9" fill="#0B1D36" stroke="#84A9EA" strokeWidth="1.2" />
                <text x="480" y="23" textAnchor="middle" fill="#E2ECF9" fontSize="9" fontFamily="monospace">
                  C
                </text>

                {/* Linha do solo / Cota 0.00 */}
                <line x1="30" y1="250" x2="510" y2="250" stroke="#DFB468" strokeWidth="2" />
                {/* Fundação e vigas baldrame */}
                <rect x="60" y="250" width="420" height="14" fill="rgba(223, 180, 104, 0.22)" stroke="#DFB468" strokeWidth="1.2" />
                <rect x="75" y="264" width="12" height="22" fill="rgba(84, 126, 201, 0.35)" stroke="#84A9EA" strokeWidth="1" />
                <rect x="244" y="264" width="12" height="22" fill="rgba(84, 126, 201, 0.35)" stroke="#84A9EA" strokeWidth="1" />
                <rect x="455" y="264" width="12" height="22" fill="rgba(84, 126, 201, 0.35)" stroke="#84A9EA" strokeWidth="1" />

                {/* Volume esquerdo: Garagem e acesso */}
                <rect
                  x="60"
                  y="112"
                  width="190"
                  height="138"
                  fill="rgba(37, 62, 115, 0.38)"
                  stroke="#94B5F2"
                  strokeWidth="1.6"
                />
                {/* Viga superior da garagem / marquise */}
                <rect
                  x="52"
                  y="102"
                  width="206"
                  height="22"
                  fill="rgba(84, 126, 201, 0.42)"
                  stroke="#BFD4FA"
                  strokeWidth="1.5"
                />

                {/* Volume direito: Sala com pé-direito duplo e platibanda alta */}
                <rect
                  x="250"
                  y="68"
                  width="230"
                  height="182"
                  fill="rgba(24, 45, 87, 0.65)"
                  stroke="#D1E1FC"
                  strokeWidth="1.8"
                />
                {/* Detalhe da junta laje/platibanda reforçada */}
                <line x1="250" y1="92" x2="480" y2="92" stroke="#DFB468" strokeWidth="2" strokeDasharray="6 3" />

                {/* Brises verticais metálicos na fachada */}
                <g stroke="#DFB468" strokeWidth="1.4" opacity="0.85">
                  <line x1="270" y1="94" x2="270" y2="250" />
                  <line x1="280" y1="94" x2="280" y2="250" />
                  <line x1="290" y1="94" x2="290" y2="250" />
                  <line x1="300" y1="94" x2="300" y2="250" />
                  <line x1="310" y1="94" x2="310" y2="250" />
                </g>

                {/* Esquadria de vidro de pé-direito elevado */}
                <rect
                  x="332"
                  y="108"
                  width="124"
                  height="142"
                  fill="rgba(132, 169, 234, 0.16)"
                  stroke="#84A9EA"
                  strokeWidth="1.4"
                />
                <line x1="394" y1="108" x2="394" y2="250" stroke="#84A9EA" strokeWidth="1.2" />
                <line x1="332" y1="175" x2="456" y2="175" stroke="#84A9EA" strokeWidth="1" />

                {/* Cotas técnicas */}
                <text x="492" y="75" fill="#DFB468" fontSize="9.5" fontFamily="monospace">
                  +4,65 m
                </text>
                <text x="492" y="96" fill="#94B5F2" fontSize="9" fontFamily="monospace">
                  JUNTA TELA
                </text>
                <text x="492" y="247" fill="#DFB468" fontSize="9.5" fontFamily="monospace">
                  0,00 m
                </text>
                <text x="72" y="142" fill="#D1E1FC" fontSize="10" fontFamily="monospace">
                  GARAGEM DUPLA (6,00 m)
                </text>
                <text x="342" y="84" fill="#D1E1FC" fontSize="9.5" fontFamily="monospace">
                  PLATIBANDA IMPERMEABILIZADA
                </text>
                <text x="92" y="299" fill="#94A7C4" fontSize="9.5" fontFamily="monospace">
                  BALDRAME BLINDADO NAS 3 FACES + ESTACAS EM CONCRETO
                </text>
              </svg>
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
