// SPDX-License-Identifier: AGPL-3.0-or-later
import { type VariantProps, cva } from 'class-variance-authority';
import type { HTMLAttributes, JSX } from 'react';
import { cn } from '../lib/utils';

export const alertVariants = cva('relative w-full rounded-lg border p-4 text-sm', {
  variants: {
    variant: {
      default: 'border-border bg-background text-foreground',
      destructive: 'border-destructive/50 text-destructive',
      success: 'border-success/50 text-success',
      warning: 'border-warning/50 text-warning',
      info: 'border-info/50 text-info',
    },
  },
  defaultVariants: { variant: 'default' },
});

export type AlertProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

export function Alert({ className, variant, ...props }: AlertProps): JSX.Element {
  return <div role='alert' className={cn(alertVariants({ variant }), className)} {...props} />;
}

export default Alert;
