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
    <section id="pillars" className="px-5 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-20 md:pb-28 bg-white border-t border-brand-charcoal/5">
      <div className="max-w-[1440px] mx-auto">
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-green-dark/10 text-brand-green-dark">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-charcoal leading-tight">
            Mengapa KKN Setanjang?
          </h2>
          <div className="h-[2px] w-16 bg-brand-green-dark/30 mx-auto my-6" />
          <p className="text-base sm:text-lg text-brand-charcoal/70 leading-relaxed mx-auto">
            KKN Setanjang 2026 merupakan wadah dedikasi mahasiswa untuk
            turun langsung bermitra dengan masyarakat Kelurahan Jangli dan Tandang. Kami merancang
            empat pilar program kerja strategis yang berfokus pada
            pemberdayaan lokal yang berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const cardGradients = [
              "from-[#fdf1f6] to-[#f4d5e3]",
              "from-[#eef3f9] to-[#d3e3f3]",
              "from-[#f0f8f1] to-[#d6efda]",
              "from-[#fff8ee] to-[#fde5c5]",
            ];
            
            return (
              <div
                key={i}
                className="group relative bg-[#F5F4F0] rounded-[32px] p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col min-h-[300px]"
              >
                <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${cardGradients[i % cardGradients.length]} rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center mb-6 text-brand-green-dark group-hover:scale-110 shadow-sm transition-transform duration-500">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-charcoal mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
