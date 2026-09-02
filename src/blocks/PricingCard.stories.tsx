// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../primitives/Button';
import PricingCard from './PricingCard';

const meta: Meta<typeof PricingCard> = {
  title: 'Blocks/PricingCard',
  component: PricingCard,
  tags: ['autodocs'],
  decorators: [(Story) => <div className='w-80'>{Story()}</div>],
};
export default meta;

type Story = StoryObj<typeof PricingCard>;

export const Standard: Story = {
  args: {
    name: 'Starter',
    price: '$0',
    description: 'For side projects.',
    features: ['1 project', 'Community support', 'Basic analytics'],
    action: (
      <Button variant='outline' className='w-full'>
        Choose Starter
      </Button>
    ),
  },
};

export const Highlighted: Story = {
  args: {
    name: 'Pro',
    price: '$29',
    description: 'For growing teams.',
    highlighted: true,
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics', 'SSO'],
    action: <Button className='w-full'>Choose Pro</Button>,
  },
};
