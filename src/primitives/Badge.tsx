// SPDX-License-Identifier: AGPL-3.0-or-later
import { type VariantProps, cva } from 'class-variance-authority';
import type { ComponentProps, JSX } from 'react';
import { cn } from '../lib/utils';

/** Small status/label pill. Semantic-token variants keep it on-theme in light and dark. */
export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        success: 'border-transparent bg-success text-success-foreground',
        warning: 'border-transparent bg-warning text-warning-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export type BadgeProps = ComponentProps<'span'> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps): JSX.Element {
  return <span data-slot='badge' className={cn(badgeVariants({ variant }), className)} {...props} />;
}
