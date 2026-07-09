import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      {/* Dark background placeholder — ganti nanti dengan gambar desa */}
      <div className="absolute inset-0 bg-brand-charcoal" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1.12] tracking-tight">
          Mengabdi dengan Hati,
          <br />
          Membangun Desa Setanjang
        </h1>

        <p className="max-w-xl text-sm sm:text-base text-white/60 leading-relaxed">
          Portal resmi pengabdian KKN Desa Setanjang 2026. Bersama
          masyarakat desa, kami berkolaborasi menciptakan program
          berkelanjutan yang nyata.
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
