"use client";

import { usePathname, useRouter } from "next/navigation";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function LanguageSwitcher({ locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (code) => {
    if (code === locale) return;
    const newPath = pathname.replace(/^\/(en|es)/, `/${code}`);
    router.push(newPath);
  };

  return (
    <div
      className="flex items-center rounded-full p-0.5 shrink-0"
      style={{ border: "1px solid rgba(184,149,106,0.3)", background: "rgba(184,149,106,0.06)" }}
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchTo(code)}
          className="px-2.5 py-1 rounded-full transition-all duration-200"
          style={{
            fontSize: "11px",
            fontFamily: "var(--font-body)",
            letterSpacing: "0.08em",
            fontWeight: locale === code ? 600 : 400,
            background: locale === code ? "#2A1F14" : "transparent",
            color: locale === code ? "#FAF7F2" : "rgba(42,31,20,0.55)",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
