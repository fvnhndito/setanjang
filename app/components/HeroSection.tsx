"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const handleScrollToExploration = () => {
    const el = document.getElementById("eksplorasi");
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/image-home.svg"
        alt="KKN Setanjang"
        fill
        priority
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-8 pt-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-medium text-white leading-[1.2] tracking-tight font-serif max-w-4xl">
          Gerakan Pemberdayaan Ekonomi Kreatif Berkelanjutan Berbasis Daur Ulang Limbah Tali Plastik Industri
        </h1>

        <p className="text-base sm:text-lg text-white/85 max-w-3xl leading-relaxed font-sans">
          Kolaborasi nyata program KKN IDBU 70 Universitas Diponegoro yang bergerak serentak di dua wilayah, yaitu Kelurahan Tandang dan Kelurahan Jangli.
        </p>

        <div className="pt-4 animate-bounce">
          <button
            onClick={handleScrollToExploration}
            style={{ backgroundColor: "#2E5A44", color: "#F5F4F0" }}
            className="h-12 w-12 rounded-full flex items-center justify-center hover:opacity-90 shadow-md transition-opacity duration-300"
            aria-label="Scroll to exploration"
          >
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
