// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it } from 'vitest';
import * as api from './index';

describe('public API surface', () => {
  it('exports the shared foundation helpers', () => {
    expect(api.usePrefersReducedMotion).toBeTypeOf('function');
    expect(api.cn).toBeTypeOf('function');
    expect(api.log).toBeTypeOf('function');
  });

  it('exports the motion category', () => {
    expect(api.AnimatedNumber).toBeDefined();
    expect(api.FadeIn).toBeDefined();
    expect(api.Stagger).toBeDefined();
  });

  it('exports the primitives category', () => {
    expect(api.Button).toBeDefined();
    expect(api.Card).toBeDefined();
    expect(api.Badge).toBeDefined();
    expect(api.buttonVariants).toBeTypeOf('function');
  });
});
