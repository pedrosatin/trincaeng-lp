import React, { useState } from 'react';
import { ENGINEERING_STANDARDS, type EngineeringStandard } from '../data/engineeringStandards';

const DIAGRAM_CALLOUTS: Record<
  EngineeringStandard['diagramType'],
  readonly { readonly num: string; readonly label: string }[]
> = {
  platibanda: [
    { num: '01', label: 'Rufo metálico com pingadeira e calha impermeabilizada' },
    { num: '02', label: 'Alvenaria da platibanda em bloco cerâmico estrutural' },
    { num: '03', label: 'Tela metálica ancorada na junta entre laje e alvenaria' },
    { num: '04', label: 'Laje de cobertura em concreto armado sem fissura na fachada' },
  ],
  hidraulica: [
    { num: '01', label: 'Barrilete superior pressurizado com vazão equilibrada' },
    { num: '02', label: 'Coluna exclusiva para o chuveiro sem perda de pressão' },
    { num: '03', label: 'Registro posicionado fora da linha de queda de água' },
    { num: '04', label: 'Ramal independente para bancada e vaso sanitário' },
  ],
  gas: [
    { num: '01', label: 'Abrigo externo ventilado para cilindros GLP' },
    { num: '02', label: 'Tubulação embutida em cobre ou multicamadas sem mangueira aparente' },
    { num: '03', label: 'Registro de esfera em local visível e de fácil alcance' },
    { num: '04', label: 'Ensaio de estanqueidade com manômetro antes de fechar o piso' },
  ],
  baldrame: [
    { num: '01', label: 'Viga baldrame impermeabilizada nas 3 faces (topo e laterais)' },
    { num: '02', label: 'Primeiras fiadas assentadas com argamassa polimérica hidrofugada' },
    { num: '03', label: 'Bloqueio definitivo contra subida de umidade capilar do solo' },
    { num: '04', label: 'Pintura e massa corrida íntegras no rodapé interno e externo' },
  ],
};

const TechnicalCrossSectionSvg: React.FC<{
  readonly diagramType: EngineeringStandard['diagramType'];
}> = ({ diagramType }) => {
  switch (diagramType) {
    case 'platibanda':
      return (
        <svg
          viewBox="0 0 420 185"
          className="eng-diagram-svg"
          role="img"
          aria-label="Corte técnico mostrando reforço com tela metálica entre a laje de concreto e a alvenaria da platibanda"
        >
          <rect width="420" height="185" fill="#07162C" />
          {/* Alvenaria da platibanda */}
          <rect x="96" y="26" width="84" height="72" fill="#1B3563" stroke="#84A9EA" strokeWidth="1.6" />
          <line x1="96" y1="50" x2="180" y2="50" stroke="#547EC9" strokeWidth="1.2" />
          <line x1="96" y1="74" x2="180" y2="74" stroke="#547EC9" strokeWidth="1.2" />
          {/* Rufo metálico com pingadeira */}
          <polyline points="82,36 90,18 190,18 196,34" fill="none" stroke="#DFB468" strokeWidth="2.8" />
          {/* Laje de cobertura e viga */}
          <rect x="96" y="98" width="248" height="32" fill="#274985" stroke="#D1E1FC" strokeWidth="1.8" />
          {/* Tela eletrossoldada de reforço na interface externa */}
          <line x1="82" y1="68" x2="82" y2="132" stroke="#DFB468" strokeWidth="3.6" strokeDasharray="5 3" />
          {/* Reboco externo contínuo */}
          <rect x="70" y="28" width="12" height="140" fill="rgba(223, 180, 104, 0.28)" stroke="#DFB468" strokeWidth="1.4" />
          {/* Parede inferior */}
          <rect x="96" y="130" width="84" height="42" fill="#162A50" stroke="#84A9EA" strokeWidth="1.6" />
          {/* Linhas de chamada técnicas */}
          <line x1="196" y1="24" x2="344" y2="24" stroke="#DFB468" strokeDasharray="4 4" strokeWidth="1.3" />
          <line x1="180" y1="62" x2="344" y2="62" stroke="#84A9EA" strokeDasharray="4 4" strokeWidth="1.3" />
          <circle cx="344" cy="24" r="5" fill="#DFB468" />
          <circle cx="344" cy="62" r="5" fill="#84A9EA" />
          <circle cx="82" cy="98" r="5" fill="#DFB468" />
          <circle cx="260" cy="114" r="5" fill="#D1E1FC" />
        </svg>
      );
    case 'hidraulica':
      return (
        <svg
          viewBox="0 0 420 185"
          className="eng-diagram-svg"
          role="img"
          aria-label="Esquema hidráulico com prumadas independentes para chuveiro e bancada, com registro posicionado fora da área de banho"
        >
          <rect width="420" height="185" fill="#07162C" />
          {/* Reservatório / Pressurizador superior */}
          <rect x="64" y="20" width="140" height="32" fill="#1D396B" stroke="#D1E1FC" strokeWidth="1.8" />
          {/* Coluna exclusiva do chuveiro */}
          <polyline points="98,52 98,156 205,156 205,74 252,74" fill="none" stroke="#DFB468" strokeWidth="3.2" />
          {/* Coluna separada para lavatório e vaso */}
          <polyline points="168,52 168,128 346,128" fill="none" stroke="#547EC9" strokeWidth="2.4" />
          {/* Ponto do chuveiro */}
          <circle cx="260" cy="74" r="7" fill="#DFB468" />
          {/* Registro deslocado fora do jato */}
          <rect x="196" y="106" width="18" height="18" fill="#07162C" stroke="#DFB468" strokeWidth="2.2" />
          {/* Pontos do ramal separado */}
          <circle cx="290" cy="128" r="5.5" fill="#84A9EA" />
          <circle cx="346" cy="128" r="5.5" fill="#84A9EA" />
        </svg>
      );
    case 'gas':
      return (
        <svg
          viewBox="0 0 420 185"
          className="eng-diagram-svg"
          role="img"
          aria-label="Corte esquemático de rede de gás embutida em cobre ligando o abrigo externo ao cooktop interno"
        >
          <rect width="420" height="185" fill="#07162C" />
          {/* Parede divisória externo/interno */}
          <rect x="196" y="22" width="18" height="122" fill="#253E73" stroke="#84A9EA" strokeWidth="1.6" />
          {/* Contrapiso */}
          <rect x="42" y="144" width="336" height="24" fill="#162A50" stroke="#547EC9" strokeWidth="1.6" />
          {/* Abrigo externo de GLP */}
          <rect x="74" y="72" width="84" height="72" fill="#1B3563" stroke="#D1E1FC" strokeWidth="1.7" />
          {/* Cilindros internos */}
          <rect x="92" y="90" width="20" height="46" rx="4" fill="#274985" stroke="#84A9EA" strokeWidth="1.2" />
          <rect x="120" y="90" width="20" height="46" rx="4" fill="#274985" stroke="#84A9EA" strokeWidth="1.2" />
          {/* Bancada da cozinha */}
          <rect x="256" y="84" width="108" height="60" fill="#1B3563" stroke="#D1E1FC" strokeWidth="1.7" />
          {/* Tubulação embutida em cobre */}
          <polyline points="130,136 130,156 306,156 306,84" fill="none" stroke="#DFB468" strokeWidth="3.4" />
          <circle cx="306" cy="108" r="6.5" fill="#DFB468" />
        </svg>
      );
    case 'baldrame':
      return (
        <svg
          viewBox="0 0 420 185"
          className="eng-diagram-svg"
          role="img"
          aria-label="Corte técnico de viga baldrame impermeabilizada nas três faces e primeiras fiadas com aditivo hidrofugante"
        >
          <rect width="420" height="185" fill="#07162C" />
          {/* Solo */}
          <rect x="44" y="118" width="332" height="50" fill="#10213D" stroke="#3B5FA3" strokeWidth="1.2" />
          {/* Viga baldrame */}
          <rect x="156" y="92" width="108" height="62" fill="#253E73" stroke="#84A9EA" strokeWidth="1.6" />
          {/* Blindagem nas 3 faces (topo e laterais) */}
          <polyline
            points="150,152 150,86 270,86 270,152"
            fill="none"
            stroke="#DFB468"
            strokeWidth="4.5"
          />
          {/* Primeiras fiadas de alvenaria hidrofugadas */}
          <rect x="176" y="22" width="68" height="64" fill="#1B3563" stroke="#D1E1FC" strokeWidth="1.6" />
          <rect x="176" y="58" width="68" height="28" fill="rgba(223, 180, 104, 0.28)" stroke="#DFB468" strokeWidth="1.4" />
        </svg>
      );
  }
};

export const EngineeringNotebookSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(ENGINEERING_STANDARDS[0]!.id);

  const currentStandard: EngineeringStandard =
    ENGINEERING_STANDARDS.find((item) => item.id === activeId) ?? ENGINEERING_STANDARDS[0]!;

  const callouts = DIAGRAM_CALLOUTS[currentStandard.diagramType];

  return (
    <section
      id="engenharia"
      className="section-dark engineering-section"
      aria-labelledby="engenharia-heading"
    >
      <div className="container">
        <div className="section-header section-header-dark">
          <span className="section-code section-code-brass">
            PRANCHA 04 // CADERNO DE ENGENHARIA EXECUTIVA
          </span>
          <h2 id="engenharia-heading" className="section-title">
            Detalhes técnicos que previnem patologias antes do acabamento
          </h2>
          <p className="section-lead">
            Uma casa bem construída depende do que é executado antes do reboco e da pintura. No canteiro de obras da Trinca Engenharia, seguimos protocolos técnicos que eliminam as falhas mais frequentes da construção civil residencial.
          </p>
        </div>

        <div className="engineering-notebook">
          <div className="engineering-tabs" role="tablist" aria-label="Padrões técnicos de execução">
            {ENGINEERING_STANDARDS.map((item) => {
              const isSelected = item.id === currentStandard.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${item.id}`}
                  className={`eng-tab-button ${isSelected ? 'eng-tab-button-active' : ''}`.trim()}
                  onClick={() => setActiveId(item.id)}
                >
                  <span className="mono-label">{item.code}</span>
                  <strong className="eng-tab-title">{item.title}</strong>
                  <span className="eng-tab-subtitle">{item.subtitle}</span>
                </button>
              );
            })}
          </div>

          <div
            id={`panel-${currentStandard.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentStandard.id}`}
            className="engineering-detail-panel"
          >
            <div className="eng-detail-header">
              <span className="mono-label">{currentStandard.code}</span>
              <span className="eng-norm-badge">{currentStandard.technicalNorm}</span>
            </div>

            <h3 className="eng-detail-title">{currentStandard.title}</h3>

            <div className="eng-diagram-container">
              <TechnicalCrossSectionSvg diagramType={currentStandard.diagramType} />
              <ol className="eng-diagram-legend" aria-label="Legenda técnica do corte esquemático">
                {callouts.map((c) => (
                  <li key={c.num} className="eng-diagram-legend-item">
                    <span className="eng-diagram-legend-num">{c.num}</span>
                    <span>{c.label}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="eng-comparison-columns">
              <div className="eng-col eng-col-problem">
                <h4>Como obras sem supervisão costumam falhar</h4>
                <p>{currentStandard.commonFailure}</p>
              </div>

              <div className="eng-col eng-col-solution">
                <h4>Procedimento executivo da Trinca Engenharia</h4>
                <p>{currentStandard.trincaMechanism}</p>
              </div>
            </div>

            <div className="eng-benefit-bar">
              <strong>Resultado observável para o morador:</strong> {currentStandard.benefitSummary}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
