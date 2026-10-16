import React, { useState } from 'react';
import { ENGINEERING_STANDARDS, type EngineeringStandard } from '../data/engineeringStandards';

const TechnicalCrossSectionSvg: React.FC<{
  readonly diagramType: EngineeringStandard['diagramType'];
}> = ({ diagramType }) => {
  switch (diagramType) {
    case 'platibanda':
      return (
        <svg
          viewBox="0 0 460 250"
          className="eng-diagram-svg"
          role="img"
          aria-label="Corte técnico mostrando reforço com tela metálica entre a laje de concreto e a alvenaria da platibanda"
        >
          <rect width="460" height="250" fill="#07162C" />
          {/* Alvenaria da platibanda */}
          <rect x="80" y="38" width="90" height="92" fill="#1B3563" stroke="#84A9EA" strokeWidth="1.5" />
          <line x1="80" y1="68" x2="170" y2="68" stroke="#547EC9" strokeWidth="1" />
          <line x1="80" y1="98" x2="170" y2="98" stroke="#547EC9" strokeWidth="1" />
          {/* Rufo metálico com pingadeira */}
          <polyline points="68,48 76,30 180,30 184,46" fill="none" stroke="#DFB468" strokeWidth="2.5" />
          {/* Laje de cobertura e viga */}
          <rect x="80" y="130" width="290" height="34" fill="#274985" stroke="#D1E1FC" strokeWidth="1.8" />
          {/* Tela eletrossoldada de reforço na interface externa */}
          <line x1="68" y1="95" x2="68" y2="165" stroke="#DFB468" strokeWidth="3.5" strokeDasharray="4 3" />
          {/* Reboco externo contínuo */}
          <rect x="58" y="42" width="10" height="175" fill="rgba(223, 180, 104, 0.28)" stroke="#DFB468" strokeWidth="1.2" />
          {/* Parede inferior */}
          <rect x="80" y="164" width="90" height="60" fill="#162A50" stroke="#84A9EA" strokeWidth="1.5" />
          {/* Textos */}
          <text x="195" y="42" fill="#DFB468" fontSize="10" fontFamily="monospace">
            1. RUFO COM PINGADEIRA E CALHA IMPERMEABILIZADA
          </text>
          <text x="195" y="85" fill="#D1E1FC" fontSize="10" fontFamily="monospace">
            2. ALVENARIA DA PLATIBANDA (BLOCO CERÂMICO)
          </text>
          <text x="195" y="118" fill="#DFB468" fontSize="10" fontFamily="monospace">
            3. TELA METÁLICA ANCORADA NA JUNTA LAJE/TIJOLO
          </text>
          <text x="195" y="150" fill="#D1E1FC" fontSize="10" fontFamily="monospace">
            4. LAJE DE COBERTURA EM CONCRETO ARMADO
          </text>
          <text x="195" y="198" fill="#94A7C4" fontSize="10" fontFamily="monospace">
            RESULTADO: ZERO TRINCA HORIZONTAL NA FACHADA
          </text>
        </svg>
      );
    case 'hidraulica':
      return (
        <svg
          viewBox="0 0 460 250"
          className="eng-diagram-svg"
          role="img"
          aria-label="Esquema hidráulico com prumadas independentes para chuveiro e bancada, com registro posicionado fora da área de banho"
        >
          <rect width="460" height="250" fill="#07162C" />
          {/* Reservatório / Pressurizador superior */}
          <rect x="60" y="24" width="130" height="32" fill="#1D396B" stroke="#D1E1FC" strokeWidth="1.6" />
          <text x="72" y="44" fill="#E2ECF9" fontSize="9.5" fontFamily="monospace">
            BARRILETE PRESSURIZADO
          </text>
          {/* Coluna exclusiva do chuveiro */}
          <polyline points="90,56 90,190 190,190 190,82 225,82" fill="none" stroke="#DFB468" strokeWidth="3" />
          {/* Coluna separada para lavatório e vaso */}
          <polyline points="155,56 155,155 335,155" fill="none" stroke="#547EC9" strokeWidth="2.2" />
          {/* Ponto do chuveiro */}
          <circle cx="232" cy="82" r="7" fill="#DFB468" />
          {/* Registro deslocado fora do jato */}
          <rect x="172" y="132" width="16" height="16" fill="#07162C" stroke="#DFB468" strokeWidth="2" />
          <text x="255" y="86" fill="#DFB468" fontSize="10" fontFamily="monospace">
            COLUNA DEDICADA DO CHUVEIRO
          </text>
          <text x="200" y="143" fill="#E2ECF9" fontSize="10" fontFamily="monospace">
            REGISTRO FORA DO JATO DE ÁGUA
          </text>
          <text x="210" y="176" fill="#84A9EA" fontSize="10" fontFamily="monospace">
            RAMAL SEPARADO (TORNEIRA / VASO)
          </text>
          <text x="60" y="224" fill="#94A7C4" fontSize="10" fontFamily="monospace">
            PRESSÃO CONSTANTE MESMO COM TORNEIRA ABERTA
          </text>
        </svg>
      );
    case 'gas':
      return (
        <svg
          viewBox="0 0 460 250"
          className="eng-diagram-svg"
          role="img"
          aria-label="Corte esquemático de rede de gás embutida em cobre ligando o abrigo externo ao cooktop interno"
        >
          <rect width="460" height="250" fill="#07162C" />
          {/* Parede divisória externo/interno */}
          <rect x="195" y="36" width="18" height="154" fill="#253E73" stroke="#84A9EA" strokeWidth="1.5" />
          {/* Contrapiso */}
          <rect x="40" y="190" width="380" height="24" fill="#162A50" stroke="#547EC9" strokeWidth="1.5" />
          {/* Abrigo externo de GLP */}
          <rect x="75" y="110" width="85" height="80" fill="#1B3563" stroke="#D1E1FC" strokeWidth="1.6" />
          <text x="86" y="148" fill="#E2ECF9" fontSize="9.5" fontFamily="monospace">
            ABRIGO GLP
          </text>
          <text x="86" y="162" fill="#94A7C4" fontSize="8.5" fontFamily="monospace">
            EXTERNO
          </text>
          {/* Bancada da cozinha */}
          <rect x="265" y="122" width="125" height="68" fill="#1B3563" stroke="#D1E1FC" strokeWidth="1.6" />
          {/* Tubulação embutida em cobre */}
          <polyline points="140,175 140,202 315,202 315,122" fill="none" stroke="#DFB468" strokeWidth="3.2" />
          <circle cx="315" cy="148" r="6" fill="#DFB468" />
          <text x="52" y="65" fill="#DFB468" fontSize="10" fontFamily="monospace">
            ENSAIO DE ESTANQUEIDADE COM MANÔMETRO ANTES DO PISO
          </text>
          <text x="235" y="106" fill="#E2ECF9" fontSize="10" fontFamily="monospace">
            REGISTRO DE ESFERA ACESSÍVEL
          </text>
          <text x="115" y="234" fill="#DFB468" fontSize="10" fontFamily="monospace">
            TUBULAÇÃO EMBUTIDA (SEM MANGUEIRA APARENTE)
          </text>
        </svg>
      );
    case 'baldrame':
      return (
        <svg
          viewBox="0 0 460 250"
          className="eng-diagram-svg"
          role="img"
          aria-label="Corte técnico de viga baldrame impermeabilizada nas três faces e primeiras fiadas com aditivo hidrofugante"
        >
          <rect width="460" height="250" fill="#07162C" />
          {/* Solo */}
          <rect x="40" y="155" width="380" height="65" fill="#10213D" stroke="#3B5FA3" strokeWidth="1" />
          {/* Viga baldrame */}
          <rect x="130" y="125" width="90" height="68" fill="#253E73" stroke="#84A9EA" strokeWidth="1.5" />
          {/* Blindagem nas 3 faces (topo e laterais) */}
          <polyline
            points="126,190 126,121 224,121 224,190"
            fill="none"
            stroke="#DFB468"
            strokeWidth="4.5"
          />
          {/* Primeiras fiadas de alvenaria hidrofugadas */}
          <rect x="145" y="45" width="60" height="76" fill="#1B3563" stroke="#D1E1FC" strokeWidth="1.5" />
          <rect x="145" y="92" width="60" height="29" fill="rgba(223, 180, 104, 0.25)" stroke="#DFB468" strokeWidth="1.2" />
          <text x="242" y="75" fill="#D1E1FC" fontSize="10" fontFamily="monospace">
            1. PAREDE COM PINTURA ÍNTEGRA
          </text>
          <text x="242" y="110" fill="#DFB468" fontSize="10" fontFamily="monospace">
            2. PRIMEIRAS FIADAS HIDROFUGADAS
          </text>
          <text x="242" y="145" fill="#DFB468" fontSize="10" fontFamily="monospace">
            3. BALDRAME IMPERMEABILIZADO (3 FACES)
          </text>
          <text x="242" y="182" fill="#94A7C4" fontSize="10" fontFamily="monospace">
            4. BLOQUEIO DE UMIDADE CAPILAR DO SOLO
          </text>
        </svg>
      );
  }
};

export const EngineeringNotebookSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(ENGINEERING_STANDARDS[0]!.id);

  const currentStandard: EngineeringStandard =
    ENGINEERING_STANDARDS.find((item) => item.id === activeId) ?? ENGINEERING_STANDARDS[0]!;

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
