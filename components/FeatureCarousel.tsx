"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Feature {
  id: string;
  badge: string;
  title: string;
  body: string;
}

interface FeatureCarouselProps {
  features: Feature[];
  sectionId: string;
}

export function FeatureCarousel({ features, sectionId }: FeatureCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timers
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setProgress(0);

    // Set up main rotation timer
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
      setProgress(0);
    }, 6000);

    // Set up progress animation timer
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / 60); // 6000ms / 60 frames = ~100ms per frame
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [features.length]);

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setProgress(0);

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
      setProgress(0);
    }, 6000);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / 60);
      });
    }, 100);
  };

  const handleChipClick = (index: number) => {
    setActiveIndex(index);
    resetTimer();
  };

  const activeFeature = features[activeIndex];

  return (
    <div className="w-full">
      {/* Feature Chips */}
      <div className="flex flex-row md:flex-col gap-4 mb-6 overflow-x-auto pb-2 md:overflow-x-visible">
        {features.map((feature, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={feature.id}
              onClick={() => handleChipClick(index)}
              className="relative flex-shrink-0"
            >
              <div
                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-xs font-medium transition-all ${
                  isActive
                    ? "border-neutral-900 dark:border-neutral-100 scale-110"
                    : "border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600"
                }`}
              >
                {isActive && (
                  <svg className="absolute inset-0 w-16 h-16 -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${2 * Math.PI * 30}`}
                      strokeDashoffset={`${2 * Math.PI * 30 * (1 - progress / 100)}`}
                      className="text-neutral-900 dark:text-neutral-100"
                    />
                  </svg>
                )}
                <span
                  className={`relative z-10 ${
                    isActive
                      ? "text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-500 dark:text-neutral-500"
                  }`}
                >
                  {index + 1}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Feature Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFeature.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm"
        >
          <div className="mb-2">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
              {activeFeature.badge}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            {activeFeature.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {activeFeature.body}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

