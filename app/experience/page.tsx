import PageShell from "@/components/page-shell";
import experience from "@/data/experience.json";

export default function ExperiencePage() {
  return (
    <PageShell
      eyebrow="Experience"
      title="Recent Experience"
      description="View my recent professional experience at-a-glance."
    >
      <section className="space-y-5">
        {experience.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          >
            <header>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
              <div className="text-sm text-slate-500 dark:text-slate-400 md:text-base">
                <p>{item.organization}</p>
                <p>{item.period}</p>
              </div>
            </header>

            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
              {item.summary}
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300 md:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
