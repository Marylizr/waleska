"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

export default function Footer({ locale = "en", t = {} }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  const LINKS = [
    { href: base,               label: t.home     ?? "Home"     },
    { href: `${base}#about`,    label: t.about    ?? "About"    },
    { href: `${base}#services`, label: t.services ?? "Services" },
    { href: `${base}#contact`,  label: t.contact  ?? "Contact"  },
  ];

  return (
    <footer
      className="w-full"
      style={{ background: "#FAF7F2", borderTop: "1px solid rgba(232,213,183,0.55)" }}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo */}
          <Link href={base} className="shrink-0">
            <div className="relative h-10 w-36 md:h-12 md:w-44">
              <Image
                src="https://res.cloudinary.com/da6il8qmv/image/upload/v1744040315/logo-wale_b8vyuk.png"
                alt="Waleska"
                fill
                sizes="176px"
                className="object-contain opacity-85"
              />
            </div>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[12px] tracking-[0.1em] uppercase font-body text-[#2A1F14]/55 hover:text-[#B8956A] transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/lejhanmua"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="
                h-9 w-9 rounded-full
                border border-[#B8956A]/35
                flex items-center justify-center
                text-[#2A1F14]/55 hover:text-[#B8956A] hover:border-[#B8956A]/60
                transition-all duration-200
              "
            >
              {/* Instagram icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a
              href="https://wa.me/56964488186"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="
                h-9 w-9 rounded-full
                border border-[#B8956A]/35
                flex items-center justify-center
                text-[#2A1F14]/55 hover:text-[#B8956A] hover:border-[#B8956A]/60
                transition-all duration-200
              "
            >
              {/* WhatsApp icon */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Bottom strip */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(232,213,183,0.4)" }}
        >
          <p className="text-[11.5px] tracking-[0.09em] uppercase font-body text-[#2A1F14]/38">
            © {year} Waleska Makeup Artist · Santiago de Chile
          </p>
          <p className="text-[11.5px] tracking-[0.06em] font-body text-[#2A1F14]/30">
            {t.footer_built ?? "Designed with care"}
          </p>
        </div>
      </div>
    </footer>
  );
}
