import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import LashingSection from "@/app/components/LashingSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex-1 flex flex-col">
        <HeroSection />
        <LashingSection />
      </div>

      <Footer />
    </>
  );
}
