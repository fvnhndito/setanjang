"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
  ArrowRight,
  ShoppingBag,
  User,
} from "lucide-react";
import { SiShopee, SiWhatsapp } from "react-icons/si";
import { stats, pengrajin, katalogProduk } from "./data";

const isValidImage = (url?: string) => {
  if (!url || url === "/" || url.trim() === "") return false;
  if (url.includes("placeholder")) return false;
  return true;
};

export default function TandangPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col">

        {/* ────────────────────────────────────
            HERO SECTION TANDANG
        ──────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-brand-charcoal" />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.12] tracking-tight">
              Eksplorasi Potensi,
              <br />
              Kelurahan Tandang
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Mengenal lebih dekat para pengrajin tali lashing dan katalog digital
              produk kerajinan inovatif hasil kolaborasi bersama tim KKN Setanjang.
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

        {/* ────────────────────────────────────
            PROFIL KELURAHAN
        ──────────────────────────────────── */}
        <section id="profil-tandang" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-white">
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
                    Kelurahan Tandang
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

              <div className="relative min-h-[420px] bg-brand-cream">
                <iframe
                  src="https://maps.google.com/maps?q=Kantor+Kelurahan+Tandang,+Semarang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "420px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Kelurahan Tandang"
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
                Tali Lashing Tandang
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {pengrajin.map((p, idx) => {
                const gradients = [
                  "from-orange-50 to-orange-100",
                  "from-green-50 to-green-100",
                  "from-blue-50 to-blue-100",
                  "from-purple-50 to-purple-100",
                ];
                const bgGradient = gradients[idx % gradients.length];
                const hasCustomPhoto = isValidImage(p.image);

                return (
                  <div
                    key={p.id}
                    className="bg-white rounded-[32px] p-3 flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-500 group"
                  >
                    {/* Top Inset Image Area */}
                    <div className={`w-full aspect-[4/3] rounded-[24px] bg-gradient-to-br ${bgGradient} flex items-center justify-center relative overflow-hidden`}>
                      {hasCustomPhoto ? (
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <User className="h-16 w-16 text-brand-charcoal/10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="px-4 pt-6 pb-4 flex flex-col flex-1">
                      <span className="text-[11px] font-bold text-brand-green-dark uppercase tracking-wider mb-1">
                        {p.role}
                      </span>
                      <h3 className="text-xl font-medium text-brand-charcoal mb-3 tracking-tight">{p.name}</h3>
                      <p className="text-[13px] text-brand-charcoal/60 leading-relaxed mb-6 flex-1">
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
                const gradients = [
                  "from-[#5B9E31]/20 via-black to-black",
                  "from-[#2E5A44]/20 via-black to-black",
                  "from-amber-500/15 via-black to-black",
                  "from-blue-500/15 via-black to-black",
                  "from-purple-500/15 via-black to-black",
                  "from-white/10 via-black to-black",
                ];
                const bgGradient = gradients[idx % gradients.length];
                const hasRealPhoto = isValidImage(product.image);

                return (
                  <div
                    key={product.id}
                    className={`relative rounded-[32px] overflow-hidden bg-gradient-to-b ${bgGradient} flex flex-col h-[480px] p-8 group duration-500 shadow-xl shadow-brand-charcoal/5`}
                  >
                    {hasRealPhoto && (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover opacity-25 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                      />
                    )}

                    <div className="flex flex-wrap items-start gap-2 z-10">
                      <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-medium text-white/90 backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150" />
                        <ShoppingBag className="h-16 w-16 text-white/40 group-hover:scale-110 group-hover:text-white/70 transition-all duration-700 relative z-10" strokeWidth={1} />
                      </div>
                    </div>

                    <div className="mt-auto relative z-10 flex flex-col items-start w-full">
                      <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                        {product.name}
                      </h3>
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out w-full">
                        <div className="overflow-hidden">
                          <p className="text-sm text-white/70 leading-relaxed mt-4 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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
