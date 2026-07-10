import Navbar from "@/app/components/Navbar";
import TeamSection from "@/app/components/TeamSection";
import KknProgramsSection from "@/app/components/KknProgramsSection";
import AboutSection from "@/app/components/AboutSection";
import UmkmShowcase from "@/app/components/UmkmShowcase";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Tim KKN Setanjang 2026 - KKN IDBU 70",
  description: "Profil lengkap anggota mahasiswa, divisi, dan pilar pengabdian KKN IDBU 70 Desa Setanjang.",
};

export default function KknPage() {
  return (
    <>
      <Navbar />

      <div className="flex-1 flex flex-col pt-16">
        {/* Render team first as requested */}
        <TeamSection />
        
        {/* Render Multidisiplin 2, 3 & 15 Program Sosmas (Tandang & Jangli) */}
        <KknProgramsSection />

        <AboutSection />
        <UmkmShowcase />
      </div>

      <Footer />
    </>
  );
}

