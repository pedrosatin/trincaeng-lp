import React, { useState } from 'react';
import { FAQ_ITEMS, type FaqItem } from '../data/faq';
import { buildWhatsAppUrl } from '../lib/simulator';

type FaqFilter = 'todas' | FaqItem['category'];

const FILTER_OPTIONS: readonly { readonly id: FaqFilter; readonly label: string }[] = [
  { id: 'todas', label: 'Todas as perguntas' },
  { id: 'financiamento', label: 'Financiamento Caixa' },
  { id: 'terreno', label: 'Terreno e lote' },
  { id: 'renda', label: 'Comprovação de renda' },
  { id: 'obra', label: 'Engenharia e obra' },
];

export const FaqSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FaqFilter>('todas');

  const filteredFaqs = FAQ_ITEMS.filter((item) =>
    activeFilter === 'todas' ? true : item.category === activeFilter,
  );

  return (
    <section id="duvidas" className="section-surface faq-section" aria-labelledby="duvidas-heading">
      <div className="container">
        <div className="faq-header-row">
          <div className="section-header">
            <span className="section-code">PRANCHA 06 // PERGUNTAS FREQUENTES</span>
            <h2 id="duvidas-heading" className="section-title">
              Respostas diretas sobre terreno, renda e financiamento Caixa
            </h2>
            <p className="section-lead">
              Reunimos as dúvidas mais comuns enviadas por clientes e seguidores em nosso canal técnico em Maringá.
            </p>
          </div>

          <div className="faq-filter-row" role="group" aria-label="Filtrar dúvidas por tema">
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`sim-chip ${activeFilter === opt.id ? 'sim-chip-active' : ''}`.trim()}
                aria-pressed={activeFilter === opt.id}
                onClick={() => setActiveFilter(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="faq-accordion-list">
          {filteredFaqs.map((item, index) => (
            <details key={item.id} className="faq-item" open={index === 0}>
              <summary className="faq-summary">
                <div className="faq-summary-text">
                  <span className="faq-category-badge">{item.categoryLabel}</span>
                  <span className="faq-question">{item.question}</span>
                </div>
                <span className="faq-chevron" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="faq-cta-banner">
          <div>
            <h3>Sua dúvida envolve um caso específico de terreno ou composição de renda?</h3>
            <p>
              Nossa equipe faz a verificação preliminar sem custo e informa quais documentos apresentar na Caixa.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl(
              'Olá, equipe da Trinca Engenharia! Tenho uma dúvida específica sobre financiamento/construção e gostaria de orientação.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Tirar dúvida com especialista no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
