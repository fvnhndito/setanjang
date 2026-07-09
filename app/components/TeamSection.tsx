"use client";

import React, { useState } from "react";
import { Users, User, Shield, BookOpen, Layers } from "lucide-react";

interface Member {
  name: string;
  role: string;
}

interface Division {
  name: string;
  desc: string;
  members: Member[];
}

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<"tandang" | "jangli">("tandang");

  const coreTeam = [
    { name: "Daffa", role: "Ketua Tim KKN IDBU 70" },
    { name: "Geulies", role: "Sekretaris KKN IDBU 70" },
    { name: "Anggi", role: "Bendahara KKN IDBU 70" },
  ];

  const tandangDivisions: Division[] = [
    {
      name: "Koordinator Kelurahan",
      desc: "Memimpin koordinasi program kerja di kelurahan, menjadi penghubung utama dengan aparat setempat, dan memastikan keselarasan agenda tim.",
      members: [{ name: "Ilham", role: "Koordinator Kelurahan" }],
    },
    {
      name: "Sekretaris & Bendahara",
      desc: "Mengurus administrasi surat-menyurat, perizinan program, pembukuan anggaran, serta pelaporan keuangan KKN tingkat kelurahan.",
      members: [
        { name: "Balqis", role: "Sekretaris Kelurahan" },
        { name: "Nayya", role: "Bendahara Kelurahan" },
      ],
    },
    {
      name: "Divisi Acara",
      desc: "Merancang konsep kegiatan sosialisasi, menyusun rundown acara, dan mengatur jalannya pelaksanaan program kerja di lapangan.",
      members: [
        { name: "Danis", role: "Anggota Divisi" },
        { name: "Mutia", role: "Anggota Divisi" },
      ],
    },
    {
      name: "Divisi Humas",
      desc: "Menjalin komunikasi aktif dengan warga, tokoh masyarakat, dan mitra eksternal untuk penyebaran info kegiatan KKN.",
      members: [
        { name: "Rafael", role: "Anggota Divisi" },
        { name: "Naufal", role: "Anggota Divisi" },
        { name: "Dinda", role: "Anggota Divisi" },
      ],
    },
    {
      name: "Divisi Logistik",
      desc: "Mengoordinasikan pengadaan alat, transportasi, konsumsi tim, serta memastikan kesiapan fasilitas pendukung kegiatan.",
      members: [
        { name: "Iyus", role: "Anggota Divisi" },
        { name: "Echa", role: "Anggota Divisi" },
        { name: "Ihsan", role: "Anggota Divisi" },
      ],
    },
    {
      name: "Divisi PDD (Publikasi, Dekorasi, Dokumentasi)",
      desc: "Mendokumentasikan seluruh rangkaian kegiatan, mendesain media publikasi visual, serta mengelola publikasi digital portal KKN.",
      members: [
        { name: "Eti", role: "Anggota Divisi" },
        { name: "Ibrizi", role: "Anggota Divisi" },
        { name: "Hanif", role: "Anggota Divisi" },
      ],
    },
  ];

  const jangliDivisions: Division[] = [
    {
      name: "Koordinator Kelurahan",
      desc: "Memimpin koordinasi program kerja di kelurahan, menjadi penghubung utama dengan aparat setempat, dan memastikan keselarasan agenda tim.",
      members: [{ name: "Aryo", role: "Koordinator Kelurahan" }],
    },
    {
      name: "Sekretaris & Bendahara",
      desc: "Mengurus administrasi surat-menyurat, perizinan program, pembukuan anggaran, serta pelaporan keuangan KKN tingkat kelurahan.",
      members: [
        { name: "Vadin", role: "Sekretaris Kelurahan" },
        { name: "Zara", role: "Bendahara Kelurahan" },
      ],
    },
    {
      name: "Divisi Acara",
      desc: "Merancang konsep kegiatan sosialisasi, menyusun rundown acara, dan mengatur jalannya pelaksanaan program kerja di lapangan.",
      members: [
        { name: "Dito", role: "Anggota Divisi" },
        { name: "Ilfa", role: "Anggota Divisi" },
      ],
    },
    {
      name: "Divisi Humas",
      desc: "Menjalin komunikasi aktif dengan warga, tokoh masyarakat, dan mitra eksternal untuk penyebaran info kegiatan KKN.",
      members: [
        { name: "Dwi", role: "Anggota Divisi" },
        { name: "Mukhlis", role: "Anggota Divisi" },
      ],
    },
    {
      name: "Divisi Logistik",
      desc: "Mengoordinasikan pengadaan alat, transportasi, konsumsi tim, serta memastikan kesiapan fasilitas pendukung kegiatan.",
      members: [
        { name: "Argy", role: "Anggota Divisi" },
        { name: "Tirza", role: "Anggota Divisi" },
        { name: "Fairuz", role: "Anggota Divisi" },
      ],
    },
    {
      name: "Divisi PDD (Publikasi, Dekorasi, Dokumentasi)",
      desc: "Mendokumentasikan seluruh rangkaian kegiatan, mendesain media publikasi visual, serta mengelola publikasi digital portal KKN.",
      members: [
        { name: "Nabila", role: "Anggota Divisi" },
        { name: "Imron", role: "Anggota Divisi" },
        { name: "Farrel", role: "Anggota Divisi" },
      ],
    },
  ];

  const currentDivisions = activeTab === "tandang" ? tandangDivisions : jangliDivisions;

  // Simple avatar generator with initials
  const getInitials = (name: string) => {
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="about" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-[#F5F4F0] dark:bg-[#121314]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
            <Users className="h-3 w-3" />
            Mari Berkenalan Dengan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
            Tim Pengabdian KKN IDBU 70
          </h2>
          <div className="h-[2px] w-16 bg-brand-green-dark/30 mx-auto my-4" />
          <p className="text-base text-brand-charcoal/60 leading-relaxed font-sans">
            Kolaborasi mahasiswa lintas disiplin ilmu yang mendedikasikan diri untuk mendampingi dan memberdayakan masyarakat di Kelurahan Jangli dan Tandang.
          </p>
        </div>

        {/* ── CORE TEAM (TIM UTAMA) SECTION ── */}
        <div className="mb-20">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 mb-8">
            Tim Pusat / Pengurus Harian
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {coreTeam.map((core, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-brand-charcoal/10 bg-white shadow-sm hover:border-brand-green-dark hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="h-14 w-14 rounded-full bg-brand-green-dark text-white font-serif font-bold text-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  {getInitials(core.name)}
                </div>
                <h4 className="text-base font-bold text-brand-charcoal">
                  {core.name}
                </h4>
                <p className="text-xs font-medium text-brand-green-dark mt-1">
                  {core.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-brand-charcoal/10 max-w-4xl mx-auto my-12" />

        {/* ── SUB-TIM KELURAHAN (TABBED SECTION) ── */}
        <div>
          {/* Tab Selector */}
          <div className="flex justify-center items-center gap-4 mb-16">
            <button
              onClick={() => setActiveTab("tandang")}
              className={`px-6 py-3 rounded-xl font-sans text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "tandang"
                  ? "bg-brand-charcoal text-white shadow-md"
                  : "bg-white border border-brand-charcoal/10 text-brand-charcoal/70 hover:bg-brand-charcoal/5"
              }`}
            >
              Kelurahan Tandang
            </button>
            <button
              onClick={() => setActiveTab("jangli")}
              className={`px-6 py-3 rounded-xl font-sans text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "jangli"
                  ? "bg-brand-charcoal text-white shadow-md"
                  : "bg-white border border-brand-charcoal/10 text-brand-charcoal/70 hover:bg-brand-charcoal/5"
              }`}
            >
              Kelurahan Jangli
            </button>
          </div>

          {/* Sub-Tim Container */}
          <div className="space-y-16 max-w-5xl mx-auto">
            {currentDivisions.map((div, i) => (
              <div key={i} className="space-y-6">
                {/* Division Header & Job Description */}
                <div className="border-l-4 border-brand-green-dark pl-4 space-y-1">
                  <h4 className="text-lg font-bold text-brand-charcoal font-sans">
                    {div.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-charcoal/55 leading-relaxed max-w-3xl italic font-sans font-normal">
                    {div.desc}
                  </p>
                </div>

                {/* Division Members Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {div.members.map((member, idx) => (
                    <div
                      key={idx}
                      className="group p-5 rounded-xl border border-brand-charcoal/8 bg-white hover:border-brand-green-dark hover:shadow-sm transition-all duration-300 flex items-center gap-3"
                    >
                      <div className="h-10 w-10 rounded-full bg-brand-green-dark/10 text-brand-green-dark font-sans font-bold text-xs flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                        {getInitials(member.name)}
                      </div>
                      <div className="overflow-hidden">
                        <h5 className="text-sm font-bold text-brand-charcoal truncate">
                          {member.name}
                        </h5>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-charcoal/40 mt-0.5 truncate">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
