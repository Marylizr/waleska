"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlockThree() {
  // Animación sutil para texto (cuando aparezca en viewport)
  const parent = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.1 } },
  };
  const child = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section
      id="premium-products"
      className="relative pt-14 md:pt-16 lg:pt-0 pb-16 md:pb-20 bg-[#fafafa] scroll-mt-24"
    >
      <div className="container overflow-x-hidden">
        {/* ===================== MOBILE / TABLET (≤ lg) ===================== */}
        <div className="lg:hidden space-y-6">
          {/* 1) Paleta centrada */}
          <div className="flex justify-center pt-2">
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529913/swatches_ndobqw.png"
              alt="Palette"
              width={800}
              height={800}
              sizes="100vw"
              className="w-[58%] max-w-[260px] h-auto"
            />
          </div>

          {/* 2) Fila: Texto IZQ + Brochas DER (el headline va AQUÍ) */}
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
            className="grid grid-cols-2 items-center gap-3 px-3"
          >
            <motion.h3
              variants={child}
              className="col-span-1 text-[#5b4b2f] font-semibold leading-tight text-[clamp(1.25rem,5.4vw,1.6rem)]"
            >
              Premium-quality
              <br /> products, for
              <br /> flawless, long
              <br /> lasting results
            </motion.h3>

            <div className="col-span-1 flex justify-center">
              <Image
                src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/brush_wxbmfn.png"
                alt="Brushes"
                width={700}
                height={700}
                sizes="50vw"
                className="w-[70%] max-w-[210px] h-auto"
              />
            </div>
          </motion.div>

          {/* 3) Labial splash centrado */}
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529909/lips2_umfpqg.png"
              alt="Lipstick splash"
              width={650}
              height={650}
              sizes="100vw"
              className="w-[62%] max-w-[260px] h-auto"
            />
          </div>

          {/* 4) CTA grande multiline (único CTA en móvil) */}
          <div className="px-3 text-center">
            <Link
              href="#book"
              className="block text-[#b08974] font-semibold leading-[1.15] text-[clamp(1.6rem,8vw,2.25rem)]"
            >
              Book Your Makeup
              <br /> Session Today
            </Link>
          </div>

          {/* 5) Grid final: labial izq + swatches der */}
          <div className="grid grid-cols-2 gap-4 px-3 pb-6">
            <div className="flex justify-center">
              <Image
                src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529909/lips2_umfpqg.png"
                alt="Lipstick"
                width={650}
                height={650}
                sizes="50vw"
                className="w-[80%] max-w-[220px] h-auto"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529910/swatches_nude_shbspo.png"
                alt="Nude swatches"
                width={900}
                height={600}
                sizes="50vw"
                className="w-[90%] max-w-[260px] h-auto"
              />
            </div>
          </div>
        </div>

        {/* ===================== DESKTOP (≥ lg) ===================== */}
        <div className="relative mx-auto hidden lg:block w-full max-w-[1200px] lg:h-[820px] xl:h-[880px]">
          {/* TEXTO CENTRAL (solo desktop; oculto en mobile) */}
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
            className="hidden lg:block absolute z-30 left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 text-center px-4"
            style={{ width: "min(44rem, 90vw)" }}
            aria-hidden="true"
          >
            <motion.h3
              variants={child}
              className="text-[#5b4b2f] font-semibold leading-[1.22] text-[clamp(1.5rem,2.2vw,2rem)]"
            >
              Premium-quality products, for
              <br />
              flawless, long lasting results
            </motion.h3>

            <motion.div variants={child} className="mt-5">
              <Link
                href="#book"
                className="group relative inline-block text-[clamp(1.05rem,1.9vw,1.35rem)] font-semibold tracking-wide text-[#b08974]"
              >
                <span className="relative z-10">Book Your Makeup Session Today</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 bg-[#b08974]/60 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          </motion.div>

          {/* IMÁGENES ABSOLUTAS (tus ajustes de desktop) */}
          <div className="absolute pointer-events-none" style={{ top: "1%", right: "33%", width: "230px" }}>
            <Image src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529913/swatches_ndobqw.png" alt="Color palette" width={800} height={800} className="w-full h-auto" />
          </div>
          <div className="absolute pointer-events-none" style={{ top: "28%", right: "8%", width: "220px" }}>
            <Image src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/brush_wxbmfn.png" alt="Brush set" width={700} height={700} className="w-full h-auto" />
          </div>
          <div className="absolute pointer-events-none" style={{ top: "54%", left: "8%", width: "300px" }}>
            <Image src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529910/swatches_nude_shbspo.png" alt="Nude swatches" width={600} height={400} className="w-full h-auto" />
          </div>
          <div className="absolute pointer-events-none" style={{ top: "22%", left: "7%", width: "220px" }}>
            <Image src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529909/lips2_umfpqg.png" alt="Lipstick splash" width={650} height={650} className="w-full h-auto" />
          </div>
          <div className="absolute pointer-events-none" style={{ bottom: "6%", left: "50%", transform: "translateX(-50%)", width: "210px", zIndex: 20 }}>
            <Image src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/lips_ysgugp.png" alt="Lipstick" width={600} height={600} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
