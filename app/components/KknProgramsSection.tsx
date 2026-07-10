"use client";

import React, { useState } from "react";
import { Layers, MapPin } from "lucide-react";
import KknProgramsTandang from "./KknProgramsTandang";
import KknProgramsJangli from "./KknProgramsJangli";

export default function KknProgramsSection() {
  const [wilayah, setWilayah] = useState<"tandang" | "jangli">("tandang");

  return (
    <section id="program-kkn" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-white border-t border-brand-charcoal/5">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
            <Layers className="h-3.5 w-3.5" />
            Program Kerja Pengabdian
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
            Multidisiplin 2, 3 & Sosial Kemasyarakatan
          </h2>
          <p className="text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
            Fokus pada substansi dan dampak nyata program kerja multidisiplin serta 15 pilar sosial kemasyarakatan
            yang dijalankan di setiap wilayah pengabdian KKN Setanjang.
          </p>
        </div>

        {/* Top Switcher Wilayah */}
        <div className="flex justify-center mb-20">
          <div className="bg-[#F5F4F0] p-2 rounded-full border border-brand-charcoal/10 inline-flex gap-2 shadow-sm">
            <button
              onClick={() => setWilayah("tandang")}
              className={`px-6 sm:px-8 py-3 rounded-full font-sans text-sm font-bold transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${wilayah === "tandang"
                ? "bg-brand-charcoal text-white shadow-md scale-105"
                : "text-brand-charcoal/70 hover:text-brand-charcoal hover:bg-brand-charcoal/5"
                }`}
            >
              <MapPin className={`h-4 w-4 ${wilayah === "tandang" ? "text-brand-green-light" : "text-brand-charcoal/40"}`} />
              Program Kerja Tandang
            </button>
            <button
              onClick={() => setWilayah("jangli")}
              className={`px-6 sm:px-8 py-3 rounded-full font-sans text-sm font-bold transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${wilayah === "jangli"
                ? "bg-brand-charcoal text-white shadow-md scale-105"
                : "text-brand-charcoal/70 hover:text-brand-charcoal hover:bg-brand-charcoal/5"
                }`}
            >
              <MapPin className={`h-4 w-4 ${wilayah === "jangli" ? "text-brand-green-light" : "text-brand-charcoal/40"}`} />
              Program Kerja Jangli
            </button>

          </div>
        </div>

        {/* Render Wilayah */}
        {wilayah === "tandang" && <KknProgramsTandang />}
        {wilayah === "jangli" && <KknProgramsJangli />}

      </div>
    </section>
  );
}
