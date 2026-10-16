export interface ProcessStep {
  readonly stepNumber: string;
  readonly title: string;
  readonly durationEstimate: string;
  readonly description: string;
  readonly trincaDeliverables: readonly string[];
  readonly clientAction: string;
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Análise de crédito e escolha do terreno',
    durationEstimate: 'Semana 1 a 2',
    description:
      'Avaliamos sua renda familiar (CLT, servidor público, MEI, autônomo ou empresário) para definir a faixa de enquadramento na Caixa e o teto de financiamento. Caso você ainda não possua terreno, nossa equipe avalia lotes em Maringá e região com topografia favorável para reduzir custos de fundação.',
    trincaDeliverables: [
      'Simulação técnica de capacidade de pagamento e subsídio junto à Caixa',
      'Vistoria de aclive/declive e orientação na negociação do lote',
      'Enquadramento na modalidade Aquisição de Terreno e Construção ou Construção em Terreno Próprio',
    ],
    clientAction: 'Envio dos comprovantes de renda e definição da região preferida para morar.',
  },
  {
    stepNumber: '02',
    title: 'Projetos arquitetônicos e complementares',
    durationEstimate: 'Semana 3 a 6',
    description:
      'Desenvolvemos a planta personalizada para a rotina da sua família, junto aos projetos estrutural, elétrico, hidrossanitário e de gás. Cada metro quadrado é dimensionado para caber dentro do orçamento aprovado sem cortes improvisados na obra.',
    trincaDeliverables: [
      'Planta baixa humanizada, fachada 3D e memorial descritivo de acabamentos',
      'Projetos executivos de fundação, estrutura em concreto, hidráulica e elétrica',
      'Planilha de Proposta de Construção Individual (PCI) nos padrões exigidos pela Caixa',
    ],
    clientAction: 'Validação da planta, fachada e padrão de revestimentos.',
  },
  {
    stepNumber: '03',
    title: 'Aprovação na Prefeitura',
    durationEstimate: 'Semana 7 a 10',
    description:
      'Protocolamos e acompanhamos todo o trâmite legal junto à Prefeitura de Maringá (ou município da região) até a emissão do Alvará de Construção e das Anotações de Responsabilidade Técnica (ART/RRT).',
    trincaDeliverables: [
      'Protocolo de projeto legal e acompanhamento das análises municipais',
      'Emissão de ART de projeto e execução registrada no CREA-PR',
      'Liberação do Alvará de Construção e abertura do CNO da obra',
    ],
    clientAction: 'Assinatura digital da documentação técnica preparada pela construtora.',
  },
  {
    stepNumber: '04',
    title: 'Contratação do financiamento junto à Caixa',
    durationEstimate: 'Semana 11 a 14',
    description:
      'Submetemos a engenharia do projeto e a avaliação do lote ao corpo técnico da Caixa Econômica Federal. Após a validação do laudo de engenharia e jurídica, o contrato é assinado e o vendedor do terreno recebe o valor do lote.',
    trincaDeliverables: [
      'Acompanhamento do laudo de vistoria do engenheiro credenciado da Caixa',
      'Organização de certidões do terreno, vendedores e compradores',
      'Registro do contrato no Cartório de Registro de Imóveis',
    ],
    clientAction: 'Assinatura do contrato de financiamento e registro em cartório.',
  },
  {
    stepNumber: '05',
    title: 'Execução da obra e medições mensais',
    durationEstimate: 'Mês 4 ao 10',
    description:
      'Iniciamos a construção com equipe gerenciada, compra planejada de materiais e cronograma físico-financeiro fechado. A Caixa libera os recursos etapa por etapa mediante vistoria presencial do avanço real da obra.',
    trincaDeliverables: [
      'Gestão integral de mão de obra, compras, segurança e controle de qualidade',
      'Relatórios periódicos de evolução e solicitação das vistorias de medição PLS da Caixa',
      'Execução rigorosa de fundação, estrutura, instalações embutidas e acabamentos',
    ],
    clientAction: 'Acompanhamento da evolução da obra e escolha final de cores e louças.',
  },
  {
    stepNumber: '06',
    title: 'Habite-se, averbação e entrega das chaves',
    durationEstimate: 'Conclusão',
    description:
      'Com 100% da obra concluída e testada, realizamos a vistoria final de entrega, providenciamos o Habite-se municipal, a certidão negativa de débitos da obra (CND/INSS) e a averbação da construção na matrícula do imóvel.',
    trincaDeliverables: [
      'Check-list técnico de pressão hidráulica, circuitos elétricos, esquadrias e pintura',
      'Emissão do Habite-se, CND da Receita Federal e averbação em cartório',
      'Entrega das chaves, manual do proprietário e garantia legal da edificação',
    ],
    clientAction: 'Vistoria de recebimento da casa pronta para morar.',
  },
];
