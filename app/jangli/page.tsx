"use client";

import React, { useState } from "react";
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
  X,
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
    name: "Pak Polidin",
    role: "Pengrajin Tali Lashing — RW 04",
    desc: "Berpengalaman 5 tahun dalam mengolah limbah tali plastik industri menjadi tas, keranjang, dan perabot rumah tangga yang berkualitas tinggi.",
    products: ["Tas Anyam", "Keranjang Serbaguna", "Tempat Tisu"],
    phone: "0812-xxxx-xxxx",
    shopee: "#",
    image: "/Pak%20Polidin.jpeg",
  },
  {
    id: 2,
    name: "Pak Khamto",
    role: "Pengrajin Tali Lashing — RW 04",
    desc: "Spesialis pembuatan produk fungsional dari tali lashing daur ulang. Berperan aktif dalam membina keterampilan kewirausahaan warga setempat.",
    products: ["Pot Bunga", "Hiasan Dinding", "Sandal Anyam"],
    phone: "0813-xxxx-xxxx",
    shopee: "#",
    image: "/Pak%20Khamto.jpeg",
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
    image: "/Foto%20Produk%20Jangli/Produk-Jangli-1.png",
  },
  {
    id: 2,
    name: "Keranjang Serbaguna",
    category: "Perabot Rumah",
    desc: "Keranjang multifungsi untuk penyimpanan pakaian, mainan, atau kebutuhan rumah tangga lainnya.",
    price: "Rp 50.000",
    color: "bg-brand-charcoal/5",
    image: "/Foto%20Produk%20Jangli/Produk-Jangli-2.png",
  },
  {
    id: 3,
    name: "Pot Bunga Dekoratif",
    category: "Dekorasi",
    desc: "Pot bunga cantik dengan anyaman halus, cocok untuk mempercantik teras dan ruang tamu.",
    price: "Rp 35.000",
    color: "bg-[#5B9E31]/8",
    image: "/Foto%20Produk%20Jangli/Produk-Jangli-3-new.png",
  },
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
          <Image src="/image-home-jangli.png" alt="Jangli Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />

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
        <section id="profil-jangli" className="px-5 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-10 md:pb-12 bg-[#F5F4F0]">
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
        <section id="pengrajin" className="px-5 sm:px-6 lg:px-8 pt-10 md:pt-12 pb-20 md:pb-28 bg-[#F5F4F0]">
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
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 mb-24">
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
                      {(p as any).image ? (
                        <Image src={(p as any).image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <User className="h-16 w-16 text-brand-charcoal/10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                      )}
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
            <div id="katalog" className="mb-16">
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

                     {/* Center Abstract Graphic / Icon / Image */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {(product as any).image ? (
                        <>
                           <Image src={(product as any).image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                        </>
                      ) : (
                        <div className="relative">
                          {/* Glow behind icon */}
                          <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150" />
                          <ShoppingBag className="h-16 w-16 text-white/30 group-hover:scale-110 group-hover:text-white/50 transition-all duration-700 relative z-10" strokeWidth={1} />
                        </div>
                      )}
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



      </main>



      <Footer />
    </>
  );
}
