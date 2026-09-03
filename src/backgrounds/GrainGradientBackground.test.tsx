// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { stubReducedMotion } from '../../tests/reducedMotion';
import { GrainGradientBackground } from './GrainGradientBackground';

vi.mock('@paper-design/shaders-react', () => ({
  GrainGradient: ({ speed, className }: { speed?: number; className?: string }) => (
    <canvas data-testid='grain' data-speed={String(speed)} className={className} />
  ),
}));

describe('GrainGradientBackground', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('passes the shader speed through when motion is allowed', () => {
    stubReducedMotion(false);
    render(<GrainGradientBackground speed={3} />);
    expect(screen.getByTestId('grain')).toHaveAttribute('data-speed', '3');
  });

  it('freezes the animation under reduced motion', () => {
    stubReducedMotion(true);
    render(<GrainGradientBackground speed={3} />);
    expect(screen.getByTestId('grain')).toHaveAttribute('data-speed', '0');
  });
});
