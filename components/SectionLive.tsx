"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useCopy, useLanguage } from "@/lib/i18n";
import { FeatureCarousel, FeatureOrb } from "./FeatureCarousel";

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
      setActiveIndex((prev) => (prev + 1) % copy.live.features.length);
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
  }, [isInView, copy.live.features.length]);

  const handleOrbClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const leftOrbs = copy.live.features.slice(0, 2);

  return (
    <section
      id="live"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900"
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
              {copy.live.title}
            </h2>
            <div className="flex-1 flex justify-end">
              <button className="px-6 py-2 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                {copy.live.ctaLabel}
              </button>
            </div>
          </div>
          <p className={`text-xl text-neutral-600 dark:text-neutral-400 ${isRTL ? "text-right" : "text-center"}`}>
            {copy.live.subtitle}
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
            className="flex flex-col items-center lg:col-start-2"
          >
            <WatchCard />
            {/* Timeline bar */}
            <div className="mt-6 w-full max-w-sm h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 rounded-full" style={{ width: "60%" }} />
            </div>
          </motion.div>

          {/* Right column: 2 orbs + card */}
          <div className={`flex flex-col gap-6 items-center lg:items-start ${isRTL ? "lg:col-start-1" : "lg:col-start-3"}`}>
            <FeatureCarousel
              features={copy.live.features}
              sectionId="live"
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
            features={copy.live.features}
            sectionId="live"
            autoRotate={isInView}
            layout="vertical"
            isRTL={isRTL}
          />
        </div>
      </div>
    </section>
  );
}
