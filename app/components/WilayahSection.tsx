import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

const wilayahData = [
  {
    id: "tandang",
    name: "Kelurahan Tandang",
    description: "Pusat inovasi agroekologi dan pemberdayaan ekonomi kreatif warga. Kami berfokus pada pelatihan UMKM dan edukasi pertanian organik terpadu.",
    href: "/tandang",
    color: "bg-brand-cream",
    textColor: "text-brand-charcoal",
  },
  {
    id: "jangli",
    name: "Kelurahan Jangli",
    description: "Kawasan strategis dengan fokus pada literasi digital, perbaikan sanitasi lingkungan, dan pengembangan pojok baca untuk anak-anak.",
    href: "/jangli",
    color: "bg-[#EAE8E2]", // Slightly darker cream for contrast
    textColor: "text-brand-charcoal",
  },
];

export default function WilayahSection() {
  return (
    <section id="wilayah" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">
              Wilayah Pengabdian
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-brand-charcoal leading-tight">
              Menjangkau Lebih Jauh, <br />
              Membangun Bersama
            </h2>
          </div>
          <p className="text-base text-brand-charcoal/60 leading-relaxed max-w-md">
            Pilih area kelurahan di bawah ini untuk melihat detail potensi, 
            kegiatan spesifik, dan laporan perkembangan program pengabdian kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {wilayahData.map((wilayah) => (
            <div
              key={wilayah.id}
              className={`${wilayah.color} rounded-3xl p-8 sm:p-12 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between min-h-[380px] group`}
            >
              <div>
                <div className="h-12 w-12 rounded-full bg-white/60 flex items-center justify-center mb-8">
                  <MapPin className="h-5 w-5 text-brand-green-dark" />
                </div>
                <h3 className={`text-3xl font-medium ${wilayah.textColor} mb-4`}>
                  {wilayah.name}
                </h3>
                <p className={`text-base leading-relaxed ${wilayah.textColor} opacity-70 max-w-lg`}>
                  {wilayah.description}
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href={wilayah.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all duration-300 shadow-sm"
                >
                  Lihat Selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
