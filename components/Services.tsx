"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Branding & Design",
    description: "We create visually compelling designs that strengthen your brand identity and communication.",
    image: "/branding.png",
    logo: "/branding-logo.svg",
    list: [
      "Professional Logo Design",
      "Social Media Post & Campaign Creatives",
      "Poster & Cover Design",
      "Tute Cover Design for Educational Classes"
    ]
  },
  {
    id: 2,
    title: "Printing & Production",
    description: "High-quality printing solutions tailored for both businesses and institutions.",
    image: "/printing.png",
    logo: "/printing-logo.svg",
    list: [
      "Academic Scrolls & Certificates",
      "Flyer & Banner Printing",
      "Corporate & Wedding Invitation Design",
      "Custom Merchandise (Mugs, Photo Frames & More)"
    ]
  },
  {
    id: 3,
    title: "Media & Content Creation",
    description: "Modern content solutions designed to increase engagement and visibility.",
    image: "/content-creation.png",
    logo: "/content-creation-logo.svg",
    list: [
      "Professional Photography",
      "Promotional & Commercial Videography",
      "Video Editing Services",
      "Social Media Content Production"
    ]
  }
];

export default function Services() {
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-[123px] flex flex-col items-center"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-7 mb-16 text-center">
          <div className="bg-[#171C55] rounded-full px-8 py-2 border border-white/5">
            <span className="text-white font-medium text-[21px] tracking-wide">
              • Our Services •
            </span>
          </div>
          <h2 className="text-white font-medium text-[40px] md:text-[45px] leading-[1.1] capitalize">
            Our Creative & <span className="font-libre-baskerville italic">Printing Service</span>
          </h2>
          <p className="text-white/60 font-normal text-[18px] md:text-[20px] max-w-[683px] leading-[1.5]">
            Blueprint Media provides a complete range of creative, printing, and media solutions to support your brand growth.
          </p>
        </div>

        <div className="flex flex-nowrap lg:grid lg:grid-cols-3 gap-8 overflow-x-auto w-full pb-10 snap-x snap-mandatory hide-scrollbar">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <button className="mt-8 px-8 py-3 rounded-[10px] border border-white text-white font-normal text-[19px] hover:bg-white hover:text-[#070030] transition-colors">
          Get Free Advice Now!
        </button>
      </motion.div>
    </section>
  );
}

function ServiceCard({ service }: { service: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[340px] md:w-[360px] h-[480px] md:h-[542px] rounded-[25px] overflow-hidden flex-shrink-0 snap-center group cursor-pointer"
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
        className="absolute bottom-0 left-0 w-[90%] rounded-b-[25px] drop-shadow-[0_-5px_15px_rgba(0,0,0,0.1)] overflow-hidden"
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

        <div className="p-8 h-full flex flex-col relative z-20">
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
            <h3 className="font-inter font-semibold text-[20px] md:text-[23px] text-[#070030] leading-tight">
              {service.title}
            </h3>
          </div>

          <div
            className={`flex flex-col gap-5 flex-1 pr-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
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
