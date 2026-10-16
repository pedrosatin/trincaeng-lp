import React, { useMemo, useState } from 'react';
import {
  formatCurrencyBRL,
  INCOME_BRACKETS,
  simulateConstruction,
  type TerrainStatusId,
  type WorkRegimeId,
} from '../lib/simulator';

const INCOME_PRESETS: readonly { readonly label: string; readonly value: number }[] = [
  { label: 'Até R$ 3.200', value: 2900 },
  { label: 'R$ 3.200 a R$ 5.600', value: 4600 },
  { label: 'R$ 5.600 a R$ 9.600', value: 7800 },
  { label: 'R$ 9.600 a R$ 13.000', value: 11200 },
  { label: 'Acima de R$ 13.000', value: 16500 },
];

const AREA_PRESETS: readonly number[] = [85, 115, 150, 210];

export const SimulatorSection: React.FC = () => {
  const [monthlyIncomeBRL, setMonthlyIncomeBRL] = useState<number>(7800);
  const [terrainStatus, setTerrainStatus] = useState<TerrainStatusId>('sem-terreno');
  const [workRegime, setWorkRegime] = useState<WorkRegimeId>('clt');
  const [desiredAreaM2, setDesiredAreaM2] = useState<number>(115);

  const simulation = useMemo(
    () =>
      simulateConstruction({
        monthlyIncomeBRL,
        terrainStatus,
        workRegime,
        desiredAreaM2,
      }),
    [monthlyIncomeBRL, terrainStatus, workRegime, desiredAreaM2],
  );

  return (
    <section id="simulador" className="section-light simulator-section" aria-labelledby="simulador-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-code">PRANCHA 01 // ENQUADRAMENTO HABITACIONAL 2026</span>
          <h2 id="simulador-heading" className="section-title">
            Descubra em qual faixa de financiamento você se enquadra e quanto economiza ao construir
          </h2>
          <p className="section-lead">
            Selecione sua faixa de renda familiar, a situação atual do terreno e o seu regime de trabalho. O simulador aponta a linha da Caixa indicada e monta o resumo técnico para nossa equipe avaliar seu crédito gratuitamente.
          </p>
        </div>

        <div className="simulator-workspace">
          <div className="simulator-controls" role="group" aria-label="Parâmetros da simulação">
            {/* 1. Renda Familiar */}
            <div className="sim-field-group">
              <div className="sim-field-header">
                <label htmlFor="sim-income-range" className="sim-field-label">
                  1. Renda bruta familiar mensal
                </label>
                <output htmlFor="sim-income-range" className="sim-field-output">
                  {formatCurrencyBRL(monthlyIncomeBRL)}
                </output>
              </div>

              <input
                id="sim-income-range"
                type="range"
                min={1600}
                max={22000}
                step={200}
                value={monthlyIncomeBRL}
                onChange={(e) => setMonthlyIncomeBRL(Number(e.target.value))}
                className="sim-range-input"
              />

              <div className="sim-preset-row" role="group" aria-label="Atalhos de faixa de renda">
                {INCOME_PRESETS.map((preset) => {
                  const isActive =
                    (preset.value <= 3200 && monthlyIncomeBRL <= 3200) ||
                    (preset.value > 3200 &&
                      preset.value <= 5600 &&
                      monthlyIncomeBRL > 3200 &&
                      monthlyIncomeBRL <= 5600) ||
                    (preset.value > 5600 &&
                      preset.value <= 9600 &&
                      monthlyIncomeBRL > 5600 &&
                      monthlyIncomeBRL <= 9600) ||
                    (preset.value > 9600 &&
                      preset.value <= 13000 &&
                      monthlyIncomeBRL > 9600 &&
                      monthlyIncomeBRL <= 13000) ||
                    (preset.value > 13000 && monthlyIncomeBRL > 13000);

                  return (
                    <button
                      key={preset.label}
                      type="button"
                      className={`sim-chip ${isActive ? 'sim-chip-active' : ''}`.trim()}
                      aria-pressed={isActive}
                      onClick={() => setMonthlyIncomeBRL(preset.value)}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Situação do Terreno */}
            <div className="sim-field-group">
              <span className="sim-field-label" id="sim-terrain-label">
                2. Situação atual do terreno em Maringá ou região
              </span>
              <div className="sim-option-grid" role="group" aria-labelledby="sim-terrain-label">
                <button
                  type="button"
                  className={`sim-option-card ${terrainStatus === 'sem-terreno' ? 'sim-option-card-active' : ''}`.trim()}
                  aria-pressed={terrainStatus === 'sem-terreno'}
                  onClick={() => setTerrainStatus('sem-terreno')}
                >
                  <strong className="sim-option-title">Ainda não tenho terreno</strong>
                  <span className="sim-option-desc">
                    Quero financiar a compra do lote e a construção no mesmo contrato.
                  </span>
                </button>

                <button
                  type="button"
                  className={`sim-option-card ${terrainStatus === 'terreno-quitado' ? 'sim-option-card-active' : ''}`.trim()}
                  aria-pressed={terrainStatus === 'terreno-quitado'}
                  onClick={() => setTerrainStatus('terreno-quitado')}
                >
                  <strong className="sim-option-title">Já tenho terreno quitado</strong>
                  <span className="sim-option-desc">
                    Possuo lote escriturado e quero financiar 100% da execução da obra.
                  </span>
                </button>

                <button
                  type="button"
                  className={`sim-option-card ${terrainStatus === 'terreno-parcelado' ? 'sim-option-card-active' : ''}`.trim()}
                  aria-pressed={terrainStatus === 'terreno-parcelado'}
                  onClick={() => setTerrainStatus('terreno-parcelado')}
                >
                  <strong className="sim-option-title">Estou pagando o lote</strong>
                  <span className="sim-option-desc">
                    Ainda tenho parcelas com a loteadora e quero iniciar a construção.
                  </span>
                </button>
              </div>
            </div>

            {/* 3. Perfil de comprovação de renda */}
            <div className="sim-field-group">
              <span className="sim-field-label" id="sim-regime-label">
                3. Como você comprova sua renda?
              </span>
              <div className="sim-option-grid" role="group" aria-labelledby="sim-regime-label">
                <button
                  type="button"
                  className={`sim-option-card ${workRegime === 'clt' ? 'sim-option-card-active' : ''}`.trim()}
                  aria-pressed={workRegime === 'clt'}
                  onClick={() => setWorkRegime('clt')}
                >
                  <strong className="sim-option-title">CLT ou Servidor Público</strong>
                  <span className="sim-option-desc">Holerite mensal, carteira registrada e FGTS disponível.</span>
                </button>

                <button
                  type="button"
                  className={`sim-option-card ${workRegime === 'autonomo' ? 'sim-option-card-active' : ''}`.trim()}
                  aria-pressed={workRegime === 'autonomo'}
                  onClick={() => setWorkRegime('autonomo')}
                >
                  <strong className="sim-option-title">Autônomo, MEI ou App</strong>
                  <span className="sim-option-desc">
                    Trabalho por conta própria, MEI, motorista (Uber/99) ou entregador.
                  </span>
                </button>

                <button
                  type="button"
                  className={`sim-option-card ${workRegime === 'empresario' ? 'sim-option-card-active' : ''}`.trim()}
                  aria-pressed={workRegime === 'empresario'}
                  onClick={() => setWorkRegime('empresario')}
                >
                  <strong className="sim-option-title">Empresário ou Liberal</strong>
                  <span className="sim-option-desc">
                    Pró-labore, distribuição de lucros, IRPF ou renda familiar composta.
                  </span>
                </button>
              </div>
            </div>

            {/* 4. Metragem da casa */}
            <div className="sim-field-group">
              <div className="sim-field-header">
                <label htmlFor="sim-area-range" className="sim-field-label">
                  4. Área construída estimada da residência
                </label>
                <output htmlFor="sim-area-range" className="sim-field-output">
                  {desiredAreaM2} m²
                </output>
              </div>

              <input
                id="sim-area-range"
                type="range"
                min={65}
                max={280}
                step={5}
                value={desiredAreaM2}
                onChange={(e) => setDesiredAreaM2(Number(e.target.value))}
                className="sim-range-input"
              />

              <div className="sim-preset-row" role="group" aria-label="Atalhos de metragem">
                {AREA_PRESETS.map((area) => (
                  <button
                    key={area}
                    type="button"
                    className={`sim-chip ${desiredAreaM2 === area ? 'sim-chip-active' : ''}`.trim()}
                    aria-pressed={desiredAreaM2 === area}
                    onClick={() => setDesiredAreaM2(area)}
                  >
                    {area} m²
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Painel de Resultado Técnico */}
          <aside className="simulator-result-panel" aria-live="polite">
            <div className="sim-result-top">
              <span className="sim-result-badge">{simulation.bracket.badge}</span>
              <h3 className="sim-result-program">{simulation.bracket.programName}</h3>
              <p className="sim-result-condition">{simulation.bracket.conditionSummary}</p>
            </div>

            <dl className="sim-result-metrics">
              <div className="sim-result-metric-box">
                <dt>Teto do imóvel na faixa</dt>
                <dd>{simulation.bracket.maxPropertyLabel}</dd>
              </div>
              <div className="sim-result-metric-box">
                <dt>Faixa de renda enquadrada</dt>
                <dd>{simulation.bracket.incomeRangeLabel}</dd>
              </div>
            </dl>

            <div className="sim-result-detail-block">
              <h4>Modalidade operacional indicada</h4>
              <p className="sim-result-highlight-title">{simulation.modalityTitle}</p>
              <p className="sim-result-text">{simulation.modalityDescription}</p>
            </div>

            <div className="sim-result-detail-block">
              <h4>Comprovação de renda aceita pela Caixa</h4>
              <p className="sim-result-text">{simulation.incomeProofGuidance}</p>
            </div>

            <div className="sim-savings-box">
              <div className="sim-savings-header">
                <span>Comparativo patrimonial estimado ({desiredAreaM2} m² em Maringá)</span>
                <strong className="sim-savings-pill">Economia média de {simulation.savingsPercentage}%</strong>
              </div>
              <div className="sim-savings-comparison">
                <div>
                  <span className="sim-savings-caption">Comprar casa pronta equivalente</span>
                  <strong className="sim-savings-price-muted">
                    {formatCurrencyBRL(simulation.estimatedReadyMarketValueBRL)}
                  </strong>
                </div>
                <div>
                  <span className="sim-savings-caption">Construir com a Trinca Engenharia</span>
                  <strong className="sim-savings-price-main">
                    {formatCurrencyBRL(simulation.estimatedConstructionCostBRL)}
                  </strong>
                </div>
              </div>
              <p className="sim-savings-net">
                Diferença patrimonial estimada a seu favor:{' '}
                <strong>{formatCurrencyBRL(simulation.estimatedSavingsBRL)}</strong>
              </p>
            </div>

            <a
              href={simulation.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brass btn-block"
            >
              Validar esta simulação gratuitamente no WhatsApp
            </a>
            <p className="sim-disclaimer">
              Valores sujeitos à análise de crédito individual e avaliação de engenharia da Caixa Econômica Federal.
            </p>
          </aside>
        </div>

        {/* Tabela de Referência Oficial das Faixas 2026 */}
        <div className="brackets-reference-card">
          <div className="brackets-reference-header">
            <h3>Tabela de referência Minha Casa Minha Vida 2026 e SBPE para construção</h3>
            <span>Toque em uma faixa para carregar no simulador acima</span>
          </div>
          <div className="brackets-grid">
            {INCOME_BRACKETS.map((b, idx) => {
              const isSelected = simulation.bracket.id === b.id;
              const representativeIncome = INCOME_PRESETS[idx]?.value ?? 7800;
              return (
                <button
                  key={b.id}
                  type="button"
                  className={`bracket-cell ${isSelected ? 'bracket-cell-active' : ''}`.trim()}
                  onClick={() => setMonthlyIncomeBRL(representativeIncome)}
                  aria-pressed={isSelected}
                >
                  <span className="bracket-cell-badge">{b.badge}</span>
                  <strong className="bracket-cell-range">{b.incomeRangeLabel}</strong>
                  <span className="bracket-cell-cap">Imóvel: {b.maxPropertyLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
