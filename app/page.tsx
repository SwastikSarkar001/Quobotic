import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
// import Products from "@/components/Products";
// import Services from "@/components/Services";
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
      {/* <Products /> */}
      {/* <Services /> */}
      <QuoboBotButton />
      <Footer />
    </main>
  );
}
