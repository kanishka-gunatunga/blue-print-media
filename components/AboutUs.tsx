"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function AboutUs() {
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

  // New variants specifically for the split-text staggered reveal
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
    <section id="about-us" className="relative w-full bg-white py-20 font-inter overflow-hidden">
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
        className="max-w-[1440px] mx-auto px-6 lg:px-[75px] relative z-10 flex flex-col"
      >

        <motion.div variants={itemVariants} className="flex justify-start mb-8">
          <div className="inline-flex justify-center items-center px-[50px] py-[5px] border border-[#0E519D] rounded-[50px] h-[58px] bg-white">
            <span className="font-inter font-medium text-[21px] text-black">
              • About Us •
            </span>
          </div>
        </motion.div>

        {/* Updated heading with split-text logic */}
        <motion.div variants={splitContainerVariants} className="mb-20 max-w-[1220px]">
          <h2 className="font-inter font-medium text-[36px] md:text-[45px] leading-[1.2] md:leading-[60px] text-black capitalize">
            {"Delivering Consistent Quality And Innovative Printing".split(" ").map((word, index) => (
              <span key={`line1-${index}`} className="inline-flex overflow-hidden pb-2">
                <motion.span variants={splitWordVariants} className="inline-block">
                  {word}
                </motion.span>
                &nbsp;
              </span>
            ))}
            <br className="hidden md:block" />
            {"Solutions For Every Need".split(" ").map((word, index) => (
              <span key={`line2-${index}`} className="inline-flex overflow-hidden pb-2 font-libre-baskerville italic">
                <motion.span variants={splitWordVariants} className="inline-block">
                  {word}
                </motion.span>
                &nbsp;
              </span>
            ))}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[30px] items-start lg:items-stretch w-full">

          <motion.div variants={imageVariants} className="w-full lg:w-[559px] flex-shrink-0 lg:flex lg:flex-col">
            <div className="relative w-full aspect-[559/679] lg:aspect-auto lg:flex-1 rounded-[22.23px] overflow-hidden shadow-sm lg:min-h-[679px]">
              <Image
                src="/about.png"
                alt="About Blueprint Media"
                fill
                sizes="(max-width: 1024px) 100vw, 559px"
                className="object-cover"
              />
            </div>
          </motion.div>

          <div className="w-full flex-1 flex flex-col pt-4 lg:pt-0 max-w-[703px]">
            <div className="flex flex-col gap-6 font-inter font-normal text-[18px] md:text-[20px] leading-[31px] text-[#666666]">
              <motion.p variants={itemVariants}>
                Blueprint Media is a forward-thinking creative and printing agency based in Sri Lanka, specializing in academic scrolls, certificate printing, and branding solutions for educational institutions and businesses. Our mission is to deliver premium-quality outputs at accessible prices, helping our clients enhance their image, credibility, and impact.
              </motion.p>
              <motion.p variants={itemVariants}>
                With a focus on precision, consistency, and innovation, we continue to support organizations in building strong and professional brand identities.
              </motion.p>

              <motion.h2 variants={itemVariants} className="font-inter font-medium text-[18px] md:text-[22px] leading-[1.2] md:leading-[60px] text-black mt-4">
                Why Choose Us ?
              </motion.h2>

              <motion.ul
                variants={containerVariants}
                className="flex flex-col gap-1 mt-0 pl-8"
              >
                {[
                  "15+ Years of Industry Experience.",
                  "Proven expertise in marketing, branding, and production.",
                  "Specialized in Educational Institutions.",
                  "Deep understanding of academic requirements and standards.",
                  "Premium Quality at Competitive Prices.",
                  "High-end output without premium pricing.",
                  "We respect your timelines and commitments.",
                  "Trusted by Businesses & Institutes."
                ].map((item, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex gap-3">
                    <span>-</span> <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}