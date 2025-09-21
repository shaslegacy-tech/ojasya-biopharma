import { Link } from "react-router-dom";
import { LOGO_SRC, footerMenu } from "../data/data";

export default function Footer() {
  return (
    <footer className="bg-emerald-50 dark:bg-emerald-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-3">
            <img src={LOGO_SRC} alt="Ojasya Biopharma Logo" className="h-12 mr-3" />
            <span className="text-lg font-bold tracking-wide text-emerald-800 dark:text-emerald-200">
              Ojasya Biopharma
            </span>
          </div>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            A premium pharmaceutical innovator in biologics, mRNA platforms, and advanced therapies.
          </p>
        </div>

        {/* Footer Menu Sections */}
        {footerMenu.map((menu) => (
          <div key={menu.title}>
            <h4 className="font-semibold mb-2 text-emerald-800 dark:text-emerald-200">{menu.title}</h4>
            <ul className="space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
              {menu.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="relative inline-block group font-medium overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {/* Gradient Glow Background */}
                    <span
                      className="absolute inset-0 rounded before:content-[''] before:absolute before:inset-0 
                                 before:bg-gradient-to-r before:from-emerald-400 before:via-teal-400 before:to-sky-400
                                 before:blur-lg before:opacity-0 group-hover:before:opacity-30 transition-opacity duration-300"
                    />

                    {/* Text */}
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">
                      {link.label}
                    </span>

                    {/* Underline */}
                    <span
                      className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400
                                 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-neutral-600 dark:text-neutral-300 pb-6">
        <span className="block font-medium">© {new Date().getFullYear()} Ojasya Biopharma — All Rights Reserved</span>
        <span className="block italic text-amber-600 dark:text-amber-400">
          "Innovating for a healthier tomorrow"
        </span>
      </div>
    </footer>
  );
}
