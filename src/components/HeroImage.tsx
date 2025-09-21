import React from "react";
import { motion } from "framer-motion";
import { Check, Leaf, ArrowRight } from "lucide-react";
import { Section, Card } from "../utility/utility";
import { LOGO_SRC } from "../data/data";
export default function HeroImage() {
  return (
   <div className="relative overflow-hidden" aria-label="Ojasya Biopharma Hero">
      <div className="absolute inset-0 opacity-100 dark:opacity-90" style={{ background: "linear-gradient(135deg, #e0f7fa, #80deea, #4dd0e1)" }} />
      <Section className="relative pt-28 pb-24 sm:pt-32 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs tracking-wide bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-200">
              <Leaf className="h-4 w-4" />
              Trusted Biopharma Partner
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Innovating Tomorrow’s Healthcare, <span className="text-emerald-600">Today</span>
            </h1>
            <p className="mt-5 text-zinc-600 dark:text-zinc-300 text-lg max-w-2xl mx-auto lg:mx-0">
              Ojasya Biopharma advances therapies through rigorous science, GMP manufacturing, and a culture of quality — from discovery to delivery.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#products" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-700">
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <Card className="p-6 w-full max-w-md">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-emerald-600/10 to-cyan-600/10 flex items-center justify-center">
                {/* Logo + 3D-ish shadow */}
                <div className="relative">
                  <div className="absolute inset-0 blur-xl bg-emerald-400/40 rounded-full translate-y-3" />
                  <img src={LOGO_SRC} alt="Ojasya Biopharma logo" className="relative h-40 w-40 object-contain drop-shadow-xl" />
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                {["WHO-GMP Manufacturing", "ISO 13485 Quality Systems", "GLP/ICH-Compliant Studies"].map((t) => (
                  <li key={t} className="flex items-start gap-2"><Check className="h-5 w-5 text-emerald-600" /><span>{t}</span></li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}