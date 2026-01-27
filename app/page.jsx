import Contact from "@/components/cafe/Contact";
import Footer from "@/components/cafe/Footer";
import Gallery from "@/components/cafe/Gallery";
import Hero from "@/components/cafe/Hero";
import Menu from "@/components/cafe/Menu";
import Navbar from "@/components/cafe/Navbar";
import NewsLetter from "@/components/cafe/NewsLetter";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Menu Section */}
        <Menu />
        {/* Gallery Section */}
        <Gallery />
        {/* Contact Section */}
        <Contact />
        {/* Newsletter Section */}
        <NewsLetter />
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
