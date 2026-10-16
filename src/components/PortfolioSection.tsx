import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, type PortfolioProject } from '../data/portfolio';
import { buildWhatsAppUrl } from '../lib/simulator';

type FilterValue = 'todas' | 'residencial' | 'comercial';

const ProjectBlueprintGraphic: React.FC<{ readonly projectId: string }> = ({ projectId }) => {
  switch (projectId) {
    case 'obra-genebra':
      return (
        <svg viewBox="0 0 420 175" className="portfolio-svg" aria-hidden="true">
          <rect width="420" height="175" fill="#0B1B33" />
          <line x1="20" y1="154" x2="400" y2="154" stroke="#DFB468" strokeWidth="2.2" />
          {/* Volume Garagem e Gourmet */}
          <rect x="44" y="68" width="150" height="86" fill="#162D54" stroke="#84A9EA" strokeWidth="1.6" />
          <rect x="36" y="56" width="166" height="14" fill="#2A4D8E" stroke="#BFD4FA" strokeWidth="1.6" />
          {/* Volume Suíte e Estar Pé-direito Duplo */}
          <rect x="194" y="28" width="182" height="126" fill="#1D396B" stroke="#D1E1FC" strokeWidth="1.8" />
          <line x1="194" y1="46" x2="376" y2="46" stroke="#DFB468" strokeDasharray="5 3" strokeWidth="1.8" />
          {/* Brises e Esquadria */}
          <rect x="260" y="58" width="96" height="96" fill="rgba(132, 169, 234, 0.2)" stroke="#84A9EA" strokeWidth="1.4" />
          <line x1="212" y1="48" x2="212" y2="154" stroke="#DFB468" strokeWidth="1.5" />
          <line x1="222" y1="48" x2="222" y2="154" stroke="#DFB468" strokeWidth="1.5" />
          <line x1="232" y1="48" x2="232" y2="154" stroke="#DFB468" strokeWidth="1.5" />
        </svg>
      );
    case 'obra-siena':
      return (
        <svg viewBox="0 0 420 175" className="portfolio-svg" aria-hidden="true">
          <rect width="420" height="175" fill="#0B1B33" />
          <line x1="20" y1="154" x2="400" y2="154" stroke="#DFB468" strokeWidth="2.2" />
          {/* Casa térrea racionalizada */}
          <rect x="58" y="48" width="140" height="106" fill="#1D396B" stroke="#D1E1FC" strokeWidth="1.7" />
          <rect x="198" y="68" width="164" height="86" fill="#162D54" stroke="#84A9EA" strokeWidth="1.6" />
          {/* Verga e contraverga destacadas */}
          <rect x="82" y="80" width="90" height="46" fill="rgba(132, 169, 234, 0.2)" stroke="#84A9EA" strokeWidth="1.4" />
          <line x1="74" y1="77" x2="180" y2="77" stroke="#DFB468" strokeWidth="2.4" />
          <line x1="74" y1="129" x2="180" y2="129" stroke="#DFB468" strokeWidth="2.4" />
        </svg>
      );
    case 'obras-mercedes':
      return (
        <svg viewBox="0 0 420 175" className="portfolio-svg" aria-hidden="true">
          <rect width="420" height="175" fill="#0B1B33" />
          <line x1="20" y1="154" x2="400" y2="154" stroke="#DFB468" strokeWidth="2.2" />
          {/* Galpão / Showroom Corporativo */}
          <rect x="40" y="34" width="340" height="120" fill="#162D54" stroke="#D1E1FC" strokeWidth="1.8" />
          {/* Pórticos metálicos e fachada cortina */}
          <line x1="125" y1="34" x2="125" y2="154" stroke="#84A9EA" strokeWidth="1.5" />
          <line x1="210" y1="34" x2="210" y2="154" stroke="#84A9EA" strokeWidth="1.5" />
          <line x1="295" y1="34" x2="295" y2="154" stroke="#84A9EA" strokeWidth="1.5" />
          <line x1="40" y1="68" x2="380" y2="68" stroke="#DFB468" strokeWidth="1.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 420 175" className="portfolio-svg" aria-hidden="true">
          <rect width="420" height="175" fill="#0B1B33" />
          <line x1="20" y1="154" x2="400" y2="154" stroke="#DFB468" strokeWidth="2.2" />
          {/* Showroom Automotivo Rápido */}
          <rect x="48" y="42" width="324" height="112" fill="#1D396B" stroke="#D1E1FC" strokeWidth="1.8" />
          <rect x="68" y="60" width="284" height="14" fill="rgba(223, 180, 104, 0.28)" stroke="#DFB468" strokeWidth="1.4" />
          <rect x="92" y="90" width="96" height="64" fill="rgba(132, 169, 234, 0.22)" stroke="#84A9EA" strokeWidth="1.4" />
          <rect x="232" y="90" width="96" height="64" fill="rgba(132, 169, 234, 0.22)" stroke="#84A9EA" strokeWidth="1.4" />
        </svg>
      );
  }
};

const getBlueprintCaption = (projectId: string): string => {
  switch (projectId) {
    case 'obra-genebra':
      return 'ELEVAÇÃO FRONTAL // 148 m² CONSTRUÍDOS // LOTE 300 m²';
    case 'obra-siena':
      return 'PLANTA INTEGRADA // 112 m² CONSTRUÍDOS // VERGAS MOLDADAS';
    case 'obras-mercedes':
      return 'PADRÃO CORPORATIVO // 320 m² // PISO DE ALTO TRÁFEGO';
    default:
      return 'SHOWROOM AUTOMOTIVO // 185 m² // CICLO RÁPIDO';
  }
};

export const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterValue>('todas');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PORTFOLIO_PROJECTS[0]!.id);

  const visibleProjects = PORTFOLIO_PROJECTS.filter((project) =>
    filter === 'todas' ? true : project.category === filter,
  );

  const activeProject: PortfolioProject =
    visibleProjects.find((p) => p.id === selectedProjectId) ?? visibleProjects[0]!;

  return (
    <section id="obras" className="section-light portfolio-section" aria-labelledby="obras-heading">
      <div className="container">
        <div className="portfolio-header-row">
          <div className="section-header">
            <span className="section-code">PRANCHA 03 // ACERVO TÉCNICO DE OBRAS</span>
            <h2 id="obras-heading" className="section-title">
              Obras residenciais financiadas e projetos corporativos em Maringá
            </h2>
            <p className="section-lead">
              Conheça algumas das frentes executadas pela Trinca Engenharia (destacadas em nosso perfil oficial @trincaengenharia), combinando residências unifamiliares financiadas pela Caixa e obras comerciais de ciclo rápido.
            </p>
          </div>

          <div className="portfolio-filter-group" role="group" aria-label="Filtrar obras por categoria">
            <button
              type="button"
              className={`sim-chip ${filter === 'todas' ? 'sim-chip-active' : ''}`.trim()}
              aria-pressed={filter === 'todas'}
              onClick={() => setFilter('todas')}
            >
              Todas as obras ({PORTFOLIO_PROJECTS.length})
            </button>
            <button
              type="button"
              className={`sim-chip ${filter === 'residencial' ? 'sim-chip-active' : ''}`.trim()}
              aria-pressed={filter === 'residencial'}
              onClick={() => setFilter('residencial')}
            >
              Residenciais financiadas
            </button>
            <button
              type="button"
              className={`sim-chip ${filter === 'comercial' ? 'sim-chip-active' : ''}`.trim()}
              aria-pressed={filter === 'comercial'}
              onClick={() => setFilter('comercial')}
            >
              Comerciais e corporativas
            </button>
          </div>
        </div>

        <div className="portfolio-cards-grid">
          {visibleProjects.map((project) => {
            const isSelected = project.id === activeProject.id;
            return (
              <article
                key={project.id}
                className={`portfolio-card ${isSelected ? 'portfolio-card-active' : ''}`.trim()}
              >
                <div className="portfolio-card-visual">
                  <div className="portfolio-card-visual-top">
                    <span className="portfolio-card-tag">{project.categoryLabel}</span>
                  </div>
                  <ProjectBlueprintGraphic projectId={project.id} />
                  <div className="portfolio-card-blueprint-caption">
                    {getBlueprintCaption(project.id)}
                  </div>
                </div>

                <div className="portfolio-card-body">
                  <div className="portfolio-card-meta">
                    <span className="mono-label">{project.code}</span>
                    <span className="portfolio-card-loc">{project.location}</span>
                  </div>

                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-modality">{project.modality}</p>
                  <p className="portfolio-card-summary">{project.summary}</p>

                  <dl className="portfolio-card-stats">
                    <div>
                      <dt>Área construída</dt>
                      <dd>{project.builtAreaM2} m²</dd>
                    </div>
                    <div>
                      <dt>Terreno / base</dt>
                      <dd>{project.terrainAreaM2} m²</dd>
                    </div>
                    <div>
                      <dt>Ciclo previsto</dt>
                      <dd>{project.executionMonths} meses</dd>
                    </div>
                  </dl>

                  <div className="portfolio-card-actions">
                    <button
                      type="button"
                      className={`btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline-dark'}`.trim()}
                      aria-pressed={isSelected}
                      onClick={() => setSelectedProjectId(project.id)}
                    >
                      {isSelected ? 'Memorial técnico aberto abaixo' : 'Inspecionar memorial descritivo'}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Memorial Descritivo Interativo da Obra Selecionada */}
        <div className="portfolio-inspector" aria-live="polite">
          <div className="portfolio-inspector-header">
            <div>
              <span className="mono-label">MEMORIAL DESCRITIVO // {activeProject.code}</span>
              <h3>Especificações construtivas da {activeProject.title}</h3>
            </div>
            <a
              href={buildWhatsAppUrl(
                `Olá! Vi o memorial descritivo da ${activeProject.title} (${activeProject.builtAreaM2} m²) no site da Trinca Engenharia e gostaria de orçar um projeto semelhante.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Orçar projeto neste padrão
            </a>
          </div>

          <p className="portfolio-inspector-system">
            <strong>Sistema construtivo:</strong> {activeProject.constructiveSystem}
          </p>

          <div className="portfolio-inspector-specs">
            <div className="inspector-spec-box">
              <h4>Fundação e infraestrutura</h4>
              <p>{activeProject.blueprintSpecs.foundation}</p>
            </div>
            <div className="inspector-spec-box">
              <h4>Superestrutura e vedação</h4>
              <p>{activeProject.blueprintSpecs.structure}</p>
            </div>
            <div className="inspector-spec-box">
              <h4>Instalações prediais</h4>
              <p>{activeProject.blueprintSpecs.installations}</p>
            </div>
            <div className="inspector-spec-box">
              <h4>Revestimentos e esquadrias</h4>
              <p>{activeProject.blueprintSpecs.finishing}</p>
            </div>
          </div>

          <ul className="portfolio-inspector-highlights">
            {activeProject.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
