import { describe, expect, it } from 'vitest';
import {
  buildBriefingWhatsAppUrl,
  classifyIncomeBracket,
  formatCurrencyBRL,
  simulateConstruction,
} from './simulator';

describe('classifyIncomeBracket', () => {
  it('classifies incomes up to R$ 3.200 in MCMV Faixa 1 (up to R$ 275k)', () => {
    const b = classifyIncomeBracket(2800);
    expect(b.id).toBe('faixa-1');
    expect(b.maxPropertyValueBRL).toBe(275_000);
  });

  it('classifies incomes between R$ 3.200,01 and R$ 5.600 in MCMV Faixa 2 (up to R$ 275k)', () => {
    const b = classifyIncomeBracket(4500);
    expect(b.id).toBe('faixa-2');
    expect(b.maxPropertyValueBRL).toBe(275_000);
  });

  it('classifies incomes between R$ 5.600,01 and R$ 9.600 in MCMV Faixa 3 (up to R$ 400k)', () => {
    const b = classifyIncomeBracket(7800);
    expect(b.id).toBe('faixa-3');
    expect(b.maxPropertyValueBRL).toBe(400_000);
  });

  it('classifies incomes between R$ 9.600,01 and R$ 13.000 in MCMV Faixa 4 (up to R$ 600k)', () => {
    const b = classifyIncomeBracket(11_500);
    expect(b.id).toBe('faixa-4');
    expect(b.maxPropertyValueBRL).toBe(600_000);
  });

  it('classifies incomes above R$ 13.000 in Caixa SBPE custom line', () => {
    const b = classifyIncomeBracket(16_000);
    expect(b.id).toBe('sbpe');
    expect(b.maxPropertyValueBRL).toBeNull();
  });
});

describe('simulateConstruction', () => {
  it('calculates patrimonial savings between 20% and 30% and generates a pre-filled WhatsApp URL', () => {
    const result = simulateConstruction({
      monthlyIncomeBRL: 8200,
      terrainStatus: 'sem-terreno',
      workRegime: 'autonomo',
      desiredAreaM2: 120,
    });

    expect(result.bracket.id).toBe('faixa-3');
    expect(result.savingsPercentage).toBeGreaterThanOrEqual(20);
    expect(result.savingsPercentage).toBeLessThanOrEqual(30);
    expect(result.estimatedSavingsBRL).toBe(
      result.estimatedReadyMarketValueBRL - result.estimatedConstructionCostBRL,
    );
    expect(result.whatsappUrl).toContain('https://wa.me/5544998793999?text=');
    expect(decodeURIComponent(result.whatsappUrl)).toContain('120 m²');
    expect(decodeURIComponent(result.whatsappUrl)).toContain('Faixa 3');
  });

  it('formats BRL currency cleanly', () => {
    expect(formatCurrencyBRL(275000)).toMatch(/275\.000/);
  });
});

describe('buildBriefingWhatsAppUrl', () => {
  it('includes filled fields in the WhatsApp message', () => {
    const url = buildBriefingWhatsAppUrl({
      name: 'Carlos Mendes',
      neighborhoodOrCity: 'Jardim Imperial, Maringá',
      terrainStatus: 'terreno-parcelado',
      incomeRange: 'De R$ 5.600 a R$ 9.600',
      notes: 'Casa térrea com 3 quartos e área gourmet',
    });

    const decoded = decodeURIComponent(url);
    expect(decoded).toContain('Carlos Mendes');
    expect(decoded).toContain('Jardim Imperial, Maringá');
    expect(decoded).toContain('Estou pagando o terreno parcelado');
    expect(decoded).toContain('Casa térrea com 3 quartos e área gourmet');
  });
});
