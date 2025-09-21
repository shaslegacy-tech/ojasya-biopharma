"use client";

import { Section } from "../../utility/utility";
import { testimonials } from "../../data/data";
import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const slidesToShow = 3;
  const gap = 24; // Tailwind gap-6 = 1.5rem = 24px
  const totalSlides = testimonials.length;

  const [index, setIndex] = useState(0);
  const x = useMotionValue(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Calculate slide width dynamically
  useEffect(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      setSlideWidth((containerWidth - (slidesToShow - 1) * gap) / slidesToShow);
    }
  }, [carouselRef.current?.offsetWidth]);

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      slideToIndex(index + slidesToShow);
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  // Slide to a given index with snap
  const slideToIndex = (newIndex: number) => {
    if (newIndex < 0) newIndex = 0;
    if (newIndex > totalSlides - slidesToShow) newIndex = totalSlides - slidesToShow;
    setIndex(newIndex);
    animate(x, -newIndex * (slideWidth + gap), { type: "spring", stiffness: 200, damping: 30 });
  };

  // Snap on drag end
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const movedSlides = Math.round(-info.offset.x / (slideWidth + gap));
    slideToIndex(index + movedSlides);
  };

  return (
    <Section id="testimonials" className="py-20 sm:py-28 relative">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-900 dark:text-white">
        What Partners Say
      </h2>

      {/* Carousel container */}
      <div className="relative mt-14 overflow-hidden px-4">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-zinc-900 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-zinc-900 pointer-events-none" />

        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          className="flex gap-6 cursor-grab"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -(totalSlides - slidesToShow) * (slideWidth + gap), right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} slidesToShow={slidesToShow} gap={gap} />
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="mt-10 flex justify-center gap-3">
        {Array.from({ length: Math.ceil(totalSlides / slidesToShow) }).map((_, i) => (
          <button
            key={i}
            onClick={() => slideToIndex(i * slidesToShow)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === Math.floor(index / slidesToShow)
                ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 scale-125"
                : "bg-zinc-400/40 dark:bg-zinc-600/40"
            }`}
          />
        ))}
      </div>
    </Section>
  );
}

function TestimonialCard({
  testimonial,
  slidesToShow,
  gap,
}: {
  testimonial: { name: string; role: string; quote: string };
  slidesToShow: number;
  gap: number;
}) {
  const names = testimonial.name.split(" ");
  const initials = names.length > 1 ? names[0][0] + names[names.length - 1][0] : names[0][0];

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16,185,129,0.3)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ flex: `0 0 calc((100% - ${(slidesToShow - 1) * gap}px)/${slidesToShow})` }}
      className="bg-white dark:bg-zinc-900 rounded-3xl px-8 py-10 text-center"
    >
      {/* Initials Avatar */}
      <div className="flex justify-center mb-4">
        <div className="h-16 w-16 rounded-full bg-emerald-400 dark:bg-emerald-600 
                        flex items-center justify-center text-white font-bold text-xl ring-4 ring-emerald-400/50 dark:ring-emerald-500/40">
          {initials.toUpperCase()}
        </div>
      </div>

      {/* Quote */}
      <p className="text-zinc-700 dark:text-zinc-200 text-center italic">
        “{testimonial.quote}”
      </p>

      {/* Name + Role */}
      <div className="mt-4 text-center">
        <div className="font-medium text-zinc-800 dark:text-zinc-100">{testimonial.name}</div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">{testimonial.role}</div>
      </div>
    </motion.div>
  );
}
