"use client";

import Image from "next/image";

export default function HeroSection() {
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
          Pemberdayaan Ekonomi Kreatif Berkelanjutan Berbasis Daur Ulang Limbah Tali Plastik Industri
        </h1>

        <p className="text-base sm:text-lg text-white/85 max-w-3xl leading-relaxed font-sans">
          Kolaborasi nyata program KKN IDBU 70 Universitas Diponegoro yang bergerak serentak di dua wilayah, yaitu Kelurahan Tandang dan Kelurahan Jangli.
        </p>      </div>
    </section>
  );
}
