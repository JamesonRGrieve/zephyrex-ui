// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Sparkline } from './Sparkline';

describe('Sparkline', () => {
  it('plots a polyline from the data series', () => {
    const { container } = render(<Sparkline data={[1, 3, 2, 5, 4]} />);
    const points = container.querySelector('polyline')?.getAttribute('points') ?? '';
    expect(points.split(' ')).toHaveLength(5);
  });

  it('exposes an accessible label', () => {
    render(<Sparkline data={[1, 2]} label='Revenue' />);
    expect(screen.getByRole('img', { name: 'Revenue' })).toBeInTheDocument();
  });

  it('handles an empty series without error', () => {
    const { container } = render(<Sparkline data={[]} />);
    expect(container.querySelector('polyline')?.getAttribute('points')).toBe('');
  });
});
