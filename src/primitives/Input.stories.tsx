// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  args: { placeholder: 'you@example.com', 'aria-label': 'Email' },
  decorators: [(Story) => <div className='w-72'>{Story()}</div>],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Password: Story = { args: { type: 'password', placeholder: '••••••••', 'aria-label': 'Password' } };
export const Disabled: Story = { args: { disabled: true } };
