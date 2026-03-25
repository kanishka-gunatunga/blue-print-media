import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import AboutCEO from "@/components/AboutCEO";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <AboutCEO />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
