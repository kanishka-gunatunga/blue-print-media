import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0F0061] to-[#070030] pt-20 pb-8 overflow-hidden font-inter border-t border-white/5">
      <div
        className="absolute inset-0 z-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: "url('/Line.png')",
          backgroundSize: "100vw auto",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y"
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(143.53% 143.53% at 50% -56.13%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)' }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-0">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-8">
            <Link href="/" className="inline-block">
              <Image
                src="/blue-print-logo.png"
                alt="Blueprint Media"
                width={157}
                height={55}
                className="object-contain"
                priority
              />
            </Link>

            <p className="font-normal text-[16px] leading-[26px] text-white/60 max-w-[391px]">
              Blueprint Media is a forward-thinking creative and printing agency based in Sri Lanka, specializing in academic scrolls, certificate printing, and branding solutions for educational institutions and businesses.
            </p>

            <div className="flex flex-col gap-[18px]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0E519D] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[16px] leading-[24px] text-white">24/7 Support:</span>
                  <span className="font-normal text-[16px] leading-[24px] text-[#CECECE]">(+94) 70 707 6991</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0E519D] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[16px] leading-[24px] text-white">Location:</span>
                  <span className="font-normal text-[16px] leading-[24px] text-[#CECECE]">Yakkala, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-bold text-[20px] leading-[28px] text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about-us' },
                { name: 'Services', href: '#services' },
                { name: 'About the CEO', href: '#about-ceo' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-normal text-[16px] leading-[24px] text-[#CECECE] hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3 flex flex-col gap-6">
            <h3 className="font-bold text-[20px] leading-[28px] text-white">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Branding & Design', href: '#services' },
                { name: 'Printing & Production', href: '#services' },
                { name: 'Media & Content Creation', href: '#services' }
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="font-normal text-[16px] leading-[24px] text-[#CECECE] hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center py-6 border-t border-[#D1D5DC]/30 gap-6">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white hover:text-[#0E519D] transition-colors" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </Link>
            <Link href="#" className="text-white hover:text-[#0E519D] transition-colors" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </Link>
            <Link href="#" className="text-white hover:text-[#0E519D] transition-colors" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </Link>
            <Link href="#" className="text-white hover:text-[#0E519D] transition-colors" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </Link>
          </div>

          <p className="font-normal text-[14px] leading-[20px] text-[#CECECE] text-center md:text-right">
            Copyright © 2026 <span className="text-[#0E519D] font-medium">Blue Print Media.</span> All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
