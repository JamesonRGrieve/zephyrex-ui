// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { stubReducedMotion } from '../../tests/reducedMotion';
import { Marquee } from './Marquee';

describe('Marquee', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('duplicates content for a seamless loop when motion is allowed', () => {
    stubReducedMotion(false);
    render(
      <Marquee>
        <span>logo</span>
      </Marquee>,
    );
    expect(screen.getAllByText('logo')).toHaveLength(2);
  });

  it('renders a single static row under reduced motion', () => {
    stubReducedMotion(true);
    render(
      <Marquee>
        <span>logo</span>
      </Marquee>,
    );
    expect(screen.getAllByText('logo')).toHaveLength(1);
  });
});
