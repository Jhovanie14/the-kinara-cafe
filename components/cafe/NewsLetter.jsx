"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Gift, Coffee, Sparkles, CheckCircle } from "lucide-react";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
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

  const perks = [
    { icon: Gift, text: "Exclusive offers & discounts" },
    { icon: Coffee, text: "New menu item previews" },
    { icon: Sparkles, text: "Special event invitations" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-linear-to-br from-yellow-400 to-orange-400 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      {/* Floating Coffee Beans */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-6 bg-amber-800/20 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Join the Kinara Family
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about new
            blends, special events, and exclusive member perks.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {perks.map((perk, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 text-white/90 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <perk.icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{perk.text}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          {isSubscribed ? (
            <div
              className={`bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto transition-all duration-500 ${
                isSubscribed ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                You're In!
              </h3>
              <p className="text-white">
                Welcome to the Kinara family. Check your inbox for a special
                welcome gift!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`flex flex-col sm:flex-row gap-4 max-w-lg mx-auto transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-full text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-white/70 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
