// CareersPage.tsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { careers } from "../data/careersData";

export default function CareersPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-light-2)] to-[var(--teal-light-1)] dark:from-[var(--bg-dark-1)] dark:to-[var(--teal-dark-2)] transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="relative py-20 text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20 bg-gradient-to-r from-[var(--brand-1)] via-[var(--brand-2)] to-[var(--brand-b)] blur-3xl"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        <motion.h1
          className="relative text-5xl md:text-6xl font-bold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Join Our Team
        </motion.h1>
        <p className="relative mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Explore opportunities at Ojasya Biopharma and become part of a team shaping the future of healthcare.
        </p>
      </section>

      {/* Job Cards */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {careers.map((job) => (
          <motion.div
            key={job.id}
            className="relative cursor-pointer rounded-3xl p-6 shadow-xl bg-white/80 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
            whileHover={{ y: -5 }}
            onClick={() => navigate(`/careers/${job.id}`)}
          >
            <span className="px-3 py-1 text-sm rounded-full bg-[var(--brand-1)] text-white shadow-md inline-block">
              {job.type}
            </span>
            <h3 className="mt-4 text-2xl font-bold gradient-text">{job.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{job.location}</p>
            <p className="mt-4 text-gray-800 dark:text-gray-200 line-clamp-3">{job.description}</p>
            <button
              className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              View Details
            </button>
          </motion.div>
        ))}
      </section>

      {/* Floating Decorative Icons */}
      <motion.div
        className="absolute top-10 left-10 text-[var(--brand-1)] opacity-30 text-6xl pointer-events-none"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        💊
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-[var(--brand-2)] opacity-30 text-7xl pointer-events-none"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        🧬
      </motion.div>
    </div>
  );
}
