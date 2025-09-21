// PrivacyPolicyPageWithWaves.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PrivacyPolicyPageWithWaves() {
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate particles
  useEffect(() => {
    const temp: { x: number; y: number; size: number; delay: number }[] = [];
    for (let i = 0; i < 30; i++) {
      temp.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        delay: Math.random() * 5,
      });
    }
    setParticles(temp);
  }, []);

  const sections = [
    {
      title: "Introduction",
      content: `At Ojasya Biopharma, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your personal information.`,
    },
    {
      title: "Information We Collect",
      content: `We may collect personal information such as your name, email, phone number, and usage data when you interact with our website or services.`,
    },
    {
      title: "How We Use Your Information",
      content: `Your information helps us provide, maintain, and improve our services, communicate with you, and comply with legal obligations.`,
    },
    {
      title: "Cookies & Tracking",
      content: `We use cookies and similar technologies to understand website performance and improve user experience. You can control cookies via your browser settings.`,
    },
    {
      title: "Third-Party Services",
      content: `We may share data with trusted partners for analytics, marketing, or service purposes. All third parties are compliant with applicable privacy laws.`,
    },
  ];

  const WaveDivider = ({ invert = false }: { invert?: boolean }) => (
    <div className={invert ? "rotate-180" : ""}>
      <svg
        className="w-full h-24"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-1)" />
            <stop offset="50%" stopColor="var(--brand-2)" />
            <stop offset="100%" stopColor="var(--brand-b)" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#wave-gradient)"
          fillOpacity="0.3"
          d="M0,64L60,90.7C120,117,240,171,360,165.3C480,160,600,96,720,90.7C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          animate={{ d: [
            "M0,64L60,90.7C120,117,240,171,360,165.3C480,160,600,96,720,90.7C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
            "M0,96L60,85.3C120,75,240,53,360,64C480,75,600,117,720,122.7C840,128,960,96,1080,85.3C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
            "M0,64L60,90.7C120,117,240,171,360,165.3C480,160,600,96,720,90.7C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ]}}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[var(--bg-light-2)] to-[var(--teal-light-1)] dark:from-[var(--bg-dark-1)] dark:to-[var(--teal-dark-2)] transition-colors duration-700 overflow-hidden">

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <motion.div
          className="h-1 bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)]"
          style={{
            scaleX: scrollY / (document.body.scrollHeight - window.innerHeight),
            transformOrigin: "0 0",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrollY / (document.body.scrollHeight - window.innerHeight) }}
        />
      </div>

      {/* Hero with particles */}
      <section className="relative py-24 text-center overflow-hidden">
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-[var(--brand-1)] opacity-20"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.y}%`,
              left: `${p.x}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 12 + Math.random() * 5,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.h1
          className="relative text-5xl md:text-6xl font-bold gradient-text z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Privacy Policy
        </motion.h1>
        <p className="relative mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto z-10">
          Learn how Ojasya Biopharma collects, uses, and protects your personal information.
        </p>
      </section>

      {/* Policy Sections with Wave Dividers */}
      {sections.map((sec, idx) => (
        <div key={idx}>
          <section className="relative">
            <motion.div
              className="container mx-auto px-6 md:px-12 lg:px-20 py-16 bg-white dark:bg-gray-900 rounded-3xl shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                {sec.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {sec.content}
              </p>
            </motion.div>
          </section>

          {/* Wave Divider (invert every other) */}
          {idx < sections.length - 1 && <WaveDivider invert={idx % 2 === 0} />}
        </div>
      ))}

      {/* CTA */}
      <section className="py-20 text-center">
        <motion.button
          className="px-10 py-4 rounded-full bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white font-bold shadow-2xl hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = "/contact"}
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
}
