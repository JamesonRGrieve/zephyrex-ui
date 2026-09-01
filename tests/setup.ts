import '@testing-library/jest-dom/vitest';
import { MotionGlobalConfig } from 'motion/react';

// Run Motion deterministically under happy-dom: skip the WAAPI-accelerated
// animator, whose cancel() on unmount rejects with an uncaught AbortError in this
// DOM implementation. Components jump to their final state, which is exactly what
// the behavior tests assert.
MotionGlobalConfig.skipAnimations = true;
