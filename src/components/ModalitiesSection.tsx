import React from 'react';
import { buildWhatsAppUrl } from '../lib/simulator';

interface ModalityItem {
  readonly code: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly mechanisms: readonly string[];
  readonly whatsappTopic: string;
}

const MODALITIES: readonly ModalityItem[] = [
  {
    code: 'MOD-01 // TERRENO + OBRA',
    title: 'Aquisição de terreno e construção em contrato único',
    subtitle: 'Para quem ainda não possui lote próprio',
    description:
      'Você escolhe o lote em Maringá ou região com assessoria técnica da nossa equipe e financia a compra do terreno junto com 100% do cronograma da obra em um único contrato na Caixa Econômica Federal.',
    mechanisms: [
      'Avaliação prévia da topografia do lote para evitar gastos imprevistos com muro de arrimo e aterro',
      'O vendedor do terreno recebe o valor à vista diretamente da Caixa após o registro em cartório',
      'Liberação de recursos da obra conforme medições mensais aferidas pelo engenheiro do banco',
    ],
    whatsappTopic:
      'Olá! Vim pelo site da Trinca Engenharia e quero entender como funciona o financiamento de Terreno + Construção no mesmo contrato.',
  },
  {
    code: 'MOD-02 // LOTE PRÓPRIO',
    title: 'Construção financiada em terreno próprio',
    subtitle: 'Para quem já possui lote quitado ou escriturado',
    description:
      'Seu próprio terreno compõe a garantia da operação, reduzindo a necessidade de desembolso inicial em dinheiro e direcionando o crédito aprovado pela Caixa integralmente para erguer a residência.',
    mechanisms: [
      'Aproveitamento do valor de avaliação do seu lote como entrada patrimonial na operação',
      'Planta arquitetônica desenhada sob medida para a orientação solar e recuos do seu terreno',
      'Cronograma físico-financeiro fechado antes do início das fundações',
    ],
    whatsappTopic:
      'Olá! Já possuo terreno quitado e gostaria de simular o financiamento da construção com a Trinca Engenharia.',
  },
  {
    code: 'MOD-03 // LOTE PARCELADO',
    title: 'Quitação de saldo de lote e início da construção',
    subtitle: 'Para quem ainda está pagando o terreno com a loteadora',
    description:
      'Mesmo que você ainda esteja pagando parcelas do lote, estruturamos o financiamento para quitar o saldo devedor junto à loteadora e liberar o valor necessário para a construção da casa.',
    mechanisms: [
      'Cálculo de viabilidade considerando o saldo de quitação do lote mais o orçamento da obra',
      'Unificação das despesas em uma única operação habitacional com juros menores que o parcelamento direto',
      'Regularização documental de escritura e matrícula acompanhada pela nossa equipe',
    ],
    whatsappTopic:
      'Olá! Ainda estou pagando meu lote parcelado e gostaria de saber como financiar a quitação + construção com a Trinca Engenharia.',
  },
  {
    code: 'MOD-04 // CORPORATIVO',
    title: 'Obras comerciais, showrooms e reformas corporativas',
    subtitle: 'Para empresas, concessionárias e investidores',
    description:
      'Executamos obras comerciais e adequações corporativas sob regime de empreitada global, com rigor de prazo contratual, instalações industriais e conformidade com manuais de franquias e montadoras.',
    mechanisms: [
      'Experiência comprovada em padrões corporativos exigentes (como Obras Mercedes e Obras GWM)',
      'Planejamento executivo de suprimentos para obras de ciclo rápido sem atraso de inauguração',
      'Emissão de ART, laudos de comissionamento elétrico e entrega técnica documentada',
    ],
    whatsappTopic:
      'Olá! Vim pelo site da Trinca Engenharia e gostaria de solicitar um orçamento para obra comercial/corporativa.',
  },
];

export const ModalitiesSection: React.FC = () => {
  return (
    <section id="modalidades" className="section-dark modalities-section" aria-labelledby="modalidades-heading">
      <div className="container">
        <div className="section-header section-header-dark">
          <span className="section-code section-code-brass">PRANCHA 02 // MODALIDADES E VIABILIDADE</span>
          <h2 id="modalidades-heading" className="section-title">
            Construir sua casa sem improviso de orçamento e sem burocracia bancária
          </h2>
          <p className="section-lead">
            Muitas famílias adiam a construção por receio de obras intermináveis, pedreiros sem gestão ou reprovação de documentos na Caixa. Na Trinca Engenharia, você contrata uma única equipe responsável pelo projeto, pela aprovação bancária e pela chave na mão.
          </p>
        </div>

        <div className="modalities-grid">
          {MODALITIES.map((item) => (
            <article key={item.code} className="modality-card">
              <div className="modality-card-top">
                <span className="mono-label">{item.code}</span>
                <span className="modality-subtitle">{item.subtitle}</span>
              </div>
              <h3 className="modality-title">{item.title}</h3>
              <p className="modality-description">{item.description}</p>
              <ul className="modality-list">
                {item.mechanisms.map((mech) => (
                  <li key={mech}>{mech}</li>
                ))}
              </ul>
              <div className="modality-footer">
                <a
                  href={buildWhatsAppUrl(item.whatsappTopic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modality-link"
                >
                  Consultar viabilidade desta modalidade
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Matriz comparativa objetiva */}
        <div className="comparison-panel">
          <div className="comparison-panel-header">
            <h3>Comparativo técnico e financeiro de aquisição em Maringá</h3>
            <p>
              Por que a construção financiada sob gestão da Trinca Engenharia preserva de 20% a 30% do seu capital em relação a comprar um imóvel pronto ou tocar obra por conta própria.
            </p>
          </div>

          <div className="comparison-table-wrap" role="region" aria-label="Tabela comparativa de modalidades" tabIndex={0}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Critério de decisão</th>
                  <th scope="col" className="col-highlight">
                    Construir com a Trinca Engenharia
                  </th>
                  <th scope="col">Comprar imóvel pronto</th>
                  <th scope="col">Obra autônoma sem construtora</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Custo por metro quadrado</th>
                  <td className="col-highlight">
                    <strong>Custo real de engenharia (20% a 30% menor)</strong>, sem margem especulativa de incorporador.
                  </td>
                  <td>Inclui lucro imobiliário de 25% a 35% sobre o valor gasto na obra.</td>
                  <td>Desperdício médio de 15% a 25% em retrabalho e compras picadas sem cotação técnica.</td>
                </tr>
                <tr>
                  <th scope="row">Imposto de transmissão (ITBI)</th>
                  <td className="col-highlight">
                    <strong>Incide apenas sobre o valor do terreno</strong> na aquisição.
                  </td>
                  <td>Incide sobre o valor total do terreno somado à casa pronta.</td>
                  <td>Incide sobre o terreno, mas exige gestão própria de CNO e ISS de mão de obra.</td>
                </tr>
                <tr>
                  <th scope="row">Planta e acabamentos</th>
                  <td className="col-highlight">
                    <strong>100% personalizados</strong> para sua rotina, número de suítes e escolha de revestimentos.
                  </td>
                  <td>Planta padronizada e acabamentos genéricos escolhidos para venda rápida.</td>
                  <td>Risco de incompatibilidade entre arquitetura, estrutura e orçamento disponível.</td>
                </tr>
                <tr>
                  <th scope="row">Burocracia Caixa e Prefeitura</th>
                  <td className="col-highlight">
                    <strong>Conduzida integralmente pela Trinca</strong> (PCI, alvará, ART, medições PLS e Habite-se).
                  </td>
                  <td>Apenas transferência de imóvel pronto.</td>
                  <td>Proprietário precisa preencher planilhas técnicas da Caixa e gerenciar vistorias sozinho.</td>
                </tr>
                <tr>
                  <th scope="row">Responsabilidade e garantia</th>
                  <td className="col-highlight">
                    <strong>Contrato único com CNPJ, ART de execução</strong> e garantia legal de 5 anos (NBR 15575).
                  </td>
                  <td>Vícios construtivos ocultos sob a pintura já finalizada.</td>
                  <td>Ausência de garantia unificada entre diferentes prestadores informais.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
