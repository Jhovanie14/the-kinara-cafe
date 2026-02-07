"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "@radix-ui/react-label";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Coffee Street", "Downtown District", "New York, NY 10001"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "Mon-Sun: 7AM - 10PM"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@kinaracafe.com", "reservations@kinaracafe.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 7AM - 10PM", "Sat-Sun: 8AM - 11PM"],
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="contact" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Contact & Reservations
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in <span className="text-amber-600">Touch</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Reserve your table or reach out with any questions. We'd love to
            hear from you!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border hover:bg-yellow-50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-white text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden bg-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 pointer-events-none border-4 border-white rounded-2xl" />
            </div>
          </div>
          {/* Reservation Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Reserve a Table
              </h3>
              <div>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Thank you for your reservation!
                    </h4>
                    <p className="text-white">
                      We look forward to welcoming you at Kinara Cafe.
                    </p>
                  </div>
                ) : (
                  <form action="">
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="" className="text-white block mb-2">
                          Name
                        </Label>
                        <Input
                          type="text"
                          placeholder="Name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className={"text-white"}
                        />
                      </div>
                      <div>
                        <Label htmlFor="" className="text-white block mb-2">
                          Email
                        </Label>
                        <Input
                          type="email"
                          placeholder="Email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={"text-white"}
                        />
                      </div>
                      <div>
                        <Label htmlFor="" className="text-white block mb-2">
                          Phone
                        </Label>
                        <Input
                          type="tel"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className={"text-white"}
                        />
                      </div>
                      <div>
                        <Label htmlFor="" className="text-white block mb-2">
                          Date
                        </Label>
                        <Input
                          type="date"
                          placeholder="Date"
                          required
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className={"text-white"}
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <Label htmlFor="" className="text-white block mb-2">
                        Special Requests
                      </Label>
                      <textarea
                        placeholder="Special Requests (Optional)"
                        rows={4}
                        className="w-full p-4 border border-stone-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        value={formData.specialRequests}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            specialRequests: e.target.value,
                          })
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      className={`w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl transition-colors duration-300 ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Reservation"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
