import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Logo from "@/app/components/Logo";
import {
  BookOpen,
  Leaf,
  ShoppingBag,
  Monitor,
  Users,
  MapPin,
  Sprout,
  Calendar,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const pillars = [
  {
    icon: <BookOpen className="h-5 w-5 text-brand-green-dark" />,
    title: "Pendidikan & Kebudayaan",
    desc: "Menyelenggarakan bimbingan belajar interaktif, revitalisasi pojok baca, dan eksplorasi kesenian lokal guna merawat kreativitas generasi muda desa.",
  },
  {
    icon: <Leaf className="h-5 w-5 text-brand-green-dark" />,
    title: "Lingkungan & Sanitasi",
    desc: "Aksi penanaman pohon, edukasi pengelolaan sampah mandiri, serta penyuluhan kebersihan lingkungan demi menjaga ekosistem desa yang lestari.",
  },
  {
    icon: <ShoppingBag className="h-5 w-5 text-brand-green-dark" />,
    title: "Ekonomi Kreatif & UMKM",
    desc: "Pelatihan pembukuan sederhana, digitalisasi pemasaran produk lokal, dan rebranding kemasan untuk memperluas jangkauan pasar pelaku UMKM desa.",
  },
  {
    icon: <Monitor className="h-5 w-5 text-brand-green-dark" />,
    title: "Teknologi & Informasi",
    desc: "Pengembangan portal profil desa digital, penyuluhan literasi digital untuk menangkal hoaks, serta optimalisasi pendataan warga secara modern.",
  },
];

const stats = [
  {
    icon: <MapPin className="h-5 w-5 text-brand-green-dark" />,
    value: "1.240 Ha",
    label: "Luas Wilayah",
    sub: "Pertanian, Pemukiman & Hutan",
  },
  {
    icon: <Users className="h-5 w-5 text-brand-green-dark" />,
    value: "3.850 Jiwa",
    label: "Total Penduduk",
    sub: "Keluarga Produktif & Kreatif",
  },
  {
    icon: <Sprout className="h-5 w-5 text-brand-green-dark" />,
    value: "Pertanian & Perkebunan",
    label: "Sektor Unggulan",
    sub: "Padi, Jagung, & Sayur Organik",
  },
  {
    icon: <Calendar className="h-5 w-5 text-brand-green-dark" />,
    value: "40 Hari",
    label: "Masa Pengabdian",
    sub: "Kolaborasi KKN & Warga",
  },
];

const villageHighlights = [
  {
    title: "Sinergi Pertanian Berkelanjutan",
    desc: "Setanjang memiliki hamparan persawahan yang subur. Program KKN kami berfokus pada pengenalan metode pemupukan organik dan teknik irigasi hemat air guna meningkatkan produktivitas hasil tani warga secara ramah lingkungan.",
  },
  {
    title: "Potensi Wisata Agroekologi",
    desc: "Keindahan alam pedesaan yang asri memberikan peluang besar bagi pengembangan kawasan ekowisata. Kami berkolaborasi dengan pemuda Karang Taruna untuk merancang peta potensi wisata edukasi berbasis alam di Setanjang.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex-1 flex flex-col pt-20">
        {/* ─── HERO ─── */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center px-6 sm:px-8 lg:px-12 py-16 md:py-28"
        >
          {/* Background accents */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-brand-green-light/8 blur-3xl" />
            <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-brand-green-dark/5 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-7 flex flex-col gap-7 text-center lg:text-left">
              {/* Badge */}
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/8 text-brand-green-dark">
                  <Sparkles className="h-3 w-3" />
                  Pemberdayaan Desa 2026
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-charcoal leading-[1.1] tracking-tight">
                Mengabdi dengan Hati, <br />
                <span className="italic text-brand-green-dark font-medium">
                  Membangun Desa Setanjang
                </span>
              </h1>

              <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-brand-charcoal/65 leading-relaxed">
                Portal resmi pengabdian KKN Desa Setanjang 2026. Bersama
                masyarakat desa, kami berkolaborasi menciptakan program
                berkelanjutan di bidang pendidikan, kelestarian lingkungan,
                ekonomi lokal, dan digitalisasi desa.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#about"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-medium bg-brand-green-dark text-brand-cream hover:bg-brand-green-dark/90 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Jelajahi Program
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#kelurahan"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-medium border border-brand-charcoal/15 text-brand-charcoal hover:bg-brand-charcoal/5 transition-all duration-300 flex items-center justify-center"
                >
                  Kenali Profil Desa
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-[460px] aspect-square rounded-3xl p-3 bg-white shadow-xl border border-brand-charcoal/5 transition-transform duration-500 hover:scale-[1.02] group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brand-cream">
                  <Image
                    src="/setanjang_hero_village.png"
                    alt="Ilustrasi Desa Setanjang"
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 460px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/25 via-transparent to-transparent" />
                </div>

                {/* Floating widget */}
                <div className="absolute -bottom-4 -left-4 bg-brand-cream border border-brand-charcoal/8 px-5 py-3.5 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-green-dark/10 flex items-center justify-center">
                    <Sprout className="h-5 w-5 text-brand-green-dark" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-brand-charcoal/45 uppercase tracking-wider">
                      Fokus Utama
                    </p>
                    <p className="text-sm font-bold text-brand-charcoal">
                      Agrikultur Berkelanjutan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT US / PILLARS ─── */}
        <section
          id="about"
          className="px-6 sm:px-8 lg:px-12 py-20 md:py-28 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">
                Tentang Kami
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-brand-charcoal leading-tight">
                Menyulam Gagasan, Mewujudkan Kemajuan Nyata
              </h2>
              <div className="h-[2px] w-16 bg-brand-green-dark/25 mx-auto mt-6 mb-5" />
              <p className="text-base text-brand-charcoal/60 leading-relaxed">
                KKN Setanjang 2026 merupakan wadah dedikasi mahasiswa untuk
                turun langsung bermitra dengan masyarakat desa. Kami merancang
                empat pilar program kerja strategis yang berfokus pada
                pemberdayaan lokal yang berkelanjutan.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="bg-brand-cream p-7 rounded-2xl border border-brand-charcoal/5 hover:shadow-md hover:border-brand-green-dark/15 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-5">
                    <div className="h-11 w-11 rounded-xl bg-white shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-bold text-brand-charcoal">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-brand-charcoal/65 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center gap-0.5 text-xs font-semibold text-brand-green-dark tracking-wider uppercase group-hover:gap-1.5 transition-all">
                    <span>Selengkapnya</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── KELURAHAN / VILLAGE PROFILE ─── */}
        <section
          id="kelurahan"
          className="px-6 sm:px-8 lg:px-12 py-20 md:py-28 relative overflow-hidden"
        >
          <div className="absolute top-[40%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-brand-green-light/5 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">
                Profil Kelurahan
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-brand-charcoal leading-tight">
                Mengenal Lebih Dekat Desa Setanjang
              </h2>
              <div className="h-[2px] w-16 bg-brand-green-dark/25 mx-auto mt-6 mb-5" />
              <p className="text-base text-brand-charcoal/60 leading-relaxed">
                Setanjang adalah sebuah kelurahan asri yang dianugerahi kekayaan
                alam melimpah, khususnya di sektor agraris. Keramahan penduduk
                dan komitmen pelestarian budaya lokal menjadi pondasi kuat
                kemajuan desa ini.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 md:mb-20">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-brand-charcoal/5 text-center flex flex-col items-center justify-center gap-3"
                >
                  <div className="h-10 w-10 rounded-full bg-brand-green-dark/8 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <p className="text-xl font-serif font-bold text-brand-charcoal">
                    {stat.value}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-brand-charcoal/75">
                      {stat.label}
                    </p>
                    <p className="text-xs text-brand-charcoal/45 mt-0.5">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {villageHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="bg-white p-8 md:p-10 rounded-2xl border border-brand-charcoal/5 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-brand-green-light" />
                      <span className="text-xs font-semibold text-brand-green-dark uppercase tracking-wider">
                        Potensi Unggulan {i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif text-brand-charcoal leading-snug">
                      {hl.title}
                    </h3>
                    <p className="text-sm text-brand-charcoal/65 leading-relaxed">
                      {hl.desc}
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-brand-green-dark hover:underline cursor-pointer">
                    Pelajari lebih lanjut →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="bg-brand-charcoal text-brand-cream/80 py-16 px-6 sm:px-8 lg:px-12 border-t border-brand-cream/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <div className="inline-block bg-brand-cream/5 px-4 py-2 rounded-xl border border-brand-cream/10">
              <Logo size="md" />
            </div>
            <p className="text-sm text-brand-cream/55 leading-relaxed max-w-sm">
              Sinergi mahasiswa KKN Universitas bersama warga Desa Setanjang
              dalam mewujudkan transformasi digital, kelestarian lingkungan, dan
              kemandirian ekonomi masyarakat.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-cream">
              Tautan Navigasi
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="#home"
                className="text-sm text-brand-cream/55 hover:text-brand-green-light transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm text-brand-cream/55 hover:text-brand-green-light transition-colors"
              >
                About Us
              </a>
              <a
                href="#kelurahan"
                className="text-sm text-brand-cream/55 hover:text-brand-green-light transition-colors"
              >
                Kelurahan Setanjang
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-cream">
              Kontak Pengabdian
            </h4>
            <p className="text-sm text-brand-cream/55 leading-relaxed">
              Kantor Kelurahan Setanjang <br />
              Kecamatan Setanjang, 2026 <br />
              Email: kkn.setanjang2026@gmail.com
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-14 pt-7 border-t border-brand-cream/8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-cream/40">
          <p>
            © {new Date().getFullYear()} KKN Desa Setanjang. Hak Cipta
            Dilindungi.
          </p>
          <p className="mt-2 sm:mt-0">
            Dibuat dengan ❤️ oleh Tim KKN Setanjang 2026
          </p>
        </div>
      </footer>
    </>
  );
}
