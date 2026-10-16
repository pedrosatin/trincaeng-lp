import React from 'react';
import { PROCESS_STEPS } from '../data/processSteps';

export const ProcessTimelineSection: React.FC = () => {
  return (
    <section id="etapas" className="section-light timeline-section" aria-labelledby="etapas-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-code">PRANCHA 05 // CRONOGRAMA OPERACIONAL</span>
          <h2 id="etapas-heading" className="section-title">
            As seis etapas da aprovação do financiamento à entrega das chaves
          </h2>
          <p className="section-lead">
            Você acompanha o avanço de cada fase sabendo exatamente o que a nossa engenharia executa nos bastidores e em qual momento sua validação é solicitada.
          </p>
        </div>

        <ol className="timeline-list">
          {PROCESS_STEPS.map((step) => (
            <li key={step.stepNumber} className="timeline-item">
              <div className="timeline-marker">
                <span className="timeline-step-num">ETAPA {step.stepNumber}</span>
                <span className="timeline-duration">{step.durationEstimate}</span>
              </div>

              <div className="timeline-content">
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-desc">{step.description}</p>

                <div className="timeline-deliverables-grid">
                  <div className="timeline-box-trinca">
                    <h4>Entregas da Trinca Engenharia</h4>
                    <ul>
                      {step.trincaDeliverables.map((deliv) => (
                        <li key={deliv}>{deliv}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="timeline-box-client">
                    <h4>Sua participação na etapa</h4>
                    <p>{step.clientAction}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
