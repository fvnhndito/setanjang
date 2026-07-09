import { BookOpen, Leaf, ShoppingBag, Monitor } from "lucide-react";

const pillars = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Pendidikan & Kebudayaan",
    desc: "Bimbingan belajar interaktif, revitalisasi pojok baca, dan eksplorasi kesenian lokal guna merawat kreativitas generasi muda desa.",
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "Lingkungan & Sanitasi",
    desc: "Aksi penanaman pohon, edukasi pengelolaan sampah mandiri, serta penyuluhan kebersihan lingkungan demi ekosistem desa yang lestari.",
  },
  {
    icon: <ShoppingBag className="h-5 w-5" />,
    title: "Ekonomi Kreatif & UMKM",
    desc: "Pelatihan pembukuan sederhana, digitalisasi pemasaran produk lokal, dan rebranding kemasan untuk memperluas pasar UMKM desa.",
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "Teknologi & Informasi",
    desc: "Pengembangan portal desa digital, penyuluhan literasi digital untuk menangkal hoaks, serta optimalisasi pendataan warga.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="px-6 sm:px-8 lg:px-12 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* ── "Why Choosing Us" style layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left — Big Heading */}
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">
              Tentang Kami
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-brand-charcoal leading-tight">
              Mengapa
              <br />
              KKN Setanjang?
            </h2>
          </div>

          {/* Right — Description */}
          <div className="lg:col-span-8 flex items-end">
            <p className="text-base text-brand-charcoal/60 leading-relaxed max-w-2xl">
              KKN Setanjang 2026 merupakan wadah dedikasi mahasiswa untuk
              turun langsung bermitra dengan masyarakat desa. Kami merancang
              empat pilar program kerja strategis yang berfokus pada
              pemberdayaan lokal yang berkelanjutan.
            </p>
          </div>
        </div>

        {/* ── Pillars Grid (like product/feature cards) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl border border-brand-charcoal/8 bg-white hover:bg-brand-charcoal hover:border-brand-charcoal transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-cream flex items-center justify-center mb-6 text-brand-green-dark group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-brand-charcoal mb-3 group-hover:text-white transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-sm text-brand-charcoal/55 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
