// SPDX-License-Identifier: AGPL-3.0-or-later
import { GrainGradient } from '@paper-design/shaders-react';
import type { ComponentProps, JSX } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/utils';

const DEFAULT_SPEED = 1;

export type GrainGradientBackgroundProps = ComponentProps<typeof GrainGradient>;

/** Grainy animated gradient background (Paper Shaders, Apache-2.0); frozen under reduced motion. */
export function GrainGradientBackground({ className, speed, ...props }: GrainGradientBackgroundProps): JSX.Element {
  const prefersReduced = usePrefersReducedMotion();
  const effectiveSpeed = prefersReduced ? 0 : (speed ?? DEFAULT_SPEED);
  return (
    <GrainGradient className={cn('absolute inset-0 -z-10 h-full w-full', className)} speed={effectiveSpeed} {...props} />
  );
}
