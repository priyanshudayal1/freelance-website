"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * App-wide smooth scrolling via Lenis.
 * Wrap the app in this once (in the root layout). Motion's scroll
 * hooks read the same native scroll, so no extra wiring is needed.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        // Calm, weighty feel — closer to Linear than a bouncy demo.
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
