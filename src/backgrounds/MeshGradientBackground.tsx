// SPDX-License-Identifier: AGPL-3.0-or-later
import { MeshGradient } from '@paper-design/shaders-react';
import type { ComponentProps, JSX } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/utils';

const DEFAULT_SPEED = 1;

export type MeshGradientBackgroundProps = ComponentProps<typeof MeshGradient>;

/**
 * Animated mesh-gradient background (Paper Shaders, Apache-2.0). Positioned as a
 * full-cover layer; the animation freezes (speed 0) under `prefers-reduced-motion`.
 */
export function MeshGradientBackground({ className, speed, ...props }: MeshGradientBackgroundProps): JSX.Element {
  const prefersReduced = usePrefersReducedMotion();
  const effectiveSpeed = prefersReduced ? 0 : (speed ?? DEFAULT_SPEED);
  return (
    <MeshGradient className={cn('absolute inset-0 -z-10 h-full w-full', className)} speed={effectiveSpeed} {...props} />
  );
}

export default MeshGradientBackground;
