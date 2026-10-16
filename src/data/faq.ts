export interface FaqItem {
  readonly id: string;
  readonly category: 'financiamento' | 'terreno' | 'renda' | 'obra';
  readonly categoryLabel: string;
  readonly question: string;
  readonly answer: string;
}

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 'sem-terreno',
    category: 'terreno',
    categoryLabel: 'Terreno e lote',
    question: 'Quero construir, mas ainda não tenho terreno. O financiamento cobre o lote também?',
    answer:
      'Sim. A modalidade Aquisição de Terreno e Construção da Caixa Econômica Federal unifica a compra do lote e o custo integral da obra em um único contrato de financiamento. A Caixa paga o vendedor do terreno após o registro do contrato e libera o saldo para a Trinca Engenharia executar a construção conforme o cronograma de medições.',
  },
  {
    id: 'lote-parcelado',
    category: 'terreno',
    categoryLabel: 'Terreno e lote',
    question: 'Ainda estou pagando meu lote parcelado com a loteadora. Consigo financiar a construção?',
    answer:
      'Sim. Quando o lote ainda possui saldo devedor com a loteadora ou terceiros, é possível estruturar a operação na modalidade de Aquisição de Terreno e Construção: o financiamento da Caixa quita o saldo remanescente do terreno diretamente ao vendedor, transfere a propriedade definitiva para o seu nome e destina o restante do crédito para erguer a residência.',
  },
  {
    id: 'renda-mcmv',
    category: 'financiamento',
    categoryLabel: 'Financiamento Caixa',
    question: 'Qual renda familiar é necessária para entrar no Minha Casa Minha Vida em 2026?',
    answer:
      'Em 2026, o programa Minha Casa Minha Vida contempla famílias com renda bruta mensal de um salário mínimo até R$ 13.000,00, dividida em quatro faixas: Faixa 1 (até R$ 3.200, imóvel até R$ 275 mil), Faixa 2 (de R$ 3.200,01 a R$ 5.600, imóvel até R$ 275 mil), Faixa 3 (de R$ 5.600,01 a R$ 9.600, imóvel até R$ 400 mil) e Faixa 4 (de R$ 9.600,01 a R$ 13.000, imóvel até R$ 600 mil). Para rendas superiores a R$ 13.000 ou projetos acima de R$ 600 mil, operamos pelas linhas SBPE da Caixa.',
  },
  {
    id: 'autonomos-mei',
    category: 'renda',
    categoryLabel: 'Comprovação de renda',
    question: 'Sou autônomo, MEI ou motorista de aplicativo. Qual comprovante de renda o banco aceita?',
    answer:
      'Trabalhadores autônomos, microempreendedores individuais (MEI), motoristas de aplicativo (Uber, 99), entregadores (iFood) e profissionais liberais podem financiar normalmente. A Caixa aceita Declaração de Imposto de Renda Pessoa Física (IRPF) com recibo de entrega, extratos bancários dos últimos 6 meses para apuração de movimentação financeira, faturamento do MEI (DASN-SIMEI) ou pró-labore. Nossa equipe analisa gratuitamente sua documentação antes de enviar ao banco.',
  },
  {
    id: 'economia-construir',
    category: 'financiamento',
    categoryLabel: 'Financiamento Caixa',
    question: 'Por que construir financiado custa de 20% a 30% menos do que comprar uma casa pronta?',
    answer:
      'Ao comprar um imóvel pronto, você paga a margem comercial do investidor ou incorporador, além de recolher ITBI e escritura sobre o valor cheio da casa pronta. Na construção financiada, você paga pelo custo técnico real de engenharia e materiais, recolhe ITBI apenas sobre o valor do terreno e recebe ao final das chaves um patrimônio avaliado acima do valor investido.',
  },
  {
    id: 'sistema-construtivo',
    category: 'obra',
    categoryLabel: 'Engenharia e obra',
    question: 'A Caixa financia casas com projetos personalizados e diferentes sistemas construtivos?',
    answer:
      'Sim. A Caixa financia tanto alvenaria convencional com estrutura em concreto armado quanto alvenaria estrutural (inclusive com tijolo ou bloco estrutural normatizado), desde que o sistema possua conformidade com as normas técnicas da ABNT (como a NBR 15575) e projeto assinado por engenheiro responsável. Na Trinca Engenharia, o projeto arquitetônico é desenhado do zero para o seu lote e estilo de vida.',
  },
  {
    id: 'pagamento-obra',
    category: 'obra',
    categoryLabel: 'Engenharia e obra',
    question: 'Como funcionam os pagamentos durante os meses de execução da obra?',
    answer:
      'Durante a fase de construção, você não paga a parcela cheia de amortização do financiamento: incidem apenas os juros de obra proporcionais ao percentual que já foi liberado pela Caixa naquele mês e taxas operacionais de vistoria. A parcela completa do financiamento só começa a vencer após a conclusão da obra e emissão do Habite-se.',
  },
];
