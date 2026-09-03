// SPDX-License-Identifier: AGPL-3.0-or-later
import type { JSX, ReactNode } from 'react';
import { cn } from '../lib/utils';
import { FadeIn } from '../motion/FadeIn';

export interface HeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** Call-to-action controls, e.g. `<Button>`s. */
  actions?: ReactNode;
  /** Optional background layer, e.g. a `MeshGradientBackground`. */
  background?: ReactNode;
  className?: string;
}

/** Centered marketing hero with a fade-in entrance and an optional shader background. */
export function Hero({ title, subtitle, actions, background, className }: HeroProps): JSX.Element {
  return (
    <section className={cn('relative overflow-hidden px-6 py-24 text-center', className)}>
      {background}
      <FadeIn className='relative mx-auto max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-foreground sm:text-6xl'>{title}</h1>
        {subtitle !== undefined && <p className='mx-auto mt-6 max-w-2xl text-lg text-muted-foreground'>{subtitle}</p>}
        {actions !== undefined && <div className='mt-8 flex items-center justify-center gap-3'>{actions}</div>}
      </FadeIn>
    </section>
  );
}

export default Hero;
