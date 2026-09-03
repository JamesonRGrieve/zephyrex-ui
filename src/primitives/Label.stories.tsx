// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Primitives/Label',
  component: Label,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Label>;

export const WithInput: Story = {
  render: () => (
    <div className='flex w-72 flex-col gap-2'>
      <Label htmlFor='email'>Email</Label>
      <Input id='email' placeholder='you@example.com' />
    </div>
  ),
};

export const Standalone: Story = { args: { children: 'Field label' } };
