// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { ScaleIn } from './ScaleIn';

const meta: Meta<typeof ScaleIn> = {
  title: 'Motion/ScaleIn',
  component: ScaleIn,
  tags: ['autodocs'],
  argTypes: {
    delayMs: { control: { type: 'range', min: 0, max: 1000, step: 50 } },
    durationMs: { control: { type: 'range', min: 100, max: 2000, step: 100 } },
    fromScale: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
  },
  args: { children: <p className='text-lg'>I scale into place.</p> },
};
export default meta;

type Story = StoryObj<typeof ScaleIn>;

export const Default: Story = {};
export const Pronounced: Story = { args: { fromScale: 0.5, durationMs: 700 } };
export const Delayed: Story = { args: { delayMs: 300 } };
