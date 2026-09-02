// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import MeshGradientBackground from './MeshGradientBackground';

const meta: Meta<typeof MeshGradientBackground> = {
  title: 'Backgrounds/MeshGradientBackground',
  component: MeshGradientBackground,
  tags: ['autodocs'],
  decorators: [(Story) => <div className='relative h-64 w-full overflow-hidden rounded-lg'>{Story()}</div>],
};
export default meta;

type Story = StoryObj<typeof MeshGradientBackground>;

export const Default: Story = { args: { colors: ['#6d28d9', '#0ea5e9', '#f472b6'], speed: 1 } };
export const Slow: Story = { args: { colors: ['#111827', '#6d28d9'], speed: 0.3 } };
