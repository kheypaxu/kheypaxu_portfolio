"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode, PointerEvent } from "react";

export function TiltPreview({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // A light, near-critically damped spring follows the pointer without wobble.
  const spring = { stiffness: 520, damping: 34, mass: 0.55 };
  const rotateX = useSpring(x, spring);
  const rotateY = useSpring(y, spring);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    const horizontal = Math.max(
      -0.5,
      Math.min(0.5, (event.clientX - bounds.left) / bounds.width - 0.5),
    );
    const vertical = Math.max(
      -0.5,
      Math.min(0.5, (event.clientY - bounds.top) / bounds.height - 0.5),
    );
    x.set(-vertical * 12);
    y.set(horizontal * 16);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={className}
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{
        rotateX: reduced ? 0 : rotateX,
        rotateY: reduced ? 0 : rotateY,
        transformPerspective: 1100,
      }}
    >
      {children}
    </motion.div>
  );
}
