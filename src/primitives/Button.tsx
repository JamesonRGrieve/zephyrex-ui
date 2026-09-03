// SPDX-License-Identifier: AGPL-3.0-or-later
import { type VariantProps, cva } from 'class-variance-authority';
import type { ComponentProps, JSX } from 'react';
import { cn } from '../lib/utils';

/**
 * Tokenized button (shadcn convention). Every color is a semantic token, the focus
 * ring is keyboard-visible, and the press-scale is gated behind `motion-safe` so it
 * respects `prefers-reduced-motion`. `ref` flows through props (React 19).
 */
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-safe:active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = 'button', ...props }: ButtonProps): JSX.Element {
  return <button data-slot='button' type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
