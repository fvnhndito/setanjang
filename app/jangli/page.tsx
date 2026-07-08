"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Logo from "@/app/components/Logo";
import {
  Sparkles,
  Layers,
  Recycle,
  Users,
  MapPin,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BookOpen,
  Award,
  ShieldCheck,
  Share2,
  Store,
  Compass,
  ArrowUpRight
} from "lucide-react";

export default function JangliPage() {
  const synergyPoints = [
    {
      title: "Adopsi Modul & Kerangka Kerja Anyaman (Output 1.1)",
      desc: "Menjawab kendala belum adanya panduan sistematis di RW 4 Jangli melalui penerapan kerangka kerja yang disusun dari sentra pengrajin RW 10 Tandang.",
      icon: <BookOpen className="h-6 w-6 text-brand-green-dark dark:text-brand-green-light" />
    },
    {
      title: "Standarisasi Kualitas & Pola Produk",
      desc: "Pelatihan teknik dasar, tahapan pengerjaan, dan variasi pola agar produk kerajinan yang dihasilkan warga Jangli memiliki konsistensi dan nilai jual tinggi.",
      icon: <Award className="h-6 w-6 text-brand-green-dark dark:text-brand-green-light" />
    },
    {
      title: "Integrasi Ekosistem Digital SETANJANG (Output 1.3)",
      desc: "Produk UMKM dan kerajinan warga Jangli dipromosikan secara terpadu melalui website SETANJANG dan dihubungkan langsung ke jaringan marketplace nasional.",
      icon: <Share2 className="h-6 w-6 text-brand-green-dark dark:text-brand-green-light" />
    },
    {
      title: "Pemberdayaan Pemuda & PKK RW 4",
      desc: "Melibatkan Karang Taruna, ibu-ibu PKK, dan warga usia produktif dalam pengolahan limbah tali plastik sebagai peluang ekonomi kreatif rumah tangga.",
      icon: <Users className="h-6 w-6 text-brand-green-dark dark:text-brand-green-light" />
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col pt-20 bg-brand-cream dark:bg-[#121314] transition-colors duration-300">
        
        {/* HERO SECTION JANGLI */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 py-16 md:py-24 overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/3 right-10 w-[28rem] h-[28rem] rounded-full bg-brand-green-light/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brand-green-dark/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green-dark/10 dark:bg-brand-green-light/10 border border-brand-green-dark/20 dark:border-brand-green-light/20">
                <Compass className="h-4 w-4 text-brand-green-dark dark:text-brand-green-light animate-spin-slow" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green-dark dark:text-brand-green-light font-sans">
                  Mitra Sinergi Kriya • KKN-T IDBU 70
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-brand-charcoal dark:text-brand-cream leading-[1.15] tracking-tight">
                Kelurahan Jangli: <br />
                <span className="italic font-medium text-brand-green-dark dark:text-brand-green-light">
                  Pengembangan Kriya & Rantai Nilai
                </span>
              </h1>

              <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-brand-charcoal/75 dark:text-brand-cream/75 leading-relaxed font-sans">
                Membuka potensi pemanfaatan limbah tali plastik di <strong className="text-brand-charcoal dark:text-brand-cream">RW 4 Kelurahan Jangli</strong> melalui adopsi panduan sistematis anyaman dan kolaborasi pemasaran digital dalam ekosistem <strong className="text-brand-green-dark dark:text-brand-green-light">SETANJANG</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#potensi-rw4"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-semibold text-sm bg-brand-green-dark text-brand-cream hover:bg-brand-green-dark/90 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 group"
                >
                  <Store className="h-4 w-4" />
                  Potensi UMKM RW 4 Jangli
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="/tandang"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-semibold text-sm border border-brand-charcoal/20 dark:border-brand-cream/20 text-brand-charcoal dark:text-brand-cream hover:bg-brand-charcoal/5 dark:hover:bg-brand-cream/5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Lihat Sentra Tandang
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-square rounded-3xl p-3 bg-white dark:bg-brand-charcoal/80 shadow-2xl border border-brand-charcoal/10 dark:border-brand-cream/10 group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brand-cream">
                  <Image
                    src="/waste_bank_sorting.png"
                    alt="Kegiatan Warga Kelurahan Jangli"
                    fill
                    priority
                    sizes="(max-w-7xl) 100vw, 480px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="px-2.5 py-1 rounded-md bg-brand-green-light text-[11px] font-bold uppercase tracking-wider">
                      Fokus RW 4 Jangli
                    </span>
                    <h3 className="text-xl font-serif font-bold leading-snug">
                      Optimalisasi Kriya Limbah Plastik
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2">
                      Pengembangan keterampilan teknik dasar dan pola anyaman untuk menghasilkan produk kerajinan bernilai tinggi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POTENSI & TANTANGAN RW 4 JANGLI */}
        <section id="potensi-rw4" className="py-20 px-6 sm:px-8 lg:px-12 bg-white dark:bg-[#1a1b1d] border-y border-brand-charcoal/5 dark:border-brand-cream/5">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark dark:text-brand-green-light">
                ANALISIS WILAYAH
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-brand-charcoal dark:text-brand-cream">
                Potensi UMKM RW 4 Kelurahan Jangli
              </h2>
              <p className="text-base text-brand-charcoal/70 dark:text-brand-cream/70 font-sans">
                Wilayah Jangli memiliki semangat kewirausahaan warga yang tinggi dan sumber daya manusia yang siap dibina untuk mengembangkan kriya ramah lingkungan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="p-8 md:p-10 rounded-3xl bg-brand-cream dark:bg-brand-charcoal/50 border border-brand-charcoal/10 dark:border-brand-cream/10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Kondisi Awal & Tantangan
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-charcoal dark:text-brand-cream">
                    Belum Adanya Kerangka Kerja Sistematis
                  </h3>
                  <p className="text-sm sm:text-base text-brand-charcoal/75 dark:text-brand-cream/75 leading-relaxed font-sans">
                    Pelaku UMKM di RW 4 Kelurahan Jangli memiliki minat besar dalam memanfaat limbah tali plastik sebagai bahan baku kerajinan bernilai ekonomi. Namun, pemanfaatan tersebut belum dilakukan secara optimal karena belum adanya panduan teknik dasar yang seragam.
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-brand-charcoal/10 dark:border-brand-cream/10">
                  <li className="text-xs text-brand-charcoal/80 dark:text-brand-cream/80 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    Keterbatasan pengetahuan teknik dasar & tahapan pengerjaan
                  </li>
                  <li className="text-xs text-brand-charcoal/80 dark:text-brand-cream/80 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    Hasil produk belum seragam & nilai jual masih belum maksimal
                  </li>
                </ul>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-brand-green-dark text-brand-cream flex flex-col justify-between space-y-6 shadow-xl">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-brand-green-light text-xs font-bold uppercase tracking-wider">
                    Solusi KKN-T IDBU 70
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Implementasi Panduan & Standarisasi Kriya
                  </h3>
                  <p className="text-sm sm:text-base text-brand-cream/90 leading-relaxed font-sans">
                    Melalui program Multidisiplin 1, tim KKN menghadirkan <strong className="text-brand-green-light">Kerangka Pengerjaan Anyaman Limbah Tali Plastik (Output 1.1)</strong> sebagai panduan pembuatan produk kerajinan bagi UMKM dan masyarakat Jangli.
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-white/15">
                  <li className="text-xs text-brand-cream flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-green-light shrink-0" />
                    Pelatihan intensif kepada Ibu PKK, pemuda, & pelaku UMKM
                  </li>
                  <li className="text-xs text-brand-cream flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-green-light shrink-0" />
                    Eksplorasi variasi pola anyaman yang bernilai jual tinggi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SINERGI SETANJANG */}
        <section className="py-24 px-6 sm:px-8 lg:px-12 bg-brand-cream dark:bg-[#121314]">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark dark:text-brand-green-light">
                KOLABORASI ANTAR KELURAHAN
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-brand-charcoal dark:text-brand-cream">
                Sinergi SE-TANJANG (Tandang & Jangli)
              </h2>
              <div className="h-[2px] w-20 bg-brand-green-dark/30 dark:bg-brand-green-light/30 mx-auto my-4" />
              <p className="text-base text-brand-charcoal/70 dark:text-brand-cream/70 font-sans">
                Konsep <strong className="text-brand-green-dark dark:text-brand-green-light">SETANJANG</strong> memadukan keunggulan sentra produksi Tandang dengan potensi ekspansi pasar dan regenerasi kriya di Jangli dalam satu ekosistem terpadu.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {synergyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-brand-charcoal p-8 rounded-3xl border border-brand-charcoal/5 dark:border-brand-cream/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-2xl bg-brand-green-dark/10 dark:bg-brand-green-light/10 flex items-center justify-center">
                      {point.icon}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-brand-charcoal dark:text-brand-cream leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-xs text-brand-charcoal/70 dark:text-brand-cream/70 leading-relaxed font-sans">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-brand-charcoal text-brand-cream/80 dark:bg-black py-16 px-6 sm:px-8 lg:px-12 border-t border-brand-cream/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <Logo size="md" />
            <p className="text-xs text-brand-cream/60 max-w-md">
              Program Multidisiplin 1 KKN-T IDBU 70 • Pemberdayaan UMKM Ekonomi Kreatif Berkelanjutan Berbasis Daur Ulang Limbah Tali Plastik Industri di Kelurahan Tandang dan Jangli, Kota Semarang.
            </p>
          </div>
          <div className="flex gap-6 text-xs text-brand-cream/60">
            <a href="/" className="hover:text-brand-green-light transition-colors">Home</a>
            <a href="/tandang" className="hover:text-brand-green-light transition-colors">Kelurahan Tandang</a>
            <a href="#potensi-rw4" className="hover:text-brand-green-light transition-colors">Potensi RW 4</a>
          </div>
        </div>
      </footer>
    </>
  );
}
