import type { ReactNode } from "react";

export default function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-6 mt-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10 dark:border-slate-800 dark:bg-slate-950">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
          {description}
        </p>
      </section>
      {children}
    </div>
  );
}
