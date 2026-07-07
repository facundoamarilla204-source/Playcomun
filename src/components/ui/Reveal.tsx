"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.98 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }
          : {}
      }
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
