import { Mail, MapPin, Phone } from "lucide-react";
import { Card, Section } from "../../utility/utility";
export default function Contact() {
  return (
   <Section id="contact" className="py-16 sm:py-24">
  <div className="grid lg:grid-cols-2 gap-8">
    {/* Contact Form */}
    <Card className="p-8 shadow-lg border border-zinc-200 dark:border-zinc-700">
      <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Get in Touch</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Have a question or business inquiry? Fill out the form and we’ll get back to you promptly.
      </p>

      <form
        className="mt-6 grid grid-cols-1 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks! We will reach out shortly.");
        }}
      >
        <input
          className="px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Full name"
          required
        />
        <input
          type="email"
          className="px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Email"
          required
        />
        <input
          className="px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="Company"
        />
        <textarea
          rows={4}
          className="px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          placeholder="How can we help?"
          required
        />
        <button className="mt-2 inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
          Send Message
        </button>
      </form>

      {/* Contact Details */}
      <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
          <Phone className="h-4 w-4 text-emerald-600" />
          <span className="text-zinc-700 dark:text-zinc-300">+91-99352-32465</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
          <Mail className="h-4 w-4 text-emerald-600" />
          <span className="text-zinc-700 dark:text-zinc-300">contact@ojasyabiopharma.com</span>
        </div>
        <div className="flex items-center gap-2 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50">
          <MapPin className="h-4 w-4 text-emerald-600" />
          <span className="text-zinc-700 dark:text-zinc-300">Navi Mumbai, IN</span>
        </div>
      </div>
    </Card>

    {/* Map */}
    <Card className="overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-700">
      <iframe
        title="Ojasya Biopharma Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15132.274!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v0000000000"
      ></iframe>
    </Card>
  </div>
</Section>

  );
}