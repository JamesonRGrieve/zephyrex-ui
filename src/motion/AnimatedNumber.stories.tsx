// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import AnimatedNumber from './AnimatedNumber';

const meta: Meta<typeof AnimatedNumber> = {
  title: 'Motion/AnimatedNumber',
  component: AnimatedNumber,
  tags: ['autodocs'],
  args: { value: 1200 },
};
export default meta;

type Story = StoryObj<typeof AnimatedNumber>;

export const Default: Story = {};

export const Currency: Story = {
  args: {
    value: 4999,
    format: (n: number) => `$${(Math.round(n) / 100).toFixed(2)}`,
  },
};

export const FastCountUp: Story = {
  args: { value: 100, durationMs: 400 },
};

export const FromNonZero: Story = {
  args: { from: 900, value: 1000 },
};
