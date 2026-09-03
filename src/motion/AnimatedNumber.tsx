// SPDX-License-Identifier: AGPL-3.0-or-later
import { animate } from 'animejs';
import { type HTMLAttributes, type JSX, useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/utils';

const DEFAULT_DURATION_MS = 1200;
const DEFAULT_EASE = 'outExpo';

export interface AnimatedNumberProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Target value the number animates to. */
  value: number;
  /** Value the animation starts from. Defaults to 0. */
  from?: number;
  /** Animation duration in milliseconds. */
  durationMs?: number;
  /** Formatter for the displayed value (e.g. currency, thousands separators). */
  format?: (value: number) => string;
}

const defaultFormat = (value: number): string => String(Math.round(value));

/**
 * Count-up number driven by the anime.js engine. Writes to the DOM node directly
 * (no per-frame React re-render). When the user prefers reduced motion, the final
 * value renders immediately with no animation. The formatted target is exposed via
 * `aria-label` so assistive tech announces the destination, not every tick.
 */
export function AnimatedNumber({
  value,
  from = 0,
  durationMs = DEFAULT_DURATION_MS,
  format = defaultFormat,
  className,
  ...props
}: AnimatedNumberProps): JSX.Element {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (node === null) {
      return undefined;
    }
    if (prefersReduced) {
      node.textContent = format(value);
      return undefined;
    }
    const state = { n: from };
    node.textContent = format(from);
    const animation = animate(state, {
      n: value,
      duration: durationMs,
      ease: DEFAULT_EASE,
      onUpdate: () => {
        node.textContent = format(state.n);
      },
    });
    return () => {
      animation.pause();
    };
  }, [value, from, durationMs, format, prefersReduced]);

  return (
    <span ref={ref} data-slot='animated-number' role='img' className={cn(className)} aria-label={format(value)} {...props}>
      {format(value)}
    </span>
  );
}
