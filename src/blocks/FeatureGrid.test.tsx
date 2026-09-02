// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FeatureGrid from './FeatureGrid';

const features = [
  { title: 'Fast', description: 'Blazing performance.' },
  { title: 'Accessible', description: 'Keyboard and screen-reader ready.' },
];

describe('FeatureGrid', () => {
  it('renders every feature title and description', () => {
    render(<FeatureGrid features={features} />);
    expect(screen.getByText('Fast')).toBeInTheDocument();
    expect(screen.getByText('Blazing performance.')).toBeInTheDocument();
    expect(screen.getByText('Accessible')).toBeInTheDocument();
  });
});
