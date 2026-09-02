// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import FadeIn from './FadeIn';

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

describe('FadeIn', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders its children when motion is allowed', () => {
    stubReducedMotion(false);
    render(
      <FadeIn>
        <p>animated content</p>
      </FadeIn>,
    );
    expect(screen.getByText('animated content')).toBeInTheDocument();
  });

  it('renders children without a motion wrapper under reduced motion', () => {
    stubReducedMotion(true);
    render(
      <FadeIn className='greeting'>
        <p>static content</p>
      </FadeIn>,
    );
    expect(screen.getByText('static content')).toBeInTheDocument();
  });
});
