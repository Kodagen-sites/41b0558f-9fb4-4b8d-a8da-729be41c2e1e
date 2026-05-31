"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { useIsMobile, useScrollState } from "@/components/headers/hooks";

export default function Header() {
  const scrolled = useScrollState(20);
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-5 inset-x-4 md:inset-x-0 z-40 flex justify-center pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center gap-1 md:gap-2 rounded-full border backdrop-blur-2xl transition-all duration-500
          ${
            scrolled
              ? "bg-ink/85 border-white/10 shadow-[0_10px_40px_-12px_rgba(27,42,26,0.55)]"
              : "bg-ink/55 border-white/10"
          }`}
          style={{ padding: "6px 8px" }}
        >
          <Link
            href="/"
            className="px-3 md:px-4 py-2 font-display font-extrabold tracking-[0.14em] uppercase text-xs md:text-sm text-bg"
          >
            {siteConfig.company.name}
          </Link>

          {!isMobile && (
            <nav className="flex items-center gap-1 mx-2">
              {siteConfig.nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.14em] text-bg/70 hover:text-bg hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          {!isMobile ? (
            <Link
              href="/#contact"
              className="px-4 py-2 rounded-full bg-surface text-ink text-xs font-display font-semibold hover:brightness-105 transition-all"
            >
              Get in touch
            </Link>
          ) : (
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="w-9 h-9 rounded-full flex items-center justify-center text-bg hover:bg-white/10"
            >
              <Menu size={18} />
            </button>
          )}
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileOverlay({ onClose }: { onClose: () => void }) {
  const items = [...siteConfig.nav, { href: "/#contact", label: "Contact" }].filter(
    (v, i, a) => a.findIndex((x) => x.href === v.href) === i
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-ink md:hidden"
    >
      <div className="flex items-center justify-between p-6">
        <div className="font-display font-extrabold tracking-[0.14em] uppercase text-sm text-bg">
          {siteConfig.company.name}
        </div>
        <button onClick={onClose} className="text-bg" aria-label="Close menu">
          <X size={22} />
        </button>
      </div>
      <ul className="flex flex-col gap-6 p-6">
        {items.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.05 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="font-display text-3xl text-bg hover:text-surface transition-colors"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
      <div className="absolute bottom-6 inset-x-6">
        <Link
          href="/#contact"
          onClick={onClose}
          className="block text-center w-full px-5 py-4 rounded-full bg-surface text-ink font-display font-semibold"
        >
          Get in touch →
        </Link>
      </div>
    </motion.div>
  );
}
