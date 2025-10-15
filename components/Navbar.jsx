"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const headerBase =
  "sticky top-0 z-50 bg-[rgba(184,154,103,0.12)] backdrop-blur shadow-[0_1px_0_rgba(0,0,0,0.06)]";


  const linkBase = "text-sm tracking-wide hover:opacity-80 transition-opacity";

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header className={headerBase}>
      {/* Aumentamos la altura del header para dar cabida al logo más grande */}
      <nav className="container h-20 md:h-24 flex items-center justify-between">
        {/* Logo más grande con breakpoints */}
        <Link href="/" aria-label="Waleska Home" className="flex items-center gap-3">
          <div className="relative h-12 w-44 sm:h-14 sm:w-56 md:h-16 md:w-64 lg:h-20 lg:w-80">
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1744040315/logo-wale_b8vyuk.png"
              alt="Waleska"
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 256px, (min-width: 640px) 224px, 176px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${linkBase} ${isActive(href) ? "opacity-100" : "opacity-80"}`}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/#book"
            className="rounded-full px-4 py-2 text-sm font-medium border border-[rgba(184,154,103,0.35)] bg-white/70 hover:bg-white transition-colors"
          >
            Book now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10 bg-white/70"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M3 6h18M3 12h18M3 18h18"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/80 backdrop-blur">
          <div className="container py-3 flex flex-col gap-2">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-2 ${linkBase} ${isActive(href) ? "opacity-100" : "opacity-80"}`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#book"
              className="mt-1 rounded-full px-4 py-2 text-sm font-medium border border-[rgba(184,154,103,0.35)] bg-white"
            >
              Book now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
