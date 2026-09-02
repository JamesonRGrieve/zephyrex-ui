// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { stubReducedMotion } from '../../tests/reducedMotion';
import TextShimmer from './TextShimmer';

describe('TextShimmer', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the text while animating', () => {
    stubReducedMotion(false);
    render(<TextShimmer>Shine</TextShimmer>);
    expect(screen.getByText('Shine')).toBeInTheDocument();
  });

  it('renders solid text under reduced motion', () => {
    stubReducedMotion(true);
    render(<TextShimmer>Solid</TextShimmer>);
    expect(screen.getByText('Solid')).toBeInTheDocument();
  });
});
