"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { data: session } = useSession();
  const user = session?.user;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 60);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`bg-[#F9F7E0] h-16 md:h-20 px-5 md:px-7 sticky top-0 w-full z-50 transition-transform duration-300 flex items-center ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-start w-full">
          {/* Mobile Left: Hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo centered on mobile, left on desktop */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link
              href="/"
              className="font-bold text-2xl md:text-3xl tracking-tight cursor-pointer select-none"
            >
              <span className="text-[#EB1700]">Zap</span>Sender
            </Link>
          </div>

          {/* Mobile Right: Login / Sign Up buttons */}
          {!user && (
            <div className="flex md:hidden gap-3">
              <Link
                href="/login"
                className="border border-[#EB1700] text-[#EB1700] px-4 py-1.5 rounded-full hover:bg-[#EB1700] hover:text-white transition text-sm"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#EB1700] text-white px-4 py-1.5 rounded-full hover:bg-[#c91400] transition text-sm"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center ml-10">
            <li className="hover:text-[#EB1700] cursor-pointer transition">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-[#EB1700] cursor-pointer transition">
              <Link href="#pricing">Pricing</Link>
            </li>
            <li className="hover:text-[#EB1700] cursor-pointer transition">
              <Link href="#contact">Contact</Link>
            </li>

            {user ? (
              <li className="relative group cursor-pointer">
                <Link href="/profile" className="flex items-center gap-2">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt="User"
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <UserCircle className="w-9 h-9 text-gray-700" />
                  )}
                </Link>
                <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md right-0 mt-2 p-2 min-w-[100px] text-center z-50">
                  <button
                    onClick={() => signOut()}
                    className="text-sm text-gray-700 hover:text-red-600 w-full"
                  >
                    Sign Out
                  </button>
                </div>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    className="border border-[#EB1700] text-[#EB1700] px-5 py-2 rounded-full hover:bg-[#EB1700] hover:text-white transition"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="bg-[#EB1700] text-white px-5 py-2 rounded-full hover:bg-[#c91400] transition"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-16 bottom-0 left-0 w-full bg-white transition ease-in-out shadow-lg z-50 p-6 flex flex-col space-y-6 text-gray-700 font-medium">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#EB1700]"
            >
              About
            </Link>
            <Link
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#EB1700]"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#EB1700]"
            >
              Contact
            </Link>

            {user && (
              <>
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2"
                >
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt="User"
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <UserCircle className="w-8 h-8 text-gray-700" />
                  )}
                  Profile
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="text-sm text-gray-700 hover:text-red-600 text-left"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
