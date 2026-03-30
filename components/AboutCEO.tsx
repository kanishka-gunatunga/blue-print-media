"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function AboutCEO() {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -40, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.1, ease: "easeOut" }
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

  return (
    <section id="about-ceo" className="relative w-full bg-white py-20 font-inter overflow-hidden">
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
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1440px] mx-auto px-6 lg:px-[87px] relative z-10 flex flex-col"
      >

        {/* Top Tag */}
        <motion.div variants={itemVariants} className="flex justify-start mb-12">
          <div className="inline-flex justify-center items-center px-[50px] py-[5px] border border-[#0E519D] rounded-[50px] h-[58px] bg-white">
            <span className="font-inter font-medium text-[21px] text-black">
              • About the CEO •
            </span>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[50px] items-start w-full">

          {/* Left Column: Image */}
          <motion.div variants={imageVariants} className="w-full lg:w-[543px] flex-shrink-0">
            <div className="relative w-full aspect-[543/669] bg-[#EBF3FF] rounded-[22.23px] overflow-hidden shadow-sm">
              <Image
                src="/ceo1.png"
                alt="Dasitha Medis - CEO"
                fill
                sizes="(max-width: 1024px) 100vw, 543px"
                className="object-cover object-bottom"
              />
            </div>
          </motion.div>

          <div className="w-full flex flex-col pt-4 lg:pt-[17px] max-w-[693px]">
            <motion.div variants={splitContainerVariants} className="flex flex-col gap-[5px] mb-16">
              <h2 className="font-inter font-semibold text-[36px] md:text-[45px] leading-[60px] text-black capitalize">
                {"Dasitha Medis".split(" ").map((word, index) => (
                  <span key={`name-${index}`} className="inline-flex overflow-hidden pb-2">
                    <motion.span variants={splitWordVariants} className="inline-block">
                      {word}
                    </motion.span>
                    &nbsp;
                  </span>
                ))}
              </h2>
              <h3 className="font-libre-baskerville italic font-normal text-[20px] md:text-[23px] leading-[29px] text-[#666666] capitalize -mt-1">
                {"CEO, Blueprint Media".split(" ").map((word, index) => (
                  <span key={`title-${index}`} className="inline-flex overflow-hidden pb-2">
                    <motion.span variants={splitWordVariants} className="inline-block">
                      {word}
                    </motion.span>
                    &nbsp;
                  </span>
                ))}
              </h3>
            </motion.div>

            <div className="flex flex-col gap-[35px]">
              <motion.p variants={itemVariants} className="font-inter font-normal text-[18px] md:text-[20px] leading-[31px] text-[#666666]">
                Dasitha Medis is a seasoned digital marketing strategist and business leader with over 15 years of experience across marketing, technology, and brand development.
              </motion.p>

              <motion.ul 
                variants={containerVariants}
                className="flex flex-col gap-4 mt-2 mb-2"
              >
                {[
                  {
                    title: "MSc in Strategic Marketing",
                    desc: "Cardiff Metropolitan University, UK (2021)"
                  },
                  {
                    title: "BSc (Hons) in Business Information Technology",
                    desc: "Staffordshire University, UK (2013)"
                  },
                  {
                    title: "Diploma in Information Technology",
                    desc: "Staffordshire University, UK (2011)"
                  }
                ].map((edu, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex gap-4">
                    <span className="font-libre-baskerville italic font-bold text-[20px] leading-[22px] text-black mt-[2px]">•</span>
                    <div className="flex flex-col">
                      <span className="font-inter font-medium text-[18px] leading-[22px] text-black">
                        {edu.title}
                      </span>
                      <span className="font-libre-baskerville italic font-normal text-[16px] leading-[20px] text-[#666666] mt-1">
                        {edu.desc}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p variants={itemVariants} className="font-inter font-normal text-[18px] md:text-[20px] leading-[31px] text-[#666666]">
                Strong foundation in strategic marketing and performance-driven execution, Dasitha leads Blueprint Media with a focus on innovation, efficiency, and measurable results. His leadership ensures that every client receives not just a service but a solution designed for growth.
              </motion.p>
            </div>

          </div>
        </div>
      </motion.div>

    </section>
  );
}
