import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Map,
  Sparkles,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Recycle,
  ArrowRight,
  Bookmark,
  Compass,
  Zap,
  Hammer,
  Megaphone,
  Truck,
} from "lucide-react";

export default function LashingSection() {
  const problems = [
    {
      title: "Tantangan Produksi",
      desc: "Keterbatasan teknik pengolahan, variasi desain yang masih sedikit, dan kualitas finishing yang belum konsisten untuk bersaing di pasar luas.",
      icon: <Hammer className="h-5 w-5 text-[#2E5A44]" />,
    },
    {
      title: "Tantangan Manajemen & Pasar",
      desc: "Pelaku usaha rumahan masih minim strategi branding, pencatatan keuangan belum terstruktur, dan belum memanfaatkan platform digital secara optimal.",
      icon: <Megaphone className="h-5 w-5 text-[#2E5A44]" />,
    },
    {
      title: "Tantangan Rantai Pasok",
      desc: "Kurangnya koordinasi dan belum tersedianya wadah pengumpulan limbah tali plastik industri secara terstruktur di tingkat komunitas warga.",
      icon: <Truck className="h-5 w-5 text-[#2E5A44]" />,
    },
  ];

  const solutions = [
    {
      title: "Inovasi Alat & Desain",
      desc: "Menghadirkan alat bantu anyaman khusus untuk mempercepat produksi dan merancang minimal 5 variasi desain produk baru yang berdaya saing tinggi.",
      icon: <Zap className="h-6 w-6 text-brand-green-light" />,
    },
    {
      title: "Digitalisasi & Tata Kelola",
      desc: "Memberikan edukasi pembukuan usaha yang ringkas serta membawa produk lokal ini go-digital melalui platform e-commerce seperti Shopee dan katalog media sosial Instagram.",
      icon: <TrendingUp className="h-6 w-6 text-brand-green-light" />,
    },
  ];

  return (
    <div className="bg-[#F5F4F0] dark:bg-[#121314] transition-colors duration-300">
      
      {/* SECTION 1: Pilih Wilayah Eksplorasi (Setelah Hero Section) */}
      <section id="eksplorasi" className="px-5 sm:px-6 lg:px-8 py-24 md:py-28 max-w-[1440px] mx-auto scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
            <Map className="h-4 w-4" />
            Eksplorasi Program Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
            Pilih Wilayah Pengabdian KKN
          </h2>
          <div className="h-[2px] w-12 bg-brand-green-dark/30 mx-auto my-2" />
          <p className="text-sm sm:text-base text-brand-charcoal/60 leading-relaxed font-sans max-w-2xl mx-auto">
            Mulai penelusuran Anda dengan mengunjungi laman khusus masing-masing wilayah untuk melihat program kerja terperinci, katalog produk, dan peta interaktif.
          </p>
        </div>

        {/* Two Big Cards for Tandang and Jangli (Editorial Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Jangli */}
          <div className="relative bg-white dark:bg-brand-charcoal p-8 sm:p-10 rounded-3xl border border-brand-charcoal/5 shadow-sm hover:border-brand-green-dark/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out group overflow-hidden">
            {/* Editorial Number */}
            <span className="font-serif text-[7.5rem] font-light text-brand-green-dark/[0.04] dark:text-brand-green-light/[0.02] select-none pointer-events-none absolute right-6 top-2 leading-none">
              01
            </span>
            
            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green-dark bg-brand-green-dark/5 px-2.5 py-1 rounded-md">
                Kelurahan Binaan 1
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-brand-charcoal leading-tight pt-2">
                Kelurahan Jangli
              </h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed font-sans pt-2">
                Jelajahi sentra kriya daur ulang lashing di RW 04 Jangli. Temukan pemetaan sebaran pengrajin lokal, program kerja digitalisasi manajemen, dan dokumentasi program multidisiplin keilmuan mahasiswa.
              </p>
            </div>
            
            <div className="pt-8 relative z-10">
              <Link
                href="/jangli"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-charcoal dark:text-brand-cream hover:text-brand-green-dark dark:hover:text-brand-green-light transition-colors duration-300 group/btn"
              >
                Eksplorasi Wilayah Jangli
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Card Tandang */}
          <div className="relative bg-white dark:bg-brand-charcoal p-8 sm:p-10 rounded-3xl border border-brand-charcoal/5 shadow-sm hover:border-brand-green-dark/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out group overflow-hidden">
            {/* Editorial Number */}
            <span className="font-serif text-[7.5rem] font-light text-brand-green-dark/[0.04] dark:text-brand-green-light/[0.02] select-none pointer-events-none absolute right-6 top-2 leading-none">
              02
            </span>

            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green-dark bg-brand-green-dark/5 px-2.5 py-1 rounded-md">
                Kelurahan Binaan 2
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-brand-charcoal leading-tight pt-2">
                Kelurahan Tandang
              </h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed font-sans pt-2">
                Telusuri sentra kriya lashing di RW 10 Tandang. Lihat revitalisasi showroom kriya bersama Karang Taruna, dokumentasi pelatihan 5 produk inovatif, digital marketing, serta program keberlanjutan bank sampah.
              </p>
            </div>
            
            <div className="pt-8 relative z-10">
              <Link
                href="/tandang"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-charcoal dark:text-brand-cream hover:text-brand-green-dark dark:hover:text-brand-green-light transition-colors duration-300 group/btn"
              >
                Eksplorasi Wilayah Tandang
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Pengenalan Komoditas & Mitra Utama (Who & Product) */}
      <section className="bg-white dark:bg-[#1A1B1D] px-5 sm:px-6 lg:px-8 py-24 md:py-32 border-t border-brand-charcoal/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left - Narration */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
              <Recycle className="h-3.5 w-3.5" />
              Komoditas & Mitra Utama
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
              Mengubah Limbah Menjadi <br />
              <span className="italic font-medium text-brand-green-dark">Karya Kriya Berharga</span>
            </h2>
            <div className="h-[2px] w-12 bg-brand-green-dark/30 my-4" />
            
            {/* Elegant quote block */}
            <div className="border-l-4 border-brand-green-dark pl-4 py-1.5 bg-brand-green-dark/5 dark:bg-brand-green-dark/10 rounded-r-xl my-6">
              <p className="text-sm font-medium text-brand-green-dark dark:text-brand-green-light italic leading-relaxed font-sans">
                "Mengubah strapping band sisa industri elektronik menjadi kriya anyaman serbaguna bernilai jual tinggi untuk mendukung kemandirian ekonomi lokal."
              </p>
            </div>
            
            {/* Custom bullet points with Leaf icon */}
            <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/70 dark:text-brand-cream/80 leading-relaxed font-sans pt-2">
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-brand-green-dark/10 text-brand-green-dark flex items-center justify-center flex-shrink-0 mt-1">
                  <Bookmark className="h-3 w-3" />
                </div>
                <p>
                  <strong>Tali Lashing</strong> merupakan limbah strapping band plastik tebal berkekuatan tinggi sisa industri pengemasan elektronik (seperti pabrik Polytron). Melalui program KKN, bahan ini didaur ulang kreatif menjadi tas belanja serbaguna berkualitas premium.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-5 w-5 rounded-full bg-brand-green-dark/10 text-brand-green-dark flex items-center justify-center flex-shrink-0 mt-1">
                  <Bookmark className="h-3 w-3" />
                </div>
                <p>
                  <strong>UMKM Pengrajin Lokal</strong> di kelurahan Jangli dan Tandang menjadi jantung dari gerakan pemberdayaan ini. Kami bekerja sama langsung dengan kelompok dasawisma, ibu-ibu PKK, dan pengrajin rumahan untuk mewujudkan kemandirian finansial yang berkelanjutan.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Product Highlight Visual (Asymmetric Collage Frame) */}
          <div className="lg:col-span-5 flex justify-center w-full pt-6 lg:pt-0">
            <div className="relative w-full max-w-[460px] aspect-[4/3] group select-none">
              {/* Decorative offset bg card using backimage.png */}
              <div className="absolute inset-0 rounded-3xl translate-x-3.5 translate-y-3.5 rotate-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:rotate-0 overflow-hidden opacity-95 border border-brand-charcoal/5 shadow-md">
                <Image
                  src="/backimage.png"
                  alt="Dekorasi Latar"
                  fill
                  sizes="(max-w-7xl) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border border-brand-charcoal/5 bg-brand-cream z-10">
                <Image
                  src="/lashing-artisan.jpg"
                  alt="Pengrajin Tali Lashing"
                  fill
                  priority
                  sizes="(max-w-7xl) 100vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Peta Masalah Industri Daur Ulang (Why) */}
      <section className="px-5 sm:px-6 lg:px-8 py-24 md:py-28 max-w-[1440px] mx-auto border-t border-brand-charcoal/5">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2E5A44] text-[#F5F4F0] border border-[#2E5A44]/15 shadow-sm">
            <AlertTriangle className="h-3.5 w-3.5 text-brand-green-light" />
            Identifikasi Tantangan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
            Peta Masalah <span className="text-brand-green-dark font-serif italic">Industri Kriya Daur Ulang</span>
          </h2>
          <div className="h-[2px] w-12 bg-brand-green-dark/30 mx-auto my-2" />
          <p className="text-sm sm:text-base text-brand-charcoal/60 leading-relaxed font-sans max-w-xl mx-auto">
            Analisis hambatan riil yang membatasi pertumbuhan dan konsistensi usaha anyaman daur ulang tali plastik di tingkat akar rumput.
          </p>
        </div>

        {/* 3 Columns Grid for Problems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-brand-charcoal p-8 rounded-3xl border border-brand-charcoal/5 shadow-sm hover:border-[#2E5A44]/25 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Giant editorial number in background - light green/emerald tint */}
              <span className="font-serif text-[7.5rem] font-light text-green-600/[0.06] dark:text-emerald-500/[0.04] select-none pointer-events-none absolute right-4 bottom-2 leading-none">
                {`0${idx + 1}`}
              </span>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brand-green-dark dark:text-brand-green-light uppercase tracking-widest bg-[#2E5A44]/5 dark:bg-brand-green-light/5 px-2.5 py-1 rounded-md">
                    {`Tantangan 0${idx + 1}`}
                  </span>
                  <div className="h-10 w-10 rounded-xl bg-[#2E5A44]/5 dark:bg-brand-green-light/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-brand-charcoal font-sans">
                    {item.title}
                  </h4>
                  <p className="text-sm text-brand-charcoal/65 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Rencana Intervensi / Solusi Makro (How - Deep Forest Green Background Contrast) */}
      <section className="bg-brand-green-dark dark:bg-[#193226] text-white px-5 sm:px-6 lg:px-8 py-24 md:py-32 transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-brand-green-light border border-white/5">
              <Compass className="h-3.5 w-3.5" />
              Rencana Aksi Program
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
              Solusi Kerja & Intervensi KKN
            </h2>
            <div className="h-[2px] w-12 bg-brand-green-light/30 mx-auto my-2" />
            <p className="text-sm sm:text-base text-brand-cream/70 leading-relaxed font-sans max-w-xl mx-auto">
              Program intervensi nyata yang diterapkan mahasiswa KKN Undip untuk menjawab tantangan kriya lokal.
            </p>
          </div>

          {/* 2 Columns Grid for Solutions (Transparent Glassmorphism) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-3xl flex flex-col sm:flex-row gap-6 items-start hover:bg-white/15 transition-all duration-300 group shadow-lg"
              >
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 shadow-sm border border-white/10 text-brand-green-light transition-transform duration-300 group-hover:scale-110">
                  {sol.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white font-sans">
                    {sol.title}
                  </h4>
                  <p className="text-sm text-brand-cream/75 leading-relaxed font-sans">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
