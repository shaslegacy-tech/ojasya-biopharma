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


export { Section, Card }