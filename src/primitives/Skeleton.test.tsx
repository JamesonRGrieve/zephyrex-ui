// SPDX-License-Identifier: AGPL-3.0-or-later
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders a decorative placeholder hidden from assistive tech', () => {
    const { container } = render(<Skeleton className='h-4 w-24' />);
    const node = container.firstElementChild;
    expect(node).toHaveAttribute('aria-hidden');
    expect(node?.className).toContain('animate-pulse');
  });
});
