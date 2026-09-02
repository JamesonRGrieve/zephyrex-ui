// SPDX-License-Identifier: AGPL-3.0-or-later
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import AnimatedNumber from './AnimatedNumber';

function stubReducedMotion(matches: boolean): void {
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
}

describe('AnimatedNumber', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the final value immediately under reduced motion', () => {
    stubReducedMotion(true);
    const { container } = render(<AnimatedNumber value={100} />);
    const span = container.querySelector('span');
    expect(span?.textContent).toBe('100');
  });

  it('applies the custom formatter to the final value', () => {
    stubReducedMotion(true);
    const { container } = render(<AnimatedNumber value={100} format={(n) => `$${Math.round(n)}`} />);
    const span = container.querySelector('span');
    expect(span?.textContent).toBe('$100');
  });

  it('exposes the formatted target via aria-label regardless of animation state', () => {
    stubReducedMotion(false);
    const { container } = render(<AnimatedNumber value={250} />);
    const span = container.querySelector('span');
    expect(span?.getAttribute('aria-label')).toBe('250');
  });
});
