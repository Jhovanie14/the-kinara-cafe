"use client";

import { ChevronDown, Clock, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center overflow-hidden"
    >
      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 backdrop:blur-sm rounded-full mb-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-200 text-sm font-medium">
              Est. 2018 • Artisan Coffee
            </span>
          </div>
          {/* Main Heading */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            Where Every Cup
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-orange-500">
              Tells a Story
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg sm:text-xl text-stone-300 leading-relaxed mb-8 max-w-xl transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Experience the perfect blend of artisan coffee, freshly baked
            pastries, and warm hospitality at Kinara Cafe. Your neighborhood
            escape for moments that matter.
          </p>
          {/* CTA button */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="group px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30 flex items-center gap-2">
              Explore Menu
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
          {/* Quick info */}
          <div
            className={`flex flex-wrap gap-6 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 text-stone-300">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-xs text-stone-400">Open Daily</p>
                <p className="text-sm font-medium">7AM - 10PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-stone-300">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-xs text-stone-400">Location</p>
                <p className="text-sm font-medium">Downtown District</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-stone-300">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-xs text-stone-400">Reservations</p>
                <p className="text-sm font-medium">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-sm">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-yellow-400" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl" />
    </section>
  );
}

export default Hero;
