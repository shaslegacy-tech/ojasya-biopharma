// SingleCareerPage.tsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { careers } from "../data/careersData";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Application {
  name: string;
  email: string;
  message: string;
  resumeName: string;
  jobId: number;
  submittedAt: string;
}

export default function SingleCareerPage() {
  const { id } = useParams<{ id: string }>();
  const job = careers.find((c) => c.id === Number(id));
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    resume: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("applications");
    if (stored) setApplications(JSON.parse(stored));
  }, []);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[var(--bg-light-2)] to-[var(--teal-light-1)] dark:from-[var(--bg-dark-1)] dark:to-[var(--teal-dark-2)]">
        <h1 className="text-3xl font-bold text-red-500">Job not found</h1>
        <Link to="/careers" className="mt-6 text-[var(--brand-1)] hover:underline">
          ← Back to Careers
        </Link>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files ? e.target.files[0] : null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.resume) return;

    const newApp: Application = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      resumeName: formData.resume.name,
      jobId: job.id,
      submittedAt: new Date().toISOString(),
    };

    const updatedApps = [...applications, newApp];
    setApplications(updatedApps);
    localStorage.setItem("applications", JSON.stringify(updatedApps));
    setSubmitted(true);

    // Reset form
    setFormData({ name: "", email: "", message: "", resume: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--bg-light-2)] to-[var(--teal-light-1)] dark:from-[var(--bg-dark-1)] dark:to-[var(--teal-dark-2)] py-20 px-6 md:px-20">
      <motion.div
        className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-900/60 p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Job Info */}
        <h1 className="text-4xl font-bold gradient-text">{job.title}</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          📍 {job.location} • {job.type}
        </p>
        <p className="mt-6 text-gray-800 dark:text-gray-300 leading-relaxed">{job.description}
            <ul className="list-disc ml-6 mt-4">
            {job.requirements?.map((req, i) => (
                <li key={i}>{req}</li>
            ))}
        </ul>
        </p>

        {/* Application Form */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-[var(--brand-1)]/10 to-[var(--brand-2)]/10 p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 gradient-text">Apply for this position</h2>

          {submitted ? (
            <p className="text-green-600 text-lg font-semibold">
              ✅ Thank you! Your application has been submitted.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/70 focus:ring-2 focus:ring-[var(--brand-1)] outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/70 focus:ring-2 focus:ring-[var(--brand-1)] outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Why should we hire you?"
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/70 focus:ring-2 focus:ring-[var(--brand-1)] outline-none"
                rows={5}
                required
              />
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 
                          file:text-sm file:font-semibold file:bg-[var(--brand-1)] file:text-white 
                          hover:file:bg-[var(--brand-2)] cursor-pointer"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Submit Application
              </button>
            </form>
          )}
        </motion.div>

        {/* Applications Table (optional for admin preview) */}
        {applications.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">Previous Applications</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-xl">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Resume</th>
                    <th className="px-4 py-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {applications
                    .filter((a) => a.jobId === job.id)
                    .map((a, i) => (
                      <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-4 py-2">{a.name}</td>
                        <td className="px-4 py-2">{a.email}</td>
                        <td className="px-4 py-2">{a.resumeName}</td>
                        <td className="px-4 py-2">{new Date(a.submittedAt).toLocaleString()}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-10">
          <Link
            to="/careers"
            className="px-6 py-3 rounded-full border border-gray-400 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            ← Back to Careers
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
