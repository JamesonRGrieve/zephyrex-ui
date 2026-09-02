// SPDX-License-Identifier: AGPL-3.0-or-later
import { type LabelHTMLAttributes, forwardRef } from 'react';
import { cn } from '../lib/utils';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label({ className, ...props }, ref) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control -- reusable primitive; association is the consumer's job via htmlFor
    <label
      ref={ref}
      className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
      {...props}
    />
  );
});

export default Label;
