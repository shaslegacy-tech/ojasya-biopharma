// AboutUs.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  coreValues,
  teamMembers,
  milestones,
  partners,
} from "../data/data";
import { Section, Card } from "../utility/utility";
import FloatingBlobs from "../components/FloatingBlobs";
import Testimonials from "../components/pageComponent/Testimonials";

export default function AboutUs() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="bg-gradient-to-b from-cyan-50 via-emerald-50 to-white 
      dark:from-gray-900 dark:via-teal-900 dark:to-zinc-900 
      text-zinc-900 dark:text-zinc-100 
      w-full overflow-x-hidden">

      {/* Floating Blobs */}
      <FloatingBlobs />

      <div className="relative z-10 w-full">
        {/* Hero Section */}
        <Section className="relative pt-20 pb-24 text-center overflow-hidden w-full">
          {/* Animated Blobs - clamped width */}
          <motion.div
            className="absolute top-[-120px] left-1/4 w-[320px] max-w-[90vw] h-[320px] bg-emerald-300/40 rounded-full blur-3xl"
            animate={{ y: [0, 25, 0], x: [0, 15, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[80px] right-1/4 w-[260px] max-w-[90vw] h-[260px] bg-teal-300/30 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, -15, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[50px] left-[50%] w-[220px] max-w-[90vw] h-[220px] bg-sky-300/20 rounded-full blur-2xl"
            style={{ translateX: "-50%" }}
            animate={{ y: [0, 15, 0], rotate: [0, 20, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Hero Text */}
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold mb-6 text-zinc-900 dark:text-white drop-shadow-lg relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Ojasya Biopharma
          </motion.h1>
          <motion.p
            className="text-base sm:text-xl max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Advancing healthcare through innovation and high-quality
            pharmaceutical solutions.
          </motion.p>

          {/* Hero CTA */}
          <motion.div
            className="mt-8 flex justify-center relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </Section>

        {/* Mission & Vision */}
        <Section className="py-16 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Card className="p-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm shadow-lg rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Our Mission</h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                Provide high-quality pharmaceutical solutions improving patient outcomes globally.
              </p>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Card className="p-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm shadow-lg rounded-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Our Vision</h2>
              <p className="text-zinc-700 dark:text-zinc-300">
                Be a recognized leader in pharmaceutical innovation, delivering value to patients and communities.
              </p>
            </Card>
          </motion.div>
        </Section>

        {/* Core Values */}
        <Section className="py-16 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">Our Core Values</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto px-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {coreValues.map((v) => (
              <motion.div
                key={v.title}
                variants={item}
                className="p-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center"
              >
                {v.icon && (
                  <div className="text-4xl mb-4 text-emerald-500 dark:text-emerald-400">
                    {React.createElement(v.icon)}
                  </div>
                )}
                <h3 className="font-bold text-xl mb-2 text-zinc-900 dark:text-white">
                  {v.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Timeline */}
        <Section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">Our Journey</h2>
          <div className="relative">
            <div className="border-l-2 border-emerald-400 absolute h-full left-1/2 transform -translate-x-1/2 hidden md:block" />
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-8">
              {milestones.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="md:w-1/2 flex items-start md:items-center relative"
                >
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-400 mt-1 md:mt-0 md:mr-6" />
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white">{m.year}</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Team */}
        <section className="py-20 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-zinc-900 dark:to-zinc-950 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 dark:text-white mb-14">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 container mx-auto px-4">
            {[
              { name: "Ravi Sharma", role: "Founder & CEO", img: "/images/team/ceo.jpg" },
              { name: "Anita Desai", role: "Head of Operations", img: "/images/team/operations.jpg" },
              { name: "Arjun Mehta", role: "Tech Lead", img: "/images/team/tech.jpg" },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 ring-4 ring-emerald-400/30"
                />
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                  {member.name}
                </h3>
                <p className="text-zinc-700 dark:text-zinc-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <Section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">Our Trusted Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img src={p.logo} alt={p.title} className="object-contain h-12 w-auto" />
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Testimonials />
      </div>
    </main>
  );
}
