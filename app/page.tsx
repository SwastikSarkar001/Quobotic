import HeroSection from "@/components/HeroSection";
import Footer from "@/ui/Footer";
import Navbar, { MobileNavbar } from "@/ui/Navbar";
import QuoboBotButton from "@/ui/QuoboBot";

export default function Home() {
  return (
    <main className="main-content bg-radial-[circle_at_50%_-60%] from-primary/60 to-transparent to-70%">
      <Navbar />
      <MobileNavbar />
      <HeroSection />
      <QuoboBotButton />
      <Footer />
    </main>
  );
}
