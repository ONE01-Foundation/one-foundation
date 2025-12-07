"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCopy } from "@/lib/i18n";
import { FeatureCarousel } from "./FeatureCarousel";

export function SectionAnonymously() {
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
            {copy.anonymously.title}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            {copy.anonymously.subtitle}
          </p>
        </motion.div>

        <div className="flex justify-end mb-6">
          <button className="px-6 py-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
            {copy.anonymously.ctaLabel}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-96 bg-neutral-200 dark:bg-neutral-800 rounded-2xl flex items-center justify-center"
          >
            <span className="text-neutral-500 dark:text-neutral-400 text-lg">
              Nobody Placeholder
            </span>
          </motion.div>

          {/* Feature Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FeatureCarousel features={copy.anonymously.features} sectionId="anonymously" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

