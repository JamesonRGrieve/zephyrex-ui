// SPDX-License-Identifier: AGPL-3.0-or-later
import * as LabelPrimitive from '@radix-ui/react-label';
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react';
import { cn } from '../lib/utils';

export type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const Label = forwardRef<ComponentRef<typeof LabelPrimitive.Root>, LabelProps>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
    {...props}
  />
));
Label.displayName = 'Label';

export default Label;
