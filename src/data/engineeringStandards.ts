export interface EngineeringStandard {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly subtitle: string;
  readonly commonFailure: string;
  readonly trincaMechanism: string;
  readonly technicalNorm: string;
  readonly benefitSummary: string;
  readonly diagramType: 'platibanda' | 'hidraulica' | 'gas' | 'baldrame';
}

export const ENGINEERING_STANDARDS: readonly EngineeringStandard[] = [
  {
    id: 'platibanda',
    code: 'DET-01 / ALVENARIA E FACHADA',
    title: 'Prevenção de trinca horizontal no encontro entre laje e platibanda',
    subtitle: 'Controle de dilatação térmica na fachada antes da etapa de reboco',
    commonFailure:
      'Em obras sem detalhamento executivo, a alvenaria da platibanda é assentada diretamente sobre a laje sem tratamento da junta. Como o concreto da laje e o bloco cerâmico dilatam em coeficientes diferentes sob o sol de Maringá, surge uma fissura horizontal contínua na fachada poucos meses após a pintura.',
    trincaMechanism:
      'Executamos a dessolidarização controlada ou o reforço da interface entre a viga/laje de cobertura e a alvenaria da platibanda, aplicando tela metálica eletrossoldada galvanizada ancorada nos dois materiais antes do chapisco e do emboço externo, somada a impermeabilização da calha e rufos com pingadeira.',
    technicalNorm: 'NBR 15575 (Desempenho de edificações) e NBR 7200 (Revestimento de paredes)',
    benefitSummary: 'Fachada íntegra, sem fissuras horizontais aparentes e sem infiltração na laje.',
    diagramType: 'platibanda',
  },
  {
    id: 'hidraulica',
    code: 'DET-02 / INSTALAÇÕES HIDROSSANITÁRIAS',
    title: 'Pressão constante no chuveiro e posicionamento ergonômico de registros',
    subtitle: 'Dimensionamento de colunas de água fria e quente sem queda de vazão',
    commonFailure:
      'Quando o banheiro compartilha uma única prumada subdimensionada para chuveiro, lavatório e bacia sanitária, abrir a torneira ou acionar a descarga derruba o fluxo de água do banho e sobrecarrega a resistência do chuveiro. Além disso, registros instalados dentro da linha de queda da água obrigam o morador a se molhar ao abrir o banho.',
    trincaMechanism:
      'Separamos a coluna de alimentação do chuveiro das demais derivações do banheiro, calculamos a perda de carga nas conexões para manter pressão dinâmica uniforme e posicionamos os registros de gaveta e pressão fora da projeção do jato do chuveiro.',
    technicalNorm: 'NBR 5626 (Sistemas prediais de água fria e água quente)',
    benefitSummary: 'Vazão estável durante o banho, maior vida útil do chuveiro e acionamento seco do registro.',
    diagramType: 'hidraulica',
  },
  {
    id: 'gas',
    code: 'DET-03 / SEGURANÇA E ACABAMENTO DE COZINHA',
    title: 'Tubulação de gás embutida com teste de estanqueidade',
    subtitle: 'Integração entre abrigo externo de cilindros e ponto do fogão ou cooktop',
    commonFailure:
      'Deixar mangueiras aparentes atravessando armários de marcenaria ou improvisar passagens depois do revestimento pronto compromete a estética da bancada e aumenta o risco de vazamento em conexões ocultas sem ventilação.',
    trincaMechanism:
      'Instalamos tubulação rígida em cobre ou multicamada embutida pelo contrapiso e alvenaria desde o abrigo externo ventilado até o ponto exato do cooktop e forno, com registro de esfera acessível e ensaio de pressão com manômetro antes do fechamento do piso.',
    technicalNorm: 'NBR 15526 (Redes de distribuição interna para gases combustíveis)',
    benefitSummary: 'Cozinha sem mangueiras aparentes, troca de botijão pelo lado externo e segurança certificada.',
    diagramType: 'gas',
  },
  {
    id: 'baldrame',
    code: 'DET-04 / FUNDAÇÃO E ESTANQUEIDADE',
    title: 'Blindagem de vigas baldrame contra umidade ascendente',
    subtitle: 'Proteção definitiva da base das paredes e pintura junto aos rodapés',
    commonFailure:
      'A umidade natural do solo sobe por capilaridade através do concreto do baldrame quando a impermeabilização é feita apenas no topo da viga ou com pintura betuminosa rala. O resultado é o desplacamento da massa corrida e bolhas na tinta até 40 cm acima do rodapé.',
    trincaMechanism:
      'Aplicamos argamassa polimérica impermeabilizante nas três faces da viga baldrame (topo e laterais até a cota de arrasamento), complementada por emulsão asfáltica elastomérica e assentamento das três primeiras fiadas de alvenaria com aditivo hidrofugante.',
    technicalNorm: 'NBR 9575 (Impermeabilização: seleção e projeto)',
    benefitSummary: 'Paredes internas e externas secas na região do rodapé durante toda a vida útil da casa.',
    diagramType: 'baldrame',
  },
];
