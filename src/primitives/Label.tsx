// SPDX-License-Identifier: AGPL-3.0-or-later
import * as LabelPrimitive from '@radix-ui/react-label';
import type { ComponentProps, JSX } from 'react';
import { cn } from '../lib/utils';

export type LabelProps = ComponentProps<typeof LabelPrimitive.Root>;

export function Label({ className, ...props }: LabelProps): JSX.Element {
  return (
    <LabelPrimitive.Root
      data-slot='label'
      className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
      {...props}
    />
  );
}
