"use client";

import { motion, useReducedMotion } from "motion/react";
import { IPhone, type Screen } from "@/components/iphone";

// The three phones under the hero. The middle one rises into place, then the
// other two fan out from behind it. Motion animates a single 0→1 `--fan` and
// the CSS scales each side phone's spread, tilt, drop and opacity by it, so
// they stay invisible until they move and the fan keeps the screen-relative
// sizes in globals.css at every width.
export function HeroPhones({ start, middle, end }: { start: Screen; middle: Screen; end: Screen }) {
  // The starting state is the same for everyone, because it's baked into the
  // static HTML; with reduced motion the phones just jump to where they end.
  const still = useReducedMotion();
  const instant = { duration: 0 };

  return (
    <motion.div
      className="hero-preview"
      initial={{ "--fan": 0 } as Record<string, number>}
      animate={{ "--fan": 1 } as Record<string, number>}
      transition={still ? instant : { type: "spring", stiffness: 70, damping: 14, delay: 0.6 }}
    >
      <div className="hero-phone side start">
        <IPhone screens={[start]} />
      </div>
      <motion.div
        className="hero-phone middle"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={still ? instant : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <IPhone screens={[middle]} />
      </motion.div>
      <div className="hero-phone side end">
        <IPhone screens={[end]} />
      </div>
    </motion.div>
  );
}
