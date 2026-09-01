// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Stagger from './Stagger';

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

describe('Stagger', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders every child when motion is allowed', () => {
    stubReducedMotion(false);
    render(
      <Stagger>
        <span>one</span>
        <span>two</span>
        <span>three</span>
      </Stagger>,
    );
    expect(screen.getByText('one')).toBeInTheDocument();
    expect(screen.getByText('two')).toBeInTheDocument();
    expect(screen.getByText('three')).toBeInTheDocument();
  });

  it('renders every child under reduced motion', () => {
    stubReducedMotion(true);
    render(
      <Stagger>
        <span>alpha</span>
        <span>beta</span>
      </Stagger>,
    );
    expect(screen.getByText('alpha')).toBeInTheDocument();
    expect(screen.getByText('beta')).toBeInTheDocument();
  });
});
