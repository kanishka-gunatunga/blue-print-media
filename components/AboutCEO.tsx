"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutCEO() {
  return (
    <section id="about-ceo" className="relative w-full bg-white py-24 font-inter overflow-hidden">
      {/* Background Grid */}
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
        className="max-w-[1440px] mx-auto px-6 lg:px-[87px] relative z-10 flex flex-col pt-16 pb-32"
      >

        {/* Top Tag */}
        <div className="flex justify-start mb-12">
          <div className="inline-flex justify-center items-center px-[50px] py-[5px] border border-[#0E519D] rounded-[50px] h-[58px] bg-white">
            <span className="font-inter font-medium text-[21px] text-black">
              • About the CEO •
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[50px] items-start w-full">

          {/* Left Column: Image */}
          <div className="w-full lg:w-[543px] flex-shrink-0">
            <div className="relative w-full aspect-[543/669] bg-[#EBF3FF] rounded-[22.23px] overflow-hidden shadow-sm">
              <Image
                src="/ceo1.png"
                alt="Dasitha Medis - CEO"
                fill
                sizes="(max-width: 1024px) 100vw, 543px"
                className="object-cover object-bottom"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full flex flex-col pt-4 lg:pt-[17px] max-w-[693px]">
            {/* Name & Title */}
            <div className="flex flex-col gap-[5px] mb-16">
              <h2 className="font-inter font-semibold text-[36px] md:text-[45px] leading-[60px] text-black capitalize">
                Dasitha Medis
              </h2>
              <h3 className="font-libre-baskerville italic font-normal text-[20px] md:text-[23px] leading-[29px] text-[#666666] capitalize -mt-1">
                CEO, Blueprint Media
              </h3>
            </div>

            {/* Content Group */}
            <div className="flex flex-col gap-[35px]">
              <p className="font-inter font-normal text-[18px] md:text-[20px] leading-[31px] text-[#666666]">
                Dasitha Medis is a seasoned digital marketing strategist and business leader with over 15 years of experience across marketing, technology, and brand development.
              </p>

              {/* Education List */}
              <ul className="flex flex-col gap-4 mt-2 mb-2">
                <li className="flex gap-4">
                  <span className="font-libre-baskerville italic font-bold text-[20px] leading-[22px] text-black mt-[2px]">•</span>
                  <div className="flex flex-col">
                    <span className="font-libre-baskerville italic font-normal text-[18px] leading-[22px] text-black">
                      MSc in Strategic Marketing
                    </span>
                    <span className="font-libre-baskerville italic font-normal text-[16px] leading-[20px] text-[#666666] mt-1">
                      Cardiff Metropolitan University, UK (2021)
                    </span>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="font-libre-baskerville italic font-bold text-[20px] leading-[22px] text-black mt-[2px]">•</span>
                  <div className="flex flex-col">
                    <span className="font-libre-baskerville italic font-normal text-[18px] leading-[22px] text-black">
                      BSc (Hons) in Business Information Technology
                    </span>
                    <span className="font-libre-baskerville italic font-normal text-[16px] leading-[20px] text-[#666666] mt-1">
                      Staffordshire University, UK (2013)
                    </span>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="font-libre-baskerville italic font-bold text-[20px] leading-[22px] text-black mt-[2px]">•</span>
                  <div className="flex flex-col">
                    <span className="font-libre-baskerville italic font-normal text-[18px] leading-[22px] text-black">
                      Diploma in Information Technology
                    </span>
                    <span className="font-libre-baskerville italic font-normal text-[16px] leading-[20px] text-[#666666] mt-1">
                      Staffordshire University, UK (2011)
                    </span>
                  </div>
                </li>
              </ul>

              <p className="font-inter font-normal text-[18px] md:text-[20px] leading-[31px] text-[#666666]">
                Strong foundation in strategic marketing and performance-driven execution, Dasitha leads Blueprint Media with a focus on innovation, efficiency, and measurable results. His leadership ensures that every client receives not just a service but a solution designed for growth.
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
