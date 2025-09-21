// MedicalGallery.tsx
import React from "react";
import { motion } from "framer-motion";

// Sample JSON data for products
const medicalProducts = [
  { name: "Paracetamol 500mg", desc: "Effective pain relief for fever and aches.", image: "/products/paracetamol.png" },
  { name: "Vitamin D Injection", desc: "Supports bone health and immunity.", image: "/products/vitamin-d.png" },
  { name: "Amoxicillin 250mg", desc: "Broad-spectrum antibiotic.", image: "/products/amoxicillin.png" },
  { name: "Insulin Injection", desc: "Regulates blood sugar levels.", image: "/products/insulin.png" },
  { name: "Ceftriaxone 1g", desc: "Used for severe bacterial infections.", image: "/products/ceftriaxone.png" },
  { name: "Ibuprofen 400mg", desc: "Relieves inflammation and pain.", image: "/products/ibuprofen.png" },
];

export default function MedicalGallery() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-50 to-teal-100 dark:from-zinc-900 dark:to-zinc-800" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
          Our Medical Products
        </h2>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {medicalProducts.map((p, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(16,185,129,0.3)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl cursor-pointer"
            >
              <div className="h-32 w-32 mb-4">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="object-contain h-full w-full" />
                ) : (
                  <div className="h-full w-full bg-emerald-400 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                    {p.name[0]}
                  </div>
                )}
              </div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">{p.name}</h3>
              <p className="text-zinc-600 dark:text-zinc-300">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
