// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import BarList from './BarList';

const data = [
  { label: 'Alpha', value: 80 },
  { label: 'Beta', value: 40 },
];

describe('BarList', () => {
  it('renders each item label and value', () => {
    render(<BarList data={data} />);
    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getByText('80')).toBeInTheDocument();
    expect(screen.getByText('Beta')).toBeInTheDocument();
  });

  it('applies a custom value formatter', () => {
    render(<BarList data={data} valueFormatter={(v) => `$${v}`} />);
    expect(screen.getByText('$80')).toBeInTheDocument();
  });
});
