"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Logo from "@/app/components/Logo";
import {
  Sparkles,
  ShoppingBag,
  Recycle,
  Award,
  Users,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Filter,
  ChevronRight,
  Share2,
  ShieldCheck,
  Heart,
  Store,
  BookOpen,
  Layers,
  Zap,
  TrendingUp,
  Info,
  X,
  MessageCircle
} from "lucide-react";

interface ProductItem {
  id: string;
  name: string;
  category: "Dekorasi Rumah" | "Penyimpanan" | "Perlengkapan Ibadah" | "Meja Makan";
  price: string;
  desc: string;
  features: string[];
  image: string;
  badge: string;
  dimensions: string;
}

export default function TandangPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Produk");
  const [activeTab, setActiveTab] = useState<"rw10" | "rw3">("rw10");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    {
      id: "pot-gantung",
      name: "Pot Gantung Anyam Lashing",
      category: "Dekorasi Rumah",
      price: "Rp35.000 - Rp55.000",
      desc: "Anyaman pot gantung estetis berdaya tahan tinggi terhadap cuaca ekstrem dan paparan sinar matahari. Sangat ideal untuk mempercantik teras rumah, taman vertikal, hingga kafe bergaya tropis modern.",
      features: [
        "Tahan air & tidak mudah lapuk terkena hujan",
        "Tali penyangga kokoh dengan simpul pengaman ganda",
        "Tersedia variasi kombinasi warna earth-tone & pastel",
        "Mendukung sirkulasi udara akar tanaman"
      ],
      image: "/lashing_home_decor.png",
      badge: "Inovasi Baru",
      dimensions: "Diameter 20cm x Tinggi 18cm"
    },
    {
      id: "storage-box",
      name: "Storage Box Geometris Minimalis",
      category: "Penyimpanan",
      price: "Rp65.000 - Rp95.000",
      desc: "Wadah penyimpanan serbaguna dengan struktur anyaman rapat dan rangka yang kokoh. Solusi elegan untuk merapikan pakaian, mainan anak, buku, atau dokumen di ruang tamu maupun kamar tidur.",
      features: [
        "Struktur stabil & mampu menahan beban hingga 10 kg",
        "Dilengkapi penutup rapat anti-debu",
        "Mudah dibersihkan hanya dengan lap basah",
        "Desain motif catur & zig-zag kontemporer"
      ],
      image: "/lashing_craft_bags.png",
      badge: "Best Seller",
      dimensions: "35cm x 25cm x 25cm"
    },
    {
      id: "sajadah-travel",
      name: "Sajadah Anyam Travel Waterproof",
      category: "Perlengkapan Ibadah",
      price: "Rp45.000 - Rp75.000",
      desc: "Sajadah inovatif berbahan tali lashing yang kedap air, anti-lembab, dan sangat mudah dibersihkan. Sangat praktis digulung untuk keperluan traveling, ibadah outdoor, atau fasilitas umum masjid/mushola.",
      features: [
        "100% Waterproof & anti-slip di permukaan lantai",
        "Ringan & mudah digulung atau dilipat",
        "Motif etnik islami yang elegan",
        "Awet digunakan bertahun-tahun tanpa pudar"
      ],
      image: "/lashing_home_decor.png",
      badge: "Produk Unggulan",
      dimensions: "60cm x 110cm"
    },
    {
      id: "tudung-saji",
      name: "Tudung Saji Elegan Higienis",
      category: "Meja Makan",
      price: "Rp50.000 - Rp85.000",
      desc: "Pelindung hidangan keluarga dengan teknik anyaman silang yang presisi. Menjaga kebersihan makanan dari serangga sekaligus memberikan sirkulasi udara optimal agar makanan tetap segar.",
      features: [
        "Rangka kokoh yang tidak mudah penyok",
        "Anyaman rapat anti-lalat & serangga",
        "Tampilan estetis menghiasi meja makan",
        "Bebas bahan kimia berbahaya (food safe external)"
      ],
      image: "/lashing_craft_bags.png",
      badge: "Inovasi Baru",
      dimensions: "Diameter 45cm x Tinggi 20cm"
    },
    {
      id: "taplak-meja",
      name: "Table Runner Kriya Kontemporer",
      category: "Meja Makan",
      price: "Rp40.000 - Rp70.000",
      desc: "Taplak meja (table runner) panjang bermotif kontemporer yang memberikan aksen mewah pada jamuan makan. Tahan terhadap tumpahan air maupun panas ringan, serta sangat mudah dicuci.",
      features: [
        "Anti-noda & tahan air cairan tumpah",
        "Tekstur anyaman halus tidak merusak meja kayu/kaca",
        "Pilihan warna berkelas (Terracotta, Emerald, Cream)",
        "Dapat digulung ringkas saat disimpan"
      ],
      image: "/lashing_home_decor.png",
      badge: "Favorit Warga",
      dimensions: "150cm x 35cm"
    }
  ];

  const categories = ["Semua Produk", "Dekorasi Rumah", "Penyimpanan", "Perlengkapan Ibadah", "Meja Makan"];

  const filteredProducts = selectedCategory === "Semua Produk"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const kknOutputs = [
    {
      code: "Output 1.1",
      title: "Kerangka Pengerjaan & Modul Standarisasi Anyaman",
      pic: "Ilham Ardhiansyah (SV / Manajemen & Administrasi Logistik)",
      desc: "Penyusunan panduan sistematis pembuatan produk kerajinan limbah tali plastik sebagai standar operasional prosedur (SOP) bagi UMKM dan masyarakat RW 10 Kelurahan Tandang.",
      points: [
        "Identifikasi potensi & pengumpulan referensi teknik anyaman",
        "Penyusunan kerangka alat, bahan, & tahapan pengerjaan",
        "Katalog variasi pola dan desain anyaman sebagai referensi pengembangan",
        "Draft contoh produk kerajinan terstandarisasi untuk regenerasi pengrajin"
      ],
      color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400"
    },
    {
      code: "Output 1.2",
      title: "Sosialisasi & Pelatihan 5 Inovasi Produk Kerajinan",
      pic: "Dinda Ayu Safitri, M. Ikhsan Prayoga, Daniswara Gita Pradana, Anggi Sahabat Pitriani, Hibrizi Razan Analta",
      desc: "Edukasi intensif dan demonstrasi pembuatan 5 inovasi produk rumah tangga (pot gantung, storage box, sajadah, tudung saji, taplak meja) kepada warga RW 10.",
      points: [
        "Sasaran: Ibu PKK, dasawisma, remaja, dan warga usia produktif",
        "Demonstrasi pemilahan, pembersihan, pemotongan, hingga perakitan",
        "Mendorong regenerasi pengrajin muda di sentra RT 3 & RT 4",
        "Mengubah paradigma limbah menjadi peluang ekonomi kreatif rumah tangga"
      ],
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
    },
    {
      code: "Output 1.3",
      title: "Transformasi Digital & Katalog Online SETANJANG",
      pic: "A. Dinda Muthia Sani, Balqis Nailah, Naia Nailufar Yumna, Naufal Indra Nur Irsyad, Rafael Ardiansyah",
      desc: "Pengembangan portal website SETANJANG sebagai etalase branding terpusat, pemetaan sebaran pengrajin di tiap RT/RW, dan perluasan akses pasar ke marketplace.",
      points: [
        "Pemetaan profil UMKM & identifikasi kebutuhan perluasan penjualan",
        "Integrasi katalog digital langsung menuju Shopee, Tokopedia, & WhatsApp",
        "Sosialisasi & pendampingan digital marketing bagi pengrajin & perangkat RW",
        "Memperkuat identitas kolektif produk ramah lingkungan berdaya saing tinggi"
      ],
      color: "from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col pt-20 bg-brand-cream dark:bg-[#121314] transition-colors duration-300">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 py-16 md:py-24 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-5 w-96 h-96 rounded-full bg-brand-green-light/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-brand-green-dark/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green-dark/10 dark:bg-brand-green-light/10 border border-brand-green-dark/20 dark:border-brand-green-light/20">
                <Sparkles className="h-4 w-4 text-brand-green-dark dark:text-brand-green-light animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green-dark dark:text-brand-green-light font-sans">
                  Sentra Ekonomi Kreatif & Sirkular • KKN-T IDBU 70
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-brand-charcoal dark:text-brand-cream leading-[1.15] tracking-tight">
                Kelurahan Tandang: <br />
                <span className="italic font-medium text-brand-green-dark dark:text-brand-green-light">
                  Inovasi Anyaman Lashing & Bank Sampah
                </span>
              </h1>

              <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-brand-charcoal/75 dark:text-brand-cream/75 leading-relaxed font-sans">
                Wujud nyata kolaborasi KKN Multidisiplin 1 dalam memberdayakan UMKM pengrajin limbah tali plastik industri (Polytron) di <strong className="text-brand-charcoal dark:text-brand-cream">RW 10</strong> serta revitalisasi tata kelola Bank Sampah di <strong className="text-brand-charcoal dark:text-brand-cream">RW 3</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#katalog-inovasi"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-semibold text-sm bg-brand-green-dark text-brand-cream hover:bg-brand-green-dark/90 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 group"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Eksplorasi 5 Inovasi Produk
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#potensi-wilayah"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-semibold text-sm border border-brand-charcoal/20 dark:border-brand-cream/20 text-brand-charcoal dark:text-brand-cream hover:bg-brand-charcoal/5 dark:hover:bg-brand-cream/5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MapPin className="h-4 w-4 text-brand-green-dark dark:text-brand-green-light" />
                  Potensi RW 10 & RW 3
                </a>
              </div>

              {/* Quick Highlight Stats */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-brand-charcoal/10 dark:border-brand-cream/10 max-w-lg mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl font-serif font-bold text-brand-charcoal dark:text-brand-cream">7 - 10</p>
                  <p className="text-xs text-brand-charcoal/60 dark:text-brand-cream/60">Tas/Hari per Pengrajin</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-brand-green-dark dark:text-brand-green-light">5 Produk</p>
                  <p className="text-xs text-brand-charcoal/60 dark:text-brand-cream/60">Inovasi Baru KKN</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-brand-charcoal dark:text-brand-cream">100 kg</p>
                  <p className="text-xs text-brand-charcoal/60 dark:text-brand-cream/60">Kelola Bank Sampah</p>
                </div>
              </div>
            </div>

            {/* Right Visual Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-3xl p-3 bg-white dark:bg-brand-charcoal/80 shadow-2xl border border-brand-charcoal/10 dark:border-brand-cream/10 group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brand-cream">
                  <Image
                    src="/lashing_craft_bags.png"
                    alt="Kerajinan Tas Anyaman Tali Lashing Kelurahan Tandang"
                    fill
                    priority
                    sizes="(max-w-7xl) 100vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Label inside Image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="px-2.5 py-1 rounded-md bg-brand-green-light text-[11px] font-bold uppercase tracking-wider">
                      Sentra RT 3 & RT 4 RW 10
                    </span>
                    <h3 className="text-xl font-serif font-bold leading-snug">
                      Kriya Tali Lashing Industri Polytron
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2">
                      Warisan kerajinan turun-temurun yang kini berevolusi dengan transformasi pemasaran digital & inovasi desain modern.
                    </p>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="absolute -top-5 -right-5 bg-white dark:bg-brand-charcoal border border-brand-charcoal/10 dark:border-brand-cream/10 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-green-dark/10 dark:bg-brand-green-light/10 flex items-center justify-center">
                    <Recycle className="h-5 w-5 text-brand-green-dark dark:text-brand-green-light animate-spin-slow" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-charcoal/50 dark:text-brand-cream/50 uppercase tracking-wider">
                      Ekonomi Sirkular
                    </p>
                    <p className="text-xs font-bold text-brand-charcoal dark:text-brand-cream">
                      100% Limbah Upcycled
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LATAR BELAKANG & POTENSI WILAYAH (RW 10 & RW 3) */}
        <section id="potensi-wilayah" className="py-20 px-6 sm:px-8 lg:px-12 bg-white dark:bg-[#1a1b1d] border-y border-brand-charcoal/5 dark:border-brand-cream/5">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark dark:text-brand-green-light">
                ANALISIS WILAYAH PRIORITAS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-brand-charcoal dark:text-brand-cream">
                Membedah Potensi & Tantangan RW 10 & RW 3
              </h2>
              <p className="text-base text-brand-charcoal/70 dark:text-brand-cream/70 font-sans">
                Berdasarkan observasi lapangan dan arahan Lurah Tandang, kedua wilayah ini dipilih karena merepresentasikan ekosistem ekonomi kreatif berbasis daur ulang limbah plastik yang saling melengkapi.
              </p>

              {/* Interactive Tab Switcher */}
              <div className="flex items-center justify-center gap-3 pt-6">
                <button
                  onClick={() => setActiveTab("rw10")}
                  className={`px-6 py-3 rounded-xl font-sans font-semibold text-sm transition-all duration-300 flex items-center gap-2.5 ${
                    activeTab === "rw10"
                      ? "bg-brand-green-dark text-brand-cream shadow-md scale-105"
                      : "bg-brand-cream dark:bg-brand-charcoal text-brand-charcoal/70 dark:text-brand-cream/70 hover:bg-brand-charcoal/5"
                  }`}
                >
                  <Store className="h-4 w-4" />
                  Sentra Tali Lashing (RW 10)
                </button>
                <button
                  onClick={() => setActiveTab("rw3")}
                  className={`px-6 py-3 rounded-xl font-sans font-semibold text-sm transition-all duration-300 flex items-center gap-2.5 ${
                    activeTab === "rw3"
                      ? "bg-brand-green-dark text-brand-cream shadow-md scale-105"
                      : "bg-brand-cream dark:bg-brand-charcoal text-brand-charcoal/70 dark:text-brand-cream/70 hover:bg-brand-charcoal/5"
                  }`}
                >
                  <Recycle className="h-4 w-4" />
                  Bank Sampah & Sirkular (RW 3)
                </button>
              </div>
            </div>

            {/* Tab Content Display */}
            <div className="bg-brand-cream dark:bg-brand-charcoal/50 p-8 md:p-12 rounded-3xl border border-brand-charcoal/10 dark:border-brand-cream/10 shadow-sm">
              {activeTab === "rw10" ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-block px-3 py-1 rounded-md bg-brand-green-dark/10 text-brand-green-dark dark:text-brand-green-light font-semibold text-xs uppercase tracking-wider">
                      RW 10 • RT 3 & RT 4
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal dark:text-brand-cream">
                      Sentra Pengrajin Anyaman Tali Plastik (Lashing)
                    </h3>
                    <p className="text-brand-charcoal/80 dark:text-brand-cream/80 leading-relaxed text-sm sm:text-base">
                      Di wilayah ini terdapat pengrajin aktif turun-temurun seperti <strong className="text-brand-green-dark dark:text-brand-green-light">Bu Titin, Bu Ponijah, Pak Waginah, Bu Pujiman, Pak Ponijan</strong> (RT 4) serta <strong className="text-brand-green-dark dark:text-brand-green-light">Bu Utami</strong> (RT 3). Mereka mampu memproduksi <strong className="underline">7-10 tas per hari</strong> dengan bahan baku limbah industri (terutama Polytron) seharga Rp5.000-12.000/kg.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-2xl bg-white dark:bg-brand-charcoal border border-red-500/20 space-y-2">
                        <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Info className="h-3.5 w-3.5" /> Tantangan Utama
                        </p>
                        <ul className="text-xs text-brand-charcoal/70 dark:text-brand-cream/70 space-y-1.5 list-disc list-inside">
                          <li>Harga jual (Rp9.000-15.000/tas) <strong>stagnan selama 15 tahun</strong></li>
                          <li>Model monoton (didominasi bentuk kotak beda ukuran)</li>
                          <li>Pemasaran konvensional & belum sentuh media digital</li>
                          <li>Minim regenerasi pengrajin muda</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-2xl bg-white dark:bg-brand-charcoal border border-brand-green-light/30 space-y-2">
                        <p className="text-xs font-bold text-brand-green-dark dark:text-brand-green-light uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Intervensi Solusi KKN
                        </p>
                        <ul className="text-xs text-brand-charcoal/70 dark:text-brand-cream/70 space-y-1.5 list-disc list-inside">
                          <li><strong>Inovasi 5 Produk Baru</strong> bernilai jual tinggi (Rp35k-95k)</li>
                          <li>Pembuatan website & <strong>katalog digital terintegrasi</strong></li>
                          <li>Pelatihan teknik anyaman untuk Ibu PKK & remaja</li>
                          <li>Rebranding identitas kolektif & perluasan pasar online</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative">
                    <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden relative shadow-lg">
                      <Image
                        src="/lashing_home_decor.png"
                        alt="Inovasi produk lashing RW 10"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-xs font-semibold">Transformasi Nilai Tambah</p>
                        <p className="text-sm font-bold">Dari Tas Pasar Rp15.000 Menjadi Home Decor Elegan</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-block px-3 py-1 rounded-md bg-brand-green-dark/10 text-brand-green-dark dark:text-brand-green-light font-semibold text-xs uppercase tracking-wider">
                      RW 3 • RT 2, RT 3, & RT 4
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal dark:text-brand-cream">
                      Revitalisasi Bank Sampah & Ekonomi Sirkular
                    </h3>
                    <p className="text-brand-charcoal/80 dark:text-brand-cream/80 leading-relaxed text-sm sm:text-base">
                      Berdasarkan diskusi dengan <strong className="text-brand-green-dark dark:text-brand-green-light">Bu Indarwati</strong> (Penasehat Bank Sampah) dan <strong className="text-brand-green-dark dark:text-brand-green-light">Pak Ruspartono</strong> (Ketua RW 3), aktivitas pemilahan sampah saat ini mampu mengumpulkan hingga <strong className="underline">100 kg sampah dengan 7 kategori</strong>. Hasil penjualan dikembalikan sebagai kas RT untuk mendukung kesejahteraan warga.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-2xl bg-white dark:bg-brand-charcoal border border-red-500/20 space-y-2">
                        <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Info className="h-3.5 w-3.5" /> Kendala Tata Kelola
                        </p>
                        <ul className="text-xs text-brand-charcoal/70 dark:text-brand-cream/70 space-y-1.5 list-disc list-inside">
                          <li>Kepengurusan Bank Sampah RW menggunakan <strong>SK lama</strong></li>
                          <li>Belum terbentuk pengurus baru tingkat RW</li>
                          <li>Kegiatan pengolahan kerajinan limbah sempat terhenti</li>
                          <li>Aktivitas masih bersifat mandiri per RT</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-2xl bg-white dark:bg-brand-charcoal border border-brand-green-light/30 space-y-2">
                        <p className="text-xs font-bold text-brand-green-dark dark:text-brand-green-light uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Langkah Revitalisasi KKN
                        </p>
                        <ul className="text-xs text-brand-charcoal/70 dark:text-brand-cream/70 space-y-1.5 list-disc list-inside">
                          <li>Penguatan tata kelola & kelembagaan Bank Sampah</li>
                          <li><strong>Menghidupkan kembali kerajinan limbah</strong> secara terstruktur</li>
                          <li>Sinergi dengan pengrajin RW 10 untuk transfer ilmu</li>
                          <li>Kolaborasi aktif bersama Karang Taruna & PKK</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative">
                    <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden relative shadow-lg">
                      <Image
                        src="/waste_bank_sorting.png"
                        alt="Bank Sampah RW 3 Tandang"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-xs font-semibold">Partisipasi Warga</p>
                        <p className="text-sm font-bold">Pemilahan 7 Kategori Sampah Anorganik untuk Kas RT</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* KATALOG INOVASI 5 PRODUK BARU (OUTPUT 1.2) */}
        <section id="katalog-inovasi" className="py-24 px-6 sm:px-8 lg:px-12 bg-brand-cream dark:bg-[#121314]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark dark:text-brand-green-light flex items-center gap-2">
                  <Award className="h-4 w-4" /> ETALASE DIGITAL • OUTPUT 1.2
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-brand-charcoal dark:text-brand-cream">
                  5 Inovasi Produk Kriya Tali Lashing
                </h2>
                <p className="text-base text-brand-charcoal/70 dark:text-brand-cream/70 font-sans">
                  Untuk mendobrak stagnasi harga jual tas konvensional, tim KKN mengembangkan 5 variasi produk baru yang fungsional, bernilai estetis tinggi, dan menyasar pasar dekorasi rumah modern.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold font-sans transition-all duration-200 ${
                      selectedCategory === cat
                        ? "bg-brand-green-dark text-brand-cream shadow-sm"
                        : "bg-white dark:bg-brand-charcoal text-brand-charcoal/70 dark:text-brand-cream/70 hover:bg-brand-charcoal/5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white dark:bg-brand-charcoal rounded-3xl overflow-hidden border border-brand-charcoal/10 dark:border-brand-cream/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full bg-brand-cream overflow-hidden">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="(max-w-7xl) 33vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                      <div className="absolute top-4 left-4 bg-brand-green-dark text-brand-cream text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                        {prod.badge}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md text-brand-charcoal dark:text-brand-cream text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                        {prod.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-serif font-bold text-brand-charcoal dark:text-brand-cream group-hover:text-brand-green-dark dark:group-hover:text-brand-green-light transition-colors">
                          {prod.name}
                        </h3>
                      </div>

                      <p className="text-lg font-bold font-sans text-brand-green-dark dark:text-brand-green-light">
                        {prod.price}
                      </p>

                      <p className="text-xs text-brand-charcoal/70 dark:text-brand-cream/70 leading-relaxed line-clamp-3 font-sans">
                        {prod.desc}
                      </p>

                      <div className="pt-2 border-t border-brand-charcoal/5 dark:border-brand-cream/5">
                        <p className="text-[11px] font-bold text-brand-charcoal/50 dark:text-brand-cream/50 uppercase tracking-wider mb-2">
                          Keunggulan Utama:
                        </p>
                        <ul className="space-y-1">
                          {prod.features.slice(0, 2).map((feat, i) => (
                            <li key={i} className="text-xs text-brand-charcoal/80 dark:text-brand-cream/80 flex items-center gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-brand-green-light shrink-0" />
                              <span className="truncate">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="w-full py-3 rounded-xl bg-brand-cream dark:bg-brand-cream/5 hover:bg-brand-green-dark hover:text-brand-cream dark:hover:bg-brand-green-light dark:hover:text-brand-charcoal text-brand-charcoal dark:text-brand-cream font-sans font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Lihat Spesifikasi & Pesan</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM MULTIDISIPLIN 1 (TAMPILAN MATRIKS TIM) */}
        <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white dark:bg-[#1a1b1d] border-t border-brand-charcoal/5 dark:border-brand-cream/5">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark dark:text-brand-green-light">
                STRUKTUR PROGRAM KERJA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-brand-charcoal dark:text-brand-cream">
                3 Pilar Output Multidisiplin 1
              </h2>
              <div className="h-[2px] w-20 bg-brand-green-dark/30 dark:bg-brand-green-light/30 mx-auto my-4" />
              <p className="text-base text-brand-charcoal/70 dark:text-brand-cream/70 font-sans">
                Dirancang secara kolaboratif oleh 11 mahasiswa dari berbagai disiplin ilmu (Sekolah Vokasi, Teknik, FEB, dan Psikologi) untuk menjawab persoalan hulu hingga hilir pengrajin tali lashing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {kknOutputs.map((out, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl border bg-gradient-to-b ${out.color} flex flex-col justify-between space-y-8 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 rounded-lg bg-white/80 dark:bg-black/40 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                      {out.code}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-brand-charcoal dark:text-brand-cream leading-snug">
                      {out.title}
                    </h3>
                    <div className="p-3 rounded-xl bg-white/60 dark:bg-black/20 text-xs text-brand-charcoal/80 dark:text-brand-cream/80 font-medium">
                      <strong>Tim Pelaksana:</strong> <br />
                      {out.pic}
                    </div>
                    <p className="text-sm text-brand-charcoal/75 dark:text-brand-cream/75 leading-relaxed">
                      {out.desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-brand-charcoal/10 dark:border-brand-cream/10">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-charcoal/60 dark:text-brand-cream/60">
                      Target & Luaran Kerja:
                    </p>
                    <ul className="space-y-2">
                      {out.points.map((pt, i) => (
                        <li key={i} className="text-xs text-brand-charcoal/80 dark:text-brand-cream/80 flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-brand-green-dark dark:text-brand-green-light shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APRESIASI & TOKOH MASYARAKAT */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-brand-cream dark:bg-[#121314] border-t border-brand-charcoal/5 dark:border-brand-cream/5">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark dark:text-brand-green-light">
                KOLABORASI STAKEHOLDER
              </span>
              <h2 className="text-3xl font-serif font-normal text-brand-charcoal dark:text-brand-cream">
                Apresiasi Tokoh & Penggerak Lokal Tandang
              </h2>
              <p className="text-sm sm:text-base text-brand-charcoal/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
                Keberhasilan program pemberdayaan ini tidak lepas dari dukungan aktif dan keterbukaan para tokoh masyarakat serta pelaku usaha di Kelurahan Tandang.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: "Bu Windi", role: "Ketua RW 10 Tandang" },
                { name: "Bu Utami", role: "Pengrajin Lashing RT 3 RW 10" },
                { name: "Bu Titin & Rekan", role: "Sentra Pengrajin RT 4 RW 10" },
                { name: "Bu Indarwati", role: "Penasehat Bank Sampah RW 3" },
                { name: "Pak Ruspartono", role: "Ketua RW 3 Tandang" },
                { name: "Lurah Tandang", role: "Pemerintah Kelurahan" },
                { name: "Ibu-Ibu PKK", role: "Dasawisma & Penggerak RT" },
                { name: "Karang Taruna", role: "Pemuda & Regenerasi Kriya" },
              ].map((person, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white dark:bg-brand-charcoal border border-brand-charcoal/5 dark:border-brand-cream/5 flex flex-col items-center justify-center text-center space-y-1 shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-brand-green-dark/10 dark:bg-brand-green-light/10 flex items-center justify-center font-serif font-bold text-brand-green-dark dark:text-brand-green-light text-base mb-1">
                    {person.name.charAt(0)}
                  </div>
                  <p className="text-sm font-bold text-brand-charcoal dark:text-brand-cream">{person.name}</p>
                  <p className="text-[11px] text-brand-charcoal/60 dark:text-brand-cream/60">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* MODAL SPECIFICATION & ORDER */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-brand-charcoal w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-brand-charcoal/10 dark:border-brand-cream/10 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-6 border-b border-brand-charcoal/10 dark:border-brand-cream/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green-dark dark:text-brand-green-light">
                  {selectedProduct.category} • {selectedProduct.badge}
                </span>
                <h3 className="text-2xl font-serif font-bold text-brand-charcoal dark:text-brand-cream">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-full hover:bg-brand-charcoal/10 dark:hover:bg-brand-cream/10 text-brand-charcoal dark:text-brand-cream transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-brand-cream">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between bg-brand-cream dark:bg-brand-cream/5 p-4 rounded-2xl">
                <div>
                  <p className="text-xs text-brand-charcoal/60 dark:text-brand-cream/60 font-medium">Estimasi Harga Jual (Pasca Inovasi)</p>
                  <p className="text-xl font-bold font-sans text-brand-green-dark dark:text-brand-green-light">{selectedProduct.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-brand-charcoal/60 dark:text-brand-cream/60 font-medium">Dimensi Produk</p>
                  <p className="text-sm font-semibold text-brand-charcoal dark:text-brand-cream">{selectedProduct.dimensions}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-brand-charcoal dark:text-brand-cream uppercase tracking-wider">Deskripsi Produk</h4>
                <p className="text-sm text-brand-charcoal/80 dark:text-brand-cream/80 leading-relaxed">
                  {selectedProduct.desc}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-brand-charcoal dark:text-brand-cream uppercase tracking-wider">Spesifikasi & Keunggulan</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-brand-cream/50 dark:bg-black/20 border border-brand-charcoal/5">
                      <CheckCircle2 className="h-4 w-4 text-brand-green-light shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-brand-charcoal/90 dark:text-brand-cream/90">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 border-t border-brand-charcoal/10 dark:border-brand-cream/10 bg-brand-cream/30 dark:bg-black/20 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/6281234567890?text=Halo%20Tim%20KKN%20Setanjang,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(selectedProduct.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-brand-green-dark text-brand-cream hover:bg-brand-green-dark/90 font-sans font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                Pesan via WhatsApp Pengrajin
              </a>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl border border-brand-charcoal/20 dark:border-brand-cream/20 font-sans font-semibold text-sm hover:bg-brand-charcoal/5 transition-all"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-brand-charcoal text-brand-cream/80 dark:bg-black py-16 px-6 sm:px-8 lg:px-12 border-t border-brand-cream/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <Logo size="md" />
            <p className="text-xs text-brand-cream/60 max-w-md">
              Program Multidisiplin 1 KKN-T IDBU 70 • Pemberdayaan UMKM Ekonomi Kreatif Berkelanjutan Berbasis Daur Ulang Limbah Tali Plastik Industri di Kelurahan Tandang, Kota Semarang.
            </p>
          </div>
          <div className="flex gap-6 text-xs text-brand-cream/60">
            <a href="/" className="hover:text-brand-green-light transition-colors">Home</a>
            <a href="/jangli" className="hover:text-brand-green-light transition-colors">Kelurahan Jangli</a>
            <a href="#potensi-wilayah" className="hover:text-brand-green-light transition-colors">Analisis RW</a>
          </div>
        </div>
      </footer>
    </>
  );
}
