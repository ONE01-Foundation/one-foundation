"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Feature = {
  id: string;
  badge: string;
  title: string;
  body: string;
};

interface FeatureCarouselProps {
  features: readonly Feature[];
  sectionId: string;
  autoRotate?: boolean;
  layout?: "vertical" | "split";
  isRTL?: boolean;
  onOrbClick?: (index: number) => void;
  activeIndex?: number;
  progress?: number;
}

// Export orb rendering for use in sections
export function FeatureOrb({ 
  feature, 
  index, 
  isActive, 
  progress, 
  onClick 
}: { 
  feature: Feature; 
  index: number; 
  isActive: boolean; 
  progress: number; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
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
}

export function FeatureCarousel({ 
  features, 
  sectionId, 
  autoRotate = true, 
  layout = "vertical", 
  isRTL = false,
  onOrbClick,
  activeIndex: externalActiveIndex,
  progress: externalProgress
}: FeatureCarouselProps) {
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);
  const [internalProgress, setInternalProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalActiveIndex;
  const progress = externalProgress !== undefined ? externalProgress : internalProgress;

  useEffect(() => {
    // Clear any existing timers
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (externalProgress === undefined) {
      setInternalProgress(0);
    }

    if (!autoRotate || externalActiveIndex !== undefined) {
      return;
    }

    // Set up main rotation timer (only if not controlled)
    intervalRef.current = setInterval(() => {
      setInternalActiveIndex((prev) => (prev + 1) % features.length);
      setInternalProgress(0);
    }, 6000);

    // Set up progress animation timer (only if not controlled)
    progressIntervalRef.current = setInterval(() => {
      setInternalProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / 60); // 6000ms / 60 frames = ~100ms per frame
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [features.length, autoRotate, externalActiveIndex]);

  const resetTimer = () => {
    if (!autoRotate || externalActiveIndex !== undefined) return;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setInternalProgress(0);

    intervalRef.current = setInterval(() => {
      setInternalActiveIndex((prev) => (prev + 1) % features.length);
      setInternalProgress(0);
    }, 6000);

    progressIntervalRef.current = setInterval(() => {
      setInternalProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / 60);
      });
    }, 100);
  };

  const handleChipClick = (index: number) => {
    if (onOrbClick) {
      onOrbClick(index);
    } else if (externalActiveIndex === undefined) {
      setInternalActiveIndex(index);
    }
    resetTimer();
  };

  const activeFeature = features[activeIndex];

  if (layout === "split") {
    // Split layout: render only right side (2 orbs + card)
    const rightOrbs = features.slice(2, 4);

    return (
      <div className="w-full flex flex-col h-full">
        {/* Right column: 2 orbs */}
        <div className="flex flex-col gap-4 items-start mb-6">
          {rightOrbs.map((feature, idx) => (
            <FeatureOrb
              key={feature.id}
              feature={feature}
              index={idx + 2}
              isActive={idx + 2 === activeIndex}
              progress={progress}
              onClick={() => handleChipClick(idx + 2)}
            />
          ))}
        </div>

        {/* Feature Card */}
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm"
            >
              <div className="mb-2">
                <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                  {activeFeature.badge}
                </span>
              </div>
              <h3 className={`text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3 ${isRTL ? "text-right" : "text-left"}`}>
                {activeFeature.title}
              </h3>
              <p className={`text-neutral-600 dark:text-neutral-400 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                {activeFeature.body}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Vertical layout (default)
  return (
    <div className="w-full">
      {/* Feature Chips */}
      <div className="flex flex-row md:flex-col gap-4 mb-6 overflow-x-auto pb-2 md:overflow-x-visible">
        {features.map((feature, index) => (
          <FeatureOrb
            key={feature.id}
            feature={feature}
            index={index}
            isActive={index === activeIndex}
            progress={progress}
            onClick={() => handleChipClick(index)}
          />
        ))}
      </div>

      {/* Feature Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFeature.id}
          initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm"
        >
          <div className="mb-2">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
              {activeFeature.badge}
            </span>
          </div>
          <h3 className={`text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3 ${isRTL ? "text-right" : "text-left"}`}>
            {activeFeature.title}
          </h3>
          <p className={`text-neutral-600 dark:text-neutral-400 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
            {activeFeature.body}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

