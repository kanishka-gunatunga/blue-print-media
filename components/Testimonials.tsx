"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "“Excellent quality scrolls at a very reasonable price. Highly recommended for institutes.”",
    author: "Educational Institute, Sri Lanka"
  },
  {
    id: 2,
    quote: "“Professional service, fast delivery, and great communication throughout.”",
    author: "Business Client"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative w-full min-h-screen bg-[#070030] py-20 overflow-hidden font-inter">
      {/* Background Grid with Faint White Lines */}
      <div
        className="absolute inset-0 z-0 opacity-80 pointer-events-none"
        style={{
          backgroundImage: "url('/Line.png')",
          backgroundSize: "100vw auto",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y"
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto px-6 lg:px-[70px] relative z-10 flex flex-col items-center"
      >

        {/* Top Tag */}
        <div className="bg-[#171C55] rounded-full px-8 py-2 border border-white/5 mb-8">
          <span className="text-white font-medium text-[21px] tracking-wide">
            • What Our Clients Say •
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-white font-medium text-[36px] md:text-[45px] leading-tight capitalize max-w-[963px] mb-6">
          Real Experiences <span className="font-libre-baskerville italic">From Institutes And Businesses Across Sri Lanka.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center font-normal text-[18px] md:text-[20px] leading-[31px] max-w-[683px] text-[#FFFFFF99] mb-16">
          Our clients trust us for delivering consistent quality, affordable pricing, and dependable service.
        </p>

        {/* Video Container */}
        <div className="relative w-full max-w-[1297px] aspect-[1297/658] bg-[#1C398E]/40 rounded-[22px] overflow-hidden shadow-2xl mb-24 group">
          {!isPlaying ? (
            <div
              className="absolute inset-0 w-full h-full cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {/* Video Background Image */}
              <Image
                src="/couple.jpg"
                alt="Customer Success Stories Video"
                fill
                sizes="(max-width: 1440px) 100vw, 1297px"
                className="object-cover"
              />

              {/* Bottom Gradient for Text Readability */}
              <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#030E2C]/90 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[110px] h-[110px] bg-white/90 shadow-[0_23px_47px_rgba(0,0,0,0.25)] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-[45px] h-[45px] text-[#1C398E] ml-2 fill-current" />
                </div>
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
                <h4 className="text-white font-normal text-[22px] md:text-[25px] leading-tight drop-shadow-md">
                  Watch Our Customer Success Stories
                </h4>
              </div>
            </div>
          ) : (
            <video
              src="/sample-video.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
            />
          )}
        </div>

        {/* Testimonials Carousel */}
        <div className="w-full max-w-[885px] h-[160px] flex flex-col items-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full absolute"
            >
              <p className="font-inter font-semibold text-[24px] md:text-[30px] leading-[1.2] md:leading-[1.4] text-center text-white mb-8">
                {testimonials[currentIndex].quote}
              </p>

              <div className="flex items-center w-full max-w-[600px] justify-center opacity-60 mb-8">
                <div className="flex-1 h-[1px] bg-white block" />
                <svg width="597" height="19" viewBox="0 0 597 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.00244141 1.33693C0.00244141 1.33693 264.932 -0.54616 282.065 1.33693C299.197 3.22002 307.792 10.9361 311.089 18.5C309.391 8.9281 315.412 1.21838 330.002 1.33693C344.592 1.45548 596.502 1.33693 596.502 1.33693" stroke="white" />
                </svg>

                <div className="flex-1 h-[1px] bg-white block" />
              </div>

              <p className="font-inter font-normal text-[20px] md:text-[26px] text-white/60 text-center">
                - {testimonials[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </motion.div>
    </section>
  );
}
