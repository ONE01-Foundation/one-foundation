"use client";

import { useCopy } from "@/lib/i18n";
import Image from "next/image";

export function Footer() {
  const copy = useCopy();

  return (
    <footer className="bg-neutral-950 dark:bg-black text-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="relative w-12 h-12">
            <Image
              src="/one01-logo.svg"
              alt="ONE01 Logo"
              fill
              className="object-contain invert"
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {copy.footer.links.map((link) => (
              <a
                key={link.id}
                href="#"
                className="text-neutral-400 hover:text-neutral-50 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-neutral-500 text-sm">{copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

