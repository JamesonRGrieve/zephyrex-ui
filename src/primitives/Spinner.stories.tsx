// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Primitives/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
export const Large: Story = { args: { className: 'text-primary [&_svg]:h-8 [&_svg]:w-8' } };
export const OnButtonLabel: Story = {
  render: () => (
    <span className='inline-flex items-center gap-2'>
      <Spinner /> Saving…
    </span>
  ),
};
