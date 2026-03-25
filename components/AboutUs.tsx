"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about-us" className="relative w-full bg-white py-24 font-inter overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: "url('/grid_line.svg')",
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
        className="max-w-[1440px] mx-auto px-6 lg:px-[75px] relative z-10 flex flex-col"
      >

        <div className="flex justify-start mb-8">
          <div className="inline-flex justify-center items-center px-[50px] py-[5px] border border-[#0E519D] rounded-[50px] h-[58px] bg-white">
            <span className="font-inter font-medium text-[21px] text-black">
              • About Us •
            </span>
          </div>
        </div>

        <div className="mb-20 max-w-[1220px]">
          <h2 className="font-inter font-medium text-[36px] md:text-[45px] leading-[1.2] md:leading-[60px] text-black capitalize">
            Delivering Consistent Quality And Innovative Printing <br className="hidden md:block" />
            <span className="font-libre-baskerville italic">Solutions For Every Need</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[30px] items-start w-full">

          <div className="w-full lg:w-[559px] flex-shrink-0">
            <div className="relative w-full aspect-[559/679] rounded-[22.23px] overflow-hidden shadow-sm">
              <Image
                src="/about-us.png"
                alt="About Blueprint Media"
                fill
                sizes="(max-width: 1024px) 100vw, 559px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full flex-1 flex flex-col pt-4 lg:pt-0 max-w-[703px]">
            <div className="flex flex-col gap-6 font-inter font-normal text-[18px] md:text-[20px] leading-[31px] text-[#666666]">
              <p>
                Blueprint Media is a forward-thinking creative and printing agency based in Sri Lanka, specializing in academic scrolls, certificate printing, and branding solutions for educational institutions and businesses. Our mission is to deliver premium-quality outputs at accessible prices, helping our clients enhance their image, credibility, and impact.
              </p>
              <p>
                With a focus on precision, consistency, and innovation, we continue to support organizations in building strong and professional brand identities.
              </p>

              <h2 className="font-inter font-medium text-[18px] md:text-[22px] leading-[1.2] md:leading-[60px] text-black">
                Why Choose Us
              </h2>

              <ul className="flex flex-col gap-1 mt-0 pl-8">
                <li className="flex gap-3">
                  <span>-</span> <span>15+ Years of Industry Experience</span>
                </li>
                <li className="flex gap-3">
                  <span>-</span> <span>Proven expertise in marketing, branding, and production</span>
                </li>
                <li className="flex gap-3">
                  <span>-</span> <span>Specialized in Educational Institutions</span>
                </li>
                <li className="flex gap-3">
                  <span>-</span> <span>Deep understanding of academic requirements and standards</span>
                </li>
                <li className="flex gap-3">
                  <span>-</span> <span>Premium Quality at Competitive Prices</span>
                </li>
                <li className="flex gap-3">
                  <span>-</span> <span>High-end output without premium pricing</span>
                </li>
                <li className="flex gap-3">
                  <span>-</span> <span>We respect your timelines and commitments</span>
                </li>
                <li className="flex gap-3">
                  <span>-</span> <span>Trusted by Businesses & Institutes</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
