import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({
  title,
  summary,
  stack,
  href,
}: {
  title: string;
  summary: string;
  stack: readonly string[] | string[];
  href: string;
}) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <FiArrowUpRight className="mt-1 shrink-0 text-sky-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <p className="mt-4 text-md leading-6 text-slate-600 dark:text-slate-300">{summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
      <Link
        href={href}
        className="mt-4 inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-500 dark:text-sky-400"
      >
        View details
      </Link>
    </article>
  );
}
