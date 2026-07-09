import { ArrowRight } from "lucide-react";
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
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.12] tracking-tight">
          Mengabdi dengan Hati,
          <br />
          Membangun Jangli & Tandang
        </h1>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
          Portal resmi pengabdian KKN Setanjang 2026. Bersama masyarakat Kelurahan Jangli dan Tandang,
          kami berkolaborasi menciptakan program berkelanjutan yang nyata.
        </p>

        <a
          href="#about"
          style={{ backgroundColor: "#2E5A44", color: "#F5F4F0" }}
          className="mt-2 px-8 py-3.5 rounded-lg text-sm font-medium bg-brand-green-dark text-brand-cream hover:opacity-90 transition-opacity duration-300 flex items-center gap-2 group"
        >
          Jelajahi Program
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
