// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { Marquee } from './Marquee';

const meta: Meta<typeof Marquee> = {
  title: 'Motion/Marquee',
  component: Marquee,
  tags: ['autodocs'],
  argTypes: {
    durationMs: { control: { type: 'range', min: 3000, max: 30000, step: 1000 } },
    reverse: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Marquee>;

const chips = ['React', 'Next.js', 'Tailwind', 'Motion', 'anime.js', 'TypeScript'].map((name) => (
  <span key={name} className='rounded-full bg-muted px-4 py-1 text-sm text-muted-foreground'>
    {name}
  </span>
));

export const Default: Story = { args: { children: chips } };
export const Reverse: Story = { args: { children: chips, reverse: true } };
export const Fast: Story = { args: { children: chips, durationMs: 6000 } };
