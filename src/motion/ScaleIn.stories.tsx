// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import ScaleIn from './ScaleIn';

const meta: Meta<typeof ScaleIn> = {
  title: 'Motion/ScaleIn',
  component: ScaleIn,
  tags: ['autodocs'],
  args: { children: <p className='text-lg'>I scale into place.</p> },
};
export default meta;

type Story = StoryObj<typeof ScaleIn>;

export const Default: Story = {};
export const Pronounced: Story = { args: { fromScale: 0.5, durationMs: 700 } };
export const Delayed: Story = { args: { delayMs: 300 } };
