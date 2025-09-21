import { ReactNode } from "react";

type UtilityProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const Section = ({ id, className, children }: UtilityProps) => (
  <section id={id} className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className || ""}`}>{children}</section>
);

const Card = ({ children, className }: UtilityProps) => (
  <div className={`rounded-2xl shadow-lg bg-white/70 dark:bg-zinc-900/60 backdrop-blur border border-zinc-200/60 dark:border-zinc-700 ${className || ""}`}>{children}</div>
);

// utility/utility.tsx
// import React from "react";

// export const Section: React.FC<{ className?: string; id?: string; children: React.ReactNode }> = ({
//   className = "",
//   id,
//   children,
// }) => {
//   return (
//     <section id={id} className={`container mx-auto px-4 ${className}`}>
//       {children}
//     </section>
//   );
// };

// export const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({
//   className = "",
//   children,
// }) => {
//   return <div className={`rounded-2xl shadow-md p-6 bg-white dark:bg-zinc-800 ${className}`}>{children}</div>;
// };

// Utility to create slug from title
const createSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export { Section, Card, createSlug };