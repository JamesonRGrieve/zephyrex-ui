// SPDX-License-Identifier: AGPL-3.0-or-later
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge conditional class names and resolve Tailwind conflicts.
 * The single canonical class-name helper for the library — components compose
 * their `className` prop through this rather than string-concatenating.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
