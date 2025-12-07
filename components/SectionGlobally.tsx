"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useCopy, useLanguage } from "@/lib/i18n";
import { FeatureCarousel, FeatureOrb } from "./FeatureCarousel";

export function SectionGlobally() {
  const copy = useCopy();
  const { isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isInView) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % copy.globally.features.length);
      setProgress(0);
    }, 6000);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / 60);
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isInView, copy.globally.features.length]);

  const handleOrbClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const leftOrbs = copy.globally.features.slice(0, 2);

  return (
    <section
      id="globally"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className={`text-center mb-12 ${isRTL ? "text-right" : ""}`}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1" />
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 flex-1">
              {copy.globally.title}
            </h2>
            <div className="flex-1 flex justify-end">
              <button className="px-6 py-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                {copy.globally.ctaLabel}
              </button>
            </div>
          </div>
          <p className={`text-xl text-neutral-600 dark:text-neutral-400 ${isRTL ? "text-right" : "text-center"}`}>
            {copy.globally.subtitle}
          </p>
        </motion.div>

        {/* 3-column grid: Left orbs | Center visual | Right orbs + card */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start ${isRTL ? "lg:grid-flow-col-dense" : ""}`}>
          {/* Left column: 2 orbs */}
          <div className={`hidden lg:flex flex-col gap-6 items-center justify-center min-h-[400px] ${isRTL ? "lg:col-start-3" : "lg:col-start-1"}`}>
            {leftOrbs.map((feature, idx) => (
              <FeatureOrb
                key={feature.id}
                feature={feature}
                index={idx}
                isActive={idx === activeIndex}
                progress={progress}
                onClick={() => handleOrbClick(idx)}
              />
            ))}
          </div>

          {/* Center column: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:col-start-2"
          >
            <div className="h-64 w-64 md:h-96 md:w-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-500 dark:to-purple-600 flex items-center justify-center">
              <span className="text-white text-lg font-medium">Globe Placeholder</span>
            </div>
          </motion.div>

          {/* Right column: 2 orbs + card */}
          <div className={`flex flex-col gap-6 items-center lg:items-start ${isRTL ? "lg:col-start-1" : "lg:col-start-3"}`}>
            <FeatureCarousel
              features={copy.globally.features}
              sectionId="globally"
              autoRotate={false}
              layout="split"
              isRTL={isRTL}
              activeIndex={activeIndex}
              progress={progress}
              onOrbClick={handleOrbClick}
            />
          </div>
        </div>

        {/* Mobile: Stack visual on top, then orbs and card */}
        <div className="lg:hidden mt-8">
          <FeatureCarousel
            features={copy.globally.features}
            sectionId="globally"
            autoRotate={isInView}
            layout="vertical"
            isRTL={isRTL}
          />
        </div>
      </div>
    </section>
  );
}
