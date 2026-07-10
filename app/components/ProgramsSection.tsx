"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Beaker,
  Users,
  GraduationCap,
  MapPin,
  X,
  Map,
  BookOpen,
  HeartPulse,
  Leaf,
  Cpu
} from "lucide-react";

// ─── DATA KELURAHAN JANGLI ───
const jangliSosmas = [
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

const jangliMD = [
  {
    id: 1,
    type: "saintek",
    title: "Pemanfaatan Limbah Organik Rumah Tangga Menjadi Pupuk Organik",
    summary: "Program ini berfokus pada pengembangan limbah organik rumah tangga menjadi produk yang bermanfaat melalui penerapan konsep ekonomi sirkular berupa Eco-Enzyme.",
    potensi: "RT 3 RW 3 Kelurahan Jangli memiliki potensi besar dalam pemanfaatan limbah organik...",
    permasalahan: "Pengelolaan limbah organik rumah tangga di lingkungan masyarakat masih belum optimal...",
    lokasi: "RT 3 RW 3, Kelurahan Jangli, Kecamatan Tembalang, Kota Semarang.",
    narasumber: ["Ketua RT 3 RW 3 Kelurahan Jangli", "Pengrajin RT 3 RW 3 Kelurahan Jangli"],
    usulan: "Program ini berfokus pada pengembangan limbah organik rumah tangga...",
    metode: ["Identifikasi potensi", "Diskusi dan koordinasi", "Sosialisasi Eco-Enzyme", "Praktik pembuatan", "Pendampingan pemanfaatan"],
    bahan: ["Sampah organik rumah tangga", "EM4", "Molase"],
    sasaran: "Masyarakat RT 3 RW 3 Kelurahan Jangli.",
    tujuan: ["Meningkatkan kesadaran masyarakat", "Mengurangi limbah", "Menghasilkan Eco-Enzyme", "Penghijauan", "Ekonomi sirkular"],
    icon: <Beaker className="h-12 w-12 text-brand-green-dark" />
  },
  {
    id: 2,
    type: "soshum",
    title: "Program Soshum Jangli",
    summary: "Pemberdayaan masyarakat dalam bidang sosial kemasyarakatan dan hukum dasar untuk meningkatkan kesadaran berbangsa.",
    icon: <GraduationCap className="h-12 w-12 text-brand-charcoal" />
  }
];

// ─── DATA KELURAHAN TANDANG ───
const tandangSosmas = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  name: `Mahasiswa ${i + 1}`,
  title: `Program Sosmas Tandang ${i + 1}`,
  tag: ["Pendidikan", "Kesehatan", "Lingkungan", "Ekonomi", "Teknologi"][i % 5],
  desc: "Deskripsi program sosial masyarakat untuk Kelurahan Tandang akan diperbarui segera."
}));

const tandangMD = [
  {
    id: 1,
    type: "saintek",
    title: "Program Saintek Tandang",
    summary: "Inovasi teknologi tepat guna untuk mendukung produktivitas warga Kelurahan Tandang dan efisiensi sumber daya.",
    icon: <Beaker className="h-12 w-12 text-brand-green-dark" />
  },
  {
    id: 2,
    type: "soshum",
    title: "Program Soshum Tandang",
    summary: "Edukasi kesadaran hukum dan peningkatan kapasitas UMKM lokal di kawasan Kelurahan Tandang.",
    icon: <GraduationCap className="h-12 w-12 text-brand-charcoal" />
  }
];


export default function ProgramsSection() {
  const [activeKelurahan, setActiveKelurahan] = useState<"tandang" | "jangli">("tandang");
  const [isFlipping, setIsFlipping] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<any>(null);

  const handleKelurahanChange = (kelurahan: "tandang" | "jangli") => {
    if (kelurahan === activeKelurahan) return;
    setIsFlipping(true);
    setTimeout(() => setActiveKelurahan(kelurahan), 300);
    setTimeout(() => setIsFlipping(false), 600);
  };

  // Data selection based on active tab
  const currentMDData = activeKelurahan === "jangli" ? jangliMD : tandangMD;
  const currentSosmas = activeKelurahan === "jangli" ? jangliSosmas : tandangSosmas;

  const cardGradients = [
    "from-[#fdf1f6] to-[#f4d5e3]",
    "from-[#eef3f9] to-[#d3e3f3]",
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark mb-4">
              <Map className="h-3 w-3" />
              Program Kerja
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
              Fokus Pengabdian Kami
            </h2>
          </div>

          {/* Kelurahan Toggle */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              { id: "tandang", name: "Kelurahan Tandang" },
              { id: "jangli", name: "Kelurahan Jangli" }
            ].map((tab) => {
              const isActive = activeKelurahan === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleKelurahanChange(tab.id as "tandang" | "jangli")}
                  className={`px-6 py-3 rounded-full font-sans text-sm font-semibold transition-all duration-300 ${isActive
                      ? "bg-brand-charcoal text-white shadow-md scale-105"
                      : "bg-[#F5F4F0] text-brand-charcoal hover:bg-[#EAE9E5] hover:shadow-sm"
                    }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── MULTIDISIPLIN (MD2) ── */}
        <div className={`transition-all duration-500 ease-in-out ${isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="mb-24">
            <div className="flex flex-col items-center mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 mb-2">
                MULTIDISIPLIN 2
              </h3>
              <h4 className="text-3xl font-serif text-brand-charcoal">Saintek & Soshum</h4>
            </div>

            {/* Flat elegant cards for MD2 (Only 2 cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {currentMDData.map((prog, idx) => (
                <div key={prog.id} className="group relative bg-[#F5F4F0] rounded-[32px] p-8 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-[380px]">
                  <div className={`absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br ${cardGradients[idx % cardGradients.length]} rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                        {prog.icon}
                      </div>
                      <span className="px-4 py-1.5 rounded-full bg-white text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/60 shadow-sm">
                        {prog.type === 'saintek' ? 'Saintek' : 'Soshum'}
                      </span>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-brand-charcoal leading-snug mb-4 line-clamp-3">
                      {prog.title}
                    </h4>
                    
                    <p className="text-sm text-brand-charcoal/60 line-clamp-3 mb-6">
                      {prog.summary}
                    </p>

                    <div className="mt-auto">
                      <button
                        onClick={() => setSelectedDetail(prog)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-green-dark hover:text-brand-charcoal transition-colors group/btn"
                      >
                        Detail Program
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-brand-charcoal/10 max-w-4xl mx-auto my-4" />

          {/* ── SOSIAL MASYARAKAT (SOSMAS) ── */}
          <div className="mb-10">
            <div className="flex flex-col items-center mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 mb-2">
                SOSIAL MASYARAKAT
              </h3>
              <h4 className="text-3xl font-serif text-brand-charcoal">15 Program Sosmas</h4>
            </div>

            {/* Google Design Light Grid (Reverted to old design) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto">
              {currentSosmas.map((item) => (
                <div 
                  key={item.id}
                  className="group flex flex-col cursor-pointer"
                >
                  {/* Top — Image Area */}
                  <div className="w-full aspect-[4/3] rounded-2xl bg-brand-charcoal/5 flex items-center justify-center overflow-hidden mb-5">
                    <Users className="h-12 w-12 text-brand-charcoal/20 group-hover:scale-110 group-hover:text-brand-green-dark transition-all duration-500" />
                  </div>

                  {/* Content Area */}
                  <h3 className="text-xl font-bold text-brand-charcoal leading-tight mb-3 group-hover:text-brand-green-dark transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MODAL DETAIL PROGRAM ── */}
      {selectedDetail && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedDetail(null)}
          />

          <div className="relative bg-[#FDFCF8] rounded-[32px] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 sm:p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedDetail(null)}
              className="absolute top-6 right-6 p-3 bg-brand-charcoal/5 rounded-full hover:bg-brand-charcoal/10 transition-colors"
            >
              <X className="h-5 w-5 text-brand-charcoal" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark mb-4 block">
              {selectedDetail.type === "saintek" ? "Program Saintek" : "Program Soshum"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-brand-charcoal mb-10 pr-12 leading-tight">
              {selectedDetail.title}
            </h2>

            <div className="space-y-10">
              {!selectedDetail.usulan && (
                <div className="p-8 bg-brand-cream rounded-2xl border border-brand-charcoal/10 text-center">
                  <p className="text-brand-charcoal/60">Detail proposal belum tersedia untuk program ini.</p>
                </div>
              )}

              {selectedDetail.lokasi && (
                <div className="flex items-start gap-4 p-5 bg-brand-cream rounded-2xl">
                  <MapPin className="h-6 w-6 text-brand-green-dark shrink-0" />
                  <div>
                    <h3 className="font-semibold text-brand-charcoal">Lokasi Kegiatan</h3>
                    <p className="text-sm text-brand-charcoal/70 mt-1">{selectedDetail.lokasi}</p>
                  </div>
                </div>
              )}

              {selectedDetail.usulan && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">Usulan Program</h3>
                  <p className="text-brand-charcoal/70 leading-relaxed">{selectedDetail.usulan}</p>
                </div>
              )}

              {selectedDetail.potensi && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">Potensi</h3>
                  <p className="text-brand-charcoal/70 leading-relaxed">{selectedDetail.potensi}</p>
                </div>
              )}

              {selectedDetail.permasalahan && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-3">Permasalahan</h3>
                  <p className="text-brand-charcoal/70 leading-relaxed">{selectedDetail.permasalahan}</p>
                </div>
              )}

              {selectedDetail.metode && selectedDetail.metode.length > 0 && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-4">Metode Pelaksanaan</h3>
                  <ul className="space-y-3">
                    {selectedDetail.metode.map((step: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-brand-green-dark/10 text-brand-green-dark text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-brand-charcoal/70 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedDetail.tujuan && selectedDetail.tujuan.length > 0 && (
                <div>
                  <h3 className="text-xl font-medium text-brand-charcoal mb-4">Tujuan Program</h3>
                  <ul className="space-y-3">
                    {selectedDetail.tujuan.map((tuj: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-green-dark mt-2.5 shrink-0" />
                        <span className="text-brand-charcoal/70 leading-relaxed">{tuj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
