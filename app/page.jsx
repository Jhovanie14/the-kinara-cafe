import Hero from "@/components/cafe/Hero";
import NewsLetter from "@/components/cafe/NewsLetter";
import ProductShowcaseComplete from "@/components/cafe/ProductShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Product Showcase Section */}
        <ProductShowcaseComplete />
        {/* Newsletter Section */}
        <NewsLetter />
      </main>
    </div>
  );
}
