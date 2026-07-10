"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ArrowRight, Beaker } from "lucide-react";
import { saintekData } from "../data";

export default function TandangSaintekPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col pt-24 min-h-screen bg-[#F5F4F0]">
        {/* Header Section */}
        <section className="px-5 sm:px-6 lg:px-8 py-16 md:py-24 max-w-[1440px] mx-auto w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark block mb-3">
              Multidisiplin 2 — Kelurahan Tandang
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-brand-charcoal leading-tight">
              Program Kerja Saintek
            </h1>
            <p className="mt-6 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
              Penerapan ilmu sains dan teknologi untuk mendukung infrastruktur, K3, ergonomi
              pengrajin, serta sistem lingkungan berkelanjutan di Kelurahan Tandang.
            </p>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {saintekData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 border border-brand-charcoal/5 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-brand-green-dark/10 flex items-center justify-center mb-6">
                    <Beaker className="h-6 w-6 text-brand-green-dark" />
                  </div>
                  <span className="text-xs font-semibold text-brand-green-dark uppercase tracking-wider block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-medium text-brand-charcoal mb-4 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/65 leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-charcoal/5 flex items-center justify-between">
                  <span className="text-xs text-brand-charcoal/40 font-medium">
                    {item.name}
                  </span>
                  <button className="text-sm font-semibold text-brand-green-dark flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    Detail <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
