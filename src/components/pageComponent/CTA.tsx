import { Card, Section } from "../../utility/utility";
import { ArrowRight } from "lucide-react";
export default function CTA() {
  return (
    <Section className="py-16">
      <Card className="p-8 sm:p-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">Ready to collaborate?</h3>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">Let’s accelerate your next breakthrough with our platforms and GMP manufacturing.</p>
        <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
          Contact Us <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Card>
    </Section>
  );
}