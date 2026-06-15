"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const SERVICES = [
  {
    key: "bridal",
    title: "Bridal Makeup",
    desc: "Flawless and long-lasting makeup for your special day.",
    src: "/images/waleska/birdal-card.png",
    fallback: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__3300de8e-e676-4f79-a06c-0ff16b53f02d_qzexqa.png",
  },
  {
    key: "event",
    title: "Event Makeup",
    desc: "Perfect look for parties, galas and special events.",
    src: "/images/waleska/social-makeup.png",
    fallback: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__aa7402f1-a3fa-42a2-93fa-4a2432594dc6_hed9sj.png",
  },
  {
    key: "photoshoot",
    title: "Photoshoot Makeup",
    desc: "HD makeup designed for camera and professional photoshoots.",
    src: "/images/waleska/photoshoot.png",
    fallback: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__43571fa4-a9f3-454f-8111-b8d3c4cd46f3_b4f5ft.png",
  },
  {
    key: "lessons",
    title: "Lessons & Coaching",
    desc: "Personalized makeup lessons to enhance your skills.",
    src: "/images/waleska/brushes.png",
    fallback: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529904/marylizr_very_beautiful_model_wearing_light_makeup_and_getting__97d32495-c867-4a9c-b7f6-bc54ab6484af_xvpp6w.png",
  },
];

export default function BlockSeven({ t = {} }) {
  return (
    <section id="services" className="w-full" style={{ background: "#FAF7F2" }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-3 mb-5">
            <span className="block h-px w-8 bg-[#B8956A]/60" />
            <span className="text-[12px] tracking-[0.14em] uppercase font-body text-[#B8956A]">
              {t.eyebrow ?? "Services"}
            </span>
            <span className="block h-px w-8 bg-[#B8956A]/60" />
          </span>
          <h2 className="font-display font-semibold text-[#2A1F14] text-[clamp(1.9rem,3.8vw,2.8rem)]">
            {t.heading ?? "Makeup for every occasion"}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.key} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item }) {
  const [src, setSrc] = useState(item.src);

  return (
    <div className="rounded-2xl bg-white shadow-[0_16px_40px_rgba(42,31,20,0.06)] overflow-hidden">
      <div className="relative h-[240px] sm:h-[220px] lg:h-[200px] overflow-hidden">
        <Image
          src={src}
          alt={item.title}
          fill
          sizes="(min-width:1024px) 300px, 50vw"
          className="object-cover object-center"
          onError={() => setSrc(item.fallback)}
        />
        <div className="absolute left-4 top-4 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-md border border-[#B8956A]/20">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8956A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M20.4 15a7.5 7.5 0 0 0-1.2-6.7" />
          </svg>
        </div>
      </div>

      <div className="p-6 h-[210px] flex flex-col justify-between">
        <div>
          <h3 className="font-display font-semibold text-[#2A1F14] text-lg">{item.title}</h3>
          <p className="mt-3 text-[#2A1F14]/70 text-sm leading-relaxed">{item.desc}</p>
        </div>
        <div className="mt-6">
          <Link href="#" className="text-[#B8956A] font-medium text-sm inline-flex items-center gap-2">
            Learn more <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
