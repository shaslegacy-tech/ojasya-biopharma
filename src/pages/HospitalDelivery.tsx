// HospitalDelivery.tsx
import { motion } from "framer-motion";
import { ClipboardCheck, Package as BoxPackage, Truck, Hospital } from "lucide-react";
import React from "react";

const steps = [
  { title: "Order Received", icon: ClipboardCheck },
  { title: "Warehouse Processing", icon: BoxPackage },
  { title: "Transport to Hospital", icon: Truck },
  { title: "Delivered Safely", icon: Hospital },
];

export default function HospitalDelivery() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-10 text-center text-emerald-700 dark:text-emerald-300">
        Hospital Delivery Timeline
      </h2>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-12 max-w-6xl mx-auto">
        {steps.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center text-center md:w-1/4"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-emerald-400 dark:bg-emerald-600 mb-4 text-white text-3xl">
              {React.createElement(s.icon)}
            </div>
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{s.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
