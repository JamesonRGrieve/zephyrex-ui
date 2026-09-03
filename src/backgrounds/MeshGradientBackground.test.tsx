// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { stubReducedMotion } from '../../tests/reducedMotion';
import { MeshGradientBackground } from './MeshGradientBackground';

// Paper Shaders requires a real WebGL context (unavailable in happy-dom), so the
// shader boundary is mocked; the wrapper's reduced-motion speed-gating is the
// behavior under test. Real GPU rendering is validated in Storybook (Playwright).
vi.mock('@paper-design/shaders-react', () => ({
  MeshGradient: ({ speed, className }: { speed?: number; className?: string }) => (
    <canvas data-testid='mesh' data-speed={String(speed)} className={className} />
  ),
}));

describe('MeshGradientBackground', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('passes the shader speed through when motion is allowed', () => {
    stubReducedMotion(false);
    render(<MeshGradientBackground speed={2} />);
    expect(screen.getByTestId('mesh')).toHaveAttribute('data-speed', '2');
  });

  it('freezes the animation (speed 0) under reduced motion', () => {
    stubReducedMotion(true);
    render(<MeshGradientBackground speed={2} />);
    expect(screen.getByTestId('mesh')).toHaveAttribute('data-speed', '0');
  });
});
