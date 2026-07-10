"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
  ArrowRight,
  ArrowUpRight,
  Beaker,
  Users,
  GraduationCap,
  MapPin,
  ShoppingBag,
  ExternalLink,
  Phone,
  User,
  Store,
} from "lucide-react";
import { SiShopee, SiWhatsapp } from "react-icons/si";
import Link from "next/link";

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const stats = [
  { value: "1.240 Ha", label: "Luas Wilayah" },
  { value: "3.850", label: "Jiwa Penduduk" },
  { value: "5 RW", label: "Total Rukun Warga" },
  { value: "UMKM", label: "Potensi Utama" },
];

const pengrajin = [
  {
    id: 1,
    name: "Ibu Sari Rahayu",
    role: "Pengrajin Tali Lashing — RW 04",
    desc: "Berpengalaman 5 tahun dalam mengolah limbah tali plastik industri menjadi tas, keranjang, dan perabot rumah tangga yang berkualitas tinggi.",
    products: ["Tas Anyam", "Keranjang Serbaguna", "Tempat Tisu"],
    phone: "0812-xxxx-xxxx",
    shopee: "#",
    tokopedia: "#",
  },
  {
    id: 2,
    name: "Ibu Dewi Lestari",
    role: "Pengrajin Tali Lashing — RW 04",
    desc: "Spesialis pembuatan produk dekoratif rumah dari tali lashing daur ulang. Aktif dalam komunitas PKK dan pelatihan kewirausahaan lokal.",
    products: ["Pot Bunga", "Hiasan Dinding", "Sandal Anyam"],
    phone: "0813-xxxx-xxxx",
    shopee: "#",
    tokopedia: "#",
  },
  {
    id: 3,
    name: "Ibu Ningsih",
    role: "Pengrajin Tali Lashing — RW 04",
    desc: "Fokus pada produk fungsional dengan desain modern. Mengembangkan variasi pola anyaman geometris yang memiliki nilai estetika tinggi.",
    products: ["Dompet Anyam", "Tote Bag", "Alas Meja"],
    phone: "0857-xxxx-xxxx",
    shopee: "#",
    tokopedia: "#",
  },
];

const katalogProduk = [
  {
    id: 1,
    name: "Tas Anyam Tali Lashing",
    category: "Tas & Aksesoris",
    desc: "Tas serbaguna berbahan dasar tali plastik daur ulang dengan anyaman kuat dan motif khas Jangli.",
    price: "Rp 75.000",
    color: "bg-[#2E5A44]/8",
  },
  {
    id: 2,
    name: "Keranjang Serbaguna",
    category: "Perabot Rumah",
    desc: "Keranjang multifungsi untuk penyimpanan pakaian, mainan, atau kebutuhan rumah tangga lainnya.",
    price: "Rp 50.000",
    color: "bg-brand-charcoal/5",
  },
  {
    id: 3,
    name: "Pot Bunga Dekoratif",
    category: "Dekorasi",
    desc: "Pot bunga cantik dengan anyaman halus, cocok untuk mempercantik teras dan ruang tamu.",
    price: "Rp 35.000",
    color: "bg-[#5B9E31]/8",
  },
  {
    id: 4,
    name: "Tempat Tisu Anyam",
    category: "Perabot Rumah",
    desc: "Wadah tisu elegan yang terbuat dari limbah tali plastik, tahan lama dan mudah dibersihkan.",
    price: "Rp 25.000",
    color: "bg-orange-900/5",
  },
  {
    id: 5,
    name: "Dompet Tali Plastik",
    category: "Tas & Aksesoris",
    desc: "Dompet kompak dengan anyaman rapi dan kombinasi warna menarik, cocok untuk penggunaan sehari-hari.",
    price: "Rp 30.000",
    color: "bg-[#2E5A44]/8",
  },
  {
    id: 6,
    name: "Alas Meja Anyam",
    category: "Perabot Rumah",
    desc: "Alas meja dengan motif tradisional modern, tahan panas dan anti air. Ideal untuk meja makan dan meja kerja.",
    price: "Rp 20.000",
    color: "bg-brand-charcoal/5",
  },
];

const sosmasData = [
  { id: 1, name: "Mahasiswa 1", title: "Sosialisasi Pengelolaan Sampah Rumah Tangga", tag: "Lingkungan", desc: "Edukasi masyarakat tentang pemilahan dan pengelolaan sampah organik dan anorganik di lingkungan RW 04 Kelurahan Jangli." },
  { id: 2, name: "Mahasiswa 2", title: "Penyuluhan Kesehatan Ibu dan Anak", tag: "Kesehatan", desc: "Kegiatan penyuluhan mengenai gizi seimbang, imunisasi, dan pola hidup sehat untuk ibu hamil dan balita." },
  { id: 3, name: "Mahasiswa 3", title: "Bimbingan Belajar Anak SD", tag: "Pendidikan", desc: "Pendampingan belajar mata pelajaran Matematika dan Bahasa Indonesia untuk anak-anak usia sekolah dasar." },
  { id: 4, name: "Mahasiswa 4", title: "Pelatihan Literasi Digital untuk UMKM", tag: "Teknologi", desc: "Workshop penggunaan media sosial dan marketplace sebagai sarana pemasaran produk UMKM lokal." },
  { id: 5, name: "Mahasiswa 5", title: "Kerja Bakti Lingkungan Bersih", tag: "Lingkungan", desc: "Kegiatan gotong royong membersihkan saluran air, jalan kampung, dan area publik bersama warga." },
  { id: 6, name: "Mahasiswa 6", title: "Pembuatan Taman Baca Anak", tag: "Pendidikan", desc: "Merancang dan membangun pojok baca sederhana di balai RW untuk meningkatkan minat baca anak-anak." },
  { id: 7, name: "Mahasiswa 7", title: "Sosialisasi Anti Narkoba", tag: "Kesehatan", desc: "Penyuluhan bahaya narkotika dan obat-obatan terlarang bagi remaja dan pemuda di kelurahan." },
  { id: 8, name: "Mahasiswa 8", title: "Pelatihan Pembuatan Kompos", tag: "Lingkungan", desc: "Demonstrasi dan praktik pembuatan pupuk kompos dari sampah organik rumah tangga untuk pertanian urban." },
  { id: 9, name: "Mahasiswa 9", title: "Workshop Kewirausahaan Pemuda", tag: "Ekonomi", desc: "Pelatihan dasar kewirausahaan untuk pemuda Karang Taruna: ide bisnis, perencanaan, dan pemasaran." },
  { id: 10, name: "Mahasiswa 10", title: "Cek Kesehatan Gratis Lansia", tag: "Kesehatan", desc: "Pemeriksaan tekanan darah, gula darah, dan konsultasi kesehatan gratis untuk warga lanjut usia." },
  { id: 11, name: "Mahasiswa 11", title: "Edukasi Keamanan Siber", tag: "Teknologi", desc: "Sosialisasi tentang keamanan data pribadi, penipuan online, dan cara aman bertransaksi digital." },
  { id: 12, name: "Mahasiswa 12", title: "Penanaman Pohon & Penghijauan", tag: "Lingkungan", desc: "Aksi penanaman bibit pohon produktif di lahan kosong dan bantaran sungai area kelurahan." },
  { id: 13, name: "Mahasiswa 13", title: "Festival Kreativitas Anak", tag: "Pendidikan", desc: "Lomba dan pameran hasil karya anak-anak: menggambar, mewarnai, dan kerajinan tangan sederhana." },
  { id: 14, name: "Mahasiswa 14", title: "Penyuluhan Hukum Perlindungan Konsumen", tag: "Sosial", desc: "Edukasi hak-hak konsumen, cara mengajukan komplain, dan perlindungan hukum bagi masyarakat." },
  { id: 15, name: "Mahasiswa 15", title: "Dokumentasi Potensi Wisata Lokal", tag: "Ekonomi", desc: "Pemetaan dan dokumentasi foto/video potensi wisata edukasi dan budaya di kawasan Kelurahan Jangli." },
];


/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */

export default function JangliPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col">

        {/* ────────────────────────────────────
            HERO
        ──────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-brand-charcoal" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.12] tracking-tight">
              Eksplorasi Potensi,
              <br />
              Kelurahan Jangli
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Mengenal lebih dekat para pengrajin tali lashing, katalog produk daur ulang,
              program kerja, dan kegiatan sosial kemasyarakatan tim KKN Setanjang di Jangli.
            </p>
            <a
              href="#profil-jangli"
              className="mt-4 px-8 py-4 rounded-full bg-white text-sm font-semibold text-brand-charcoal hover:bg-brand-cream transition-colors duration-300 flex items-center gap-2"
            >
              Mulai Menjelajah
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* ────────────────────────────────────
            PROFIL KELURAHAN
        ──────────────────────────────────── */}
        <section id="profil-jangli" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-white">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-brand-charcoal/8">
              <div className="bg-brand-charcoal p-10 md:p-14 flex flex-col justify-between min-h-[420px]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                    Profil Kelurahan
                  </span>
                  <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-white leading-tight">
                    Mengenal Lebih Dekat
                    <br />
                    Kelurahan Jangli
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-10">
                  {stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-2xl sm:text-3xl font-serif font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Google Maps Embed */}
              <div className="relative min-h-[420px] bg-brand-cream">
                <iframe
                  src="https://maps.google.com/maps?q=Kantor+Kelurahan+Jangli,+Semarang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "420px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Kelurahan Jangli"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────
            PENGRAJIN & KATALOG PRODUK
        ──────────────────────────────────── */}
        <section id="pengrajin" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-[#F5F4F0]">
          <div className="max-w-[1440px] mx-auto">

            {/* ── Pengrajin Heading ── */}
            <div className="mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/50 block mb-4">
                Profil Pengrajin
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-charcoal leading-tight">
                Mengenal Para Pengrajin
                <br />
                Tali Lashing Jangli
              </h2>
            </div>

            {/* ── Pengrajin Cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {pengrajin.map((p, idx) => {
                // Subtle gradients for the inset image area
                const gradients = [
                  "from-orange-50 to-orange-100",
                  "from-green-50 to-green-100",
                  "from-blue-50 to-blue-100",
                ];
                const bgGradient = gradients[idx % gradients.length];

                return (
                  <div
                    key={p.id}
                    className="bg-white rounded-[32px] p-3 flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-500 group"
                  >
                    {/* Top Inset Image Area */}
                    <div className={`w-full aspect-[4/3] rounded-[24px] bg-gradient-to-br ${bgGradient} flex items-center justify-center relative overflow-hidden`}>
                      <User className="h-16 w-16 text-brand-charcoal/10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    </div>

                    {/* Content Area */}
                    <div className="px-4 pt-6 pb-4 flex flex-col flex-1">
                      <h3 className="text-2xl font-medium text-brand-charcoal mb-3 tracking-tight">{p.name}</h3>
                      <p className="text-[13px] text-brand-charcoal/60 leading-relaxed mb-8 flex-1">
                        {p.desc}
                      </p>

                      {/* Contact & Marketplaces */}
                      <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-brand-charcoal/5">
                        <a
                          href={p.shopee}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] font-semibold text-brand-charcoal/50 hover:text-[#EE4D2D] flex items-center gap-1.5 transition-colors group/link"
                        >
                          <SiShopee className="h-[14px] w-[14px] opacity-60 group-hover/link:opacity-100" /> Shopee
                        </a>
                        <a
                          href={p.tokopedia}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] font-semibold text-brand-charcoal/50 hover:text-[#42B549] flex items-center gap-1.5 transition-colors group/link"
                        >
                          <svg viewBox="0 0 192 192" fill="none" className="h-[14px] w-[14px] opacity-60 group-hover/link:opacity-100">
                            <path fill="currentColor" fillRule="evenodd" d="M96 28c-9.504 0-17.78 5.307-22.008 13.127C82.736 42.123 88.89 44 96 47.332c7.11-3.332 13.264-5.209 22.008-6.205C113.781 33.31 105.506 28 96 28Zm0-12c-15.973 0-29.568 10.117-34.754 24.28C52.932 40 42.462 40 28.53 40H28a6 6 0 0 0-6 6v124a6 6 0 0 0 6 6h92c27.614 0 50-22.386 50-50V46a6 6 0 0 0-6-6h-.531c-13.931 0-24.401 0-32.715.28C125.566 26.113 111.97 16 96 16ZM34 52.001V164h86c20.987 0 38-17.013 38-38V52.001c-18.502.009-29.622.098-37.872.966-8.692.915-13.999 2.677-21.445 6.4a6 6 0 0 1-5.366 0c-7.446-3.723-12.753-5.485-21.445-6.4-8.25-.868-19.37-.957-37.872-.966ZM50 96c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18-18-8.059-18-18Zm18-30c-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30 1.126 0 2.238-.062 3.332-.183l20.425 20.426a6 6 0 0 0 8.486 0l20.425-20.426c1.094.121 2.206.183 3.332.183 16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-12.764 0-23.666 7.971-28 19.207C91.666 73.971 80.764 66 68 66Zm40.082 55.433A30.1 30.1 0 0 1 96 106.793a30.101 30.101 0 0 1-12.082 14.64L96 133.515l12.082-12.082ZM124 78c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18ZM76 96a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm48 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" clipRule="evenodd"/>
                          </svg>
                          Tokopedia
                        </a>
                        <a
                          href={`https://wa.me/${p.phone.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] font-semibold text-brand-charcoal/50 hover:text-[#25D366] flex items-center gap-1.5 transition-colors group/link"
                        >
                          <SiWhatsapp className="h-[14px] w-[14px] opacity-60 group-hover/link:opacity-100" /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Katalog Produk ── */}
            <div className="mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/50 block mb-4">
                Katalog Digital
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-charcoal leading-tight">
                Produk Kerajinan
                <br />
                Tali Lashing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {katalogProduk.map((product, idx) => {
                // Different subtle glowing gradients for each card based on index
                const gradients = [
                  "from-[#5B9E31]/20 via-black to-black",
                  "from-[#2E5A44]/20 via-black to-black",
                  "from-amber-500/15 via-black to-black",
                  "from-blue-500/15 via-black to-black",
                  "from-purple-500/15 via-black to-black",
                  "from-white/10 via-black to-black",
                ];
                const bgGradient = gradients[idx % gradients.length];

                return (
                  <div
                    key={product.id}
                    className={`relative rounded-[32px] overflow-hidden bg-gradient-to-b ${bgGradient} flex flex-col h-[480px] p-8 group duration-500 shadow-xl shadow-brand-charcoal/5`}
                  >
                    {/* Tags at Top Left */}
                    <div className="flex flex-wrap items-start gap-2 z-10">
                      <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-white/90 backdrop-blur-sm">
                        {product.category}
                      </span>
                      <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-white/90 backdrop-blur-sm">
                        {product.price}
                      </span>
                    </div>

                    {/* Center Abstract Graphic / Icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="relative">
                        {/* Glow behind icon */}
                        <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150" />
                        <ShoppingBag className="h-16 w-16 text-white/30 group-hover:scale-110 group-hover:text-white/50 transition-all duration-700 relative z-10" strokeWidth={1} />
                      </div>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="mt-auto relative z-10 flex flex-col items-start w-full">
                      <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                        {product.name}
                      </h3>
                      {/* Hover expanding description */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out w-full">
                        <div className="overflow-hidden">
                          <p className="text-sm text-white/60 leading-relaxed mt-4 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {product.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────
            MD 2 - SAINTEK
        ──────────────────────────────────── */}
        <section id="md2-saintek" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-white">
          <div className="max-w-[1440px] mx-auto">
            {/* Section Header */}
            <div className="mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/50 block mb-4">
                Multidisiplin 2
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-charcoal leading-tight">
                Program Saintek
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-brand-cream rounded-3xl p-8 border border-brand-charcoal/5 hover:border-brand-charcoal/20 transition-all duration-300">
                  <div className="h-12 w-12 rounded-full bg-brand-green-dark/10 flex items-center justify-center mb-6">
                    <Beaker className="h-5 w-5 text-brand-green-dark" />
                  </div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">Judul Program Saintek {item}</h3>
                  <p className="text-sm text-brand-charcoal/60 leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Data dan dokumentasi akan diperbarui
                    setelah program berjalan.
                  </p>
                  <a href="#" className="text-sm font-semibold text-brand-green-dark flex items-center gap-2 group/link">
                    Detail Program <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────
            MD 2 - SOSHUM
        ──────────────────────────────────── */}
        <section id="md2-soshum" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-[#F5F4F0]">
          <div className="max-w-[1440px] mx-auto">
            {/* Section Header */}
            <div className="mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/50 block mb-4">
                Multidisiplin 2
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-charcoal leading-tight">
                Program Soshum
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] border border-brand-charcoal/5">
                  <div className="h-12 w-12 rounded-full bg-brand-charcoal/5 flex items-center justify-center mb-6">
                    <GraduationCap className="h-5 w-5 text-brand-charcoal" />
                  </div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">Judul Program Soshum {item}</h3>
                  <p className="text-sm text-brand-charcoal/60 leading-relaxed mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Data dan dokumentasi akan diperbarui
                    setelah program berjalan.
                  </p>
                  <a href="#" className="text-sm font-semibold text-brand-charcoal flex items-center gap-2 group/link">
                    Detail Program <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────────────────────────
            SOSMAS — 15 ITEMS (Google Design Light Style)
        ──────────────────────────────────── */}
        <section id="sosmas" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-[#FDFCF8]">
          <div className="max-w-[1440px] mx-auto">
            {/* Section Header */}
            <div className="mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/50 block mb-4">
                Sosial Masyarakat
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-charcoal leading-tight">
                15 Program Sosmas
              </h2>
            </div>

            {/* Google Design Light Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {sosmasData.map((item) => (
                <div key={item.id} className="group flex flex-col cursor-pointer">
                  {/* Top — Image Area */}
                  <div className="w-full aspect-[4/3] bg-brand-charcoal/5 flex items-center justify-center overflow-hidden mb-5">
                    <Users className="h-10 w-10 text-brand-charcoal/20 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Content Area */}
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-charcoal leading-tight mb-3 group-hover:text-brand-green-dark transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  {/* Outline pill tags */}
                  <div className="flex flex-wrap items-center gap-2 mt-auto">
                    <span className="px-4 py-1.5 rounded-full text-[11px] font-medium border border-brand-charcoal/30 text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors">
                      {item.tag}
                    </span>
                    <span className="px-4 py-1.5 rounded-full text-[11px] font-medium border border-brand-charcoal/30 text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors">
                      {item.name}
                    </span>
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
