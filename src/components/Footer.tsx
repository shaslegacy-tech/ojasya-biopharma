import { LOGO_SRC } from "../data/data";
import { Section } from "../utility/utility";

export default function Footer() {
  return (
    <footer className="bg-emerald-50 dark:bg-emerald-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center mb-3">
            <img src={LOGO_SRC} alt="Ojasya Biopharma Logo" className="h-12 mr-3" />
            <span className="text-lg font-bold tracking-wide text-emerald-800 dark:text-emerald-200">Ojasya Biopharma</span>
          </div>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">A premium pharmaceutical innovator in biologics, mRNA platforms, and advanced therapies.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Company</h4>
          <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Resources</h4>
          <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
            <li>Docs</li>
            <li>Support</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">Follow</h4>
          <div className="flex gap-3 text-xl">
            <span>🐦</span><span>💼</span><span>📸</span>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-600 dark:text-neutral-300 pb-6">
        <span className="block font-medium">© {new Date().getFullYear()} Ojasya Biopharma — All Rights Reserved</span>
        <span className="block italic text-amber-600 dark:text-amber-400">"Innovating for a healthier tomorrow"</span>
      </div>
    </footer>
  )
}
 