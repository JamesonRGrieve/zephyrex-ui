// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Label from './Label';

describe('Label', () => {
  it('associates with a control via htmlFor', () => {
    render(<Label htmlFor='email'>Email</Label>);
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email');
  });
});
