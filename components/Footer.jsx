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
    { href: `${base}#portfolio`, label: "Portfolio" },
    { href: `${base}#testimonials`, label: "Testimonials" },
    { href: `${base}#contact`,  label: t.contact  ?? "Contact"  },
  ];

  const SERVICES = [
    "Bridal Makeup",
    "Event Makeup",
    "Photoshoot Makeup",
    "Lessons & Coaching",
  ];

  return (
    <footer
      className="w-full border-t border-[#b8953f]/45 bg-[#1d1915] text-white"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 pt-5 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="grid gap-8 md:grid-cols-[1.25fr_0.7fr_0.95fr_1.3fr]"
        >
          <div>
            <Link href={base} className="inline-block">
              <div className="relative h-[58px] w-[168px]">
                <Image
                  src="/images/waleska/logo-NEW.png"
                  alt="Waleska"
                  fill
                  sizes="168px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="mt-3 max-w-[220px] text-[13px] leading-snug text-white/78">
              Enhancing your natural beauty with professional makeup and a luxury experience.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <SocialLink href="https://instagram.com/lejhanmua" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="#" label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://wa.me/56964488186" label="WhatsApp">
                <WhatsAppIcon />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="font-body text-[13px] font-bold text-white">Quick Links</h3>
            <nav className="mt-3 flex flex-col gap-1.5">
              {LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13px] leading-tight text-white/86 transition-colors duration-200 hover:text-[#c79b3d]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-body text-[13px] font-bold text-white">Services</h3>
            <ul className="mt-3 space-y-2">
              {SERVICES.map((service) => (
                <li key={service} className="text-[13px] leading-tight text-white/86">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-[13px] font-bold text-white">Contact</h3>
            <ul className="mt-3 space-y-3 text-[13px] leading-snug text-white/86">
              <li className="flex items-start gap-3">
                <PhoneIcon />
                <a href="tel:+56964488186" className="transition-colors duration-200 hover:text-[#c79b3d]">
                  +56 9 6448 8186
                </a>
              </li>
              <li className="flex items-start gap-3">
                <InstagramContactIcon />
                <a href="https://instagram.com/lejhanmua" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-[#c79b3d]">
                  @lejhanmua
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon />
                <span>
                  Serving: Santiago de Chile
                </span>
              </li>
              <li className="flex items-start gap-3">
                <WhatsAppContactIcon />
                <a href="https://wa.me/56964488186" target="_blank" rel="noreferrer" className="transition-colors duration-200 hover:text-[#c79b3d]">
                  Book an appointment today
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-5 border-t border-white/15 pt-3 text-[11px] text-white/76">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Waleska Makeup Artist. All rights reserved.</p>
            <p>Powered by PixelTrend Studio LLC</p>
            <div className="flex gap-12">
              <Link href={base} className="transition-colors duration-200 hover:text-[#c79b3d]">
                Privacy Policy
              </Link>
              <Link href={base} className="transition-colors duration-200 hover:text-[#c79b3d]">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noreferrer"}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c79b3d] text-[#c79b3d] transition-colors duration-200 hover:bg-[#c79b3d] hover:text-[#1d1915]"
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 8.6V6.8c0-.8.2-1.3 1.4-1.3H17V2.3c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.3v2.2H7.6V12h2.8v9.8H14V12h2.8l.4-3.4H14z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.1-5.5A8.4 8.4 0 1 1 21 11.5z" />
      <path d="M9.2 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.6 2.1 2.9 2.7l.5-.5c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.5.3-1.1.5-1.7.5-3.2 0-7.3-3.9-7.3-7.2 0-.6.2-1.2.5-1.7z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="mt-0.5 shrink-0 text-[#c79b3d]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6.1 6.1l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z" />
    </svg>
  );
}

function InstagramContactIcon() {
  return (
    <svg className="mt-0.5 shrink-0 text-[#c79b3d]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppContactIcon() {
  return (
    <svg className="mt-0.5 shrink-0 text-[#c79b3d]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.1-5.5A8.4 8.4 0 1 1 21 11.5z" />
      <path d="M9.2 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.6 2.1 2.9 2.7l.5-.5c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.5.3-1.1.5-1.7.5-3.2 0-7.3-3.9-7.3-7.2 0-.6.2-1.2.5-1.7z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="mt-0.5 shrink-0 text-[#c79b3d]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
