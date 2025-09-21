import { motion } from "framer-motion";
import { Card, Section } from "../../utility/utility";
import { products } from "../../data/data";
import { ArrowRight } from "lucide-react";
export default function Products() {
  return (
    <Section id="products" className="py-16 sm:py-24">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Focus Areas & Solutions</h2>
        <a href="#contact" className="text-emerald-700 dark:text-emerald-400 font-semibold inline-flex items-center">Request a consultation <ArrowRight className="ml-2 h-4 w-4"/></a>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(({ title, desc, icon: Icon }) => (
          <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Card className="p-6 h-full group">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">{desc}</p>
              <button className="mt-5 inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-sm font-semibold">
                Know More <ArrowRight className="h-4 w-4" />
              </button>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}