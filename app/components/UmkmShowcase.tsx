import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Kopi Organik Lokal",
    category: "Minuman & Hasil Bumi",
    description: "Kopi robusta asli hasil panen petani lokal dengan proses roasting tradisional.",
    color: "bg-[#2E5A44]/10", // soft green tint
  },
  {
    id: 2,
    name: "Kerajinan Bambu Anyam",
    category: "Kerajinan Tangan",
    description: "Berbagai perabot dan hiasan rumah yang dianyam secara manual oleh pengrajin desa.",
    color: "bg-brand-charcoal/5", // light grey tint
  },
  {
    id: 3,
    name: "Batik Tulis Corak Alam",
    category: "Pakaian & Tekstil",
    description: "Kain batik dengan motif khas daun dan kekayaan alam desa, menggunakan pewarna alami.",
    color: "bg-[#5B9E31]/10", // light green tint
  },
  {
    id: 4,
    name: "Olahan Keripik Singkong",
    category: "Makanan Ringan",
    description: "Camilan renyah berkualitas tinggi yang diproduksi oleh ibu-ibu PKK setempat.",
    color: "bg-orange-900/5", // warm tint
  },
];

export default function UmkmShowcase() {
  return (
    <section id="umkm" className="px-5 sm:px-6 lg:px-8 py-20 md:py-28 bg-[#F5F4F0]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">
              Pemberdayaan UMKM
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-brand-charcoal leading-tight">
              Karya & Potensi Lokal <br />
              Jangli & Tandang
            </h2>
          </div>
          <p className="text-base text-brand-charcoal/60 leading-relaxed max-w-md">
            Dukung kemandirian ekonomi masyarakat dengan mengenal dan membeli 
            produk-produk unggulan hasil karya warga Jangli dan Tandang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-charcoal/5 hover:border-brand-charcoal/20 transition-all duration-300 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className={`w-full aspect-[4/3] ${product.color} flex items-center justify-center p-8 relative overflow-hidden`}>
                <ShoppingBag className="h-10 w-10 text-brand-charcoal/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green-dark mb-3 block">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-medium text-brand-charcoal mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-brand-charcoal/60 leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>
                
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal hover:text-brand-green-dark transition-colors group/link"
                >
                  Detail Produk
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
