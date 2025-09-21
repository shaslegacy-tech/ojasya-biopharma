// Partner.tsx
import { Section } from "../../utility/utility";
import { partners } from "../../data/data";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Partners() {
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  // Infinite scroll
  useEffect(() => {
    if (!paused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        },
      });
    } else {
      controls.stop();
    }
  }, [paused, controls]);

  return (
    <Section id="partners" className="py-20 overflow-hidden">
      <div className="rounded-3xl p-12 shadow-2xl bg-white dark:bg-zinc-900 backdrop-blur-xl">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-zinc-900 dark:text-white tracking-tight">
          Our Trusted Partners
        </h2>

        {/* Auto-scrolling row */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div className="flex gap-12 w-max" animate={controls}>
            {[...partners, ...partners].map((p, i) => (
              <TooltipItem key={i} logo={p.logo} title={p.title} />
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function TooltipItem({ logo, title }: { logo: string; title: string }) {
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
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative group flex items-center justify-center min-w-[160px] min-h-[110px] p-6 rounded-2xl 
                 bg-white dark:bg-zinc-800 
                 shadow-md hover:shadow-lg transition-all duration-300"
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
            y: pos.y - 30,
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="absolute pointer-events-none whitespace-nowrap px-3 py-1 rounded-lg 
                     bg-emerald-600 text-white text-xs shadow-lg z-50"
          style={{ transform: `translate(-50%, -100%)` }}
        >
          {title}
        </motion.div>
      )}
    </div>
  );
}
