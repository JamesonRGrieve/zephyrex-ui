// SPDX-License-Identifier: AGPL-3.0-or-later
import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { stubReducedMotion } from '../../tests/reducedMotion';
import SlideIn from './SlideIn';

describe('SlideIn', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders children when motion is allowed', () => {
    stubReducedMotion(false);
    render(
      <SlideIn direction='right'>
        <p>sliding</p>
      </SlideIn>,
    );
    expect(screen.getByText('sliding')).toBeInTheDocument();
  });

  it('renders children statically under reduced motion', () => {
    stubReducedMotion(true);
    render(
      <SlideIn direction='up'>
        <p>static</p>
      </SlideIn>,
    );
    expect(screen.getByText('static')).toBeInTheDocument();
  });
});
