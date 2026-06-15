"use client";

export default function Testimonials() {
  const items = [
    { quote: "Waleska is simply amazing! She made me feel so beautiful on my wedding day. Highly recommend her.", name: "Maria G.", role: "Bride" },
    { quote: "Professional, talented and such a lovely person. My makeup lasted all night and looked perfect in photos.", name: "Carolina R.", role: "Event Client" },
    { quote: "The best makeup artist! She knows exactly what works for you and enhances your natural beauty.", name: "Valeria P.", role: "Photoshoot Client" },
  ];

  return (
    <section id="testimonials" className="py-16 bg-[#fbf7ef]">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[12px] tracking-[0.14em] uppercase text-[#B8956A]">Testimonials</span>
          <h2 className="font-display text-3xl mt-4">What my clients say</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <blockquote key={i} className="rounded-2xl p-6 bg-white shadow-[0_12px_30px_rgba(42,31,20,0.06)]">
              <div className="text-yellow-400 mb-2">★★★★★</div>
              <p className="text-sm text-[#2A1F14]/80">“{it.quote}”</p>
              <div className="mt-4 text-sm font-semibold">{it.name}</div>
              <div className="text-[13px] text-[#6f5a42]">{it.role}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
