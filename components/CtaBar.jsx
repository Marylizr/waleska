"use client";

export default function CtaBar() {
  return (
    <div className="w-full" style={{ background: "linear-gradient(90deg,#b88a2b, #d4b06b)" }}>
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-[#fff]">Ready to look and feel your best?</h3>
          <p className="text-sm text-[#fff]/90 mt-1">Book your appointment today and let's create magic together.</p>
        </div>
        <div>
          <a href="#contact" className="inline-block bg-white text-[#21180f] px-5 py-3 rounded-full font-medium">Book Now</a>
        </div>
      </div>
    </div>
  );
}
