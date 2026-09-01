// SPDX-License-Identifier: AGPL-3.0-or-later
type LogOptions = { client?: number; server?: number };

const DEFAULT_VERBOSITY = 3;

function parseVerbosity(raw: string | undefined): number {
  if (raw === undefined || raw === '') {
    return DEFAULT_VERBOSITY;
  }
  const n = Number(raw);
  return Number.isFinite(n) ? n : DEFAULT_VERBOSITY;
}

const clientVerbosity = (() => {
  if (typeof process === 'undefined') {
    return DEFAULT_VERBOSITY;
  }
  return parseVerbosity(process.env['NEXT_PUBLIC_LOG_VERBOSITY_CLIENT']);
})();

const serverVerbosity = (() => {
  if (typeof process === 'undefined') {
    return DEFAULT_VERBOSITY;
  }
  return parseVerbosity(process.env['LOG_VERBOSITY_SERVER'] ?? process.env['NEXT_PUBLIC_LOG_VERBOSITY_CLIENT']);
})();

/**
 * Verbosity-gated logger. Diagnostics only — never used for user-facing output.
 * `options.client` / `options.server` set the minimum verbosity level at which a
 * message prints for the browser / node respectively; omit to suppress.
 */
export default function log(messages: unknown[], options: LogOptions = {}): void {
  const isServer = typeof window === 'undefined';
  const required = isServer ? options.server : options.client;
  if (required === undefined) {
    return;
  }
  const threshold = isServer ? serverVerbosity : clientVerbosity;
  if (required > threshold) {
    return;
  }

  // eslint-disable-next-line no-console -- intentional logger output gated by verbosity
  console.log(...messages);
}
