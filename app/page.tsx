import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import WilayahSection from "@/app/components/WilayahSection";
import UmkmShowcase from "@/app/components/UmkmShowcase";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex-1 flex flex-col">
        <HeroSection />
        <AboutSection />
        <UmkmShowcase />
        <WilayahSection />
      </div>

      <Footer />
    </>
  );
}
