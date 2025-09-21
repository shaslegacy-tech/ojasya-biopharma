// PharmaSupplies.tsx
import { Card } from "../utility/utility";
import { motion } from "framer-motion";

const products = [
  { name: "Paracetamol", desc: "High-quality fever & pain reliever", img: "/products/paracetamol.jpg" },
  { name: "Antibiotics", desc: "Trusted broad-spectrum antibiotics", img: "/products/antibiotics.jpg" },
  { name: "Vitamins", desc: "Essential vitamins & supplements", img: "/products/vitamins.jpg" },
];

export default function PharmaSupplies() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {products.map((p, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <Card className="bg-white dark:bg-zinc-900 shadow-lg rounded-3xl p-6 hover:scale-105 hover:shadow-xl transition-transform duration-300 text-center">
            <img src={p.img} alt={p.name} className="h-32 w-auto mx-auto rounded-xl mb-4 object-cover" />
            <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">{p.name}</h3>
            <p className="text-zinc-600 dark:text-zinc-300">{p.desc}</p>
          </Card>
        </motion.div>
      ))}
    </section>
  );
}
