"use client";

import { Button } from "../ui/button";
import { Coffee, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "/" },
    { name: "Menu", id: "menu" },
    { name: "Gallery", id: "gallery" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/90 backdrop:blur-lg shadow-lg py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isScrolled ? "bg-yellow-400 " : "bg-black/20 backdrop:blur-sm"}`}
            >
              <Coffee
                className={`h-5 w-5 ${isScrolled ? "text-white" : "text-yellow-400"}`}
              />
            </div>
            <span
              className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-yellow-400" : "text-white"}`}
            >
              Kinara <span className="text-yellow-400">Cafe</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`/${link.id}`}
                className={`relative font-medium transition-colors duration-300 group ${
                  isScrolled
                    ? "text-yellow-400 hover:text-yellow-500"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled ? "text-yellow-400 hover:text-yellow-500" : "text-white hover:text-white/10"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
        {/* Mobile menu links */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? "max-h-125 opacity-500 mt-4" : "max-h-0 opacity-0"}`}
        >
          <div
            className={`rounded-2xl p-4 ${isScrolled ? "bg-stone-50" : "bg-white/10 backdrop-blur-lg"}`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-yellow-400 hover:bg-yellow-50 hover:text-yellow-600"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
