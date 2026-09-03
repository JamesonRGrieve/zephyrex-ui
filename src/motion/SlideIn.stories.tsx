// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { SlideIn } from './SlideIn';

const meta: Meta<typeof SlideIn> = {
  title: 'Motion/SlideIn',
  component: SlideIn,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'inline-radio', options: ['left', 'right', 'up', 'down'] },
    delayMs: { control: { type: 'range', min: 0, max: 1000, step: 50 } },
    durationMs: { control: { type: 'range', min: 100, max: 2000, step: 100 } },
    distancePx: { control: { type: 'range', min: 0, max: 96, step: 4 } },
  },
  args: { children: <p className='text-lg'>I slide into place.</p> },
};
export default meta;

type Story = StoryObj<typeof SlideIn>;

export const FromLeft: Story = { args: { direction: 'left' } };
export const FromRight: Story = { args: { direction: 'right' } };
export const FromBottom: Story = { args: { direction: 'up' } };
export const Delayed: Story = { args: { direction: 'left', delayMs: 400 } };
