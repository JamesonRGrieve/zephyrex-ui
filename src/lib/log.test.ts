// SPDX-License-Identifier: AGPL-3.0-or-later
import { afterEach, describe, expect, it, vi } from 'vitest';
import log from './log';

describe('log', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('suppresses output when no verbosity level is given', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    log(['quiet']);
    expect(spy).not.toHaveBeenCalled();
  });

  it('prints when the required client level is within the threshold', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    log(['hello', 42], { client: 1 });
    expect(spy).toHaveBeenCalledWith('hello', 42);
  });

  it('suppresses when the required level exceeds the threshold', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    log(['too verbose'], { client: 9 });
    expect(spy).not.toHaveBeenCalled();
  });
});
