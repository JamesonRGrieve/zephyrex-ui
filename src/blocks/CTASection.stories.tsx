// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../primitives/Button';
import CTASection from './CTASection';

const meta: Meta<typeof CTASection> = {
  title: 'Blocks/CTASection',
  component: CTASection,
  tags: ['autodocs'],
  decorators: [(Story) => <div className='max-w-3xl p-6'>{Story()}</div>],
};
export default meta;

type Story = StoryObj<typeof CTASection>;

export const Default: Story = {
  args: {
    title: 'Ready to ship?',
    description: 'Start building with one cohesive, animated UI kit today.',
    action: (
      <Button size='lg' variant='secondary'>
        Get started
      </Button>
    ),
  },
};
