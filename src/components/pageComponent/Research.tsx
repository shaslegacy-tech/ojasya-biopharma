import { motion } from "framer-motion";
import { Card, Section } from "../../utility/utility";
export default function Research() {
  return (
    <Section id="research" className="py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Card className="overflow-hidden">
            <div className="h-72 bg-gradient-to-br from-teal-700 to-emerald-600" />
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Research & Development</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">We invest heavily in platform technologies, analytical methods, and digital QMS to accelerate discovery while maintaining first-time-right quality.</p>
          <div className="mt-6 space-y-4">
            {[{label:"R&D Investment", val:90}, {label:"Trials Completed", val:76}, {label:"Tech Transfer Success", val:94}].map(({label, val}) => (
              <div key={label}>
                <div className="flex justify-between text-sm font-medium text-zinc-700 dark:text-zinc-300"><span>{label}</span><span>{val}%</span></div>
                <div className="mt-2 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                  <div className="h-full w-0 bg-emerald-600 rounded-full" style={{ width: `${val}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}