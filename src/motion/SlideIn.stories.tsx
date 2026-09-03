// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { SlideIn } from './SlideIn';

const meta: Meta<typeof SlideIn> = {
  title: 'Motion/SlideIn',
  component: SlideIn,
  tags: ['autodocs'],
  args: { children: <p className='text-lg'>I slide into place.</p> },
};
export default meta;

type Story = StoryObj<typeof SlideIn>;

export const FromLeft: Story = { args: { direction: 'left' } };
export const FromRight: Story = { args: { direction: 'right' } };
export const FromBottom: Story = { args: { direction: 'up' } };
export const Delayed: Story = { args: { direction: 'left', delayMs: 400 } };
