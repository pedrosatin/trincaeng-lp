import { COMPANY } from '../data/company';

export type IncomeTierId = 'faixa-1' | 'faixa-2' | 'faixa-3' | 'faixa-4' | 'sbpe';
export type TerrainStatusId = 'sem-terreno' | 'terreno-quitado' | 'terreno-parcelado';
export type WorkRegimeId = 'clt' | 'autonomo' | 'empresario';

export interface IncomeBracketInfo {
  readonly id: IncomeTierId;
  readonly badge: string;
  readonly programName: string;
  readonly incomeRangeLabel: string;
  readonly maxPropertyValueBRL: number | null;
  readonly maxPropertyLabel: string;
  readonly conditionSummary: string;
}

export interface SimulationInput {
  readonly monthlyIncomeBRL: number;
  readonly terrainStatus: TerrainStatusId;
  readonly workRegime: WorkRegimeId;
  readonly desiredAreaM2: number;
}

export interface SimulationResult {
  readonly bracket: IncomeBracketInfo;
  readonly modalityTitle: string;
  readonly modalityDescription: string;
  readonly incomeProofGuidance: string;
  readonly estimatedReadyMarketValueBRL: number;
  readonly estimatedConstructionCostBRL: number;
  readonly estimatedSavingsBRL: number;
  readonly savingsPercentage: number;
  readonly whatsappUrl: string;
}

export interface ContactBriefing {
  readonly name: string;
  readonly neighborhoodOrCity: string;
  readonly terrainStatus: TerrainStatusId;
  readonly incomeRange: string;
  readonly notes: string;
}

export const INCOME_BRACKETS: readonly IncomeBracketInfo[] = [
  {
    id: 'faixa-1',
    badge: 'MCMV 2026 / FAIXA 1',
    programName: 'Minha Casa Minha Vida (Faixa 1)',
    incomeRangeLabel: 'De 1 salário mínimo até R$ 3.200',
    maxPropertyValueBRL: 275_000,
    maxPropertyLabel: 'Até R$ 275 mil',
    conditionSummary: 'Menores taxas de juros do programa e possibilidade de subsídio federal conforme análise familiar.',
  },
  {
    id: 'faixa-2',
    badge: 'MCMV 2026 / FAIXA 2',
    programName: 'Minha Casa Minha Vida (Faixa 2)',
    incomeRangeLabel: 'De R$ 3.200,01 até R$ 5.600',
    maxPropertyValueBRL: 275_000,
    maxPropertyLabel: 'Até R$ 275 mil',
    conditionSummary: 'Subsídio governamental escalonado, uso do FGTS e condições reduzidas para sair do aluguel.',
  },
  {
    id: 'faixa-3',
    badge: 'MCMV 2026 / FAIXA 3',
    programName: 'Minha Casa Minha Vida (Faixa 3)',
    incomeRangeLabel: 'De R$ 5.600,01 até R$ 9.600',
    maxPropertyValueBRL: 400_000,
    maxPropertyLabel: 'Até R$ 400 mil',
    conditionSummary: 'Teto ampliado para R$ 400 mil em 2026, viabilizando projetos residenciais maiores em Maringá e região.',
  },
  {
    id: 'faixa-4',
    badge: 'MCMV 2026 / FAIXA 4',
    programName: 'Minha Casa Minha Vida (Faixa 4)',
    incomeRangeLabel: 'De R$ 9.600,01 até R$ 13.000',
    maxPropertyValueBRL: 600_000,
    maxPropertyLabel: 'Até R$ 600 mil',
    conditionSummary: 'Faixa para classe média com teto de até R$ 600 mil para construir residência personalizada com financiamento Caixa.',
  },
  {
    id: 'sbpe',
    badge: 'LINHA CAIXA SBPE',
    programName: 'Financiamento Habitacional SBPE Caixa',
    incomeRangeLabel: 'Acima de R$ 13.000',
    maxPropertyValueBRL: null,
    maxPropertyLabel: 'Acima de R$ 600 mil (sob medida)',
    conditionSummary: 'Crédito habitacional para residências de médio e alto padrão em bairros planejados e condomínios fechados.',
  },
];

export function classifyIncomeBracket(monthlyIncomeBRL: number): IncomeBracketInfo {
  const safeIncome = Number.isFinite(monthlyIncomeBRL) ? Math.max(0, monthlyIncomeBRL) : 0;

  if (safeIncome <= 3200) {
    return INCOME_BRACKETS[0]!;
  }
  if (safeIncome <= 5600) {
    return INCOME_BRACKETS[1]!;
  }
  if (safeIncome <= 9600) {
    return INCOME_BRACKETS[2]!;
  }
  if (safeIncome <= 13000) {
    return INCOME_BRACKETS[3]!;
  }
  return INCOME_BRACKETS[4]!;
}

export function resolveTerrainModality(terrainStatus: TerrainStatusId): {
  readonly title: string;
  readonly description: string;
  readonly shortLabel: string;
} {
  switch (terrainStatus) {
    case 'sem-terreno':
      return {
        title: 'Aquisição de Terreno e Construção em contrato único',
        description:
          'O financiamento da Caixa cobre a compra do lote e a execução completa da obra no mesmo contrato. Auxiliamos na busca e avaliação técnica do lote em Maringá e região.',
        shortLabel: 'Ainda não tenho terreno (financiar lote + obra)',
      };
    case 'terreno-quitado':
      return {
        title: 'Construção em Terreno Próprio',
        description:
          'Seu lote quitado entra na operação como garantia e contrapartida patrimonial, destinando o recurso aprovado pela Caixa integralmente para erguer a residência.',
        shortLabel: 'Já tenho terreno quitado',
      };
    case 'terreno-parcelado':
      return {
        title: 'Quitação de Lote + Construção Financiada',
        description:
          'Estruturamos a operação para quitar o saldo devedor do seu terreno junto à loteadora e financiar a construção da casa em um único contrato junto à Caixa.',
        shortLabel: 'Estou pagando o terreno parcelado',
      };
  }
}

export function resolveWorkRegimeGuidance(workRegime: WorkRegimeId): {
  readonly shortLabel: string;
  readonly guidance: string;
} {
  switch (workRegime) {
    case 'clt':
      return {
        shortLabel: 'CLT ou Servidor Público',
        guidance:
          'Análise com últimos holerites, carteira de trabalho digital, Imposto de Renda (se declarante) e possibilidade de uso do saldo do FGTS.',
      };
    case 'autonomo':
      return {
        shortLabel: 'Autônomo, MEI ou Aplicativo (Uber, 99, iFood)',
        guidance:
          'A Caixa aceita extratos bancários dos últimos 6 meses, Declaração de Imposto de Renda (IRPF) ou declaração anual de faturamento do MEI (DASN-SIMEI).',
      };
    case 'empresario':
      return {
        shortLabel: 'Empresário ou Profissional Liberal (Renda Composta)',
        guidance:
          'Comprovação via pró-labore, contrato social, IRPF e composição de renda familiar entre cônjuges ou familiares.',
      };
  }
}

export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

export function buildWhatsAppUrl(message: string): string {
  const cleanText = message.trim();
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(cleanText)}`;
}

export function simulateConstruction(input: SimulationInput): SimulationResult {
  const clampedArea = Math.min(360, Math.max(60, Math.round(input.desiredAreaM2)));
  const bracket = classifyIncomeBracket(input.monthlyIncomeBRL);
  const modality = resolveTerrainModality(input.terrainStatus);
  const regime = resolveWorkRegimeGuidance(input.workRegime);

  // Referência média de mercado em Maringá (imóvel pronto vs. custo de construção sob gestão).
  // Construir sob encomenda gera economia média de 25% (dentro da faixa real de 20% a 30%).
  const readyMarketSqmPrice = 5400;
  const savingsPercentage = 25;
  const estimatedReadyMarketValueBRL = Math.round((clampedArea * readyMarketSqmPrice) / 1000) * 1000;
  const estimatedConstructionCostBRL =
    Math.round((estimatedReadyMarketValueBRL * (100 - savingsPercentage)) / 100 / 1000) * 1000;
  const estimatedSavingsBRL = estimatedReadyMarketValueBRL - estimatedConstructionCostBRL;

  const messageLines = [
    'Olá, equipe da Trinca Engenharia! Vim pelo site e fiz uma simulação de construção financiada:',
    `- Renda familiar aproximada: ${formatCurrencyBRL(input.monthlyIncomeBRL)} (${bracket.programName})`,
    `- Situação do terreno: ${modality.shortLabel}`,
    `- Perfil de renda: ${regime.shortLabel}`,
    `- Área pretendida: cerca de ${clampedArea} m²`,
    'Gostaria de agendar uma análise gratuita de crédito e viabilidade.',
  ];

  return {
    bracket,
    modalityTitle: modality.title,
    modalityDescription: modality.description,
    incomeProofGuidance: regime.guidance,
    estimatedReadyMarketValueBRL,
    estimatedConstructionCostBRL,
    estimatedSavingsBRL,
    savingsPercentage,
    whatsappUrl: buildWhatsAppUrl(messageLines.join('\n')),
  };
}

export function buildBriefingWhatsAppUrl(briefing: ContactBriefing): string {
  const modality = resolveTerrainModality(briefing.terrainStatus);
  const lines = ['Olá, equipe da Trinca Engenharia! Vim pelo site e gostaria de conversar sobre minha obra.'];

  if (briefing.name.trim()) {
    lines.push(`- Nome: ${briefing.name.trim()}`);
  }
  if (briefing.neighborhoodOrCity.trim()) {
    lines.push(`- Região ou condomínio de interesse: ${briefing.neighborhoodOrCity.trim()}`);
  }
  lines.push(`- Situação do terreno: ${modality.shortLabel}`);
  if (briefing.incomeRange.trim()) {
    lines.push(`- Faixa de renda familiar: ${briefing.incomeRange.trim()}`);
  }
  if (briefing.notes.trim()) {
    lines.push(`- Observações do projeto: ${briefing.notes.trim()}`);
  }

  return buildWhatsAppUrl(lines.join('\n'));
}
