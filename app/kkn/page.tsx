import Navbar from "@/app/components/Navbar";
import TeamSection from "@/app/components/TeamSection";
import AboutSection from "@/app/components/AboutSection";
import ProgramsSection from "@/app/components/ProgramsSection";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Tim KKN Setanjang 2026 - KKN IDBU 70",
  description: "Profil lengkap anggota mahasiswa, divisi, dan pilar pengabdian KKN IDBU 70 Desa Setanjang.",
};

export default function KknPage() {
  return (
    <>
      <Navbar />

      <div className="flex-1 flex flex-col">
        {/* Render team first as requested */}
        <TeamSection />
        <AboutSection />
        <ProgramsSection />
      </div>

      <Footer />
    </>
  );
}
