"use client";

import Image from "next/image";

export default function Portfolio() {
  const IMAGES = [
    { src: "/images/waleska/galery-1.png", fallback: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/portfolio1.png" },
    { src: "/images/waleska/galery-2.png", fallback: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/portfolio2.png" },
    { src: "/images/waleska/galery-3.png", fallback: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/portfolio3.png" },
    { src: "/images/waleska/birdal-card.png", fallback: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/portfolio5.png" },
    { src: "/images/waleska/social-makeup.png", fallback: "https://res.cloudinary.com/da6il8qmv/image/upload/v1760529905/portfolio4.png" },
  ];

  return (
    <section id="portfolio" style={{ background: "linear-gradient(180deg,#1a120c 0%, #25180f 100%)" }} className="py-16 md:py-20">
      <div className="container flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/3 text-white">
          <span className="text-sm tracking-widest uppercase text-[#d9c8a8]">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Real beauty, real results</h2>
          <p className="mt-4 text-[#f7efe6]/80 max-w-[40ch]">Take a look at some of my recent work and transformations.</p>
          <a href="#" className="inline-block mt-6 bg-[#B8956A] text-[#21180f] px-5 py-3 rounded-full">View Full Portfolio</a>
        </div>

        <div className="lg:w-2/3">
          <div className="flex gap-4 items-center overflow-x-auto no-scrollbar py-2">
            {IMAGES.map((img, i) => (
              <div key={i} className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[160px] rounded-xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.35)]">
                <Image
                  src={img.src}
                  alt={`Portfolio ${i + 1}`}
                  width={420}
                  height={560}
                  className="object-cover w-full h-full"
                  onError={(e) => { e.currentTarget.src = img.fallback; }}
                />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#b88a2b]/70" />
            <span className="w-2 h-2 rounded-full bg-[#fff]/30" />
            <span className="w-2 h-2 rounded-full bg-[#fff]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
