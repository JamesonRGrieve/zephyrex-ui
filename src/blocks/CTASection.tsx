// SPDX-License-Identifier: AGPL-3.0-or-later
import type { JSX, ReactNode } from 'react';
import { cn } from '../lib/utils';
import { ScaleIn } from '../motion/ScaleIn';

export interface CTASectionProps {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}

/** Call-to-action band on the primary surface with a scale-in entrance. */
export function CTASection({ title, description, action, className }: CTASectionProps): JSX.Element {
  return (
    <ScaleIn className={cn('rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground', className)}>
      <h2 className='text-3xl font-bold tracking-tight'>{title}</h2>
      {description !== undefined && <p className='mx-auto mt-4 max-w-xl opacity-90'>{description}</p>}
      {action !== undefined && <div className='mt-8 flex justify-center'>{action}</div>}
    </ScaleIn>
  );
}

export default CTASection;
