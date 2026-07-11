import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const wilayahData = [
  {
    id: "tandang",
    name: "Kelurahan Tandang",
    description: "Pusat inovasi agroekologi dan pemberdayaan ekonomi kreatif warga. Kami berfokus pada pelatihan UMKM dan edukasi pertanian organik terpadu.",
    href: "/tandang",
    image: "/image-home.svg", // Placeholder image
  },
  {
    id: "jangli",
    name: "Kelurahan Jangli",
    description: "Kawasan strategis dengan fokus pada literasi digital, perbaikan sanitasi lingkungan, dan pengembangan pojok baca untuk anak-anak.",
    href: "/jangli",
    image: "/image-home.svg", // Placeholder image
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[600px]">
          {wilayahData.map((wilayah) => (
            <div
              key={wilayah.id}
              className="relative rounded-[32px] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 h-[450px] lg:h-full"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-[#F5F4F0]">
                <Image
                  src={wilayah.image}
                  alt={wilayah.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 sm:p-12 z-10 transition-colors duration-500">
                <div className="transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 sm:mb-8 border border-white/20">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-serif text-white mb-3 drop-shadow-md">
                    {wilayah.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base leading-relaxed text-white/80 max-w-lg mb-8 drop-shadow-sm line-clamp-3">
                    {wilayah.description}
                  </p>

                  <Link
                    href={wilayah.href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-sm font-bold text-brand-charcoal hover:bg-[#F5F4F0] hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Eksplorasi Wilayah
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
