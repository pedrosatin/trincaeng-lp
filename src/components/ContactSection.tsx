import React, { useMemo, useState } from 'react';
import { COMPANY } from '../data/company';
import { buildBriefingWhatsAppUrl, type TerrainStatusId } from '../lib/simulator';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [neighborhoodOrCity, setNeighborhoodOrCity] = useState('');
  const [terrainStatus, setTerrainStatus] = useState<TerrainStatusId>('sem-terreno');
  const [incomeRange, setIncomeRange] = useState('De R$ 5.600 a R$ 9.600 (Faixa 3)');
  const [notes, setNotes] = useState('');

  const whatsappBriefingUrl = useMemo(
    () =>
      buildBriefingWhatsAppUrl({
        name,
        neighborhoodOrCity,
        terrainStatus,
        incomeRange,
        notes,
      }),
    [name, neighborhoodOrCity, terrainStatus, incomeRange, notes],
  );

  return (
    <section id="contato" className="section-dark contact-section" aria-labelledby="contato-heading">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info-col">
            <span className="section-code section-code-brass">
              PRANCHA 07 // ESCRITÓRIO E ATENDIMENTO PRESENCIAL
            </span>
            <h2 id="contato-heading" className="section-title">
              Visite nosso escritório na Zona 01 em Maringá ou inicie sua análise pelo WhatsApp
            </h2>
            <p className="section-lead">
              Estamos localizados no centro de Maringá para receber sua família com hora marcada, apresentar plantas executadas, detalhar a planilha da Caixa e avaliar seu terreno.
            </p>

            <div className="office-cards">
              <div className="office-card">
                <span className="mono-label">ENDEREÇO COMERCIAL</span>
                <strong className="office-card-title">{COMPANY.address.street}</strong>
                <p className="office-card-sub">
                  {COMPANY.address.complement}
                  <br />
                  {COMPANY.address.neighborhood}, {COMPANY.address.city} / {COMPANY.address.state}, CEP{' '}
                  {COMPANY.address.zipCode}
                </p>
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-card-link"
                >
                  Abrir localização no Google Maps
                </a>
              </div>

              <div className="office-card">
                <span className="mono-label">CANAIS DIRETOS</span>
                <strong className="office-card-title">WhatsApp {COMPANY.whatsappDisplay}</strong>
                <p className="office-card-sub">
                  Telefone fixo: {COMPANY.landlineDisplay}
                  <br />
                  Instagram oficial: {COMPANY.instagramHandle}
                </p>
                <a
                  href={COMPANY.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-card-link"
                >
                  Acessar perfil {COMPANY.instagramHandle}
                </a>
              </div>
            </div>

            <dl className="legal-credentials">
              <div>
                <dt>Razão social</dt>
                <dd>{COMPANY.legalName}</dd>
              </div>
              <div>
                <dt>CNPJ</dt>
                <dd>{COMPANY.cnpj}</dd>
              </div>
              <div>
                <dt>Responsável</dt>
                <dd>{COMPANY.managingPartner}</dd>
              </div>
            </dl>
          </div>

          <div className="contact-form-col">
            <form
              className="briefing-form-card"
              onSubmit={(event) => {
                event.preventDefault();
                window.open(whatsappBriefingUrl, '_blank', 'noopener,noreferrer');
              }}
            >
              <div className="briefing-form-header">
                <span className="mono-label">BRIEFING PRELIMINAR DE OBRA</span>
                <h3>Monte sua mensagem para atendimento imediato</h3>
                <p>
                  Preencha os campos opcionais abaixo para adiantar o contexto do seu projeto ao engenheiro pelo WhatsApp.
                </p>
              </div>

              <div className="form-field">
                <label htmlFor="briefing-name">Seu nome</label>
                <input
                  id="briefing-name"
                  type="text"
                  placeholder="Ex.: Mariana e Rafael"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-field">
                <label htmlFor="briefing-location">Bairro, condomínio ou cidade pretendida</label>
                <input
                  id="briefing-location"
                  type="text"
                  placeholder="Ex.: Jardim Imperial, Alphaville, Sarandi, Marialva..."
                  value={neighborhoodOrCity}
                  onChange={(e) => setNeighborhoodOrCity(e.target.value)}
                />
              </div>

              <div className="form-field">
                <label htmlFor="briefing-terrain">Situação atual do lote</label>
                <select
                  id="briefing-terrain"
                  value={terrainStatus}
                  onChange={(e) => setTerrainStatus(e.target.value as TerrainStatusId)}
                >
                  <option value="sem-terreno">Ainda não tenho terreno (financiar lote + obra)</option>
                  <option value="terreno-quitado">Já tenho terreno quitado</option>
                  <option value="terreno-parcelado">Estou pagando o terreno parcelado</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="briefing-income">Faixa de renda familiar mensal</label>
                <select
                  id="briefing-income"
                  value={incomeRange}
                  onChange={(e) => setIncomeRange(e.target.value)}
                >
                  <option value="Até R$ 3.200 (Faixa 1)">Até R$ 3.200 (Faixa 1 / Teto R$ 275 mil)</option>
                  <option value="De R$ 3.200 a R$ 5.600 (Faixa 2)">
                    De R$ 3.200 a R$ 5.600 (Faixa 2 / Teto R$ 275 mil)
                  </option>
                  <option value="De R$ 5.600 a R$ 9.600 (Faixa 3)">
                    De R$ 5.600 a R$ 9.600 (Faixa 3 / Teto R$ 400 mil)
                  </option>
                  <option value="De R$ 9.600 a R$ 13.000 (Faixa 4)">
                    De R$ 9.600 a R$ 13.000 (Faixa 4 / Teto R$ 600 mil)
                  </option>
                  <option value="Acima de R$ 13.000 (Linha SBPE)">
                    Acima de R$ 13.000 (Linha SBPE / Acima de R$ 600 mil)
                  </option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="briefing-notes">Detalhes do que você planeja construir (opcional)</label>
                <textarea
                  id="briefing-notes"
                  rows={3}
                  placeholder="Ex.: Casa térrea com 3 quartos (1 suíte), área gourmet integrada e garagem para 2 carros."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="briefing-actions">
                <a
                  href={whatsappBriefingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-brass btn-block"
                >
                  Iniciar conversa no WhatsApp {COMPANY.whatsappDisplay}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
