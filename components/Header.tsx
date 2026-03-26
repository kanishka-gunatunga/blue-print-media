"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Menu, Phone, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about-us" },
  { label: "About the CEO", href: "#about-ceo" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex flex-col font-inter">

      <div className="w-full bg-[#070030] text-white py-2 flex flex-col sm:flex-row items-center justify-center sm:justify-end px-4 sm:px-6 lg:px-[123px] font-medium text-[12px] sm:text-[14px] md:text-base gap-1 sm:gap-6 tracking-wide">
        <div className="flex items-center gap-2">
          <Phone size={14} className="sm:w-4 sm:h-4 text-white" />
          <span>+94 70 707 6991</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="sm:w-4 sm:h-4 text-white" />
          <span className="truncate">Yakkala, Sri Lanka
          </span>
        </div>
      </div>

      <div className="w-full py-4 px-4 sm:px-6 lg:px-[123px] flex items-center justify-between bg-white/10 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none transition-all">
        <Link href="#home" className="flex-shrink-0 z-50">
          <Image
            src="/blue-print-logo.png"
            alt="Blueprint Media"
            width={140}
            height={48}
            className="object-contain md:w-[167px] md:h-[58px]"
            priority
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#000000] font-medium text-[19px] hover:text-[#0E519D] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex">
          <Link
            href="#contact"
            className="flex items-center justify-center w-[96px] h-[40px] bg-[#0E519D] rounded-[10px] text-white font-medium text-[16px] hover:bg-[#0c407c] transition-colors"
          >
            Contact
          </Link>
        </div>

        <button
          className="xl:hidden z-50 p-2 text-black transition-transform duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-white shadow-xl flex flex-col xl:hidden transition-all duration-300 ease-in-out origin-top border-t border-gray-100 ${isMobileMenuOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col py-6 px-6 gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black font-medium text-[18px] sm:text-[20px] hover:text-[#0E519D] transition-colors w-full border-b border-gray-100 pb-3"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-full h-[50px] bg-[#0E519D] rounded-[10px] text-white font-medium text-[18px] hover:bg-[#0c407c] transition-colors mt-2"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
