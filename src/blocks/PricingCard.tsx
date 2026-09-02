// SPDX-License-Identifier: AGPL-3.0-or-later
import type { JSX, ReactNode } from 'react';
import { cn } from '../lib/utils';
import Badge from '../primitives/Badge';
import Card, { CardDescription, CardTitle } from '../primitives/Card';

export interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  action?: ReactNode;
  highlighted?: boolean;
  className?: string;
}

/** Pricing tier card composed from cohesive primitives (Card, Badge). */
export function PricingCard({
  name,
  price,
  period = '/mo',
  description,
  features,
  action,
  highlighted = false,
  className,
}: PricingCardProps): JSX.Element {
  return (
    <Card className={cn('flex flex-col p-6', highlighted && 'ring-2 ring-primary', className)}>
      <div className='flex items-center justify-between'>
        <CardTitle className='text-base'>{name}</CardTitle>
        {highlighted && <Badge>Popular</Badge>}
      </div>
      {description !== undefined && <CardDescription className='mt-1'>{description}</CardDescription>}
      <div className='mt-4 flex items-baseline gap-1'>
        <span className='text-4xl font-bold text-foreground'>{price}</span>
        <span className='text-sm text-muted-foreground'>{period}</span>
      </div>
      <ul className='mt-6 flex flex-1 flex-col gap-2 text-sm text-muted-foreground'>
        {features.map((feature) => (
          <li key={feature} className='flex items-center gap-2'>
            <span aria-hidden className='text-success'>
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      {action !== undefined && <div className='mt-6'>{action}</div>}
    </Card>
  );
}

export default PricingCard;
