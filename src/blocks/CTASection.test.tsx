// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CTASection } from './CTASection';

describe('CTASection', () => {
  it('renders the title, description, and action', () => {
    render(
      <CTASection
        title='Start today'
        description='No credit card required.'
        action={<button type='button'>Sign up</button>}
      />,
    );
    expect(screen.getByRole('heading', { level: 2, name: 'Start today' })).toBeInTheDocument();
    expect(screen.getByText('No credit card required.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument();
  });
});
