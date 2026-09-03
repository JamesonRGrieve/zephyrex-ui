// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('announces itself via role=status with a default label', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading');
  });

  it('accepts a custom label', () => {
    render(<Spinner label='Fetching' />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Fetching');
  });
});
