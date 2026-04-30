export default function Footer() {
  return (
    <footer className="mt-6 rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Jared He. Built with Next.js and TypeScript.</p>

        <p>
          Email:{" "}
          <a
            href="mailto:jaredhe@gmail.com"
            className="underline underline-offset-4 hover:text-slate-900 dark:hover:text-slate-200"
          >
            jaredhe@gmail.com
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/hej6"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-slate-900 dark:hover:text-slate-200"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
