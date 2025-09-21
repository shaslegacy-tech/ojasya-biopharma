import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../utility/utility";

const particlesCount = 30;

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const isDark = document.documentElement.classList.contains("dark");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <main className="bg-gradient-to-b from-cyan-50 via-emerald-50 to-white dark:from-gray-900 dark:via-teal-900 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">

      {/* Floating Particles */}
      {Array.from({ length: particlesCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 12 + 6,
            height: Math.random() * 12 + 6,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.3)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            repeatType: "mirror",
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="relative z-10">
        {/* Hero Section */}
        <Section className="pt-24 pb-20 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Ojasya Biopharma
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions or want to partner with us? Reach out and we'll get back to you promptly.
          </motion.p>
        </Section>

        {/* Contact Section */}
        <Section className="py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 shadow-xl"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold text-emerald-500 mb-4">Thank you!</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Your message has been submitted. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 transition bg-white/60 dark:bg-zinc-800/50"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 transition bg-white/60 dark:bg-zinc-800/50"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 transition bg-white/60 dark:bg-zinc-800/50"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500 transition resize-none bg-white/60 dark:bg-zinc-800/50"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.4)" }}
                    className="mt-4 px-6 py-3 bg-emerald-400/70 dark:bg-emerald-600/70 text-white font-semibold rounded-xl shadow-lg transition-transform duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Get in Touch</h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Ojasya Biopharma<br />
                  123 Pharma Street, Industrial Area,<br />
                  Mumbai, India
                </p>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                  Email: <a href="mailto:contact@ojasya.com" className="text-emerald-500">contact@ojasya.com</a><br />
                  Phone: <a href="tel:+919876543210" className="text-emerald-500">+91 98765 43210</a>
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123456!2d72.8777!3d19.076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63d0c63e111%3A0x123456789abcdef!2sMumbai%2C%20India!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Ojasya Biopharma Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
    </main>
  );
}
