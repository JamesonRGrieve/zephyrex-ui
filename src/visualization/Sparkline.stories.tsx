// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { Sparkline } from './Sparkline';

const meta: Meta<typeof Sparkline> = {
  title: 'Visualization/Sparkline',
  component: Sparkline,
  tags: ['autodocs'],
  argTypes: {
    width: { control: { type: 'range', min: 60, max: 480, step: 20 } },
    height: { control: { type: 'range', min: 16, max: 120, step: 4 } },
    strokeWidth: { control: { type: 'range', min: 1, max: 6, step: 1 } },
    label: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof Sparkline>;

export const Uptrend: Story = { args: { data: [3, 5, 4, 7, 6, 9, 12], label: 'Revenue' } };
export const Volatile: Story = { args: { data: [8, 2, 9, 1, 7, 3, 10], label: 'Volatility' } };
export const Wide: Story = { args: { data: [1, 4, 2, 8, 5, 9], width: 320, height: 60, strokeWidth: 3 } };
