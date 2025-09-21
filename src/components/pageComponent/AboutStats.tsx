import { stats } from "../../data/data";
import { Card, Section } from "../../utility/utility";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../../hooks/useCountUp";
import { Microscope, ShieldCheck } from "lucide-react";

export function AboutStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <Section id="about" className="py-16 sm:py-24">
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">About Ojasya Biopharma</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-lg">
            Founded with a mission to make advanced therapies accessible, we specialize in biologics, mRNA technologies, and cell therapies. Our cross-functional teams bridge discovery, process development, scale-up, and compliant manufacturing.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white flex items-center gap-2"><Microscope className="h-5 w-5"/> Research First</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Dedicated R&D pipelines with rapid prototyping and analytical characterization.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white flex items-center gap-2"><ShieldCheck className="h-5 w-5"/> Compliance Built-In</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Audit-ready documentation and digital traceability across the lifecycle.</p>
            </Card>
          </div>
        </div>
        <div ref={ref} className="grid grid-cols-2 gap-4 lg:gap-6">
          {stats.map((s) => {
            const val = useCountUp(s.value, inView);
            return (
              <Card key={s.label} className="p-6 text-center">
                <div className="text-4xl font-extrabold text-emerald-600">{val}+</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{s.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
