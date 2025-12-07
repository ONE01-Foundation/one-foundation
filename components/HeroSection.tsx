"use client";

import { motion } from "framer-motion";
import { useCopy } from "@/lib/i18n";
import { OrbitWorlds } from "./OrbitWorlds";

export function HeroSection() {
  const copy = useCopy();

  const handleArrowClick = () => {
    console.log("Navigate to app");
  };

  const handleMoreInfoClick = () => {
    const anonymouslySection = document.getElementById("anonymously");
    if (anonymouslySection) {
      anonymouslySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      <OrbitWorlds />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md mx-auto px-4"
      >
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-8 border border-neutral-200 dark:border-neutral-800">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-neutral-900 dark:text-neutral-50 mb-3">
            {copy.hero.title}
          </h1>
          <p className="text-lg text-center text-neutral-600 dark:text-neutral-400 mb-8">
            {copy.hero.subtitle}
          </p>

          <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-full px-4 py-3 border border-neutral-200 dark:border-neutral-700">
            <span className="text-xl">🌍</span>
            <input
              type="text"
              placeholder={copy.hero.placeholder}
              className="flex-1 bg-transparent border-none outline-none text-neutral-900 dark:text-neutral-50 placeholder-neutral-500 dark:placeholder-neutral-400"
            />
            <button
              onClick={handleArrowClick}
              className="w-8 h-8 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={handleMoreInfoClick}
          className="mt-8 flex items-center gap-2 mx-auto text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
        >
          <span>{copy.hero.moreInfoLabel}</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
}

