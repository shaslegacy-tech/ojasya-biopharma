// TermsPage.tsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const floatingIcons = ["💊", "🧪", "🩺", "🏥", "🧬", "⚕️"];

function FloatingIcon({
  icon,
  size,
  startX,
  startY,
  driftX,
  driftY,
  floatDuration,
  driftDuration,
}: {
  icon: string;
  size: number;
  startX: number;
  startY: number;
  driftX: number;
  driftY: number;
  floatDuration: number;
  driftDuration: number;
}) {
  const auraColors = [
    "radial-gradient(circle, rgba(0,255,255,0.6), transparent 70%)", // cyan
    "radial-gradient(circle, rgba(0,128,255,0.6), transparent 70%)", // blue
    "radial-gradient(circle, rgba(255,0,255,0.6), transparent 70%)", // magenta
    "radial-gradient(circle, rgba(0,255,128,0.6), transparent 70%)", // teal-green
    "radial-gradient(circle, rgba(255,128,0,0.6), transparent 70%)", // orange
  ];
  const aura = auraColors[Math.floor(Math.random() * auraColors.length)];

  return (
    <motion.div
      className="absolute select-none"
      style={{
        left: startX,
        top: startY,
        pointerEvents: "none",
      }}
      animate={{
        // floating bobbing effect
        y: [startY, startY + 20, startY],
        x: [startX, startX + 10, startX],

        // drifting movement across page
        translateX: [0, driftX, 0],
        translateY: [0, driftY, 0],

        opacity: [0.3, 0.5, 0.35],
        scale: [1, 1.05, 1],
      }}
      transition={{
        y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut" },
        x: { duration: floatDuration, repeat: Infinity, ease: "easeInOut" },
        translateX: { duration: driftDuration, repeat: Infinity, ease: "easeInOut" },
        translateY: { duration: driftDuration, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: floatDuration, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: floatDuration, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Glow Aura */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-50"
        style={{
          background: aura,
          width: size * 2.5,
          height: size * 2.5,
          left: `-${size * 0.75}px`,
          top: `-${size * 0.75}px`,
        }}
      />

      {/* Main Icon */}
      <div
        style={{
          fontSize: size,
          textShadow: "0 0 8px rgba(255,255,255,0.6), 0 0 18px rgba(255,255,255,0.4)",
        }}
      >
        {icon}
      </div>
    </motion.div>
  );
}



export default function TermsPage() {
  const sections = [
    { id: "introduction", title: "Introduction", content: `Welcome to Ojasya Biopharma. By accessing our website, you agree to comply with these Terms & Conditions. Please read carefully.` },
    { id: "use-website", title: "Use of Website", content: `You may use our website for lawful purposes only. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.` },
    { id: "products-services", title: "Products & Services", content: `Ojasya Biopharma provides pharmaceutical products, injections, and medical supplies exclusively for hospitals. All products are subject to availability.` },
    { id: "intellectual-property", title: "Intellectual Property", content: `All content, graphics, logos, and materials are the property of Ojasya Biopharma and protected under applicable laws.` },
    { id: "liability", title: "Limitation of Liability", content: `Ojasya Biopharma is not liable for any indirect, incidental, or consequential damages arising from the use of our products or website.` },
    { id: "changes-terms", title: "Changes to Terms", content: `We may update these terms at any time. Your continued use of the website indicates acceptance of any changes.` },
    { id: "contact", title: "Contact Us", content: `For questions regarding these Terms & Conditions, please contact us at info@ojasyabiopharma.com.` },
  ];

  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Cursor + scroll effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setOffset({ x, y });
    };
    const handleScroll = () => {
      const y = window.scrollY * 0.05;
      setOffset((prev) => ({ ...prev, y }));
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-150px 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-light-2)] to-[var(--teal-light-1)] dark:from-[#050505] dark:to-[var(--teal-dark-2)] transition-colors duration-500 relative overflow-hidden">

      {/* Floating Icons */}
      {floatingIcons.map((icon, idx) => (
        <FloatingIcon
          key={idx}
          icon={icon}
          size={28 + Math.random() * 18}
          startX={Math.random() * window.innerWidth}
          startY={Math.random() * window.innerHeight}
          floatDuration={5 + Math.random() * 10}
          driftDuration={5 + Math.random() * 10}
          driftX={offset.x * (idx % 2 === 0 ? 1 : -1)}
          driftY={offset.y * (idx % 2 === 0 ? -1 : 1)}
        />
      ))}

      {/* Hero */}
      <section className="relative py-24 text-center z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Terms & Conditions
        </motion.h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Please read these terms carefully before using our website and services.
        </p>
      </section>

      {/* Content + TOC */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col lg:flex-row gap-12 relative z-10">
        {/* Content */}
        <div className="flex-1 max-w-4xl space-y-12">
          {sections.map((sec, idx) => (
            <motion.div
              key={sec.id}
              id={sec.id}
              className="bg-white/60 dark:bg-zinc-900/70 p-8 rounded-2xl shadow-lg backdrop-blur-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">
                {sec.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{sec.content}</p>
            </motion.div>
          ))}
        </div>

        {/* TOC */}
        <aside className="hidden lg:block w-64 sticky top-32 self-start space-y-3">
          <h4 className="font-bold mb-4 text-zinc-900 dark:text-white">On this page</h4>
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`block w-full text-left px-3 py-1 rounded transition ${
                activeId === sec.id
                  ? "bg-[var(--brand-1)] text-white font-semibold"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-[var(--brand-1)] hover:text-white"
              }`}
            >
              {sec.title}
            </button>
          ))}
        </aside>
      </section>
    </div>
  );
}
