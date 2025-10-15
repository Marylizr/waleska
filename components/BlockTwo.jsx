"use client";

import Image from "next/image";

export default function BlockTwo() {
  return (
    <section
      id="subtle-art"
      className="
        relative
        py-12 md:py-16 lg:py-20
        /* Degradado gris → transparente para fundir con el fondo beige global */
        bg-[linear-gradient(90deg,#eeeeee_0%,rgba(238,238,238,0.85)_40%,rgba(238,238,238,0)_75%)]
      "
    >
      <div className="container relative">
        {/* Divisor vertical suave (solo desktop) */}
        <div className="hidden lg:block pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.10),transparent)]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Imagen izquierda (ocupa ~mitad) */}
          <div className="lg:col-span-6">
            <div className="relative w-full">
              <Image
                src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529912/marylizr_very_beautiful_model_no_makeup_clean_face_and_white_ba_5d74692c-f083-4332-975e-90e3d17e4564_uwpapn.png"
                alt="Subtle beauty portrait"
                width={1200}
                height={820}
                priority={false}
                sizes="(min-width:1280px) 50vw, (min-width:1024px) 50vw, 100vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Texto derecha */}
          <div className="lg:col-span-6">
            <h2 className="text-[#5b4b2f] font-semibold text-center lg:text-left leading-tight text-[clamp(1.75rem,3.6vw,2.5rem)]">
              The Subtle Art of Elevating
              <br /> Women’s Beauty Through
              <br /> Makeup
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-neutral-700 max-w-[62ch] mx-auto lg:mx-0">
              <p>
                Each stroke, blend, and finish is carefully curated to reflect
                personality, mood, and moment. A dewy glow for effortless
                elegance, a bold lip to make a statement, a sultry eye that
                captivates with mystery—makeup transforms, but never overpowers.
              </p>
              <p>
                At its core, makeup is about empowerment. When a woman feels
                beautiful, she radiates confidence from within. The way she carries
                herself, the way she smiles, the way she steps into the world—it’s
                all touched by the power of artistry.
              </p>
              <p>
                Beauty isn’t created—it’s revealed. And makeup, when done right, is
                simply the brushstroke that highlights the masterpiece that already
                exists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
