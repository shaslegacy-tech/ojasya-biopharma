// Hero.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blobs = [
    { size: 350, top: -120, left: -80, color: "bg-emerald-300/40", xSpeed: 0.2, ySpeed: 0.1, rotSpeed: 5 },
    { size: 300, top: 80, right: -80, color: "bg-teal-300/30", xSpeed: -0.15, ySpeed: 0.12, rotSpeed: -4 },
    { size: 250, top: 50, left: 50, color: "bg-sky-300/20", xSpeed: 0.1, ySpeed: 0.08, rotSpeed: 3 },
  ];

  return (
    <section className="relative pt-20 pb-24 text-center overflow-hidden">
      {/* Layered Floating Blobs with Parallax */}
      {blobs.map((b, idx) => {
        const leftPos = typeof b.left === "number" ? b.left + scrollY * b.xSpeed : undefined;
        const rightPos = typeof b.right === "number" ? b.right + scrollY * b.xSpeed : undefined;
        return (
          <motion.div
            key={idx}
            className={`absolute rounded-full ${b.color} blur-3xl`}
            style={{
              width: b.size,
              height: b.size,
              top: b.top + scrollY * b.ySpeed,
              left: leftPos,
              right: rightPos,
              rotate: scrollY * b.rotSpeed,
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, 15, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}

      {/* Hero Text */}
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold mb-6 text-zinc-900 dark:text-white drop-shadow-lg relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Ojasya Biopharma
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Advancing healthcare through innovation and high-quality pharmaceutical solutions.
      </motion.p>

      {/* CTA */}
      <motion.div
        className="mt-8 flex justify-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <button className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          Learn More
        </button>
      </motion.div>

      {/* Optional gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-white/10 mix-blend-overlay rounded-b-3xl"></div>
    </section>
  );
}
