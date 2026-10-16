import { COMPANY } from '../data/company';
import { FAQ_ITEMS } from '../data/faq';

export function buildStructuredData(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'GeneralContractor',
        '@id': 'https://trincaconstrutora.com.br/#organization',
        name: COMPANY.brandName,
        alternateName: COMPANY.tradeName,
        legalName: COMPANY.legalName,
        taxID: COMPANY.cnpj,
        description:
          'Construtora e escritório de engenharia civil em Maringá - PR especializado em construções financiadas pela Caixa Econômica Federal, da escolha do terreno e aprovação de projetos até a entrega das chaves.',
        url: 'https://trincaconstrutora.com.br/',
        telephone: '+55-44-99879-3999',
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${COMPANY.address.street}, ${COMPANY.address.complement}`,
          addressLocality: COMPANY.address.city,
          addressRegion: COMPANY.address.state,
          postalCode: COMPANY.address.zipCode,
          addressCountry: 'BR',
        },
        areaServed: [
          { '@type': 'City', name: 'Maringá' },
          { '@type': 'City', name: 'Sarandi' },
          { '@type': 'City', name: 'Paiçandu' },
          { '@type': 'City', name: 'Marialva' },
        ],
        sameAs: [COMPANY.instagramUrl],
        founder: {
          '@type': 'Person',
          name: COMPANY.managingPartner,
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://trincaconstrutora.com.br/#faq',
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
}
