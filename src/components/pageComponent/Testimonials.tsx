import { motion } from "framer-motion";
import { Card, Section } from "../../utility/utility";
import { testimonials } from "../../data/data";
export default function Testimonials() {
  return (
    <Section id="testimonials" className="py-16 sm:py-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-900 dark:text-white">What Partners Say</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
            <Card className="p-6 h-full">
              <p className="text-zinc-700 dark:text-zinc-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{t.name} • {t.role}</div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}