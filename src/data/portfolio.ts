export type ProjectCategory = 'residencial' | 'comercial';

export interface PortfolioProject {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly category: ProjectCategory;
  readonly categoryLabel: string;
  readonly location: string;
  readonly modality: string;
  readonly builtAreaM2: number;
  readonly terrainAreaM2: number;
  readonly executionMonths: number;
  readonly summary: string;
  readonly constructiveSystem: string;
  readonly highlights: readonly string[];
  readonly blueprintSpecs: {
    readonly foundation: string;
    readonly structure: string;
    readonly installations: string;
    readonly finishing: string;
  };
}

export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  {
    id: 'obra-genebra',
    code: 'OBR-01 / GENEBRA',
    title: 'Obra Genebra',
    category: 'residencial',
    categoryLabel: 'Residencial financiada',
    location: 'Maringá, PR',
    modality: 'Aquisição de terreno e construção via Caixa',
    builtAreaM2: 148,
    terrainAreaM2: 300,
    executionMonths: 8,
    summary:
      'Residência térrea unifamiliar com área gourmet integrada, pé-direito elevado na sala de estar e fachada com volumes em concreto e brises metálicos.',
    constructiveSystem:
      'Concreto armado moldado in loco com alvenaria de vedação cerâmica e cobertura embutida com telha termoacústica.',
    highlights: [
      'Três quartos, sendo uma suíte com closet e esquadria automatizada',
      'Amarração estrutural entre laje e platibanda com tela metálica para bloqueio de fissuras',
      'Rede hidráulica pressurizada com prumadas independentes para banheiros e cozinha',
    ],
    blueprintSpecs: {
      foundation: 'Estacas escavadas e vigas baldrame impermeabilizadas com manta asfáltica',
      structure: 'Pórticos em concreto armado fck 25 MPa e laje treliçada com capa de 5 cm',
      installations: 'Tubulação de gás em cobre embutida e espera para aquecimento solar e fotovoltaico',
      finishing: 'Porcelanato retificado de grande formato, bancadas em quartzo e iluminação em LED',
    },
  },
  {
    id: 'obra-siena',
    code: 'OBR-02 / SIENA',
    title: 'Obra Siena',
    category: 'residencial',
    categoryLabel: 'Residencial financiada',
    location: 'Maringá, PR',
    modality: 'Construção financiada em terreno próprio',
    builtAreaM2: 112,
    terrainAreaM2: 250,
    executionMonths: 6,
    summary:
      'Projeto compacto otimizado para terreno de 250 m², com planta livre entre estar, jantar e cozinha, lavanderia reservada e garagem paralela para dois veículos.',
    constructiveSystem:
      'Alvenaria racionalizada com cintas de amarração intermediárias, vergas e contravergas moldadas em todos os vãos de esquadrias.',
    highlights: [
      'Aproveitamento de iluminação e ventilação cruzada nos quartos e banheiros',
      'Cronograma físico-financeiro vinculado às medições mensais da engenharia da Caixa',
      'Registros hidráulicos posicionados fora da área de respingo do box',
    ],
    blueprintSpecs: {
      foundation: 'Brocas em concreto e baldrame nivelado a laser com aditivo impermeabilizante',
      structure: 'Pilares e vigas em concreto armado com cobrimento controlado por espaçadores',
      installations: 'Quadro de distribuição elétrica setorizado com proteção DR e DPS',
      finishing: 'Revestimento cerâmico retificado, esquadrias em alumínio preto linha Suprema e forro de gesso acartonado',
    },
  },
  {
    id: 'obras-mercedes',
    code: 'OBR-03 / MERCEDES',
    title: 'Obras Mercedes',
    category: 'comercial',
    categoryLabel: 'Comercial e corporativa',
    location: 'Maringá e região, PR',
    modality: 'Execução e adequação corporativa sob contrato global',
    builtAreaM2: 320,
    terrainAreaM2: 600,
    executionMonths: 4,
    summary:
      'Adequação estrutural, revestimentos de alto tráfego, infraestrutura elétrica trifásica e acabamento corporativo executado sob rigoroso padrão de marca.',
    constructiveSystem:
      'Piso industrial polido de alta resistência, divisórias técnicas em drywall acústico e infraestrutura seca para dados e climatização.',
    highlights: [
      'Execução em janelas programadas sem interrupção das operações adjacentes',
      'Nivelamento a laser de pisos técnicos e alinhamento milimétrico de forros e luminárias',
      'Entrega limpa com laudo de comissionamento das instalações elétricas e hidrossanitárias',
    ],
    blueprintSpecs: {
      foundation: 'Reforço de base e subleito compactado para piso armado em tela dupla',
      structure: 'Estruturas metálicas auxiliares para suporte de forros, climatização e fachada',
      installations: 'Eletrocalhas aparentes galvanizadas, rede lógica estruturada e iluminação comercial de alto IRC',
      finishing: 'Porcelanato técnico de alto tráfego, vidro temperado laminado e pintura epóxi',
    },
  },
  {
    id: 'obras-gwm',
    code: 'OBR-04 / GWM',
    title: 'Obras GWM',
    category: 'comercial',
    categoryLabel: 'Comercial rápida',
    location: 'Maringá, PR',
    modality: 'Engenharia comercial de ciclo rápido',
    builtAreaM2: 185,
    terrainAreaM2: 185,
    executionMonths: 2,
    summary:
      'Implantação de espaço comercial automotivo com cronograma intensivo, integração de sistemas de iluminação cênica, infraestrutura para recarga elétrica e marcenaria técnica.',
    constructiveSystem:
      'Construção a seco combinada com serralheria estrutural, forro modular acústico e instalações elétricas dimensionadas para alta demanda.',
    highlights: [
      'Suprimento antecipado de materiais críticos para cumprimento de prazo contratual curto',
      'Infraestrutura dedicada para pontos de alimentação elétrica de veículos e showroom',
      'Controle diário de frente de serviço com equipe própria e fornecedores homologados',
    ],
    blueprintSpecs: {
      foundation: 'Regularização de contrapiso técnico sobre laje existente com argamassa autonivelante',
      structure: 'Pórticos metálicos internos para fixação de painéis de comunicação visual e iluminação',
      installations: 'Circuitos independentes para climatização, iluminação de destaque e tomadas industriais',
      finishing: 'Revestimentos vinílicos e porcelanato acetinado, serralheria em pintura eletrostática e iluminação linear',
    },
  },
];
