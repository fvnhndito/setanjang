import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ProfileSection from "@/app/components/ProfileSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex-1 flex flex-col pt-20">
        <HeroSection />
        <AboutSection />
        <ProfileSection />
      </div>

      <Footer />
    </>
  );
}
