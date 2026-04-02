"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/slider-4.png",
    title: "A Complete Graduation",
    subtitle: "Solutions Provider",
    description: "From premium academic scrolls to full-scale event execution, we deliver excellence in every detail of your graduation ceremony.",
    ctaLabel: "Plan Your Graduation",
    ctaTarget: "contact"
  },
  {
    id: 2,
    image: "/slider-7.png",
    title: "Trusted by ",
    subtitle: "Leading Professionals",
    description: "Our graduation ceremonies are attended and endorsed by distinguished leaders and renowned professionals, reflecting the credibility and standard we bring to every event.",
    ctaLabel: "View Our Work",
    ctaTarget: "services"
  },
  {
    id: 3,
    image: "/slider-6.png",
    title: "Precision in Every",
    subtitle: "Detail",
    description: "From medals and scrolls to ceremonial elements, every product is crafted to reflect the achievement and pride of your graduates.",
    ctaLabel: "View Graduation Products",
    ctaTarget: "services"
  },
  {
    id: 4,
    image: "/slider-5.png",
    title: "Graduations at Iconic",
    subtitle: "Venues",
    description: "We design and deliver exceptional graduation experiences at leading venues like BMICH ensuring prestige, precision, and unforgettable moments.",
    ctaLabel: "Start Your Event",
    ctaTarget: "contact"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-[774px] md:h-screen lg:h-[774px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt="Slider Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>


      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(102,115,152,0.9)_0%,rgba(166,189,249,0.6)_50%,rgba(0,0,0,0)_100%)] pointer-events-none" />

      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_50%,rgba(0,174,239,0.15)_0%,rgba(115,115,115,0)_60%)] pointer-events-none" />

      <div className="absolute inset-0 z-20 flex">
        <div className="w-[72px] h-full bg-[#FFFFFF66] backdrop-blur-sm hidden md:flex flex-col items-center justify-center relative">
          <div className="flex flex-col gap-7 absolute top-1/2 -translate-y-1/2">
            {[
              {
                id: "fb",
                href: "https://www.facebook.com/share/17AHJN7qXc/",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg>

                )
              },
              {
                id: "ig",
                href: "https://www.instagram.com/blueprintmedia.lk",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                  </svg>
                )
              },
              {
                id: "tiktok",
                href: "https://www.tiktok.com/@blueprintmedia.lk?_r=1&_t=ZS-95C66BjPc5B",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" /></svg>
                )
              }
              // {
              //   id: "x",
              //   icon: (
              //     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              //       <path d="M15.2721 1.58658H18.0833L11.9416 8.60616L19.1668 18.1582H13.5095L9.07853 12.3649L4.00845 18.1582H1.19552L7.76469 10.65L0.833496 1.58658H6.63442L10.6397 6.88185L15.2721 1.58658ZM14.2854 16.4756H15.8432L5.78799 3.18086H4.11638L14.2854 16.4756Z" fill="black" />
              //     </svg>
              //   )
              // }
            ].map((item) => (
              <Link href={item.href} target="_blank" key={item.id} className="text-black hover:text-[#0E519D] transition-colors">
                {item.icon}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-[100px] flex flex-col items-center gap-6">
            <div className="w-[100px] h-[1px] bg-black/30 origin-center rotate-90 mb-16" />
            <span className="font-inter font-medium text-[15px] -rotate-90 tracking-widest whitespace-nowrap mb-6">
              Follow Us
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 lg:pl-[51px] max-w-7xl w-full mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-[672px]"
            >
              <div className="flex flex-col gap-[7px] mb-6">
                <h1 className="font-inter font-medium text-[40px] md:text-[60px] leading-[1.1] text-black">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="font-libre-baskerville italic font-normal text-[40px] md:text-[60px] leading-[1.1] text-black w-full overflow-hidden text-ellipsis md:overflow-visible md:text-wrap whitespace-normal">
                  {slides[currentSlide].subtitle}
                </h2>
              </div>


              <div className="w-full h-[24px] mt-[-2px] mb-[4px] relative overflow-hidden">
                <svg width="1500" height="24" viewBox="0 0 1500 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 max-w-none">
                  <path d="M0.00927734 17.3629C0.00927734 17.3629 92.8515 19.246 109.984 17.3629C127.117 15.4798 135.712 7.76365 139.009 0.199799C137.311 9.7717 143.332 17.4814 157.922 17.3629C172.512 17.2443 1500 17.3629 1500 17.3629" stroke="black" />
                </svg>
              </div>

              <h3 className="font-inter font-normal text-[20px] md:text-[24px] leading-[32px] text-black mb-4">
                {slides[currentSlide].title} {slides[currentSlide].subtitle.replace('.', '')}
              </h3>

              <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[28px] text-black mb-10 max-w-[672px]">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    const target = document.getElementById(slides[currentSlide].ctaTarget);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="h-[48px] px-6 min-w-[146px] bg-[#0E519D] rounded-[10px] text-white font-inter font-medium text-[16px] flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#0c407c] transition-all hover:scale-105"
                >
                  {slides[currentSlide].ctaLabel}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-[33px] left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 opacity-60">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
