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
  Users,
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
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Digitalisasi & Tata Kelola",
      desc: "Memberikan edukasi pembukuan usaha yang ringkas serta membawa produk lokal ini go-digital melalui platform e-commerce seperti Shopee dan katalog media sosial Instagram.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  return (
    <div className="w-full transition-colors duration-300">

      {/* SECTION 1: Pengenalan Komoditas & Mitra Utama (Modern Minimalist Layout) */}
      <section id="eksplorasi" className="w-full bg-white px-5 sm:px-6 lg:px-8 py-20 md:py-32 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Centered Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
              <Recycle className="h-3.5 w-3.5" />
              Komoditas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
              Mengubah Limbah Menjadi <br />
              Karya Kriya Berharga
            </h2>
            <div className="h-[2px] w-16 bg-brand-green-dark/30 mx-auto my-4" />
            <p className="text-base sm:text-lg font-medium text-brand-charcoal/70 leading-relaxed font-sans">
              "Mengubah strapping band sisa industri elektronik menjadi kriya anyaman serbaguna bernilai jual tinggi untuk mendukung kemandirian ekonomi lokal."
            </p>
          </div>

          {/* Two Columns Grid Layout */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-auto lg:h-[500px]">
            {/* Card 1: Limbah Tali Lashing */}
            <div className="relative rounded-[32px] overflow-hidden flex flex-col justify-end p-8 sm:p-10 hover:shadow-2xl transition-all duration-500 group h-[450px] lg:h-full">
              {/* Background Image */}
              <div className="absolute inset-0 bg-[#EAE8E2]">
                <Image
                  src="/Foto Tali/Foto-Tali-1.png"
                  alt="Limbah Tali Lashing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-20 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-serif text-white mb-3 drop-shadow-md">Limbah Tali Lashing</h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans drop-shadow-sm">
                  Limbah strapping band plastik tebal berkekuatan tinggi sisa industri pengemasan elektronik. Melalui program KKN, bahan ini didaur ulang kreatif menjadi tas belanja serbaguna berkualitas premium.
                </p>
              </div>
            </div>

            {/* Card 2: UMKM Pengrajin Lokal */}
            <div className="relative rounded-[32px] overflow-hidden flex flex-col justify-end p-8 sm:p-10 hover:shadow-2xl transition-all duration-500 group h-[450px] lg:h-full">
              {/* Background Image */}
              <div className="absolute inset-0 bg-[#F5F4F0]">
                <Image
                  src="/lashing-artisan.jpg"
                  alt="Pengrajin Tali Lashing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-20 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-serif text-white mb-3 drop-shadow-md">UMKM Pengrajin Lokal</h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans drop-shadow-sm">
                  Menjadi jantung dari gerakan pemberdayaan ini. Kami bekerja sama langsung dengan kelompok dasawisma, ibu-ibu PKK, dan pengrajin rumahan untuk mewujudkan kemandirian finansial yang berkelanjutan.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 2: Pilih Wilayah Eksplorasi (Di bawah Komoditas) */}
      <section id="wilayah" className="w-full bg-white py-24 md:py-28 border-t border-brand-charcoal/5 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
              <Map className="h-4 w-4" />
              Wilayah Pengrajin UMKM tali lashing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
              Wilayah Yang Menghasilkan Limbah Tali Lashing
            </h2>
            <div className="h-[2px] w-12 bg-brand-green-dark/30 mx-auto my-2" />
            <p className="text-sm sm:text-base text-brand-charcoal/60 leading-relaxed font-sans max-w-2xl mx-auto">
              Mulai penelusuran Anda dengan mengunjungi laman khusus masing-masing wilayah untuk melihat para pengrajin, katalog produk, dan peta interaktif.
            </p>
          </div>

          {/* Two Big Cards for Tandang and Jangli */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto h-auto lg:h-[500px]">
            {/* Card Jangli */}
            <div className="relative bg-brand-charcoal rounded-[32px] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 h-[450px] lg:h-full">
              {/* Background Image */}
              <div className="absolute inset-0 bg-[#EAE8E2]">
                <Image
                  src="/image-home.svg"
                  alt="Kelurahan Jangli"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 sm:p-10 z-10 transition-colors duration-500">
                <div className="transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full mb-4 inline-block">
                    Kelurahan Binaan 1
                  </span>
                  
                  <h3 className="text-3xl sm:text-4xl font-serif text-white mb-3 drop-shadow-md">
                    Kelurahan Jangli
                  </h3>
                  
                  <p className="text-sm sm:text-base leading-relaxed text-white/80 max-w-lg mb-8 drop-shadow-sm line-clamp-3">
                    Jelajahi sentra kriya daur ulang lashing di RW 04 Jangli. Temukan pemetaan sebaran pengrajin lokal, program kerja digitalisasi manajemen, dan dokumentasi program multidisiplin keilmuan mahasiswa.
                  </p>

                  <Link
                    href="/jangli"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-sm font-bold text-brand-charcoal hover:bg-[#F5F4F0] hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Eksplorasi Wilayah Jangli
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card Tandang */}
            <div className="relative bg-brand-charcoal rounded-[32px] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 h-[450px] lg:h-full">
              {/* Background Image */}
              <div className="absolute inset-0 bg-[#F5F4F0]">
                <Image
                  src="/image-home.svg"
                  alt="Kelurahan Tandang"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 sm:p-10 z-10 transition-colors duration-500">
                <div className="transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full mb-4 inline-block">
                    Kelurahan Binaan 2
                  </span>
                  
                  <h3 className="text-3xl sm:text-4xl font-serif text-white mb-3 drop-shadow-md">
                    Kelurahan Tandang
                  </h3>
                  
                  <p className="text-sm sm:text-base leading-relaxed text-white/80 max-w-lg mb-8 drop-shadow-sm line-clamp-3">
                    Telusuri sentra kriya lashing di RW 10 Tandang. Lihat revitalisasi showroom kriya bersama Karang Taruna, dokumentasi pelatihan 5 produk inovatif, digital marketing, serta program keberlanjutan bank sampah.
                  </p>

                  <Link
                    href="/tandang"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-sm font-bold text-brand-charcoal hover:bg-[#F5F4F0] hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Eksplorasi Wilayah Tandang
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Peta Masalah Industri Daur Ulang (Why) */}
      <section className="w-full bg-white dark:bg-[#1A1B1D] py-24 md:py-28 border-t border-brand-charcoal/5">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
              <AlertTriangle className="h-3.5 w-3.5" />
              Identifikasi Permasalahan
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
              Permasalahan Utama Industri Kriya Daur Ulang
            </h2>
            <div className="h-[2px] w-16 bg-brand-green-dark/30 mx-auto my-6" />
            <p className="text-base sm:text-lg text-brand-charcoal/70 leading-relaxed mx-auto">
              Analisis hambatan riil yang membatasi pertumbuhan dan konsistensi usaha anyaman daur ulang tali plastik di tingkat akar rumput.
            </p>
          </div>

          {/* 3 Columns Grid for Problems */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((item, idx) => {
              const cardGradients = [
                "from-[#fdf1f6] to-[#f4d5e3]",
                "from-[#eef3f9] to-[#d3e3f3]",
                "from-[#f0f8f1] to-[#d6efda]",
              ];
              
              return (
                <div
                  key={idx}
                  className="group relative bg-[#F5F4F0] rounded-[32px] p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col min-h-[300px]"
                >
                  <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${cardGradients[idx % cardGradients.length]} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center mb-6 text-brand-green-dark group-hover:scale-110 shadow-sm transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-charcoal mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: Rencana Intervensi / Solusi KKN (How) */}
      <section className="w-full bg-white py-20 md:py-32 border-t border-brand-charcoal/5">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
              <Compass className="h-3.5 w-3.5" />
              Rencana Aksi Program
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
              Solusi Permasalahan
            </h2>
            <div className="h-[2px] w-16 bg-brand-green-dark/30 mx-auto my-6" />
            <p className="text-base sm:text-lg text-brand-charcoal/70 leading-relaxed mx-auto">
              Program intervensi nyata yang diterapkan mahasiswa KKN Undip untuk menjawab tantangan kriya lokal.
            </p>
          </div>

          {/* 2 Columns Grid for Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {solutions.map((sol, idx) => {
              const cardGradients = [
                "from-[#fdf1f6] to-[#f4d5e3]",
                "from-[#eef3f9] to-[#d3e3f3]",
                "from-[#f0f8f1] to-[#d6efda]",
                "from-[#fff8ee] to-[#fde5c5]",
              ];
              
              return (
                <div
                  key={idx}
                  className="group relative bg-[#F5F4F0] rounded-[32px] p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col min-h-[250px]"
                >
                  <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${cardGradients[idx % cardGradients.length]} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center mb-6 text-brand-green-dark group-hover:scale-110 shadow-sm transition-transform duration-500">
                      {sol.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-charcoal mb-4">
                      {sol.title}
                    </h3>
                    <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
