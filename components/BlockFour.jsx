"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

export default function BlockFour({ t = {} }) {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#FAF7F2" }}>
      {/* Desktop: full-bleed portrait on the right */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-[52vw] z-0 pointer-events-none">
        <Image
          src="/images/waleska/photoshoot.png"
          alt="Photoshoot makeup look"
          fill
          priority
          className="object-contain object-right"
          sizes="52vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 items-center gap-10 md:gap-12">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease }}
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col justify-center"
          >
            <span className="flex items-center gap-3 mb-5">
              <span className="block h-px w-8 bg-[#B8956A]/60" />
              <span className="text-[12px] tracking-[0.14em] uppercase font-body text-[#B8956A]">
                {t.eyebrow ?? "Your Perfect Match"}
              </span>
            </span>

            <h2 className="font-display font-semibold text-[#2A1F14] leading-[1.1] text-[clamp(2rem,3.6vw,3rem)] max-w-[520px]">
              {t.heading ?? "Discover the perfect shade tailored to your unique skin tone"}
            </h2>

            <p className="mt-6 font-body text-[15px] leading-[1.85] text-[#2A1F14]/65 max-w-[52ch]">
              {t.p}
            </p>

            {/* Palette — desktop only, below paragraph */}
            <div className="mt-9 hidden md:block">
              <Image
                src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529906/palette_vhbis5.png"
                alt="Shade palette"
                width={400}
                height={300}
                priority
                className="w-[18rem] h-auto object-contain opacity-90"
              />
            </div>
          </motion.div>

          {/* Desktop spacer so image layer fills the right half */}
          <div className="hidden md:block h-[640px]" />

          {/* Mobile: portrait + palette overlay.
              The palette is placed OUTSIDE overflow-hidden so it isn't clipped. */}
          <div className="md:hidden mt-6">
            <div className="relative">
              {/* Portrait */}
              <div className="relative w-full h-[460px] rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(42,31,20,0.12)]">
                <Image
                  src="/images/waleska/photoshoot.png"
                  alt="Photoshoot makeup look"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              {/* Palette floats outside the overflow-hidden rounded box */}
              <div className="absolute -bottom-6 left-3 z-10">
                <Image
                  src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529906/palette_vhbis5.png"
                  alt="Shade palette"
                  width={200}
                  height={150}
                  className="w-[170px] h-auto object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </div>
            {/* Spacer so next section doesn't overlap the protruding palette */}
            <div className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
