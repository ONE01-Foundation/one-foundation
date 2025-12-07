"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage, useCopy } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const copy = useCopy();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const brandText = language === "he" ? "אחד-01" : "ONE-01";

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/one01-logo.svg"
                alt="ONE01 Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              {brandText}
            </span>
          </div>

          {/* Right: Language + Theme */}
          <div className="relative" ref={dropdownRef}>
            <button
              onMouseEnter={() => setShowDropdown(true)}
              onFocus={() => setShowDropdown(true)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {language.toUpperCase()}
            </button>

            {showDropdown && (
              <div
                className="absolute right-0 mt-2 w-48 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg p-2"
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setShowDropdown(false);
                      }}
                      className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                        language === "en"
                          ? "bg-neutral-900 dark:bg-neutral-700 text-white"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("he");
                        setShowDropdown(false);
                      }}
                      className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                        language === "he"
                          ? "bg-neutral-900 dark:bg-neutral-700 text-white"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                      }`}
                    >
                      HE
                    </button>
                  </div>
                  <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center justify-between px-2">
                      <span className="text-xs text-neutral-600 dark:text-neutral-400">Theme</span>
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

