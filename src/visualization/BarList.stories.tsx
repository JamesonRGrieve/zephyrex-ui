// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { BarList } from './BarList';

const meta: Meta<typeof BarList> = {
  title: 'Visualization/BarList',
  component: BarList,
  tags: ['autodocs'],
  decorators: [(Story) => <div className='w-80'>{Story()}</div>],
};
export default meta;

type Story = StoryObj<typeof BarList>;

export const Traffic: Story = {
  args: {
    data: [
      { label: '/home', value: 1240 },
      { label: '/pricing', value: 860 },
      { label: '/docs', value: 540 },
      { label: '/blog', value: 210 },
    ],
  },
};

export const Currency: Story = {
  args: {
    data: [
      { label: 'Pro', value: 9800 },
      { label: 'Team', value: 4200 },
    ],
    valueFormatter: (v) => `$${v.toLocaleString()}`,
  },
};
