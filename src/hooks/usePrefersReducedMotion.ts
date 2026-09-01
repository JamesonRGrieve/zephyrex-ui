// SPDX-License-Identifier: AGPL-3.0-or-later
import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(onStoreChange: () => void): () => void {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return () => undefined;
  }
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', onStoreChange);
  return () => {
    mql.removeEventListener('change', onStoreChange);
  };
}

function getSnapshot(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * Track the user's `prefers-reduced-motion` setting, live and SSR-safe.
 *
 * Every animated component in this library gates its motion behind this hook —
 * when it returns `true`, components render their final state immediately instead
 * of animating. Backed by `useSyncExternalStore`, so the media-query listener is
 * registered on subscribe and torn down on unsubscribe with no leaked listener,
 * and the server snapshot is a stable `false`.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
