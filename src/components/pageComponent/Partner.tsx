// Partner.tsx
import { Section } from "../../utility/utility";
import { partners } from "../../data/data";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Partners() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <Section id="partners" className="py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-lg shadow-lg"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Our Trusted Partners
        </h2>

        <motion.div
          variants={container}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          {partners.map((p) => (
            <TooltipItem key={p.logo} logo={p.logo} title={p.title} variants={item} />
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}

function TooltipItem({
  logo,
  title,
  variants,
}: {
  logo: string;
  title: string;
  variants: any;
}) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      variants={variants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative group p-4 rounded-xl bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300"
    >
      <img
        src={logo}
        alt={title}
        className="h-14 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
      />

      {/* Tooltip */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: pos.x,
            y: pos.y - 30, // offset above cursor
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="absolute pointer-events-none whitespace-nowrap px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs shadow-lg z-50"
          style={{
            transform: `translate(-50%, -100%)`,
          }}
        >
          {title}
        </motion.div>
      )}
    </motion.div>
  );
}
