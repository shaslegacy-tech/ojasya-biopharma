// ServicesPage.tsx
import { NavLink, Outlet } from "react-router-dom";

export default function ServicesPage() {
  const subMenu = [
    { label: "Pharma Supplies", href: "pharma-supplies" },
    { label: "Injections & Devices", href: "injections" },
    { label: "Hospital Delivery", href: "delivery" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 via-teal-100 to-sky-200 dark:from-emerald-900 dark:via-emerald-800 dark:to-sky-900 opacity-20 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-emerald-700 dark:text-emerald-300">
          Our Services
        </h1>

        {/* Submenu Navigation */}
        <nav className="flex gap-6 mb-12 justify-center flex-wrap">
          {subMenu.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-400 text-white shadow-lg scale-105"
                    : "bg-white/70 dark:bg-zinc-800/60 text-zinc-800 dark:text-white hover:bg-emerald-200 dark:hover:bg-emerald-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Submenu content */}
        <Outlet />
      </div>
    </div>
  );
}
