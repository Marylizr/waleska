"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

const ease = [0.25, 0.1, 0.25, 1];

export default function Navbar({ locale = "en", t = {} }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const base = `/${locale}`;

  const LINKS = [
    { href: base,               label: t.home     ?? "Home"     },
    { href: `${base}#about`,    label: t.about    ?? "About"    },
    { href: `${base}#services`, label: t.services ?? "Services" },
    { href: `${base}#contact`,  label: t.contact  ?? "Contact"  },
  ];

  // For a single-page site all anchors share the same pathname —
  // only highlight "Home" when we're exactly on the base route.
  const isActive = (href) =>
    !href.includes("#") && (pathname === base || pathname === `${base}/`);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background:    scrolled ? "rgba(250,247,242,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow:     scrolled ? "0 1px 0 rgba(184,149,106,0.2)" : "none",
      }}
    >
      <nav className="container h-[72px] md:h-20 flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────── */}
        <Link href={base} aria-label="Waleska Home" className="flex items-center shrink-0">
          <div className="relative h-10 w-36 sm:h-12 sm:w-44 md:h-14 md:w-52 lg:h-[60px] lg:w-60">
            <Image
              src="/images/waleska/logo-NEW.png"
              alt="Waleska"
              fill
              sizes="(min-width:1024px) 240px, (min-width:768px) 208px, 144px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* ── Desktop nav ──────────────────────────────── */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-[12.5px] tracking-[0.1em] uppercase font-body text-[#2A1F14] group py-1"
              style={{ opacity: isActive(href) ? 1 : 0.58 }}
            >
              {label}
              {/* underline-from-center on hover */}
              <span className="absolute bottom-0 left-0 h-px w-full origin-center scale-x-0 bg-[#B8956A] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}

          <Link
            href={`${base}#contact`}
            className="
              text-[12.5px] tracking-[0.07em] uppercase font-body
              px-5 py-2.5 rounded-full
              border border-[#B8956A]/45 text-[#2A1F14]
              hover:bg-[#B8956A]/10 hover:border-[#B8956A]/70
              transition-all duration-300
            "
          >
            {t.book ?? "Book now"}
          </Link>

          <LanguageSwitcher locale={locale} />
        </div>

        {/* ── Mobile right cluster ─────────────────────── */}
        <div className="md:hidden flex items-center gap-2.5">
          <LanguageSwitcher locale={locale} />
          <button
            onClick={() => setOpen((v) => !v)}
            className="
              inline-flex items-center justify-center
              h-9 w-9 rounded-full
              border border-[#B8956A]/30 bg-white/60 backdrop-blur
              transition-colors duration-200 hover:bg-[#B8956A]/10
            "
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? "M6 6l12 12M18 6L6 18" : "M3 6h18M3 12h18M3 18h18"}
                stroke="#2A1F14"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile menu — animated open/close ─────────── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease }}
            className="md:hidden overflow-hidden border-t border-[#B8956A]/15 bg-[#FAF7F2]/96 backdrop-blur"
          >
            <div className="container py-5 flex flex-col gap-1">
              {LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[13px] tracking-[0.09em] uppercase font-body text-[#2A1F14] border-b border-[#B8956A]/10 last:border-0"
                  style={{ opacity: isActive(href) ? 1 : 0.65 }}
                >
                  {label}
                </Link>
              ))}
              <Link
                href={`${base}#contact`}
                onClick={() => setOpen(false)}
                className="
                  mt-3 rounded-full px-5 py-3
                  text-[13px] tracking-[0.07em] uppercase font-body
                  border border-[#B8956A]/40 text-center text-[#2A1F14]
                  hover:bg-[#B8956A]/08
                "
              >
                {t.book ?? "Book now"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
