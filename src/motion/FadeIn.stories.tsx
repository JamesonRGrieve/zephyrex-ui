// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { FadeIn } from './FadeIn';

const meta: Meta<typeof FadeIn> = {
  title: 'Motion/FadeIn',
  component: FadeIn,
  tags: ['autodocs'],
  argTypes: {
    delayMs: { control: { type: 'range', min: 0, max: 1000, step: 50 } },
    durationMs: { control: { type: 'range', min: 100, max: 2000, step: 100 } },
    yOffsetPx: { control: { type: 'range', min: 0, max: 64, step: 4 } },
  },
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
