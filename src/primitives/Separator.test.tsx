// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Separator from './Separator';

describe('Separator', () => {
  it('exposes the separator role by default', () => {
    render(<Separator />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('marks a vertical separator via aria-orientation', () => {
    render(<Separator orientation='vertical' />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });
});
