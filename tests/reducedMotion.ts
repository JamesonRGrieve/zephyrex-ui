// SPDX-License-Identifier: AGPL-3.0-or-later
import { vi } from 'vitest';

/** Force `prefers-reduced-motion` on or off for a test by stubbing `matchMedia`. */
export function stubReducedMotion(matches: boolean): void {
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
