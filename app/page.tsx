import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Footer from "@/ui/Footer";
import Navbar, { MobileNavbar } from "@/ui/Navbar";
import QuoboBotButton from "@/ui/QuoboBot";

export default function Home() {
  return (
    <main className="main-content">
      <Navbar />
      <MobileNavbar />
      <HeroSection />
      <AboutUs />
      <HeroSection />
      <HeroSection />
      <QuoboBotButton />
      <Footer />
    </main>
  );
}
