import { MapPin, Users, Sprout, Calendar, ArrowRight } from "lucide-react";

const stats = [
  { value: "1.240 Ha", label: "Luas Wilayah" },
  { value: "3.850", label: "Jiwa Penduduk" },
  { value: "40 Hari", label: "Masa Pengabdian" },
  { value: "4 Pilar", label: "Program Kerja" },
];

export default function ProfileSection() {
  return (
    <>
      {/* ── Section 1: "Best Experience" style — dark left, text right ── */}
      <section className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-brand-charcoal/8">
            {/* Left — Dark Panel with Stats */}
            <div className="bg-brand-charcoal p-10 md:p-14 flex flex-col justify-between min-h-[420px]">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green-light">
                  Profil Kelurahan
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-white leading-tight">
                  Mengenal Lebih Dekat
                  <br />
                  Desa Setanjang
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Text Content */}
            <div className="p-10 md:p-14 flex flex-col justify-center gap-6 bg-brand-cream">
              <p className="text-base text-brand-charcoal/65 leading-relaxed">
                Setanjang adalah sebuah kelurahan asri yang dianugerahi kekayaan
                alam melimpah, khususnya di sektor agraris. Keramahan penduduk
                dan komitmen pelestarian budaya lokal menjadi pondasi kuat
                kemajuan desa ini.
              </p>
              <p className="text-base text-brand-charcoal/65 leading-relaxed">
                Program KKN kami berfokus pada pengenalan metode pemupukan
                organik dan teknik irigasi hemat air guna meningkatkan
                produktivitas hasil tani warga secara ramah lingkungan.
              </p>

              <a
                href="#kelurahan-detail"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-dark hover:gap-3 transition-all duration-300 mt-2"
              >
                Selengkapnya
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: "Materials" style — text left, image grid right ── */}
      <section
        id="kelurahan"
        className="px-5 sm:px-6 lg:px-8 py-20 md:py-28"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">
                Potensi Unggulan
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-charcoal leading-tight">
                Sinergi Pertanian
                <br />
                Berkelanjutan & Wisata
                <br />
                Agroekologi
              </h2>
              <p className="text-base text-brand-charcoal/60 leading-relaxed max-w-lg">
                Keindahan alam pedesaan yang asri memberikan peluang besar bagi
                pengembangan kawasan ekowisata. Kami berkolaborasi dengan pemuda
                Karang Taruna untuk merancang peta potensi wisata edukasi
                berbasis alam di Setanjang.
              </p>
              <a
                href="#"
                style={{ backgroundColor: "#2E5A44", color: "#F5F4F0" }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium bg-brand-green-dark text-brand-cream hover:opacity-90 transition-opacity duration-300 group"
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right — Image Grid Placeholder (2x2 mosaic) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl bg-brand-charcoal/10 flex items-center justify-center">
                  <span className="text-sm text-brand-charcoal/30">
                    Foto Desa 1
                  </span>
                </div>
                <div className="aspect-square rounded-2xl bg-brand-charcoal/10 flex items-center justify-center">
                  <span className="text-sm text-brand-charcoal/30">
                    Foto Desa 2
                  </span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl bg-brand-charcoal/10 flex items-center justify-center">
                  <span className="text-sm text-brand-charcoal/30">
                    Foto Desa 3
                  </span>
                </div>
                <div className="aspect-[4/5] rounded-2xl bg-brand-charcoal/10 flex items-center justify-center">
                  <span className="text-sm text-brand-charcoal/30">
                    Foto Desa 4
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
