// ServicePage.tsx
import React, { useState, useEffect, useRef } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { Card, Section } from "../utility/utility";
import { services } from "../data/data"; 
import FloatingBlobs from "../components/FloatingBlobs";
import DeliveryTimeline from "../components/services/DeliveryTimeline";
import MedicalGallery from "../components/services/MedicalGallery";
import { Package as BoxPackage, Truck as DeliveryTruck, Globe, Phone } from "lucide-react";
import Testimonials from "../components/pageComponent/Testimonials";


// Dummy Data
const serviceHighlights = [
  { title: "On-time Hospital Deliveries", icon: DeliveryTruck },
  { title: "Multi-brand Medicine Supply", icon: Globe },
  { title: "Cold-chain & Safe Transport", icon: BoxPackage },
  { title: "24/7 Customer Support", icon: Phone },
];

const testimonials = [
  { name: "Dr. John Doe", role: "Chief Pharmacist", quote: "Ojasya Biopharma delivers reliably every time!" },
  { name: "Nurse Mary Smith", role: "Hospital Nurse", quote: "Timely deliveries with safe handling of medicines." },
  { name: "Dr. Alan Walker", role: "Hospital Admin", quote: "Excellent service and multi-brand availability." },
  { name: "Dr. Lisa Wong", role: "Pharmacist", quote: "Highly professional and premium service." },
];

const faqData = [
  { question: "Do you deliver all pharma brands?", answer: "Yes, we deliver medicines from all major pharmaceutical brands." },
  { question: "Do you support cold-chain medicines?", answer: "Absolutely, we ensure temperature-controlled transport." },
  { question: "Can we schedule recurring deliveries?", answer: "Yes, hospitals can schedule recurring supply deliveries." },
];


export default function ServicePage() {
  return (
    <main className="bg-gradient-to-b from-cyan-50 via-emerald-50 to-white dark:from-gray-900 dark:via-teal-900 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
    <FloatingBlobs />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 text-white py-28 text-center">
        <motion.h1 className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Hospital Supply & Delivery
        </motion.h1>
        <motion.p className="max-w-2xl mx-auto text-lg sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Reliable delivery of medicines, injections, and medical essentials from all pharma brands.
        </motion.p>
        <motion.button
          className="mt-8 px-8 py-3 rounded-full font-semibold bg-white text-emerald-600 hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          Request a Delivery
        </motion.button>
      </section>

      {/* Service Highlights */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
          Our Services
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {serviceHighlights.map((s, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(16,185,129,0.2)" }} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center">
              <div className="text-4xl text-emerald-500 mb-4">{React.createElement(s.icon)}</div>
              <h3 className="font-bold mb-2 text-zinc-900 dark:text-white">{s.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Delivery Timeline + Partners */}
      <DeliveryTimeline />

      {/* Medical Products */}
      <MedicalGallery />

      {/* Testimonials Carousel */}
      <section className="py-20 bg-emerald-50 dark:bg-zinc-900/40">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">What Partners Say</h2>
        <Testimonials />
      </section>

      {/* How to Order */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">How to Place an Order</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard number={1} title="Place an Order" desc="Submit your hospital delivery request through our portal." />
          <StepCard number={2} title="Confirm Stock & Schedule" desc="We verify availability and confirm delivery time." />
          <StepCard number={3} title="Receive Safely" desc="Medicines delivered safely to your hospital." />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((f, idx) => (
            <FAQItem key={idx} question={f.question} answer={f.answer} />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-emerald-50 dark:bg-zinc-900/40">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">Request a Delivery</h2>
        <ContactForm />
      </section>

      {/* CTA */}
      <Section className="py-16 text-center relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Supply Your Hospital?
        </motion.h2>
        <motion.p
          className="text-zinc-700 dark:text-zinc-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact us today and ensure your hospital never runs out of essential medicines and supplies.
        </motion.p>
        <motion.button
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Get in Touch
        </motion.button>
      </Section>
    </main>
  );
}

// ================= StepCard =================
function StepCard({ number, title, desc }: { number: number; title: string; desc: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(16,185,129,0.2)" }} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 text-center">
      <div className="text-emerald-500 text-2xl font-bold mb-2">{number}</div>
      <h3 className="font-bold mb-2 text-zinc-900 dark:text-white">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-300">{desc}</p>
    </motion.div>
  );
}

// ================= FAQItem =================
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div layout className="bg-white dark:bg-zinc-900/80 rounded-xl shadow-md p-4 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-zinc-900 dark:text-white">{question}</h3>
        <span className="text-emerald-500 font-bold">{open ? "-" : "+"}</span>
      </div>
      {open && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-zinc-600 dark:text-zinc-300">{answer}</motion.p>}
    </motion.div>
  );
}

// ================= ContactForm =================
function ContactForm() {
  return (
    <motion.form className="max-w-2xl mx-auto grid gap-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-8">
      <input type="text" placeholder="Hospital Name" className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
      <input type="text" placeholder="Contact Person" className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
      <input type="email" placeholder="Email Address" className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
      <textarea placeholder="Delivery Request Details" rows={4} className="p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
      <motion.button type="submit" className="py-3 rounded-full bg-emerald-500 text-white font-semibold hover:scale-105 transition-transform">Submit Request</motion.button>
    </motion.form>
  );
}