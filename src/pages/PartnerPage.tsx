import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { partners } from "../data/data";
import { Section } from "../utility/utility";

export const partnerCategories = [
  { title: "Pharma Brands", icon: "/icons/pharma.svg" },
  { title: "Medical Devices", icon: "/icons/devices.svg" },
  { title: "Injections", icon: "/icons/injection.svg" },
  { title: "Hospitals", icon: "/icons/hospital.svg" },
];

export const partnerTestimonials = [
  {
    name: "Dr. Anil Mehta",
    role: "Chief Pharmacist, City Hospital",
    quote: "Ojasya Biopharma consistently delivers quality medicines on time. Highly recommended!",
  },
  {
    name: "Nisha Sharma",
    role: "Procurement Head, Green Valley Hospital",
    quote: "Reliable service and premium pharmaceutical products. Our go-to supplier.",
  },
  {
    name: "Rohit Verma",
    role: "Hospital Administrator, Sunshine Clinic",
    quote: "Their delivery and support is unmatched. A trusted partner for our medical supplies.",
  },
];


export default function PartnersPage() {
  // Carousel state
  const slidesToShow = 5;
  const gap = 24;
  const totalSlides = partners.length;
  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      setSlideWidth((containerWidth - (slidesToShow - 1) * gap) / slidesToShow);
    }
  }, [carouselRef.current?.offsetWidth]);

  useEffect(() => {
    const interval = setInterval(() => slideToIndex(index + slidesToShow), 6000);
    return () => clearInterval(interval);
  }, [index]);

  const slideToIndex = (newIndex: number) => {
    if (newIndex < 0) newIndex = 0;
    if (newIndex > totalSlides - slidesToShow) newIndex = totalSlides - slidesToShow;
    setIndex(newIndex);
    animate(x, -newIndex * (slideWidth + gap), { type: "spring", stiffness: 200, damping: 30 });
  };

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const movedSlides = Math.round(-info.offset.x / (slideWidth + gap));
    slideToIndex(index + movedSlides);
  };

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };


  return (
    <div className="relative overflow-hidden min-h-screen py-16 px-4 bg-gradient-to-tr from-emerald-200 via-teal-100 to-sky-200 dark:from-emerald-900 dark:via-emerald-800 dark:to-sky-900">
      {/* Hero */}
      <div className="pt-24 pb-20 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 dark:from-emerald-700 dark:via-emerald-600 dark:to-sky-800 text-white text-center relative overflow-hidden">
        <motion.h1 className="text-4xl sm:text-5xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Our Trusted Partners
        </motion.h1>
        <motion.p className="text-lg sm:text-xl max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          We collaborate with the best pharmaceutical brands to deliver top-quality medicines and medical supplies to hospitals nationwide.
        </motion.p>
      </div>

      {/* Edge Gradients */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-emerald-200 dark:from-emerald-900 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-emerald-200 dark:from-emerald-900 pointer-events-none" />

      {/* Partner Logos Carousel */}
      <Section className="py-16">
        <motion.div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {partners.map((p, idx) => (
            <motion.div key={idx} variants={item} className="flex items-center justify-center p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src={p.logo} alt={p.title} className="object-contain h-12 w-auto" />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Partner Categories */}
      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {partnerCategories.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform duration-300"
          >
            <img src={cat.icon} alt={cat.title} className="h-16 w-16 mb-4" />
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">{cat.title}</h3>
          </div>
        ))}
      </div>

      <div className="py-20 bg-emerald-50 dark:bg-zinc-900/40 rounded-xl mx-4 mt-20">
        <motion.div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {[
            { title: "Wide Reach", desc: "Deliver your products to hospitals across the nation with our efficient logistics." },
            { title: "Trusted Network", desc: "Collaborate with top pharmaceutical brands and ensure product quality." },
            { title: "Real-Time Tracking", desc: "Monitor deliveries with transparency and reliability for peace of mind." }
          ].map((b, idx) => (
            <motion.div key={idx} variants={item} className="p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center">
              <h3 className="font-bold text-xl mb-2 text-zinc-900 dark:text-white">{b.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials */}
      <div className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-emerald-700 dark:text-emerald-300">
          What Our Partners Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {partnerTestimonials.map((t, i) => {
            const initials = t.name.split(" ").map(n => n[0]).join("").toUpperCase();
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-zinc-900 rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-emerald-400 dark:bg-emerald-600 flex items-center justify-center text-white font-bold text-xl ring-4 ring-emerald-400/50 dark:ring-emerald-500/40">
                    {initials}
                  </div>
                </div>
                <p className="italic text-zinc-700 dark:text-zinc-200">“{t.quote}”</p>
                <div className="mt-4 text-center">
                  <div className="font-medium text-zinc-800 dark:text-zinc-100">{t.name}</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">{t.role}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= CTA: Become a Partner ================= */}
        <div className="mt-20 py-16 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 dark:from-emerald-700 dark:via-emerald-600 dark:to-sky-800 rounded-3xl text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold mb-4 text-white">
            Become a Partner with Ojasya Biopharma
        </h2>
        <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Join our network of trusted partners and deliver high-quality pharmaceutical solutions to hospitals across the country.
        </p>
        <a
            href="/contact"
            className="inline-block px-8 py-4 font-semibold text-white bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-500 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
            Get in Touch
        </a>

        {/* Optional subtle background shapes */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
        </div>

    </div>
  );
}
