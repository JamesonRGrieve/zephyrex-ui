// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import FadeIn from './FadeIn';

const meta: Meta<typeof FadeIn> = {
  title: 'Motion/FadeIn',
  component: FadeIn,
  tags: ['autodocs'],
  args: {
    children: <p className='text-lg'>I fade and rise into place.</p>,
  },
};
export default meta;

type Story = StoryObj<typeof FadeIn>;

export const Default: Story = {};

export const Delayed: Story = {
  args: { delayMs: 400 },
};

export const Slow: Story = {
  args: { durationMs: 1500, yOffsetPx: 40 },
};
