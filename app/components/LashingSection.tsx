import React from "react";
import Link from "next/link";
import {
  Map,
  BookOpen,
  Sparkles,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Recycle,
  Layers,
  ArrowRight,
  UserCheck,
} from "lucide-react";

export default function LashingSection() {
  const problems = [
    {
      title: "Tantangan Produksi",
      desc: "Keterbatasan teknik pengolahan, variasi desain yang masih sedikit, dan kualitas finishing yang belum konsisten untuk bersaing di pasar luas.",
    },
    {
      title: "Tantangan Manajemen & Pasar",
      desc: "Pelaku usaha rumahan masih minim strategi branding, pencatatan keuangan belum terstruktur, dan belum memanfaatkan platform digital secara optimal.",
    },
    {
      title: "Tantangan Rantai Pasok",
      desc: "Kurangnya koordinasi dan belum tersedianya wadah pengumpulan limbah tali plastik industri secara terstruktur di tingkat komunitas warga.",
    },
  ];

  const solutions = [
    {
      title: "Inovasi Alat & Desain",
      desc: "Menghadirkan alat bantu anyaman khusus untuk mempercepat produksi dan merancang minimal 5 variasi desain produk baru yang berdaya saing tinggi.",
      icon: <Sparkles className="h-6 w-6 text-brand-green-dark" />,
    },
    {
      title: "Digitalisasi & Tata Kelola",
      desc: "Memberikan edukasi pembukuan usaha yang ringkas serta membawa produk lokal ini go-digital melalui platform e-commerce seperti Shopee dan katalog media sosial Instagram.",
      icon: <TrendingUp className="h-6 w-6 text-brand-green-dark" />,
    },
  ];

  return (
    <div className="bg-[#F5F4F0] dark:bg-[#121314] transition-colors duration-300">
      
      {/* SECTION 1: Pilih Wilayah Eksplorasi (Setelah Hero Section) */}
      <section id="eksplorasi" className="px-5 sm:px-6 lg:px-8 py-20 md:py-24 max-w-[1440px] mx-auto scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
            <Map className="h-3.5 w-3.5" />
            Eksplorasi Program Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-charcoal leading-tight">
            Pilih Wilayah Pengabdian KKN
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/60 leading-relaxed font-sans">
            Mulai penelusuran Anda dengan mengunjungi laman khusus masing-masing wilayah untuk melihat program kerja terperinci, katalog produk, dan peta interaktif.
          </p>
        </div>

        {/* Two Big Cards for Tandang and Jangli */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Jangli */}
          <div className="bg-white dark:bg-brand-charcoal p-8 sm:p-10 rounded-3xl border border-brand-charcoal/8 shadow-sm flex flex-col justify-between hover:border-brand-green-dark/20 hover:shadow-md transition-all duration-300 group">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">
                Kelurahan Binaan 1
              </span>
              <h3 className="text-2xl font-serif font-normal text-brand-charcoal leading-tight">
                Kelurahan Jangli
              </h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed font-sans">
                Jelajahi sentra kriya daur ulang lashing di RW 04 Jangli. Temukan pemetaan sebaran pengrajin lokal, program kerja digitalisasi manajemen, dan dokumentasi program multidisiplin keilmuan mahasiswa.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/jangli"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 w-full rounded-xl text-xs font-bold bg-brand-charcoal text-white hover:bg-brand-green-dark transition-colors duration-300 group-hover:shadow"
              >
                Eksplorasi Wilayah Jangli
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Card Tandang */}
          <div className="bg-white dark:bg-brand-charcoal p-8 sm:p-10 rounded-3xl border border-brand-charcoal/8 shadow-sm flex flex-col justify-between hover:border-brand-green-dark/20 hover:shadow-md transition-all duration-300 group">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">
                Kelurahan Binaan 2
              </span>
              <h3 className="text-2xl font-serif font-normal text-brand-charcoal leading-tight">
                Kelurahan Tandang
              </h3>
              <p className="text-sm text-brand-charcoal/60 leading-relaxed font-sans">
                Telusuri sentra kriya lashing di RW 10 Tandang. Lihat revitalisasi showroom kriya bersama Karang Taruna, dokumentasi pelatihan 5 produk inovatif, digital marketing, serta program keberlanjutan bank sampah.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/tandang"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 w-full rounded-xl text-xs font-bold bg-brand-charcoal text-white hover:bg-brand-green-dark transition-colors duration-300 group-hover:shadow"
              >
                Eksplorasi Wilayah Tandang
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Pengenalan Komoditas & Mitra Utama (Who & Product) */}
      <section className="bg-white dark:bg-[#1A1B1D] px-5 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-brand-charcoal/5">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left - Narration */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
              <Recycle className="h-3.5 w-3.5" />
              Komoditas & Mitra Utama
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
              Mengubah Limbah Menjadi <br />
              <span className="italic font-medium text-brand-green-dark">Karya Kriya Bernilai Tinggi</span>
            </h2>
            <div className="h-[2px] w-12 bg-brand-green-dark/30 my-4" />
            
            <div className="space-y-4 text-base text-brand-charcoal/70 leading-relaxed font-sans">
              <p>
                <strong>Tali Lashing</strong> merupakan limbah strapping band plastik tebal yang biasanya dibuang oleh industri perakitan barang elektronik. Padahal, dengan penanganan yang tepat, material polymer tebal ini memiliki potensi besar untuk didaur ulang menjadi produk kriya bernilai estetika dan ekonomi tinggi.
              </p>
              <p>
                <strong>UMKM Pengrajin Lokal</strong> di Kelurahan Jangli dan Tandang menjadi jantung dari gerakan pemberdayaan ini. Kami bekerja sama langsung dengan kelompok dasawisma, ibu-ibu PKK, dan pengrajin rumahan. Kolaborasi ini merangkul dedikasi mereka untuk menganyam limbah plastik menjadi tas belanja berkualitas tinggi yang siap bersaing di pasar lokal Semarang.
              </p>
            </div>
          </div>

          {/* Right - Product Highlight Visual */}
          <div className="lg:col-span-5 bg-[#F5F4F0] dark:bg-brand-charcoal p-8 sm:p-10 rounded-3xl border border-brand-charcoal/8 shadow-sm space-y-6">
            <div className="h-12 w-12 rounded-xl bg-white dark:bg-[#1a1b1d] flex items-center justify-center text-brand-green-dark shadow-sm">
              <UserCheck className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-brand-charcoal font-sans">
                Tas Belanja Daur Ulang
              </h3>
              <p className="text-sm text-brand-charcoal/65 leading-relaxed font-sans">
                Fokus produk utama kami adalah tas belanja berkualitas tinggi berskala rumahan. Tas ini didesain khusus agar kuat menahan beban berat, kedap air, tahan lama, serta modis untuk kebutuhan belanja warga Semarang sehari-hari.
              </p>
            </div>
            <div className="pt-4 border-t border-brand-charcoal/10 flex items-center gap-2 text-xs font-bold text-brand-green-dark">
              <span>Mendukung Gerakan Semarang Zero Waste</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Peta Masalah Industri Daur Ulang (Why) */}
      <section className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 max-w-[1440px] mx-auto border-t border-brand-charcoal/5">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
            <AlertTriangle className="h-3.5 w-3.5" />
            Identifikasi Tantangan
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-charcoal leading-tight">
            Peta Masalah Industri Kriya Daur Ulang
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/60 leading-relaxed font-sans">
            Analisis hambatan riil yang membatasi pertumbuhan dan konsistensi usaha anyaman daur ulang tali plastik di tingkat akar rumput.
          </p>
        </div>

        {/* 3 Columns Grid for Problems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-brand-charcoal p-8 rounded-3xl border border-brand-charcoal/8 shadow-sm flex flex-col justify-between hover:border-red-500/20 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-600">
                  <AlertTriangle className="h-5 w-5" />
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

      {/* SECTION 4: Rencana Intervensi / Solusi Makro (How) */}
      <section className="bg-white dark:bg-[#1A1B1D] px-5 sm:px-6 lg:px-8 py-20 md:py-28 border-t border-brand-charcoal/5">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
              <CheckCircle className="h-3.5 w-3.5" />
              Rencana Aksi Program
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-charcoal leading-tight">
              Solusi Kerja & Intervensi KKN
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/60 leading-relaxed font-sans">
              Program intervensi nyata yang diterapkan mahasiswa KKN Undip untuk menjawab tantangan kriya lokal.
            </p>
          </div>

          {/* 2 Columns Grid for Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-[#F5F4F0] dark:bg-brand-charcoal p-8 sm:p-10 rounded-3xl border border-brand-charcoal/8 shadow-sm flex items-start gap-5 hover:border-brand-green-dark/20 hover:shadow-md transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-2xl bg-white dark:bg-[#1a1b1d] flex items-center justify-center flex-shrink-0 shadow-sm">
                  {sol.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-brand-charcoal font-sans">
                    {sol.title}
                  </h4>
                  <p className="text-sm text-brand-charcoal/65 leading-relaxed font-sans">
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
