import { describe, expect, it } from 'vitest';
import { buildStructuredData } from './structuredData';

describe('buildStructuredData', () => {
  it('builds a valid Schema.org graph with GeneralContractor and FAQPage', () => {
    const data = buildStructuredData();
    expect(data['@context']).toBe('https://schema.org');
    const graph = data['@graph'] as Array<Record<string, unknown>>;
    expect(graph).toHaveLength(2);
    expect(graph[0]?.['@type']).toBe('GeneralContractor');
    expect(graph[0]?.['taxID']).toBe('65.754.742/0001-58');
    expect(graph[1]?.['@type']).toBe('FAQPage');
  });
});
