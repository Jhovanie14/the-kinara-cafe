"use client";

import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";

function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryImages = [
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199316285_6c5a4f14.png",
      alt: "Cafe Interior",
      category: "interior",
    },
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199342230_8ed274c9.png",
      alt: "Signature Latte",
      category: "drinks",
    },
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199367459_e66b0b42.png",
      alt: "Fresh Croissant",
      category: "food",
    },
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199436259_d9a70551.png",
      alt: "Cozy Seating",
      category: "interior",
    },
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199338953_66572652.png",
      alt: "Pour Over Coffee",
      category: "drinks",
    },
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199388391_3288dd58.jpg",
      alt: "Avocado Toast",
      category: "food",
    },
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199434964_8ad3f9a9.png",
      alt: "Cafe Ambiance",
      category: "interior",
    },
    {
      src: "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199339880_3a0c931e.png",
      alt: "Cappuccino Art",
      category: "drinks",
    },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredImages.length) % filteredImages.length,
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const filters = ["all", "interior", "drinks", "food"];
  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Moments at <span className="text-yellow-400">Kinara</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Take a visual journey through our cafe - from perfectly crafted
            drinks to our cozy atmosphere.
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-yellow-600 text-white shadow-lg shadow-amber-500/30"
                  : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 || index === 5
                    ? "h-full min-h-75 md:min-h-100"
                    : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium">{img.alt}</p>
                <p className="text-white/70 text-sm capitalize">
                  {img.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-5xl max-h-[80vh] px-4">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-medium">
                {filteredImages[selectedImage].alt}
              </p>
              <p className="text-white/60 text-sm">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
