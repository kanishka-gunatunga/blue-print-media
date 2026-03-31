"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    quote: "“We are highly impressed with the services provided by Blueprint Media for our graduation ceremony. The academic scrolls and medals were crafted with great precision and high-quality finishing that truly honored our students' achievements.”",
    author: "Dr. Nadun Alagiyawanna",
    position: "Chairman, Needs Campus",
    image: "/testimonial.jpg",
    stars: 5
  },
  {
    id: 2,
    quote: "“We are highly impressed with the services provided by Blueprint Media for our graduation ceremony. The academic scrolls and medals were crafted with great precision and high-quality finishing that truly honored our students' achievements.”",
    author: "Dr. Nadun Alagiyawanna",
    position: "Chairman, Needs Campus",
    image: "/testimonial.jpg",
    stars: 5
  },
  {
    id: 3,
    quote: "“We are highly impressed with the services provided by Blueprint Media for our graduation ceremony. The academic scrolls and medals were crafted with great precision and high-quality finishing that truly honored our students' achievements.”",
    author: "Dr. Nadun Alagiyawanna",
    position: "Chairman, Needs Campus",
    image: "/testimonial.jpg",
    stars: 5
  },
];

const StarIcon = ({ color = "#E9BF4A" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.55163 0.908492C7.73504 0.536869 8.26496 0.53687 8.44837 0.908493L10.2348 4.52821C10.3076 4.67578 10.4484 4.77807 10.6113 4.80173L14.6059 5.38218C15.016 5.44177 15.1797 5.94576 14.883 6.23503L11.9925 9.05258C11.8746 9.16745 11.8208 9.33295 11.8487 9.49515L12.531 13.4736C12.6011 13.8821 12.1724 14.1935 11.8055 14.0007L8.23267 12.1223C8.08701 12.0457 7.91299 12.0457 7.76733 12.1223L4.19445 14.0007C3.82764 14.1935 3.39893 13.8821 3.46898 13.4736L4.15134 9.49515C4.17916 9.33295 4.12538 9.16745 4.00754 9.05258L1.11702 6.23503C0.820264 5.94576 0.98402 5.44177 1.39413 5.38218L5.38873 4.80173C5.55158 4.77807 5.69236 4.67578 5.7652 4.52821L7.55163 0.908492Z" fill={color} />
  </svg>
);

const DividerIcon = ({ stroke = "white", opacity = 0.2 }) => (
  <svg width="100%" height="19" viewBox="0 0 597 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible" style={{ opacity }}>
    <path d="M0.00244141 1.33693C0.00244141 1.33693 264.932 -0.54616 282.065 1.33693C299.197 3.22002 307.792 10.9361 311.089 18.5C309.391 8.9281 315.412 1.21838 330.002 1.33693C344.592 1.45548 596.502 1.33693 596.502 1.33693" stroke={stroke} />
  </svg>
);

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const splitContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const splitWordVariants: Variants = {
    hidden: { y: "120%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="testimonials" className="relative w-full bg-[#070030] py-20 overflow-hidden font-inter">
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/Line.png')",
          backgroundSize: "100vw auto",
          backgroundPosition: "top center",
          backgroundRepeat: "repeat-y"
        }}
      />

      <div className="max-w-[1440px] mx-auto z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center mb-16 px-6 text-center"
        >
          <motion.div variants={itemVariants} className="bg-[#171C55] rounded-full px-8 py-2 border border-white/5 mb-8">
            <span className="text-white font-medium text-[18px] md:text-[21px] tracking-wide">
              • What Our Clients Say •
            </span>
          </motion.div>

          <motion.h2
            variants={splitContainerVariants}
            className="text-center text-white font-medium text-[36px] md:text-[45px] leading-tight capitalize max-w-[963px] mb-6"
          >
            {"Real Experiences".split(" ").map((word, index) => (
              <span key={`line1-${index}`} className="inline-flex overflow-hidden pb-2">
                <motion.span variants={splitWordVariants} className="inline-block">
                  {word}
                </motion.span>
                &nbsp;
              </span>
            ))}
            <span className="font-libre-baskerville italic text-[#FFFFFF]">
              {"From Institutes And Businesses Across Sri Lanka.".split(" ").map((word, index) => (
                <span key={`line2-${index}`} className="inline-flex overflow-hidden pb-2">
                  <motion.span variants={splitWordVariants} className="inline-block">
                    {word}
                  </motion.span>
                  &nbsp;
                </span>
              ))}
            </span>
          </motion.h2>
          <motion.p
            variants={splitContainerVariants}
            className="text-center font-normal text-[16px] md:text-[20px] leading-[1.6] max-w-[683px] text-[#FFFFFF99]"
          >
            {"Our clients trust us for delivering consistent quality, affordable pricing, and dependable service.".split(" ").map((word, index) => (
              <span key={`desc-${index}`} className="inline-flex overflow-hidden pb-1">
                <motion.span variants={splitWordVariants} className="inline-block">
                  {word}
                </motion.span>
                &nbsp;
              </span>
            ))}
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full relative overflow-hidden">
          <div className="max-w-[1920px] mx-auto">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={40}
              centeredSlides={true}
              loop={true}
              speed={1200}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                320: {
                  slidesPerView: 1.1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 1.6,
                  spaceBetween: 40,
                },
                1440: {
                  slidesPerView: 1.9,
                  spaceBetween: 60,
                }
              }}
              className="testimonial-swiper !overflow-visible px-[10%]"
            >
              {[...testimonials, ...testimonials].map((item, index) => (
                <SwiperSlide key={`${item.id}-${index}`} className="transition-all duration-700">
                  {({ isActive }) => (
                    <div className={`
                      relative rounded-[25px] flex flex-col md:flex-row transition-all duration-700 overflow-hidden
                      mx-auto w-full max-w-[950px] h-auto md:h-[400px] min-h-[580px] md:min-h-0
                      ${isActive
                        ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] scale-100 z-10'
                        : 'bg-[#151D4B] scale-[0.85] opacity-100'
                      }
                    `}>

                      <div className="relative w-full md:w-[40%] h-[220px] md:h-full shrink-0">
                        <div className="absolute inset-[20px] md:inset-[24px] rounded-[18px] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.author}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        </div>
                      </div>


                      <div className={`
                        relative flex flex-col justify-between flex-1
                        p-8 md:p-12
                      `}>
                        <div className="flex-1 flex items-center mb-6 md:mb-0">
                          <p className={`
                            font-inter font-normal text-[16px] md:text-[18px] leading-[1.6]
                            ${isActive ? 'text-[#666666]' : 'text-white/80'}
                          `}>
                            {item.quote}
                          </p>
                        </div>

                        <div className="mt-auto">
                          <div className="mb-6">
                            <DividerIcon stroke={isActive ? "#000000" : "white"} opacity={isActive ? 0.1 : 0.2} />
                          </div>

                          <div className="flex items-center justify-between gap-4">
                            <div className="flex flex-col">
                              <h4 className={`
                                font-inter font-bold text-[18px] leading-tight
                                ${isActive ? 'text-[#070030]' : 'text-white'}
                              `}>
                                {item.author}
                              </h4>
                              <span className={`
                                font-libre-baskerville italic text-[14px] mt-1
                                ${isActive ? 'text-slate-500' : 'text-white/60'}
                              `}>
                                {item.position}
                              </span>
                            </div>

                            <div className="flex gap-1 items-center">
                              {[...Array(item.stars)].map((_, i) => (
                                <StarIcon key={i} color={isActive ? "#E9BF4A" : "#F7C35F"} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <motion.div variants={itemVariants} className="custom-pagination flex justify-center gap-4 mt-16">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperInstance?.slideToLoop(i)}
                  className={`swiper-pagination-bullet ${activeIndex % testimonials.length === i ? 'swiper-pagination-bullet-active' : ''}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .custom-pagination {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 5.78px;
        }

        .custom-pagination .swiper-pagination-bullet {
          width: 12.71px;
          height: 12.71px;
          background: #171C55;
          opacity: 1;
          transition: all 0.4s ease;
          border-radius: 50%;
          margin: 0 !important;
        }
        
        .custom-pagination .swiper-pagination-bullet-active {
          width: 67.02px;
          height: 12.71px;
          background: #FFFFFF;
          border-radius: 11.5556px;
          transform: none;
        }
      `}</style>
    </section>
  );
}
