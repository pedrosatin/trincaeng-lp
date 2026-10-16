export interface CompanyInfo {
  readonly brandName: string;
  readonly tradeName: string;
  readonly legalName: string;
  readonly secondaryLegalName: string;
  readonly cnpj: string;
  readonly secondaryCnpj: string;
  readonly managingPartner: string;
  readonly headlineSlogan: string;
  readonly institutionalTagline: string;
  readonly whatsappNumber: string;
  readonly whatsappDisplay: string;
  readonly landlineDisplay: string;
  readonly landlineHref: string;
  readonly instagramHandle: string;
  readonly instagramUrl: string;
  readonly mapsUrl: string;
  readonly address: {
    readonly street: string;
    readonly complement: string;
    readonly neighborhood: string;
    readonly city: string;
    readonly state: string;
    readonly zipCode: string;
  };
}

export const COMPANY: CompanyInfo = {
  brandName: 'Trinca Engenharia',
  tradeName: 'Trinca Construtora',
  legalName: 'Trinca Construtora Ltda',
  secondaryLegalName: 'Trinca Serviços Ltda',
  cnpj: '65.754.742/0001-58',
  secondaryCnpj: '65.778.057/0001-61',
  managingPartner: 'Danilo Dailton Doreto Santiago',
  headlineSlogan: 'Da aprovação do financiamento à entrega das chaves.',
  institutionalTagline: 'Construindo sonhos. Realizando conquistas.',
  whatsappNumber: '5544998793999',
  whatsappDisplay: '(44) 99879-3999',
  landlineDisplay: '(44) 3025-4006',
  landlineHref: 'tel:+554430254006',
  instagramHandle: '@trincaengenharia',
  instagramUrl: 'https://www.instagram.com/trincaengenharia/',
  mapsUrl: 'https://maps.app.goo.gl/QXXu1iFZR6cJ6Dk7A',
  address: {
    street: 'Av. XV de Novembro, 462',
    complement: 'Edifício Metrópole, Pavimento 02, Sala 03 (Loja 21)',
    neighborhood: 'Zona 01',
    city: 'Maringá',
    state: 'PR',
    zipCode: '87013-230',
  },
};
