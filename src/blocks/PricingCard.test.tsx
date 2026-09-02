// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PricingCard from './PricingCard';

describe('PricingCard', () => {
  it('renders the tier name, price, and features', () => {
    render(<PricingCard name='Pro' price='$29' features={['Unlimited projects', 'Priority support']} />);
    expect(screen.getByText('Pro')).toBeInTheDocument();
    expect(screen.getByText('$29')).toBeInTheDocument();
    expect(screen.getByText('Unlimited projects')).toBeInTheDocument();
  });

  it('shows a Popular badge when highlighted', () => {
    render(<PricingCard name='Pro' price='$29' features={[]} highlighted />);
    expect(screen.getByText('Popular')).toBeInTheDocument();
  });
});
