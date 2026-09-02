// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/react';
import MeshGradientBackground from '../backgrounds/MeshGradientBackground';
import Button from '../primitives/Button';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Blocks/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: 'One cohesive UI, homologated.',
    subtitle: 'Animated components, shader backgrounds, and dashboards — one theme, one API.',
    actions: (
      <>
        <Button size='lg'>Get started</Button>
        <Button size='lg' variant='outline'>
          Docs
        </Button>
      </>
    ),
  },
};

export const WithShaderBackground: Story = {
  args: {
    ...Default.args,
    background: <MeshGradientBackground colors={['#6d28d9', '#0ea5e9', '#f472b6']} className='opacity-40' />,
  },
};
