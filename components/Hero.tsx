"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/slider-3.png",
    title: "The Architecture of",
    subtitle: "Excellence.",
    description: "At Blueprint Media, we specialize in crafting high-quality academic scrolls, certificates, and institutional branding solutions"
  },
  {
    id: 2,
    image: "/slider-2.png",
    title: "Innovating the Future of",
    subtitle: "Printing.",
    description: "Delivering state-of-the-art printing technologies tailored for modern businesses and educational institutions"
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
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_917_2043)">
                      <path d="M10 0C4.4772 0 0 4.4772 0 10C0 14.6896 3.2288 18.6248 7.5844 19.7056V13.056H5.5224V10H7.5844V8.6832C7.5844 5.2796 9.1248 3.702 12.4664 3.702C13.1 3.702 14.1932 3.8264 14.6404 3.9504V6.7204C14.4044 6.6956 13.9944 6.6832 13.4852 6.6832C11.8456 6.6832 11.212 7.3044 11.212 8.9192V10H14.4784L13.9172 13.056H11.212V19.9268C16.1636 19.3288 20.0004 15.1128 20.0004 10C20 4.4772 15.5228 0 10 0Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_917_2043">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                )
              },
              {
                id: "ig",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_917_2044)">
                      <path d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95313C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95313C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523437C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z" fill="black" />
                      <path d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z" fill="black" />
                      <path d="M16.5391 4.66013C16.5391 5.32419 16 5.85935 15.3398 5.85935C14.6758 5.85935 14.1406 5.32028 14.1406 4.66013C14.1406 3.99606 14.6797 3.46091 15.3398 3.46091C16 3.46091 16.5391 3.99997 16.5391 4.66013Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_917_2044">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )
              },
              {
                id: "li",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_917_2045)">
                      <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42187 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043V17.043Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_917_2045">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )
              },
              {
                id: "x",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2721 1.58658H18.0833L11.9416 8.60616L19.1668 18.1582H13.5095L9.07853 12.3649L4.00845 18.1582H1.19552L7.76469 10.65L0.833496 1.58658H6.63442L10.6397 6.88185L15.2721 1.58658ZM14.2854 16.4756H15.8432L5.78799 3.18086H4.11638L14.2854 16.4756Z" fill="black" />
                  </svg>
                )
              }
            ].map((item) => (
              <a href="#" key={item.id} className="text-black hover:text-[#0E519D] transition-colors">
                {item.icon}
              </a>
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


              <div className="w-full h-[18px] mb-6 relative overflow-hidden">
                <svg width="597" height="19" viewBox="0 0 597 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 max-w-none">
                  <path d="M0.00927734 17.3629C0.00927734 17.3629 92.8515 19.246 109.984 17.3629C127.117 15.4798 135.712 7.76365 139.009 0.199799C137.311 9.7717 143.332 17.4814 157.922 17.3629C172.512 17.2443 596.509 17.3629 596.509 17.3629" stroke="black" />
                </svg>
              </div>

              <h3 className="font-inter font-normal text-[20px] md:text-[24px] leading-[32px] text-black mb-4">
                {slides[currentSlide].title} {slides[currentSlide].subtitle.replace('.', '')}
              </h3>

              <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[28px] text-black mb-10 max-w-[672px]">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="tel:+94707076991"
                  className="w-[146px] h-[48px] bg-[#0E519D] rounded-[10px] text-white font-inter font-medium text-[16px] flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#0c407c] transition-all hover:scale-105"
                >
                  Call Now
                </a>
                <a 
                  href="https://wa.me/94707076991"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[146px] h-[48px] bg-[#0E519D] rounded-[10px] text-white font-inter font-medium text-[16px] flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#0c407c] transition-all hover:scale-105"
                >
                  WhatsApp Us
                </a>
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
