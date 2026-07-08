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

export default function Home() {
  const pillars = [
    {
      icon: <BookOpen className="h-6 w-6 text-brand-green-dark dark:text-brand-green-light" />,
      title: "Pendidikan & Kebudayaan",
      desc: "Menyelenggarakan bimbingan belajar interaktif, revitalisasi pojok baca, dan eksplorasi kesenian lokal guna merawat kreativitas generasi muda desa.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-brand-green-dark dark:text-brand-green-light" />,
      title: "Lingkungan & Sanitasi",
      desc: "Aksi penanaman pohon, edukasi pengelolaan sampah mandiri, serta penyuluhan kebersihan lingkungan demi menjaga ekosistem desa yang lestari.",
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-brand-green-dark dark:text-brand-green-light" />,
      title: "Ekonomi Kreatif & UMKM",
      desc: "Pelatihan pembukuan sederhana, digitalisasi pemasaran produk lokal, dan rebranding kemasan untuk memperluas jangkauan pasar pelaku UMKM desa.",
    },
    {
      icon: <Monitor className="h-6 w-6 text-brand-green-dark dark:text-brand-green-light" />,
      title: "Teknologi & Informasi",
      desc: "Pengembangan portal profil desa digital, penyuluhan literasi digital untuk menangkal hoaks, serta optimalisasi pendataan warga secara modern.",
    },
  ];

  const stats = [
    {
      icon: <MapPin className="h-5 w-5 text-brand-green-dark dark:text-brand-green-light" />,
      value: "1.240 Ha",
      label: "Luas Wilayah",
      sub: "Pertanian, Pemukiman & Hutan",
    },
    {
      icon: <Users className="h-5 w-5 text-brand-green-dark dark:text-brand-green-light" />,
      value: "3.850 Jiwa",
      label: "Total Penduduk",
      sub: "Keluarga Produktif & Kreatif",
    },
    {
      icon: <Sprout className="h-5 w-5 text-brand-green-dark dark:text-brand-green-light" />,
      value: "Pertanian & Perkebunan",
      label: "Sektor Unggulan",
      sub: "Padi, Jagung, & Sayur Organik",
    },
    {
      icon: <Calendar className="h-5 w-5 text-brand-green-dark dark:text-brand-green-light" />,
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

  return (
    <>
      <Navbar />

      {/* Main Container */}
      <div className="flex-1 flex flex-col pt-20">
        
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 py-12 md:py-24"
        >
          {/* Subtle background graphics */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-brand-green-light/10 blur-3xl" />
            <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-brand-green-dark/5 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center justify-center lg:justify-start space-x-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark dark:bg-brand-green-light/10 dark:text-brand-green-light flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 animate-pulse" />
                  Pemberdayaan Desa 2026
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-charcoal dark:text-brand-cream font-normal leading-[1.1] tracking-tight">
                Mengabdi dengan Hati, <br />
                <span className="font-italic italic text-brand-green-dark dark:text-brand-green-light font-medium">
                  Membangun Desa Setanjang
                </span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-brand-charcoal/70 dark:text-brand-cream/70 leading-relaxed font-sans font-normal">
                Portal resmi pengabdian KKN Desa Setanjang 2026. Bersama masyarakat desa, kami berkolaborasi menciptakan program berkelanjutan di bidang pendidikan, kelestarian lingkungan, ekonomi lokal, dan digitalisasi desa.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#about"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-medium text-[15px] bg-brand-green-dark text-brand-cream hover:bg-brand-green-dark/90 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Jelajahi Program
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#kelurahan"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans font-medium text-[15px] border border-brand-charcoal/20 dark:border-brand-cream/20 text-brand-charcoal dark:text-brand-cream hover:bg-brand-charcoal/5 dark:hover:bg-brand-cream/5 transition-all duration-300 flex items-center justify-center"
                >
                  Kenali Profil Desa
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Graphic */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-[480px] aspect-square rounded-3xl p-3 bg-white dark:bg-brand-charcoal shadow-xl border border-brand-charcoal/5 dark:border-brand-cream/5 transition-transform duration-500 hover:scale-[1.02] group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brand-cream">
                  <Image
                    src="/setanjang_hero_village.png"
                    alt="Ilustrasi Desa Setanjang"
                    fill
                    priority
                    sizes="(max-w-7xl) 100vw, 480px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 via-transparent to-transparent opacity-60" />
                </div>

                {/* Micro-floating widget */}
                <div className="absolute -bottom-4 -left-4 bg-brand-cream dark:bg-brand-charcoal border border-brand-charcoal/10 dark:border-brand-cream/10 px-5 py-3.5 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand-green-dark/10 dark:bg-brand-green-light/10 flex items-center justify-center">
                    <Sprout className="h-5 w-5 text-brand-green-dark dark:text-brand-green-light" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-charcoal/50 dark:text-brand-cream/50 uppercase tracking-wider">
                      Fokus Utama
                    </p>
                    <p className="text-sm font-bold text-brand-charcoal dark:text-brand-cream">
                      Agrikultur Berkelanjutan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ABOUT US / WORK PILLARS SECTION */}
        <section
          id="about"
          className="px-6 sm:px-8 lg:px-12 py-20 md:py-32 bg-white dark:bg-[#1a1b1d] transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header info */}
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-24">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark dark:text-brand-green-light">
                TENTANG KAMI
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-brand-charcoal dark:text-brand-cream leading-tight">
                Menyulam Gagasan, Mewujudkan Kemajuan Nyata
              </h2>
              <div className="h-[2px] w-20 bg-brand-green-dark/30 dark:bg-brand-green-light/30 mx-auto my-6" />
              <p className="text-base sm:text-lg text-brand-charcoal/70 dark:text-brand-cream/70 leading-relaxed font-sans">
                KKN Setanjang 2026 merupakan wadah dedikasi mahasiswa untuk turun langsung bermitra dengan masyarakat desa. Kami merancang empat pilar program kerja strategis yang berfokus pada pemberdayaan lokal yang berkelanjutan.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="bg-brand-cream dark:bg-brand-charcoal p-8 rounded-2xl border border-brand-charcoal/5 dark:border-brand-cream/5 shadow-sm hover:shadow-md hover:border-brand-green-dark/20 dark:hover:border-brand-green-light/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-6">
                    {/* Icon container */}
                    <div className="h-12 w-12 rounded-xl bg-white dark:bg-brand-cream/5 shadow-inner flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {pillar.icon}
                    </div>

                    <h3 className="text-xl font-bold font-sans text-brand-charcoal dark:text-brand-cream">
                      {pillar.title}
                    </h3>

                    <p className="text-[14px] text-brand-charcoal/75 dark:text-brand-cream/75 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-8 flex items-center text-xs font-semibold text-brand-green-dark dark:text-brand-green-light tracking-wider uppercase group-hover:gap-1.5 transition-all">
                    <span>Selengkapnya</span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* KELURAHAN / VILLAGE PROFILE SECTION */}
        <section
          id="kelurahan"
          className="px-6 sm:px-8 lg:px-12 py-20 md:py-32 relative overflow-hidden"
        >
          {/* Accent light spots */}
          <div className="absolute top-[40%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-brand-green-light/5 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            {/* Header info */}
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-24">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark dark:text-brand-green-light">
                PROFIL KELURAHAN
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-brand-charcoal dark:text-brand-cream leading-tight">
                Mengenal Lebih Dekat Desa Setanjang
              </h2>
              <div className="h-[2px] w-20 bg-brand-green-dark/30 dark:bg-brand-green-light/30 mx-auto my-6" />
              <p className="text-base sm:text-lg text-brand-charcoal/70 dark:text-brand-cream/70 leading-relaxed font-sans">
                Setanjang adalah sebuah kelurahan asri yang dianugerahi kekayaan alam melimpah, khususnya di sektor agraris. Keramahan penduduk dan komitmen pelestarian budaya lokal menjadi pondasi kuat kemajuan desa ini.
              </p>
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-brand-charcoal/50 p-6 rounded-2xl border border-brand-charcoal/5 dark:border-brand-cream/5 shadow-sm text-center flex flex-col items-center justify-center space-y-3"
                >
                  <div className="h-10 w-10 rounded-full bg-brand-green-dark/10 dark:bg-brand-green-light/10 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-serif font-bold text-brand-charcoal dark:text-brand-cream">
                    {stat.value}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-brand-charcoal/80 dark:text-brand-cream/80 font-sans">
                      {stat.label}
                    </p>
                    <p className="text-xs text-brand-charcoal/50 dark:text-brand-cream/50 mt-0.5 font-sans">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Detail Potential Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {villageHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-brand-charcoal p-8 md:p-10 rounded-3xl border border-brand-charcoal/5 dark:border-brand-cream/5 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="space-y-4">
                    {/* Tiny bullet design */}
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-brand-green-light" />
                      <span className="text-xs font-semibold text-brand-green-dark dark:text-brand-green-light uppercase tracking-wider">
                        Potensi Unggulan {i + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-normal text-brand-charcoal dark:text-brand-cream leading-snug">
                      {hl.title}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-charcoal/70 dark:text-brand-cream/70 leading-relaxed font-sans">
                      {hl.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center text-xs font-semibold text-brand-green-dark dark:text-brand-green-light hover:underline cursor-pointer">
                    Pelajari lebih lanjut tentang agraris desa Setanjang
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER SECTION */}
      <footer className="bg-brand-charcoal text-brand-cream/80 dark:bg-black py-16 px-6 sm:px-8 lg:px-12 border-t border-brand-cream/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Left Column: Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="inline-block bg-brand-cream/5 px-4 py-2 rounded-xl border border-brand-cream/10">
              <Logo size="md" />
            </div>
            
            <p className="text-sm text-brand-cream/60 leading-relaxed font-sans max-w-sm">
              Sinergi mahasiswa KKN Universitas bersama warga Desa Setanjang dalam mewujudkan transformasi digital, kelestarian lingkungan, dan kemandirian ekonomi masyarakat.
            </p>
          </div>

          {/* Center Column: Quick Navigation Links */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-cream">
              Tautan Navigasi
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="#home" className="text-sm text-brand-cream/60 hover:text-brand-green-light transition-colors font-sans">
                Home
              </a>
              <a href="#about" className="text-sm text-brand-cream/60 hover:text-brand-green-light transition-colors font-sans">
                About Us
              </a>
              <a href="#kelurahan" className="text-sm text-brand-cream/60 hover:text-brand-green-light transition-colors font-sans">
                Kelurahan Setanjang
              </a>
            </div>
          </div>

          {/* Right Column: Contact/Credit */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-cream">
              Kontak Pengabdian
            </h4>
            <p className="text-sm text-brand-cream/60 leading-relaxed font-sans">
              Kantor Kelurahan Setanjang <br />
              Kecamatan Setanjang, 2026 <br />
              Email: kkn.setanjang2026@gmail.com
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-cream/10 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-cream/45">
          <p className="font-sans">
            © {new Date().getFullYear()} KKN Desa Setanjang. Hak Cipta Dilindungi.
          </p>
          <p className="mt-2 sm:mt-0 font-sans">
            Dibuat dengan ❤️ oleh Tim KKN Setanjang 2026
          </p>
        </div>
      </footer>
    </>
  );
}
