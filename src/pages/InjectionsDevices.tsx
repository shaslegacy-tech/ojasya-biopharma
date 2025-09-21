// InjectionsDevices.tsx
import { Card } from "../utility/utility";
import { Syringe, Thermometer, Bandage } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const devices = [
  { name: "Syringes", icon: Syringe, desc: "Safe and sterile syringes" },
  { name: "Thermometers", icon: Thermometer, desc: "Accurate temperature monitoring" },
  { name: "Medical Bandages", icon: Bandage, desc: "Reliable wound care solutions" },
];

export default function InjectionsDevices() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {devices.map((d, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <Card className="bg-white dark:bg-zinc-900 shadow-lg rounded-3xl p-6 hover:scale-105 hover:shadow-xl transition-transform duration-300 text-center">
            <div className="text-4xl text-emerald-500 dark:text-emerald-400 mb-4">
              {React.createElement(d.icon)}
            </div>
            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">{d.name}</h3>
            <p className="text-zinc-600 dark:text-zinc-300">{d.desc}</p>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}
