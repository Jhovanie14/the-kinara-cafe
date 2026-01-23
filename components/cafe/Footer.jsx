"use client";
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Package,
  History,
} from "lucide-react";

function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "Menu", id: "menu" },
    { name: "About Us", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const menuLinks = [
    { name: "Coffee", id: "menu" },
    { name: "Pastries", id: "menu" },
    { name: "Food", id: "menu" },
    { name: "Seasonal Specials", id: "menu" },
    { name: "Catering", id: "contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];
  return (
    <footer className="bg-stone-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">
                Kinara<span className="text-yellow-400">Cafe</span>
              </span>
            </div>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Crafting exceptional coffee experiences since 2018. Your
              neighborhood escape for moments that matter.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-stone-800 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-stone-400 hover:text-yellow-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-stone-400">
                  123 Coffee Street
                  <br />
                  Downtown District
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-stone-400 hover:text-yellow-500 transition-colors duration-300"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                <a
                  href="mailto:hello@kinaracafe.com"
                  className="text-stone-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  hello@kinaracafe.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-stone-400">
                  Mon-Fri: 7AM - 10PM
                  <br />
                  Sat-Sun: 8AM - 11PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} Kinara Cafe. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-stone-500 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-stone-500 hover:text-yellow-400 transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-stone-500 hover:text-yellow-400 transition-colors duration-300">
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
