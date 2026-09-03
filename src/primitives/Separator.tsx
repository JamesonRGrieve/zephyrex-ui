// SPDX-License-Identifier: AGPL-3.0-or-later
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react';
import { cn } from '../lib/utils';

export type SeparatorProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;

const Separator = forwardRef<ComponentRef<typeof SeparatorPrimitive.Root>, SeparatorProps>(
  ({ className, orientation = 'horizontal', decorative = false, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn('shrink-0 bg-border', orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px', className)}
      {...props}
    />
  ),
);
Separator.displayName = 'Separator';

export default Separator;
