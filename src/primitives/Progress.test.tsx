// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Progress } from './Progress';

describe('Progress', () => {
  it('exposes progressbar semantics', () => {
    render(<Progress value={40} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '40');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('translates the indicator to reflect the value', () => {
    render(<Progress value={100} />);
    const indicator = screen.getByRole('progressbar').querySelector<HTMLElement>('[data-slot="progress-indicator"]');
    expect(indicator?.style.transform).toBe('translateX(-0%)');
  });

  it('clamps out-of-range values', () => {
    render(<Progress value={150} />);
    const indicator = screen.getByRole('progressbar').querySelector<HTMLElement>('[data-slot="progress-indicator"]');
    expect(indicator?.style.transform).toBe('translateX(-0%)');
  });
});
