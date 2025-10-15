"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlockFour() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* DESKTOP: foto pegada a la derecha como fondo */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-[58vw] md:w-[52vw] lg:w-[50vw] z-0 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529906/girl_wrxoi5.png"
          alt="Model"
          fill
          priority
          className="object-contain object-right"
          sizes="(min-width:1280px) 50vw, 52vw"
        />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-2 items-center gap-10 md:gap-12">
          {/* Columna izquierda: texto + paleta */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-[#4a3b2a] font-semibold leading-tight text-3xl md:text-5xl max-w-[640px] text-center md:text-left">
              Discover the perfect shade tailored to your unique skin tone
            </h2>

            <p className="mt-6 text-[#4a3b2a]/80 leading-relaxed text-base md:text-lg max-w-[640px] text-center md:text-left">
              Finding the perfect shade isn’t just about color—it’s about harmony.
              The right shade enhances your natural complexion, bringing out your
              unique beauty while complementing your undertones. Whether you’re
              looking for a flawless foundation match, a radiant blush, or the ideal
              lipstick, our expert selection ensures a seamless, natural finish that
              elevates your look effortlessly.
            </p>

            {/* PALETA en desktop: debajo del párrafo (proporcionada) */}
            <div className="mt-8 hidden md:block">
            <Image
               src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529906/palette_vhbis5.png"
               alt="Shade palette"
               width={400}
               height={300}
               priority
               className="hidden md:block md:ml-[11em] md:w-[20em] h-auto object-contain"
               />

            </div>
          </motion.div>

          {/* DERECHA (desktop): espacio; la imagen está en la capa 1 */}
          <div className="hidden md:block h-[680px]" />

          {/* MÓVIL: imagen debajo del texto con paleta superpuesta */}
          <div className="md:hidden mt-8">
            <div className="relative w-full">
              {/* Contenedor con altura para que la imagen respire (ajusta si quieres) */}
              <div className="relative w-full h-[520px] rounded-[8px] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529906/girl_wrxoi5.png"
                  alt="Model"
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                {/* Paleta superpuesta en esquina inferior izquierda */}
                <div className="absolute -bottom-6 left-4">
                  <Image
                    src="https://res.cloudinary.com/da6il8qmv/image/upload/v1760529906/palette_vhbis5.png"
                    alt="Shade palette"
                    width={220}
                    height={160}
                    className="w-[200px] h-auto object-contain drop-shadow-sm"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
