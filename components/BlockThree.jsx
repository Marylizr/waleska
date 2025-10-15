"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlockThree() {
  // Animaciones sutiles SOLO para el texto
  const fadeUpParent = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.1 },
    },
  };
  const fadeUpChild = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="premium-products" className="relative py-16 md:py-24 bg-[#fafafa]">
      <div className="container">
        {/* Lienzo fijo para desktop */}
        <div className="relative mx-auto w-full max-w-[1200px] lg:h-[820px] xl:h-[880px]">
          {/* TEXTO CENTRAL */}
          <motion.div
            variants={fadeUpParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
            className="absolute z-30 left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 text-center px-4"
            style={{ width: "min(44rem, 90vw)" }}
          >
            <motion.h3
              variants={fadeUpChild}
              className="text-[#5b4b2f] font-semibold leading-[1.22] text-[clamp(1.5rem,2.2vw,2rem)]"
            >
              Premium-quality products, for
              <br />
              flawless, long lasting results
            </motion.h3>

            <motion.div variants={fadeUpChild} className="mt-5">
              <Link
                href="#book"
                className="group relative inline-block text-[clamp(1.05rem,1.9vw,1.35rem)] font-semibold tracking-wide text-[#b08974]"
              >
                <span className="relative z-10">Book Your Makeup Session Today</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 bg-[#b08974]/60 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ===== IMÁGENES (quietas) ===== */}
          {/* Paleta — arriba/derecha */}
          <div
            className="hidden lg:block absolute pointer-events-none"
            style={{ top: "1%", right: "33%", width: "230px" }}
          >
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529913/swatches_ndobqw.png"
              alt="Color palette"
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </div>

          {/* Brochas — centro/derecha */}
          <div
            className="hidden lg:block absolute pointer-events-none"
            style={{ top: "28%", right: "8%", width: "220px" }}
          >
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/brush_wxbmfn.png"
              alt="Brush set"
              width={700}
              height={700}
              className="w-full h-auto"
            />
          </div>

          {/* Swatches nude — centro/izquierda */}
          <div
            className="hidden lg:block absolute pointer-events-none"
            style={{ top: "54%", left: "8%", width: "300px" }}
          >
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529910/swatches_nude_shbspo.png"
              alt="Nude swatches"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Lipstick splash — arriba/izquierda (MÁS a la izquierda y MÁS grande) */}
          <div
            className="hidden lg:block absolute pointer-events-none"
            style={{ top: "22%", left: "7%", width: "220px" }}
          >
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529909/lips2_umfpqg.png"
              alt="Lipstick splash"
              width={650}
              height={650}
              className="w-full h-auto"
            />
          </div>

          {/* Lipstick base — abajo/centro (más grande para la proporción) */}
          <div
            className="hidden lg:block absolute pointer-events-none"
            style={{ bottom: "6%", left: "50%", transform: "translateX(-50%)", width: "210px", zIndex: 20 }}
          >
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/lips_ysgugp.png"
              alt="Lipstick"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* ===== MÓVIL: grid simple ===== */}
          <div className="lg:hidden grid grid-cols-2 gap-6">
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529913/swatches_ndobqw.png"
              alt="Palette"
              width={800}
              height={800}
              className="w-full h-auto"
            />
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/brush_wxbmfn.png"
              alt="Brushes"
              width={500}
              height={500}
              className="w-full h-auto"
            />
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529910/swatches_nude_shbspo.png"
              alt="Nude swatches"
              width={400}
              height={300}
              className="col-span-2 w-full h-auto"
            />
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529909/lips2_umfpqg.png"
              alt="Lipstick splash"
              width={650}
              height={650}
              className="w-full h-auto"
            />
            <Image
              src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529911/lips_ysgugp.png"
              alt="Lipstick"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
