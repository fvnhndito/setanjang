import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ArrowRight, Beaker, Users, GraduationCap, MapPin } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "1.500 Ha", label: "Luas Wilayah" },
  { value: "4.200", label: "Jiwa Penduduk" },
  { value: "8 RW", label: "Total Rukun Warga" },
  { value: "Agroekologi", label: "Potensi Utama" },
];

export default function TandangPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* HERO SECTION TANDANG (Matching Home Hero Style) */}
        <section className="relative min-h-[92vh] flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-brand-charcoal" />
          {/* Placeholder for Tandang Hero Image */}
          {/* <Image src="/path-to-tandang-image.jpg" alt="Tandang Hero" fill className="object-cover object-center opacity-50" /> */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.12] tracking-tight">
              Eksplorasi Potensi,
              <br />
              Kelurahan Tandang
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Selamat datang di halaman khusus Kelurahan Tandang. Jelajahi berbagai program kerja,
              potensi wilayah, dan kolaborasi warga bersama tim KKN Setanjang.
            </p>

            <a
              href="#profil-tandang"
              className="mt-4 px-8 py-4 rounded-full bg-white text-sm font-semibold text-brand-charcoal hover:bg-brand-cream transition-colors duration-300 flex items-center gap-2"
            >
              Mulai Menjelajah
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* PROFIL KELURAHAN (Pindahan dari Home) */}
        <section id="profil-tandang" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-brand-charcoal/8">
              {/* Left — Dark Panel with Stats */}
              <div className="bg-brand-charcoal p-10 md:p-14 flex flex-col justify-between min-h-[420px]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green-light">
                    Profil Kelurahan
                  </span>
                  <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-white leading-tight">
                    Mengenal Lebih Dekat
                    <br />
                    Kelurahan Tandang
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-10">
                  {stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-2xl sm:text-3xl font-serif font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Text Content */}
              <div className="p-10 md:p-14 flex flex-col justify-center gap-6 bg-brand-cream">
                <p className="text-base text-brand-charcoal/65 leading-relaxed">
                  Kelurahan Tandang dikenal sebagai kawasan yang kaya akan potensi pertanian
                  organik dan inovasi lingkungan. Dukungan kuat dari masyarakat membuat Tandang
                  menjadi pusat ekosistem agroekologi di wilayah ini.
                </p>
                <p className="text-base text-brand-charcoal/65 leading-relaxed">
                  Fokus program KKN di Tandang meliputi pendampingan UMKM produk lokal, 
                  edukasi pertanian berkelanjutan, pengembangan ruang publik ramah anak, 
                  serta inovasi daur ulang limbah menjadi kerajinan produktif.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MD 2 - SAINTEK */}
        <section id="md2-saintek" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-[#F5F4F0]">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">
                  Multidisiplin 2
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-brand-charcoal leading-tight">
                  Program Saintek
                </h2>
              </div>
              <p className="text-base text-brand-charcoal/60 leading-relaxed max-w-md">
                Penerapan ilmu sains dan teknologi untuk memecahkan permasalahan teknis dan
                mendukung infrastruktur di Kelurahan Tandang.
              </p>
            </div>

            {/* Template Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-3xl p-8 border border-brand-charcoal/5 hover:border-brand-charcoal/20 transition-all duration-300">
                  <div className="h-12 w-12 rounded-full bg-brand-green-dark/10 flex items-center justify-center mb-6">
                    <Beaker className="h-5 w-5 text-brand-green-dark" />
                  </div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">
                    Judul Program Saintek {item}
                  </h3>
                  <p className="text-sm text-brand-charcoal/60 leading-relaxed mb-6">
                    Deskripsi singkat mengenai program Saintek ini. Silakan isi dengan detail
                    seperti tujuan, sasaran, dan hasil luaran dari program.
                  </p>
                  <a href="#" className="text-sm font-semibold text-brand-green-dark flex items-center gap-2 group">
                    Detail Program
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MD 2 - SOSHUM */}
        <section id="md2-soshum" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">
                  Multidisiplin 2
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-brand-charcoal leading-tight">
                  Program Soshum
                </h2>
              </div>
              <p className="text-base text-brand-charcoal/60 leading-relaxed max-w-md">
                Pendekatan ilmu sosial dan humaniora untuk meningkatkan kapasitas warga, 
                literasi, dan kesejahteraan sosial di Kelurahan Tandang.
              </p>
            </div>

            {/* Template Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-brand-cream rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02]">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                    <GraduationCap className="h-5 w-5 text-brand-charcoal" />
                  </div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">
                    Judul Program Soshum {item}
                  </h3>
                  <p className="text-sm text-brand-charcoal/60 leading-relaxed mb-6">
                    Deskripsi singkat mengenai program Soshum ini. Silakan isi dengan detail
                    seperti tujuan, sasaran, dan hasil luaran dari program.
                  </p>
                  <a href="#" className="text-sm font-semibold text-brand-charcoal flex items-center gap-2 group">
                    Detail Program
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOSMAS */}
        <section id="sosmas" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-[#F5F4F0]">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">
                  Sosial Masyarakat
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-brand-charcoal leading-tight">
                  Program Sosmas
                </h2>
              </div>
              <p className="text-base text-brand-charcoal/60 leading-relaxed max-w-md">
                Kegiatan pengabdian langsung yang melibatkan gotong royong dan 
                interaksi erat dengan masyarakat luas di Kelurahan Tandang.
              </p>
            </div>

            {/* Template Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((item) => (
                <div key={item} className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-charcoal/5 flex flex-col md:flex-row gap-8 items-center hover:border-brand-charcoal/20 transition-all duration-300">
                  <div className="h-24 w-24 shrink-0 rounded-full bg-brand-green-dark/10 flex items-center justify-center">
                    <Users className="h-10 w-10 text-brand-green-dark" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-brand-charcoal mb-3">
                      Kegiatan Sosmas {item}
                    </h3>
                    <p className="text-sm text-brand-charcoal/60 leading-relaxed mb-4">
                      Deskripsi lengkap tentang kegiatan sosial kemasyarakatan yang dilakukan.
                      Misalnya kerja bakti, edukasi massal, atau penyuluhan kesehatan.
                    </p>
                    <a href="#" className="text-sm font-semibold text-brand-green-dark flex items-center gap-2 group">
                      Lihat Dokumentasi
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
