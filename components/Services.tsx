"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  logo: string;
  list: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Academic Scrolls",
    description: "At the heart of every graduation is recognition. We specialize in crafting high-quality academic scrolls and certificates that reflect the prestige of your institution.",
    image: "/academic-bg.png",
    logo: "/academic-logo.svg",
    list: [
      "Graduation Scroll Design & Printing",
      "Premium Materials & Finishing",
      "Custom Branding for Institutes",
      "Bulk Production at Competitive Rates"
    ]
  },
  {
    id: 2,
    title: "360° Rotating Video Experience",
    description: "Create a memorable and shareable experience for your students with our 360° rotating video platform perfect for capturing dynamic graduation moments.",
    image: "/rotating-bg.png",
    logo: "/rotating-logo.svg",
    list: [
      "Full 360° Rotating Platform Setup",
      "Instant Video Capture & Effects",
      "Social Media Ready Content",
      "Ideal for Student Engagement & Branding"
    ]
  },
  {
    id: 3,
    title: "Stage Backdrops & LED Displays",
    description: "Transform your graduation ceremony with visually impactful stage setups and large-format displays.",
    image: "/stage-bg.png",
    logo: "/stage-logo.svg",
    list: [
      "Custom Stage Backdrops (20x10 / 40x10)",
      "6x3 LED Screen Installations",
      "Full Stage Branding & Design",
      "Professional Setup & Support"
    ]
  },
  {
    id: 4,
    title: "Medals & Recognition Items",
    description: "Recognize excellence with professionally designed medals and award items tailored for academic ceremonies.",
    image: "/medals-bg.png",
    logo: "/medals-logo.svg",
    list: [
      "Custom Metal Medals",
      "Engraved Award Plates",
      "Branded Ribbons",
      "Bulk Production for Events"
    ]
  },
  {
    id: 5,
    title: "Graduation Stoles & Garlands",
    description: "Enhance your ceremony with elegant graduation stoles designed to match your institution’s identity.",
    image: "/graduation-bg.png",
    logo: "/graduation-logo.svg",
    list: [
      "Satin Graduation Stoles/flags",
      "Custom Logo & Name Printing",
      "Color Variations for Courses",
      "Bulk Orders Available"
    ]
  },
  {
    id: 6,
    title: "Graduation Frames & Certificate Holders",
    description: "Preserve and showcase academic achievements with professionally designed certificate frames and display solutions.",
    image: "/frames-bg.png",
    logo: "/frames-logo.svg",
    list: [
      "Custom Certificates and Frames",
      "Scroll Display Holders",
      "Branded Photo Frames for Graduates",
      "Bulk Orders for Institutions"
    ]
  }
];

const CustomArrow = ({ direction }: { direction: 'prev' | 'next' }) => (
  <button
    id={direction === 'prev' ? 'services-prev' : 'services-next'}
    className={`absolute top-1/2 -translate-y-1/2 z-40 bg-white/90 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] w-12 h-12 rounded-full flex items-center justify-center border-none cursor-pointer transition-all hover:scale-110 active:scale-95 group overflow-hidden ${direction === 'prev' ? '-left-6' : '-right-6'}`}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={direction === 'next' ? 'rotate-180' : ''}
    >
      <path d="M15 18L9 12L15 6" stroke="#1C398E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
);

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const splitContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="relative w-full min-h-screen bg-[#070030] py-20 overflow-hidden font-inter">
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
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[123px] flex flex-col items-center"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-7 mb-16 text-center">
          <motion.div variants={itemVariants} className="bg-[#171C55] rounded-full px-8 py-2 border border-white/5">
            <span className="text-white font-medium text-[21px] tracking-wide">
              • Our Services •
            </span>
          </motion.div>
          <motion.h2
            variants={splitContainerVariants}
            className="text-white font-medium text-[40px] md:text-[45px] leading-[1.1] capitalize"
          >
            {"Our Creative &".split(" ").map((word, index) => (
              <span key={`line1-${index}`} className="inline-flex overflow-hidden pb-1">
                <motion.span variants={splitWordVariants} className="inline-block">
                  {word}
                </motion.span>
                &nbsp;
              </span>
            ))}
            <span className="font-libre-baskerville italic">
              {"Printing Service".split(" ").map((word, index) => (
                <span key={`line2-${index}`} className="inline-flex overflow-hidden pb-1">
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
            className="text-white/60 font-normal text-[18px] md:text-[20px] max-w-[683px] leading-[1.5]"
          >
            {"Blueprint Media provides a complete range of creative, printing, and media solutions to support your brand growth.".split(" ").map((word, index) => (
              <span key={`desc-${index}`} className="inline-flex overflow-hidden pb-1">
                <motion.span variants={splitWordVariants} className="inline-block">
                  {word}
                </motion.span>
                &nbsp;
              </span>
            ))}
          </motion.p>
        </div>

        {/* Swiper Implementation */}
        <motion.div variants={itemVariants} className="relative w-full">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              prevEl: '#services-prev',
              nextEl: '#services-next',
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }}
            className="services-swiper !px-4 !py-10"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation arrows */}
          <CustomArrow direction="prev" />
          <CustomArrow direction="next" />
        </motion.div>

        <motion.button
          variants={itemVariants}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-8 px-8 py-3 rounded-[10px] border border-white text-white font-normal text-[19px] hover:bg-white hover:text-[#070030] transition-colors"
        >
          Get Free Advice Now!
        </motion.button>
      </motion.div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[542px] rounded-[25px] overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover"
        />
        <div className={`absolute inset-0 bg-white/40 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-[92%] rounded-b-[25px] drop-shadow-[0_-5px_15px_rgba(0,0,0,0.1)] overflow-hidden"
        initial={{ height: "135px" }}
        animate={{ height: isHovered ? "470px" : "135px" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="absolute top-[80px] bottom-0 left-0 w-full bg-white z-0" />

        <Image
          src="/fold-flap.svg"
          alt="Card Background"
          width={521}
          height={521}
          className="absolute top-0 left-0 w-full h-auto z-0"
        />

        <div className="p-8 pr-6 md:pr-12 h-full flex flex-col relative z-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-[45px] h-[45px] relative flex-shrink-0 flex items-center justify-center">
              <Image
                src={service.logo}
                alt={`${service.title} icon`}
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
            <h3 className="font-inter font-semibold md:break-words text-[20px] md:text-[21px] text-[#070030] leading-[1.5]">
              {service.title}
            </h3>
          </div>

          <div
            className={`flex flex-col gap-5 flex-1 pr-2 overflow-y-auto custom-scrollbar min-h-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="w-full flex justify-center py-2 opacity-30 shrink-0">
              <svg width="597" height="19" viewBox="0 0 597 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.00927734 17.3629C0.00927734 17.3629 92.8515 19.246 109.984 17.3629C127.117 15.4798 135.712 7.76365 139.009 0.199799C137.311 9.7717 143.332 17.4814 157.922 17.3629C172.512 17.2443 596.509 17.3629 596.509 17.3629" stroke="black" />
              </svg>
            </div>
            <p className="font-inter font-normal text-[15px] text-black/70 leading-[1.4] shrink-0">
              {service.description}
            </p>
            <ul className="flex flex-col gap-3 mt-2 shrink-0">
              {service.list.map((item: string, index: number) => (
                <li key={index} className="font-inter font-normal text-[15px] text-black/70 leading-[1.3] flex gap-2">
                  <span className="text-[#070030]">-</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
