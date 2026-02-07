"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export default function ProductShowcaseComplete() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedPack, setSelectedPack] = useState("2pack");
  const [subscribeEnabled, setSubscribeEnabled] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199342230_8ed274c9.png",
      alt: "Karak Chai being poured",
    },
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199338953_66572652.png",
      alt: "Chai ingredients and spices",
    },
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199339880_3a0c931e.png",
      alt: "Cup of Karak Chai",
    },
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199342815_e0a04811.jpg",
      alt: "Chai blend package",
    },
  ];

  const packOptions = [
    {
      id: "single",
      name: "Single",
      badge: "SAVE 5%",
      price: "$17.10",
      originalPrice: "$18.00",
    },
    {
      id: "2pack",
      name: "2 Pack",
      badge: "SAVE 10%",
      price: "$32.50",
      originalPrice: "$36.00",
      popular: true,
    },
    {
      id: "4pack",
      name: "4 Pack",
      badge: "SAVE 15%",
      price: "$61.56",
      originalPrice: "$72.00",
      freeShipping: true,
    },
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index) => {
    setLightboxImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  const nextLightboxImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % images.length);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  return (
    <section className="bg-black text-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Left Side - Product Image with Thumbnails & Navigation */}
          <div className="flex gap-4">
            {/* Thumbnail Column */}
            <div className="flex flex-col gap-3 w-20 md:w-24">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-yellow-400 shadow-lg shadow-yellow-400/20"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image with Navigation */}
            <div className="flex-1 relative">
              <div
                className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-800 group cursor-pointer"
                onClick={() => openLightbox(selectedImage)}
              >
                {/* Main Product Image */}
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full h-full object-cover"
                />

                {/* Zoom Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-black transition-all shadow-lg hover:shadow-xl z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-black transition-all shadow-lg hover:shadow-xl z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {images.length}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-3">
            {/* Title & Reviews */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
                Kinara Blend
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-lime-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">55 reviews</span>
              </div>
            </div>

            {/* Pack Options */}
            <div className="space-y-4">
              {packOptions.map((pack) => (
                <div key={pack.id} className="relative">
                  <button
                    onClick={() => setSelectedPack(pack.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                      selectedPack === pack.id
                        ? "border-yellow-400 bg-yellow-400/5"
                        : "border-gray-800 hover:border-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Radio Button */}
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedPack === pack.id
                            ? "border-yellow-400"
                            : "border-gray-600"
                        }`}
                      >
                        {selectedPack === pack.id && (
                          <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                        )}
                      </div>
                      {/* Pack Name & Badge */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-bold text-lg">{pack.name}</span>
                        <span className="px-3 py-1 bg-lime-400 text-black text-xs font-bold rounded-full uppercase">
                          {pack.badge}
                        </span>
                      </div>
                    </div>
                    {/* Pricing */}
                    <div className="text-right">
                      <div className="font-bold text-2xl">{pack.price}</div>
                      <div className="text-sm text-gray-500 line-through">
                        {pack.originalPrice}
                      </div>
                    </div>
                  </button>
                  {/* Labels */}
                  {pack.popular && (
                    <div className="absolute -top-2.5 right-6 px-4 py-1 bg-lime-400 text-black text-xs font-bold rounded-full shadow-lg">
                      Most popular
                    </div>
                  )}
                  {pack.freeShipping && (
                    <div className="absolute -top-2.5 right-6 px-4 py-1 bg-lime-400 text-black text-xs font-bold rounded-full shadow-lg">
                      Free shipping
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Subscribe & Save */}
            <div className="border-2 border-dashed border-gray-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="relative flex items-center h-6">
                  <input
                    type="checkbox"
                    id="subscribe"
                    checked={subscribeEnabled}
                    onChange={(e) => setSubscribeEnabled(e.target.checked)}
                    className="w-5 h-5 accent-yellow-400 cursor-pointer"
                  />
                  <svg
                    className={`absolute w-5 h-5 pointer-events-none transition-opacity ${
                      subscribeEnabled ? "opacity-100" : "opacity-0"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      className="text-yellow-400"
                      d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="subscribe"
                    className="font-bold text-lg cursor-pointer block"
                  >
                    Subscribe & Save
                  </label>
                  <p className="text-gray-400 text-sm italic mt-1">
                    Pause or cancel anytime
                  </p>
                </div>
              </div>
              <select className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all cursor-pointer">
                <option>Deliver every 2 weeks</option>
                <option>Deliver every 4 weeks</option>
                <option>Deliver every 6 weeks</option>
                <option>Deliver every 8 weeks</option>
              </select>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-xl transition-all text-lg shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/30 hover:scale-[1.02] active:scale-[0.98]">
                Learn More
              </button>
              <button className="w-full border-2 border-gray-800 hover:border-yellow-400 text-white hover:text-yellow-400 font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group">
                <span className="text-lg">View Full Details</span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>

            {/* Features */}
            <div className="pt-6 border-t border-gray-900 space-y-3">
              {[
                "Free shipping on orders over $60",
                "Made with organic ingredients",
                "Satisfaction guaranteed",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <div className="shrink-0 w-5 h-5 rounded-full bg-yellow-400/10 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={prevLightboxImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-50"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextLightboxImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 z-50"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-5xl max-h-[80vh] px-4">
            <img
              src={images[lightboxImage].src}
              alt={images[lightboxImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-medium">
                {images[lightboxImage].alt}
              </p>
              <p className="text-white/60 text-sm">
                {lightboxImage + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
