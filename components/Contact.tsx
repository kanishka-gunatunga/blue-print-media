"use client"
import React, { useState } from 'react';
import { MapPin, Share2, ChevronDown, Phone } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const ContactInfoCard = ({
  icon: Icon,
  title,
  children,
  className = ""
}: {
  icon: React.ElementType,
  title: string,
  children: React.ReactNode,
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative box-border rounded-[20px] p-8 transition-colors duration-300 flex flex-col justify-between items-start gap-8 ${isHovered ? 'bg-[#070030] border-[#070030]' : 'bg-white border border-black/20'
        } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-row items-center gap-[22px]">
        <div className={`w-[43px] h-[43px] rounded-full flex items-center justify-center transition-colors duration-300 ${isHovered ? 'bg-[#0E519D]' : 'bg-[#070030]'
          }`}>
          <Icon className="text-white w-5 h-5" />
        </div>
        <h3 className={`font-inter font-semibold text-[19px] leading-[31px] transition-colors duration-300 ${isHovered ? 'text-white' : 'text-black'
          }`}>
          {title}
        </h3>
      </div>
      <div className={`font-inter font-normal text-[16px] leading-[24px] transition-colors duration-300 ${isHovered ? 'text-white' : 'text-black'
        }`}>
        {children}
      </div>
    </div>
  );
};

export default function Contact() {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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

  interface FormErrors {
    name?: string;
    email?: string;
    service?: string;
    message?: string;
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: unknown) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'An error occurred. Please try again later.';
      setErrorMessage(message);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-white py-24 font-inter overflow-hidden">
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
        className="max-w-[1440px] mx-auto px-6 lg:px-[123px] relative z-10"
      >

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-7 w-full max-w-[791px] mx-auto mb-16">
          <div className="flex flex-row justify-center items-center px-[50px] py-[5px] border border-[#0E519D] rounded-[50px] h-[58px]">
            <span className="font-inter font-medium text-[21px] text-black">
              • Get in Touch With Us •
            </span>
          </div>
          <motion.h2 
            variants={splitContainerVariants}
            className="font-libre-baskerville italic font-normal text-[36px] md:text-[45px] leading-tight text-center text-black capitalize"
          >
            {"Let’s Build Your Blueprint".split(" ").map((word, index) => (
              <span key={`title-${index}`} className="inline-flex overflow-hidden pb-1">
                <motion.span variants={splitWordVariants} className="inline-block">
                  {word}
                </motion.span>
                &nbsp;
              </span>
            ))}
          </motion.h2>
          <motion.p 
            variants={splitContainerVariants}
            className="font-inter font-normal text-[18px] md:text-[20px] leading-[31px] text-center text-black/60"
          >
            {"Ready to elevate your brand or institution with premium design and printing solutions? Get in touch with us today.".split(" ").map((word, index) => (
              <span key={`desc-${index}`} className="inline-flex overflow-hidden pb-1">
                <motion.span variants={splitWordVariants} className="inline-block">
                  {word}
                </motion.span>
                &nbsp;
              </span>
            ))}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] mt-12">

          <motion.div variants={itemVariants} className="flex flex-col gap-6 w-full max-w-[650px]">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <motion.div variants={itemVariants}>
                <ContactInfoCard icon={MapPin} title="Address">
                  Yakkala, Sri Lanka
                </ContactInfoCard>
              </motion.div>

              <motion.div variants={itemVariants}>
                <ContactInfoCard icon={Phone} title="Contact">
                  +94 70 707 6991
                </ContactInfoCard>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <ContactInfoCard icon={Share2} title="Follow Us" className="w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                  <div className="flex items-center gap-4">
                    <a href="#" className="hover:opacity-70 transition-opacity">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.761 24 24 21.761 24 19V5C24 2.239 21.761 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" />
                      </svg>
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.774H18.916L7.084 4.126H5.117L17.083 19.774Z" />
                      </svg>
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073C24 5.405 18.627 0 12 0C5.373 0 0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.562H7.078V12.073H10.125V9.412C10.125 6.387 11.916 4.717 14.657 4.717C15.97 4.717 17.344 4.953 17.344 4.953V7.935H15.83C14.34 7.935 13.875 8.868 13.875 9.829V12.073H17.203L16.671 15.562H13.875V24C19.612 23.094 24 18.1 24 12.073Z" />
                      </svg>
                    </a>
                    <a href="#" className="hover:opacity-70 transition-opacity">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.016 2.286 18.647 2.479 19.068 2.643C19.626 2.86 20.024 3.123 20.442 3.541C20.86 3.959 21.123 4.357 21.34 4.915C21.504 5.336 21.697 5.967 21.75 7.133C21.808 8.399 21.82 8.779 21.82 11.983C21.82 15.187 21.808 15.567 21.75 16.833C21.697 17.999 21.504 18.63 21.34 19.051C21.123 19.609 20.86 20.007 20.442 20.425C20.024 20.843 19.626 21.106 19.068 21.323C18.647 21.487 18.016 21.68 16.85 21.733C15.584 21.791 15.204 21.803 12 21.803C8.796 21.803 8.416 21.791 7.15 21.733C5.984 21.68 5.353 21.487 4.932 21.323C4.374 21.106 3.976 20.843 3.558 20.425C3.14 20.007 2.877 19.609 2.66 19.051C2.496 18.63 2.303 17.999 2.25 16.833C2.192 15.567 2.18 15.187 2.18 11.983C2.18 8.779 2.192 8.399 2.25 7.133C2.303 5.967 2.496 5.336 2.66 4.915C2.877 4.357 3.14 3.959 3.558 3.541C3.976 3.123 4.374 2.86 4.932 2.643C5.353 2.479 5.984 2.286 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.775 0.131 4.903 0.334 4.14 0.63C3.352 0.936 2.686 1.339 2.023 2.002C1.36 2.665 0.957 3.331 0.651 4.119C0.355 4.882 0.152 5.754 0.094 7.032C0.035 8.312 0.021 8.72 0.021 11.979C0.021 15.238 0.035 15.646 0.094 16.926C0.152 18.204 0.355 19.076 0.651 19.839C0.957 20.627 1.36 21.293 2.023 21.956C2.686 22.619 3.352 23.022 4.14 23.328C4.903 23.624 5.775 23.827 7.053 23.886C8.333 23.944 8.741 23.958 12 23.958C15.259 23.958 15.667 23.944 16.947 23.886C18.225 23.827 19.097 23.624 19.86 23.328C20.648 23.022 21.314 22.619 21.977 21.956C22.64 21.293 23.043 20.627 23.349 19.839C23.645 19.076 23.848 18.204 23.906 16.926C23.965 15.646 23.979 15.238 23.979 11.979C23.979 8.72 23.965 8.312 23.906 7.032C23.848 5.754 23.645 4.882 23.349 4.119C23.043 3.331 22.64 2.665 21.977 2.002C21.314 1.339 20.648 0.936 19.86 0.63C19.097 0.334 18.225 0.131 16.947 0.072C15.667 0.014 15.259 0 12 0ZM12 5.838C8.618 5.838 5.86 8.596 5.86 11.979C5.86 15.362 8.618 18.12 12 18.12C15.382 18.12 18.14 15.362 18.14 11.979C18.14 8.596 15.382 5.838 12 5.838ZM12 15.957C9.805 15.957 8.023 14.175 8.023 11.979C8.023 9.783 9.805 8.001 12 8.001C14.195 8.001 15.977 9.783 15.977 11.979C15.977 14.175 14.195 15.957 12 15.957ZM18.406 4.14C17.611 4.14 16.965 4.786 16.965 5.581C16.965 6.376 17.611 7.022 18.406 7.022C19.201 7.022 19.847 6.376 19.847 5.581C19.847 4.786 19.201 4.14 18.406 4.14Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ContactInfoCard>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col w-full max-w-[617px] gap-6 pt-4 lg:pt-0">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">

                <div className="flex flex-col w-full">
                  <label className="font-inter font-medium text-[15px] text-black/60 mb-2 flex items-center gap-1">
                    Name <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className={`flex flex-col w-full border-b pb-2 transition-colors duration-300 ${errors.name ? 'border-red-500' : 'border-black/20'}`}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-transparent font-inter font-normal text-[19px] leading-[31px] text-black outline-none placeholder:text-black/30 focus:placeholder:opacity-0 transition-opacity"
                      disabled={status === 'loading'}
                    />
                  </div>
                  {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
                </div>

                <div className="flex flex-col w-full">
                  <label className="font-inter font-medium text-[15px] text-black/60 mb-2 flex items-center gap-1">
                    Email <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className={`flex flex-col w-full border-b pb-2 transition-colors duration-300 ${errors.email ? 'border-red-500' : 'border-black/20'}`}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full bg-transparent font-inter font-normal text-[19px] leading-[31px] text-black outline-none placeholder:text-black/30 focus:placeholder:opacity-0 transition-opacity"
                      disabled={status === 'loading'}
                    />
                  </div>
                  {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                </div>
              </div>

              <div className="flex flex-col w-full mt-4">
                <label className="font-inter font-medium text-[15px] text-black/60 mb-2 flex items-center gap-1">
                  Service <span className="text-red-500 font-bold">*</span>
                </label>
                <div className={`flex flex-col w-full border-b pb-2 relative transition-colors duration-300 ${errors.service ? 'border-red-500' : 'border-black/20'}`}>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent font-inter font-normal text-[19px] leading-[31px] text-black outline-none appearance-none cursor-pointer"
                    disabled={status === 'loading'}
                  >
                    <option value="" disabled className="text-black/30">Select a Service</option>
                    <option value="printing">Printing Solutions</option>
                    <option value="design">Graphic Design</option>
                    <option value="branding">Brand Identity</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${errors.service ? 'text-red-500' : 'text-black'}`} strokeWidth={2} />
                  </div>
                </div>
                {errors.service && <span className="text-red-500 text-sm mt-1">{errors.service}</span>}
              </div>

              <div className="flex flex-col w-full mt-4">
                <label className="font-inter font-medium text-[15px] text-black/60 mb-2 flex items-center gap-1">
                  Message <span className="text-red-500 font-bold">*</span>
                </label>
                <div className={`flex flex-col w-full border-b pb-2 transition-colors duration-300 ${errors.message ? 'border-red-500' : 'border-black/20'}`}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="w-full bg-transparent font-inter font-normal text-[19px] leading-[31px] text-black outline-none resize-none min-h-[120px] placeholder:text-black/30 focus:placeholder:opacity-0 transition-opacity"
                    disabled={status === 'loading'}
                  />
                </div>
                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
              </div>

              {status === 'success' && (
                <p className="text-green-600 font-medium">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 font-medium">{errorMessage}</p>
              )}

              <div className="flex justify-start sm:justify-end mt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#0E519D] hover:bg-[#070030] text-white font-inter font-medium text-[20px] leading-[31px] px-[30px] py-[10px] rounded-[10px] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Your Message'}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
