// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Primitives/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: { children: 'Your changes have been saved.' },
  decorators: [(Story) => <div className='w-96'>{Story()}</div>],
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = { args: { variant: 'default' } };
export const Success: Story = { args: { variant: 'success', children: 'Deployment succeeded.' } };
export const Warning: Story = { args: { variant: 'warning', children: 'Your trial ends soon.' } };
export const Destructive: Story = { args: { variant: 'destructive', children: 'Something went wrong.' } };
export const Info: Story = { args: { variant: 'info', children: 'A new version is available.' } };
