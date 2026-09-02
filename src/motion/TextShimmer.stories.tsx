// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import TextShimmer from './TextShimmer';

const meta: Meta<typeof TextShimmer> = {
  title: 'Motion/TextShimmer',
  component: TextShimmer,
  tags: ['autodocs'],
  args: { children: 'Loading the future…' },
};
export default meta;

type Story = StoryObj<typeof TextShimmer>;

export const Default: Story = {};
export const Fast: Story = { args: { durationMs: 900 } };
export const Heading: Story = {
  args: { children: 'Zephyrex UI', className: 'text-4xl font-bold' },
};
