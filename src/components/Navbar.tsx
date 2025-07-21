"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F9F7E0] py-6 px-7">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="font-bold text-2xl md:text-3xl tracking-tight">
          <span className="text-[#EB1700]">task</span>duck
        </p>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-[#EB1700] cursor-pointer transition">
            About
          </li>
          <li className="hover:text-[#EB1700] cursor-pointer transition">
            Services
          </li>
          <li className="hover:text-[#EB1700] cursor-pointer transition">
            Pricing
          </li>
          <li className="hover:text-[#EB1700] cursor-pointer transition">
            Contact
          </li>
        </ul>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-lg font-medium text-gray-700">
          <p className="hover:text-[#EB1700] cursor-pointer">About</p>
          <p className="hover:text-[#EB1700] cursor-pointer">Services</p>
          <p className="hover:text-[#EB1700] cursor-pointer">Pricing</p>
          <p className="hover:text-[#EB1700] cursor-pointer">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
