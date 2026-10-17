import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LandingPage } from './LandingPage';

describe('LandingPage', () => {
  it('renders company credentials, address in Maringá and main sections', () => {
    render(<LandingPage />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Construa sua casa sob medida com financiamento Caixa/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getAllByText(/65\.754\.742\/0001-58/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Av\. XV de Novembro, 462/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/\(44\) 99879-3999/).length).toBeGreaterThan(0);
  });

  it('updates the Caixa financing bracket when the user selects another income preset', () => {
    render(<LandingPage />);

    // Default state is R$ 7.800 -> Faixa 3
    expect(screen.getByText('Minha Casa Minha Vida (Faixa 3)')).toBeInTheDocument();

    const faixa4Button = screen.getByRole('button', { name: 'R$ 9.600 a R$ 13.000' });
    fireEvent.click(faixa4Button);

    expect(screen.getByText('Minha Casa Minha Vida (Faixa 4)')).toBeInTheDocument();
  });

  it('filters portfolio works by category and switches the memorial descritivo', () => {
    render(<LandingPage />);

    const comercialFilter = screen.getByRole('button', { name: 'Comerciais e corporativas' });
    fireEvent.click(comercialFilter);

    expect(screen.getByRole('heading', { name: 'Obras Mercedes' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Obras GWM' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Obra Genebra' })).not.toBeInTheDocument();
  });

  it('switches the engineering notebook tab when another constructive standard is selected', () => {
    render(<LandingPage />);

    const gasTab = screen.getByRole('tab', {
      name: /Tubulação de gás embutida com teste de estanqueidade/i,
    });
    fireEvent.click(gasTab);

    expect(
      screen.getByText(/NBR 15526 \(Redes de distribuição interna para gases combustíveis\)/i),
    ).toBeInTheDocument();
  });

  it('toggles the mobile navigation drawer and closes it on Escape', () => {
    render(<LandingPage />);

    const toggleButton = screen.getByRole('button', { name: /Abrir menu de navegação/i });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggleButton);
    expect(screen.getByRole('navigation', { name: /Menu de navegação móvel/i })).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('navigation', { name: /Menu de navegação móvel/i })).not.toBeInTheDocument();
  });

  it('renders blueprint callouts as accessible HTML instead of unwrappable SVG text nodes', () => {
    const { container } = render(<LandingPage />);
    expect(container.querySelectorAll('svg text').length).toBe(0);
    expect(
      screen.getByText(/Platibanda impermeabilizada com junta elástica em tela/i),
    ).toBeInTheDocument();
  });

  it('contains no em-dashes or en-dashes in rendered text (unslop-br compliance)', () => {
    const { container } = render(<LandingPage />);
    const visibleText = container.textContent ?? '';
    expect(visibleText).not.toContain('—');
    expect(visibleText).not.toContain('–');
  });

  it('mantém só DT e DD como filhos diretos de cada grupo do dl das métricas do hero', () => {
    const { container } = render(<LandingPage />);
    const grupos = container.querySelectorAll('.hero-metrics > div');

    expect(grupos.length).toBeGreaterThan(0);
    grupos.forEach((grupo) => {
      const tags = Array.from(grupo.children).map((filho) => filho.tagName);
      tags.forEach((tag) => expect(['DT', 'DD']).toContain(tag));
      expect(tags).toContain('DT');
      expect(tags).toContain('DD');
    });
  });

  it('mantém o texto visível da marca contido no nome acessível do link', () => {
    const { container } = render(<LandingPage />);
    const marca = container.querySelector('.site-header-brand');

    expect(marca).not.toBeNull();
    const visivel = (marca?.textContent ?? '').replace(/\s+/g, ' ').trim().toLowerCase();
    const nomeAcessivel = (marca?.getAttribute('aria-label') ?? '').toLowerCase();

    expect(visivel).toBe('trinca engenharia');
    expect(nomeAcessivel).toContain(visivel);
  });
});
