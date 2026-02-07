"use client";

import React, { useEffect, useRef, useState } from "react";
import { Award, Heart, Leaf, Users, Coffee } from "lucide-react";

const stats = [
  { icon: Coffee, value: "50K+", label: "Cups Served Monthly" },
  { icon: Users, value: "15K+", label: "Happy Customers" },
  { icon: Award, value: "12", label: "Awards Won" },
  { icon: Leaf, value: "100%", label: "Sustainable Sourcing" },
];

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Kinara Cafe opened its doors with a simple mission: serve exceptional coffee in a welcoming space.",
  },
  {
    year: "2020",
    title: "Community Hub",
    description:
      "Became a beloved neighborhood gathering spot, hosting local artists and musicians.",
  },
  {
    year: "2022",
    title: "Sustainability Focus",
    description:
      "Achieved zero-waste certification and partnered with ethical coffee farms worldwide.",
  },
  {
    year: "2024",
    title: "Award Recognition",
    description:
      'Named "Best Local Cafe" by City Magazine for the third consecutive year.',
  },
];

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199436259_d9a70551.png"
                alt="Kinara Cafe Interior"
                className="w-full h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-amber-600 rounded-2xl p-6 shadow-2xl">
              <p className="text-4xl font-bold">7+</p>
              <p className="text-amber-100">Years of Excellence</p>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-amber-500/30 rounded-2xl" />
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold mb-6">
              Our Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              More Than Just
              <br />
              <span className="text-amber-500">Coffee</span>
            </h2>
            <p className="text-stone-300 text-lg leading-relaxed mb-6">
              At Kinara Cafe, we believe that great coffee has the power to
              bring people together. What started as a small corner shop has
              grown into a beloved community space where conversations flow as
              freely as our espresso.
            </p>
            <p className="text-stone-400 leading-relaxed mb-8">
              Every bean we source tells a story of sustainable farming and fair
              trade practices. Our baristas are trained artisans who take pride
              in crafting each cup to perfection. But beyond the coffee, it's
              the connections made here that truly define us.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, text: "Made with Love" },
                { icon: Leaf, text: "Eco-Friendly" },
                { icon: Award, text: "Award Winning" },
                { icon: Users, text: "Community First" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber-500/30 hidden lg:block" />

            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="bg-stone-800 rounded-2xl p-6 hover:bg-stone-800/80 transition-colors duration-300 h-full">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-stone-900 text-sm font-bold rounded-full mb-4">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-stone-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-amber-400" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-stone-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
