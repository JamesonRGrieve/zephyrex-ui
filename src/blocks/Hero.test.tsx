// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the title, subtitle, and actions', () => {
    render(
      <Hero title='Ship faster' subtitle='One cohesive UI kit.' actions={<button type='button'>Get started</button>} />,
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Ship faster' })).toBeInTheDocument();
    expect(screen.getByText('One cohesive UI kit.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Get started' })).toBeInTheDocument();
  });

  it('renders a provided background layer', () => {
    render(<Hero title='Hi' background={<div data-testid='bg' />} />);
    expect(screen.getByTestId('bg')).toBeInTheDocument();
  });
});
