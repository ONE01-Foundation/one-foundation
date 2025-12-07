"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useCopy } from "@/lib/i18n";
import { FeatureCarousel } from "./FeatureCarousel";

function WatchCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const date = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-8 border border-neutral-200 dark:border-neutral-800 w-full max-w-sm">
      <div className="text-center">
        <div className="text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
          {hours}:{minutes}
        </div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">{date}</div>
      </div>
    </div>
  );
}

export function SectionLive() {
  const copy = useCopy();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            {copy.live.title}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            {copy.live.subtitle}
          </p>
        </motion.div>

        <div className="flex justify-end mb-6">
          <button className="px-6 py-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
            {copy.live.ctaLabel}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <WatchCard />
            {/* Timeline bar */}
            <div className="mt-6 w-full max-w-sm h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 rounded-full" style={{ width: "60%" }} />
            </div>
          </motion.div>

          {/* Feature Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FeatureCarousel features={copy.live.features} sectionId="live" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

