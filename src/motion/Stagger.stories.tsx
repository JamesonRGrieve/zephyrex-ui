// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { Stagger } from './Stagger';

const meta: Meta<typeof Stagger> = {
  title: 'Motion/Stagger',
  component: Stagger,
  tags: ['autodocs'],
  argTypes: {
    staggerMs: { control: { type: 'range', min: 20, max: 400, step: 20 } },
    durationMs: { control: { type: 'range', min: 100, max: 2000, step: 100 } },
    yOffsetPx: { control: { type: 'range', min: 0, max: 64, step: 4 } },
  },
  args: {
    children: [
      <div key='a'>First item</div>,
      <div key='b'>Second item</div>,
      <div key='c'>Third item</div>,
      <div key='d'>Fourth item</div>,
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Stagger>;

export const Default: Story = {};

export const Snappy: Story = {
  args: { staggerMs: 40, durationMs: 300 },
};

export const Dramatic: Story = {
  args: { staggerMs: 200, durationMs: 800, yOffsetPx: 32 },
};
