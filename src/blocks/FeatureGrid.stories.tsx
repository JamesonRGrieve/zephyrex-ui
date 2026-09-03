// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { FeatureGrid } from './FeatureGrid';

const meta: Meta<typeof FeatureGrid> = {
  title: 'Blocks/FeatureGrid',
  component: FeatureGrid,
  tags: ['autodocs'],
  decorators: [(Story) => <div className='max-w-4xl p-6'>{Story()}</div>],
};
export default meta;

type Story = StoryObj<typeof FeatureGrid>;

const features = [
  { title: 'Reduced-motion first', description: 'Every animation respects prefers-reduced-motion.' },
  { title: 'Tokenized', description: 'One semantic theme drives light and dark.' },
  { title: 'Accessible', description: 'Roles, labels, and keyboard focus by default.' },
  { title: 'Tree-shakeable', description: 'Import only the categories you use.' },
  { title: 'Typed', description: '100% strict type-coverage.' },
  { title: 'AGPL', description: 'Free and copyleft, forever.' },
];

export const ThreeColumns: Story = { args: { features, columns: 3 } };
export const TwoColumns: Story = { args: { features, columns: 2 } };
