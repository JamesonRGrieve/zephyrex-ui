// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  it('exposes the alert role', () => {
    render(<Alert>Heads up</Alert>);
    expect(screen.getByRole('alert')).toHaveTextContent('Heads up');
  });

  it('applies a chosen variant', () => {
    render(<Alert variant='destructive'>Broken</Alert>);
    expect(screen.getByRole('alert').className).toContain('text-destructive');
  });
});
