"use client";

import { motion } from "framer-motion";
import { useCopy } from "@/lib/i18n";

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  emerald: {
    bg: "bg-emerald-500/20 dark:bg-emerald-400/20",
    border: "border-emerald-500 dark:border-emerald-400",
    text: "text-emerald-700 dark:text-emerald-300",
  },
  amber: {
    bg: "bg-amber-500/20 dark:bg-amber-400/20",
    border: "border-amber-500 dark:border-amber-400",
    text: "text-amber-700 dark:text-amber-300",
  },
  violet: {
    bg: "bg-violet-500/20 dark:bg-violet-400/20",
    border: "border-violet-500 dark:border-violet-400",
    text: "text-violet-700 dark:text-violet-300",
  },
  sky: {
    bg: "bg-sky-500/20 dark:bg-sky-400/20",
    border: "border-sky-500 dark:border-sky-400",
    text: "text-sky-700 dark:text-sky-300",
  },
};

export function OrbitWorlds() {
  const copy = useCopy();
  const orbs = copy.hero.demoOrbs;

  // Fixed positions for orbs on different orbits
  const orbPositions = [
    { orbit: 0, angle: 0 }, // Body - outer orbit, top
    { orbit: 1, angle: 90 }, // Play - middle orbit, right
    { orbit: 0, angle: 180 }, // Mind - outer orbit, bottom
    { orbit: 1, angle: 270 }, // Craft - middle orbit, left
  ];

  const orbitRadii = [140, 100]; // Desktop radii
  const orbitRadiiMobile = [100, 70]; // Mobile radii

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Desktop orbits */}
      {orbitRadii.map((radius, orbitIndex) => (
        <motion.div
          key={orbitIndex}
          className="absolute border border-neutral-200 dark:border-neutral-800 rounded-full hidden md:block"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
          animate={{
            rotate: orbitIndex % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      {/* Mobile orbits - smaller */}
      {orbitRadiiMobile.map((radius, orbitIndex) => (
        <motion.div
          key={`mobile-${orbitIndex}`}
          className="absolute border border-neutral-200 dark:border-neutral-800 rounded-full md:hidden"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
          animate={{
            rotate: orbitIndex % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {orbs.map((orb, index) => {
        const position = orbPositions[index];
        const radius = orbitRadii[position.orbit];
        const radiusMobile = orbitRadiiMobile[position.orbit];
        const angle = (position.angle * Math.PI) / 180;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const xMobile = Math.cos(angle) * radiusMobile;
        const yMobile = Math.sin(angle) * radiusMobile;
        const colors = colorClasses[orb.colorKey] || colorClasses.emerald;

        return (
          <>
            {/* Desktop orb */}
            <motion.div
              key={orb.id}
              className="absolute pointer-events-auto hidden md:block"
              style={{
                left: "50%",
                top: "50%",
                x: x - 24,
                y: y - 24,
              }}
              whileHover={{ scale: 1.2, y: y - 24 - 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className={`w-12 h-12 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center text-xs font-medium ${colors.text} shadow-lg backdrop-blur-sm`}
              >
                {orb.label}
              </div>
            </motion.div>
            {/* Mobile orb */}
            <motion.div
              key={`${orb.id}-mobile`}
              className="absolute pointer-events-auto md:hidden"
              style={{
                left: "50%",
                top: "50%",
                x: xMobile - 20,
                y: yMobile - 20,
              }}
              whileHover={{ scale: 1.2, y: yMobile - 20 - 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className={`w-10 h-10 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center text-xs font-medium ${colors.text} shadow-lg backdrop-blur-sm`}
              >
                {orb.label}
              </div>
            </motion.div>
          </>
        );
      })}
    </div>
  );
}

