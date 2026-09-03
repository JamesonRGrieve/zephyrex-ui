// SPDX-License-Identifier: AGPL-3.0-or-later
import { DynamicForm, PasswordField, TextField } from '@jgrieve/forms';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

const meta: Meta<typeof DynamicForm> = {
  title: 'Forms/DynamicForm',
  component: DynamicForm,
  tags: ['autodocs'],
  decorators: [(Story) => <div className='w-96'>{Story()}</div>],
};
export default meta;

type Story = StoryObj<typeof DynamicForm>;

export const SchemaDriven: Story = {
  args: {
    fields: {
      name: { type: 'text' },
      age: { type: 'number' },
      password: { type: 'password' },
      subscribe: { type: 'boolean' },
    },
    onConfirm: fn(),
  },
};

export const Fields: Story = {
  render: () => (
    <div className='flex flex-col gap-2'>
      <TextField id='email' name='email' label='Email' placeholder='you@example.com' />
      <PasswordField id='password' name='password' label='Password' />
    </div>
  ),
};
