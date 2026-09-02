// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Input from './Input';

describe('Input', () => {
  it('renders a text input by default', () => {
    render(<Input aria-label='name' />);
    expect(screen.getByLabelText('name')).toHaveAttribute('type', 'text');
  });

  it('accepts typed input', async () => {
    render(<Input aria-label='name' />);
    await userEvent.type(screen.getByLabelText('name'), 'hi');
    expect(screen.getByLabelText('name')).toHaveValue('hi');
  });
});
