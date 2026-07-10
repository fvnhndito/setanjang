"use client";

import React, { useState } from "react";
import { Users, User, Shield, BookOpen, Layers } from "lucide-react";
import Image from "next/image";

interface Member {
  name: string;
  role: string;
  image?: string;
}

interface Division {
  name: string;
  desc: string;
  members: Member[];
}

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<"tandang" | "jangli">("tandang");
  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDegree, setFlipDegree] = useState(0);

  const handleTabChange = (tabId: "tandang" | "jangli") => {
    if (tabId === activeTab) return;
    setIsFlipping(true);
    setFlipDegree(prev => prev + 360);
    setTimeout(() => {
      setActiveTab(tabId);
      setActiveDivisionIndex(0);
    }, 350);
    setTimeout(() => setIsFlipping(false), 700);
  };

  const handleDivisionClick = (index: number) => {
    if (index === activeDivisionIndex || isFlipping) return;
    setIsFlipping(true);
    setFlipDegree(prev => prev + 360);
    setTimeout(() => {
      setActiveDivisionIndex(index);
    }, 350);
    setTimeout(() => setIsFlipping(false), 700);
  };

  const getCardStyle = (idx: number, totalMembers: number) => {
    const centerOffset = (totalMembers - 1) / 2;
    const rotateStep = 6;
    const rotate = (idx - centerOffset) * rotateStep;
    const radius = 4250;
    const cx = 4250;
    const cy = 4250;

    const theta = (rotate * Math.PI) / 180;
    const translateX = cx + radius * Math.sin(theta);
    const translateY = cy - radius * Math.cos(theta);

    return {
      transform: `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
      zIndex: 50 - Math.abs(idx - centerOffset),
      pointerEvents: 'auto' as const,
    };
  };

  const coreTeam = [
    { name: "Daffa", role: "Ketua Tim KKN IDBU 70", image: "/Foto Team/Daffa.jpg" },
    { name: "Geulies", role: "Sekretaris KKN IDBU 70", image: "/Foto Team/Geulis.jpg" },
    { name: "Anggi", role: "Bendahara KKN IDBU 70", image: "/Foto Team/Anggi.jpg" },
  ];

  const dplTeam = [
    { name: "Ibu Annisa", role: "Dosen Pembimbing Lapangan", image: "/Foto Team/BuAnnisa.JPG" },
    { name: "Pak Kholidin", role: "Dosen Pembimbing Lapangan", image: "/Foto Team/PakKholidin.jpg" },
    { name: "Pak Herry", role: "Dosen Pembimbing Lapangan", image: "/Foto Team/PakHerry.JPG" },
  ];


  const tandangDivisions: Division[] = [
    {
      name: "Koordinator Kelurahan",
      desc: "Memimpin koordinasi program kerja di kelurahan, menjadi penghubung utama dengan aparat setempat, dan memastikan keselarasan agenda tim.",
      members: [{ name: "Ilham", role: "Koordinator Kelurahan", image: "/Foto Team/Ilham.jpg" }],
    },
    {
      name: "Sekretaris & Bendahara",
      desc: "Mengurus administrasi surat-menyurat, perizinan program, pembukuan anggaran, serta pelaporan keuangan KKN tingkat kelurahan.",
      members: [
        { name: "Balqis", role: "Sekretaris Kelurahan", image: "/Foto Team/Balqis.jpg" },
        { name: "Naia", role: "Bendahara Kelurahan", image: "/Foto Team/Naia.jpg" },
      ],
    },
    {
      name: "Divisi Acara",
      desc: "Merancang konsep kegiatan sosialisasi, menyusun rundown acara, dan mengatur jalannya pelaksanaan program kerja di lapangan.",
      members: [
        { name: "Danis", role: "Anggota Divisi", image: "/Foto Team/Danis.jpg" },
        { name: "Mutia", role: "Anggota Divisi", image: "/Foto Team/Muthia.jpg" },
      ],
    },
    {
      name: "Divisi Humas",
      desc: "Menjalin komunikasi aktif dengan warga, tokoh masyarakat, dan mitra eksternal untuk penyebaran info kegiatan KKN.",
      members: [
        { name: "Rafael", role: "Anggota Divisi", image: "/Foto Team/Rafael.jpg" },
        { name: "Naufal", role: "Anggota Divisi", image: "/Foto Team/Naufal.jpg" },
        { name: "Dinda", role: "Anggota Divisi", image: "/Foto Team/Dinda.jpg" },
      ],
    },
    {
      name: "Divisi Logistik",
      desc: "Mengoordinasikan pengadaan alat, transportasi, konsumsi tim, serta memastikan kesiapan fasilitas pendukung kegiatan.",
      members: [
        { name: "Echa", role: "Anggota Divisi", image: "/Foto Team/Echa.jpg" },
        { name: "Yusuf", role: "Anggota Divisi", image: "/Foto Team/Yusuf.jpg" },
        { name: "Ihsan", role: "Anggota Divisi", image: "/Foto Team/Ikhsan.jpg" },
      ],
    },
    {
      name: "Divisi PDD",
      desc: "Mendokumentasikan seluruh rangkaian kegiatan, mendesain media publikasi visual, serta mengelola publikasi digital portal KKN.",
      members: [
        { name: "Eti", role: "Anggota Divisi", image: "/Foto Team/Eti.jpg" },
        { name: "Ibrizi", role: "Anggota Divisi", image: "/Foto Team/Hibrizi.jpg" },
        { name: "Hanif", role: "Anggota Divisi", image: "/Foto Team/Hanif.jpg" },
      ],
    },
  ];

  const jangliDivisions: Division[] = [
    {
      name: "Koordinator Kelurahan",
      desc: "Memimpin koordinasi program kerja di kelurahan, menjadi penghubung utama dengan aparat setempat, dan memastikan keselarasan agenda tim.",
      members: [{ name: "Aryo", role: "Koordinator Kelurahan", image: "/Foto Team/Aryo.jpg" }],
    },
    {
      name: "Sekretaris & Bendahara",
      desc: "Mengurus administrasi surat-menyurat, perizinan program, pembukuan anggaran, serta pelaporan keuangan KKN tingkat kelurahan.",
      members: [
        { name: "Vadin", role: "Sekretaris Kelurahan", image: "/Foto Team/Vadine.jpg" },
        { name: "Zara", role: "Bendahara Kelurahan", image: "/Foto Team/Zara.jpg" },
      ],
    },
    {
      name: "Divisi Acara",
      desc: "Merancang konsep kegiatan sosialisasi, menyusun rundown acara, dan mengatur jalannya pelaksanaan program kerja di lapangan.",
      members: [
        { name: "Dito", role: "Anggota Divisi", image: "/Foto Team/Dito.jpg" },
        { name: "Ilfa", role: "Anggota Divisi", image: "/Foto Team/Ilfa.jpg" },
      ],
    },
    {
      name: "Divisi Humas",
      desc: "Menjalin komunikasi aktif dengan warga, tokoh masyarakat, dan mitra eksternal untuk penyebaran info kegiatan KKN.",
      members: [
        { name: "Dwi", role: "Anggota Divisi", image: "/Foto Team/Dwi.jpg" },
        { name: "Mukhlis", role: "Anggota Divisi", image: "/Foto Team/Mukhlis.jpg" },
      ],
    },
    {
      name: "Divisi Logistik",
      desc: "Mengoordinasikan pengadaan alat, transportasi, konsumsi tim, serta memastikan kesiapan fasilitas pendukung kegiatan.",
      members: [
        { name: "Tirza", role: "Anggota Divisi", image: "/Foto Team/Tirza.jpg" },
        { name: "Argy", role: "Anggota Divisi", image: "/Foto Team/Argy.jpg" },
        { name: "Fairuz", role: "Anggota Divisi", image: "/Foto Team/Fairuz.jpg" },
      ],
    },
    {
      name: "Divisi PDD",
      desc: "Mendokumentasikan seluruh rangkaian kegiatan, mendesain media publikasi visual, serta mengelola publikasi digital portal KKN.",
      members: [
        { name: "Nabila", role: "Anggota Divisi", image: "/Foto Team/Nabila.jpg" },
        { name: "Farrel", role: "Anggota Divisi", image: "/Foto Team/Farrel.jpg" },
        { name: "Imron", role: "Anggota Divisi", image: "/Foto Team/Imron.jpg" },
      ],
    },
  ];

  const currentDivisions = activeTab === "tandang" ? tandangDivisions : jangliDivisions;
  const displayedDivision = currentDivisions[activeDivisionIndex] || currentDivisions[0];

  // Simple avatar generator with initials
  const getInitials = (name: string) => {
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="about" className="px-5 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-10 md:pb-12 bg-white">
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
        </div>

        {/* ── DPL SECTION ── */}
        <div className="mb-0">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 mb-4">
            Dosen Pembimbing Lapangan
          </h3>
          <section className="relative z-10 w-full h-[400px] md:h-[616px] overflow-hidden" aria-label="DPL Carousel">
            <div className="w-full h-full relative [perspective:1200px]">
              <div
                className="absolute left-1/2 top-[280px] w-[8500px] h-[8500px]"
                style={{ transform: `translate(-50%, 0)` }}
              >
                {[dplTeam[1], dplTeam[0], dplTeam[2]].map((dpl, i) => {
                  const coreGradients = [
                    "from-[#fdf1f6] to-[#f4d5e3]",
                    "from-[#eef3f9] to-[#d3e3f3]",
                    "from-[#f0f8f1] to-[#d6efda]",
                  ];
                  const bgGradient = coreGradients[i % coreGradients.length];
                  const cardTransform = getCardStyle(i, 3);

                  return (
                    <div
                      key={i}
                      className="group absolute top-0 left-0 w-[300px] md:w-[360px] h-[400px] md:h-[480px] bg-brand-charcoal rounded-[32px] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 cursor-default"
                      style={cardTransform}
                    >
                      <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${bgGradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}>
                        {dpl.image ? (
                          <Image src={dpl.image} alt={dpl.name} fill className="object-cover" sizes="(max-width: 768px) 300px, 360px" />
                        ) : (
                          <User className="h-32 w-32 text-black/5" strokeWidth={1} />
                        )}
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end h-[50%] z-10">
                        <h4 className="text-3xl md:text-4xl font-bold text-white font-sans tracking-tight drop-shadow-md">
                          {dpl.name}
                        </h4>
                        <p className="text-sm md:text-base font-semibold text-white/80 mt-1 tracking-wide drop-shadow-sm">
                          {dpl.role}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <hr className="border-brand-charcoal/10 max-w-4xl mx-auto my-4" />

        {/* ── CORE TEAM (TIM UTAMA) SECTION ── */}
        <div className="mb-0">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 mb-4">
            Tim Pusat / Pengurus Harian
          </h3>
          <section className="relative z-10 w-full h-[400px] md:h-[616px] overflow-hidden" aria-label="Core Team Carousel">
            <div className="w-full h-full relative [perspective:1200px]">
              <div
                className="absolute left-1/2 top-[280px] w-[8500px] h-[8500px]"
                style={{ transform: `translate(-50%, 0)` }}
              >
                {[coreTeam[1], coreTeam[0], coreTeam[2]].map((core, i) => {
                  const coreGradients = [
                    "from-[#fdf1f6] to-[#f4d5e3]",
                    "from-[#eef3f9] to-[#d3e3f3]",
                    "from-[#f0f8f1] to-[#d6efda]",
                  ];
                  const bgGradient = coreGradients[i % coreGradients.length];
                  const cardTransform = getCardStyle(i, 3);

                  return (
                    <div
                      key={i}
                      className="group absolute top-0 left-0 w-[300px] md:w-[360px] h-[400px] md:h-[480px] bg-brand-charcoal rounded-[32px] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 cursor-default"
                      style={cardTransform}
                    >
                      {/* Full Card Photo Placeholder */}
                      <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${bgGradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}>
                        {core.image ? (
                          <Image src={core.image} alt={core.name} fill className="object-cover" sizes="(max-width: 768px) 300px, 360px" />
                        ) : (
                          <User className="h-32 w-32 text-black/5" strokeWidth={1} />
                        )}
                      </div>

                      {/* Name & Role Overlay (Bottom Left) */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end h-[50%] z-10">
                        <h4 className="text-3xl md:text-4xl font-bold text-white font-sans tracking-tight drop-shadow-md">
                          {core.name}
                        </h4>
                        <p className="text-sm md:text-base font-semibold text-white/80 mt-1 tracking-wide drop-shadow-sm">
                          {core.role}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <hr className="border-brand-charcoal/10 max-w-4xl mx-auto my-4" />

        {/* ── SUB-TIM KELURAHAN (TABBED SECTION) ── */}
        <div className="relative w-full min-h-[700px] overflow-hidden flex flex-col justify-between pb-16 md:pb-24 px-4 md:px-8 select-none">

          {/* Title of current division */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className={`transition-all duration-400 ${isFlipping ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <h3 className="text-center text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 mb-4">
                {displayedDivision?.name}
              </h3>
            </div>
          </div>

          {/* Curved Carousel Container (Exact Google Labs Structure) */}
          <section className="relative z-10 w-full h-[400px] md:h-[616px] overflow-hidden" aria-label="Carousel">
            <div className="w-full h-full relative [perspective:1200px]">
              <div
                className="absolute left-1/2 top-[280px] w-[8500px] h-[8500px]"
                style={{ transform: `translate(-50%, 0)` }}
              >
                {Array.from({ length: 3 }).map((_, idx) => {
                  const member = displayedDivision?.members[idx];
                  const memberGradients = [
                    "from-[#fdf1f6] to-[#f4d5e3]",
                    "from-[#eef3f9] to-[#d3e3f3]",
                    "from-[#f0f8f1] to-[#d6efda]",
                    "from-[#fff8ee] to-[#fde5c5]",
                  ];
                  const bgGradient = memberGradients[idx % memberGradients.length];
                  const cardTransform = getCardStyle(idx, displayedDivision?.members.length || 1);

                  return (
                    <div
                      key={idx}
                      className={`absolute top-0 left-0 w-[300px] md:w-[360px] h-[400px] md:h-[480px] bg-brand-charcoal rounded-[32px] overflow-hidden transition-transform duration-700 ease-in-out cursor-default [transform-style:preserve-3d] [backface-visibility:hidden] shadow-[0_12px_32px_rgba(0,0,0,0.06)] ${member ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                      style={{
                        ...cardTransform,
                        transform: `${cardTransform.transform} rotateY(${flipDegree}deg)`,
                        transitionDelay: isFlipping ? `${idx * 40}ms` : '0ms'
                      }}
                    >
                      {member && (
                        <>
                          {/* Full Card Photo Placeholder */}
                          <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${bgGradient} flex items-center justify-center`}>
                            {member?.image ? (
                              <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 300px, 360px" />
                            ) : (
                              <User className="h-32 w-32 text-black/5" strokeWidth={1} />
                            )}
                          </div>

                          {/* Name Overlay (Bottom Left) */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end h-[50%]">
                            <h2 className="text-3xl md:text-4xl font-bold text-white font-sans tracking-tight drop-shadow-md">
                              {member.name}
                            </h2>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Bottom Controls Area */}
          <div className="relative z-20 flex flex-col items-center gap-6 mt-4 md:mt-8">
            {/* Division pills menu */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto px-4">
              {currentDivisions.map((div, i) => (
                <button
                  key={i}
                  onClick={() => handleDivisionClick(i)}
                  className={`px-5 py-2 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${activeDivisionIndex === i
                    ? "bg-brand-charcoal text-white shadow-sm scale-105"
                    : "bg-white text-brand-charcoal/70 border border-brand-charcoal/5 hover:bg-white/80 hover:scale-105"
                    }`}
                >
                  {div.name}
                </button>
              ))}
            </div>

            {/* Kelurahan Tabs */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
              {[
                { id: "tandang", name: "Kelurahan Tandang" },
                { id: "jangli", name: "Kelurahan Jangli" }
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id as "tandang" | "jangli")}
                    className={`px-5 py-2.5 rounded-full font-sans text-sm font-semibold transition-all duration-300 ${isActive
                      ? "bg-brand-charcoal text-white shadow-md scale-105"
                      : "bg-white/80 text-brand-charcoal hover:bg-white border border-black/5 hover:border-black/10 hover:shadow-sm"
                      }`}
                  >
                    {tab.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
