// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { stubReducedMotion } from '../../tests/reducedMotion';
import { KpiCard } from './KpiCard';

describe('KpiCard', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the label and final metric value', () => {
    stubReducedMotion(true);
    render(<KpiCard label='Revenue' value={1200} />);
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('1200')).toBeInTheDocument();
  });

  it('shows a positive delta as a success badge', () => {
    stubReducedMotion(true);
    render(<KpiCard label='Users' value={500} delta={12} />);
    expect(screen.getByText('+12%')).toBeInTheDocument();
  });

  it('renders a sparkline when a trend is provided', () => {
    stubReducedMotion(true);
    render(<KpiCard label='Sales' value={9} trend={[1, 2, 3]} />);
    expect(screen.getByRole('img', { name: 'Sales trend' })).toBeInTheDocument();
  });
});
