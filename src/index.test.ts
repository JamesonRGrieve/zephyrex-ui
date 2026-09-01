// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it } from 'vitest';
import * as api from './index';

describe('public API surface', () => {
  it('exports every documented component and helper', () => {
    expect(api.AnimatedNumber).toBeTypeOf('function');
    expect(api.FadeIn).toBeTypeOf('function');
    expect(api.Stagger).toBeTypeOf('function');
    expect(api.usePrefersReducedMotion).toBeTypeOf('function');
    expect(api.cn).toBeTypeOf('function');
    expect(api.log).toBeTypeOf('function');
  });

  it('does not leak unexpected exports', () => {
    expect(Object.keys(api).sort()).toEqual(
      ['AnimatedNumber', 'FadeIn', 'Stagger', 'cn', 'log', 'usePrefersReducedMotion'].sort(),
    );
  });
});
