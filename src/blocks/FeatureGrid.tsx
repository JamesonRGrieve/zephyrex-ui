// SPDX-License-Identifier: AGPL-3.0-or-later
import type { JSX, ReactNode } from 'react';
import { cn } from '../lib/utils';
import { Stagger } from '../motion/Stagger';
import { Card, CardDescription, CardTitle } from '../primitives/Card';

export interface Feature {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnClass = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
} as const;

/** Responsive grid of feature cards with a staggered reveal. */
export function FeatureGrid({ features, columns = 3, className }: FeatureGridProps): JSX.Element {
  return (
    <Stagger className={cn('grid grid-cols-1 gap-6', columnClass[columns], className)}>
      {features.map((feature) => (
        <Card key={feature.title} className='p-6'>
          {feature.icon !== undefined && <div className='mb-3 text-primary'>{feature.icon}</div>}
          <CardTitle className='text-base'>{feature.title}</CardTitle>
          <CardDescription className='mt-2'>{feature.description}</CardDescription>
        </Card>
      ))}
    </Stagger>
  );
}

export default FeatureGrid;
