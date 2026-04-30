import Link from "next/link";
import { navLinks } from "@/lib/site";

export default function Header() {
  return (
    <header className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Jared He
          </Link>
          <p className="text-sm text-slate-600 dark:text-slate-300">Full-Stack Web Developer</p>
        </div>
        <nav className="flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
