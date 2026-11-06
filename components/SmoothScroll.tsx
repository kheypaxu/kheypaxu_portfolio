"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Let wheel scrolling settle gently; keep touch and reduced motion native. */
export function SmoothScroll() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let controller: Lenis | undefined;

    function configure() {
      controller?.destroy();
      controller = undefined;
      if (preference.matches) return;

      controller = new Lenis({
        autoRaf: true,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -100 },
      });
    }

    configure();
    preference.addEventListener("change", configure);
    return () => {
      preference.removeEventListener("change", configure);
      controller?.destroy();
    };
  }, []);

  return null;
}
