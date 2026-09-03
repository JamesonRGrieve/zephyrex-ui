// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { KpiCard } from './KpiCard';

const meta: Meta<typeof KpiCard> = {
  title: 'Visualization/KpiCard',
  component: KpiCard,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    delta: { control: 'number' },
    label: { control: 'text' },
  },
  decorators: [(Story) => <div className='w-72'>{Story()}</div>],
};
export default meta;

type Story = StoryObj<typeof KpiCard>;

export const Revenue: Story = {
  args: {
    label: 'Monthly revenue',
    value: 48200,
    delta: 12,
    trend: [30, 34, 32, 40, 44, 48],
    format: (n: number) => `$${Math.round(n).toLocaleString()}`,
  },
};

export const Churned: Story = {
  args: { label: 'Churn', value: 34, delta: -4, trend: [50, 46, 42, 40, 36, 34] },
};

export const Bare: Story = { args: { label: 'Active users', value: 1280 } };
