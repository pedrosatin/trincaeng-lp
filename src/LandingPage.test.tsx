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

  it('contains no em-dashes or en-dashes in rendered text (unslop-br compliance)', () => {
    const { container } = render(<LandingPage />);
    const visibleText = container.textContent ?? '';
    expect(visibleText).not.toContain('—');
    expect(visibleText).not.toContain('–');
  });
});
