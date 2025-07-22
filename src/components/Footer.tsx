"use client";
import React, { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-gray-800 border-t border-gray-300">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#EB1700] text-white p-3 rounded-full shadow-lg hover:bg-[#c91400] transition z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      <div className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-6 text-sm sm:text-base text-gray-600">
            Get the latest updates, tips, and promotions delivered to your
            inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] px-4 py-2 rounded-full border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#EB1700]"
              required
            />
            <button
              type="submit"
              className="bg-[#EB1700] text-white px-6 py-2 rounded-full hover:bg-[#d21500] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#F9F7E0] py-12 px-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#EB1700]">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#EB1700]">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#EB1700]">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#EB1700]">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="pt-10 text-sm text-center text-[#181715]">
          &copy; {new Date().getFullYear()} ZapSender. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
