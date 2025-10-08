import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Showcase from "@/components/Showcase";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Packages />
      <About />
      <Showcase />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}


