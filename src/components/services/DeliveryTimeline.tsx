// DeliveryTimeline.tsx
import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Package as BoxPackage, Truck as DeliveryTruck, Hospital } from "lucide-react";

export const timelineSteps = [
  { title: "Order Received", icon: ClipboardCheck },
  { title: "Warehouse Processing", icon: BoxPackage },
  { title: "Transport to Hospital", icon: DeliveryTruck },
  { title: "Delivered Safely", icon: Hospital },
];

export const partnersData = [
  { title: "Pharma Brand A", logo: "/images/partners/glenmark.png" },
  { title: "Pharma Brand B", logo: "/images/partners/lupin.png" },
  { title: "Pharma Brand C", logo: "/images/partners/aurobindo.png" },
  { title: "Pharma Brand D", logo: "/images/partners/biocon.png" },
  { title: "Pharma Brand E", logo: "/images/partners/wellona.png" },
  { title: "Pharma Brand F", logo: "/images/partners/aurobindo.png" },
];

export default function DeliveryTimeline() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section className="py-24 relative">
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-16 text-zinc-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Hospital Delivery Process
      </motion.h2>

      {/* Timeline */}
      <motion.div
        className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Animated Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 z-0">
          <motion.div
            className="absolute h-2 w-2 bg-white rounded-full shadow-lg"
            animate={{ x: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>

        {timelineSteps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="relative md:w-1/4 flex flex-col items-center text-center mb-20 md:mb-0 z-10"
          >
            <motion.div
              className="flex items-center justify-center w-24 h-24 rounded-full bg-emerald-400 dark:bg-emerald-600 mb-4 text-white text-3xl shadow-xl"
              whileHover={{ scale: 1.15, boxShadow: "0 20px 40px rgba(16,185,129,0.3)" }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              {React.createElement(step.icon)}
            </motion.div>
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{step.title}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Partners */}
      <motion.div className="mt-24 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {partnersData.map((p, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(16,185,129,0.3)" }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center p-4 bg-white/60 dark:bg-zinc-800/60 rounded-xl shadow-md"
          >
            <img src={p.logo} alt={p.title} className="object-contain h-12 w-auto" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
