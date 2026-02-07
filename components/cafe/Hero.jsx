"use client";

import { ChevronDown, Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-200 flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/kinara-bg-video.mp4" type="video/mp4" />
          {/* <source src="/videos/hero-background.webm" type="video/webm" /> */}
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Optional: Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            Where Every Cup{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-orange-500">
              Tells a Story
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-sm sm:text-base text-center text-stone-300 leading-relaxed mb-8  transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            // max-w-xl
          >
            Experience the perfect blend of artisan coffee, freshly baked
            pastries, and warm hospitality at Kinara Cafe. Your neighborhood
            escape for moments that matter.
          </p>

          {/* CTA button */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <Link
              href="/menu"
              className="group px-8 py-1.5 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30 flex items-center gap-2"
            >
              Explore Menu
              {/* <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" /> */}
            </Link>
          </div>

          {/* Quick info */}
          <div
            className={`flex flex-wrap items-center justify-center gap-6 transition-all duration-1000 delay-700 ${
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
      <div className="relative z-10 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-sm">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-yellow-400" />
      </div>
    </section>
  );
}

export default Hero;
