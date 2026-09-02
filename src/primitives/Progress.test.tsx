// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Progress from './Progress';

describe('Progress', () => {
  it('exposes progressbar semantics', () => {
    render(<Progress value={40} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '40');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('clamps the fill within bounds', () => {
    render(<Progress value={150} />);
    const fill = screen.getByRole('progressbar').querySelector('div');
    expect(fill?.style.width).toBe('100%');
  });
});
