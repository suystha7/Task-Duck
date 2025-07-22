"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { useSession } from "next-auth/react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { data: session } = useSession(); 
  const user = session?.user; 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-[#F9F7E0] py-6 px-7 sticky top-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href={"/"}>
          <p className="font-bold text-2xl md:text-3xl tracking-tight">
            <span className="text-[#EB1700]">Zap</span>Sender
          </p>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <li className="hover:text-[#EB1700] cursor-pointer transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-[#EB1700] cursor-pointer transition">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="hover:text-[#EB1700] cursor-pointer transition">
            Contact
          </li>

          {!user ? (
            <li>
              <a
                href="/register"
                className="ml-4 bg-[#EB1700] text-white px-5 py-2 rounded-full hover:bg-[#c91400] transition"
              >
                Sign Up Free
              </a>
            </li>
          ) : (
            <li>
              <a href="/profile">
                {user.image ? (
                  <img
                    src={user.image}
                    alt="User"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <UserCircle className="w-9 h-9 text-gray-700" />
                )}
              </a>
            </li>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-lg font-medium text-gray-700">
          <p className="hover:text-[#EB1700] cursor-pointer">
            <a href="#about">About</a>
          </p>
          <p className="hover:text-[#EB1700] cursor-pointer">
            <a href="#pricing">Pricing</a>
          </p>
          <p className="hover:text-[#EB1700] cursor-pointer">Contact</p>

          {!user ? (
            <p>
              <a
                href="/register"
                className="inline-block bg-[#EB1700] text-white px-5 py-2 rounded-full hover:bg-[#c91400] transition"
              >
                Sign Up Free
              </a>
            </p>
          ) : (
            <p>
              <a href="/profile" className="flex items-center gap-2">
                {user.image ? (
                  <img
                    src={user.image}
                    alt="User"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <UserCircle className="w-8 h-8 text-gray-700" />
                )}
                Profile
              </a>
            </p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
