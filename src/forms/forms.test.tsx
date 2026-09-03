// SPDX-License-Identifier: AGPL-3.0-or-later
import { DynamicForm, TextField } from '@jgrieve/forms';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('forms category (imported from @jgrieve/forms)', () => {
  it('renders a DynamicForm from a field schema', () => {
    render(<DynamicForm fields={{ name: { type: 'text' }, subscribe: { type: 'boolean' } }} onConfirm={vi.fn()} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('renders a standalone TextField with its label', () => {
    render(<TextField id='email' name='email' label='Email' />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });
});
