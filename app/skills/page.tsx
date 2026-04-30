import PageShell from "@/components/page-shell";
import skills from "@/data/skills.json";

export default function SkillsPage() {
  return (
    <PageShell
      eyebrow="Skills"
      title="Technical Skills"
      description="An overview of the tools and concepts that support the projects in my portfolio."
    >
      <section className="grid gap-5 md:grid-cols-2">
        {skills.map((group) => (
          <article
            key={group.group}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{group.group}</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
