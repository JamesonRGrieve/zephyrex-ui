// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { GrainGradientBackground } from './GrainGradientBackground';

const meta: Meta<typeof GrainGradientBackground> = {
  title: 'Backgrounds/GrainGradientBackground',
  component: GrainGradientBackground,
  tags: ['autodocs'],
  decorators: [(Story) => <div className='relative h-64 w-full overflow-hidden rounded-lg'>{Story()}</div>],
};
export default meta;

type Story = StoryObj<typeof GrainGradientBackground>;

export const Default: Story = { args: { colors: ['#6d28d9', '#f472b6'], speed: 1 } };
export const Dark: Story = { args: { colors: ['#000000', '#6d28d9'], speed: 0.6 } };
