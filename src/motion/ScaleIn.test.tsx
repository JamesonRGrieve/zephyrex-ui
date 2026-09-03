// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { stubReducedMotion } from '../../tests/reducedMotion';
import { ScaleIn } from './ScaleIn';

describe('ScaleIn', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders children when motion is allowed', () => {
    stubReducedMotion(false);
    render(
      <ScaleIn>
        <p>scaling</p>
      </ScaleIn>,
    );
    expect(screen.getByText('scaling')).toBeInTheDocument();
  });

  it('renders children statically under reduced motion', () => {
    stubReducedMotion(true);
    render(
      <ScaleIn>
        <p>static</p>
      </ScaleIn>,
    );
    expect(screen.getByText('static')).toBeInTheDocument();
  });
});
