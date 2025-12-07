"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { copyEn, type CopyEn } from "@/content/copy.en";
import { copyHe, type CopyHe } from "@/content/copy.he";

type Language = "en" | "he";
type Copy = CopyEn | CopyHe;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  copy: Copy;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "one01-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "he") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const copy = language === "he" ? copyHe : copyEn;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, copy }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useCopy() {
  const { copy } = useLanguage();
  return copy;
}

