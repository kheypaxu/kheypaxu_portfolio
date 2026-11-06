"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Reveal a section after it enters the viewport, with a deliberate pause. */
export function Reveal({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
