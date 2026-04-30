import PageShell from "@/components/page-shell";
import projects from "@/data/projects.json";
import { notFound } from "next/navigation";

type CardItem = {
  title: string;
  content: string;
};

type ProjectSection = {
  detailLayout: "text" | "cards" | "list";
  title?: string;
  content?: string;
  items?: CardItem[] | string[];
};

type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  role: string;
  sections: ProjectSection[];
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const typedProjects = projects as Project[];

  return typedProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const typedProjects = projects as Project[];

  const project = typedProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell eyebrow={project.eyebrow} title={project.title} description={project.description}>
      <div className="space-y-8">
        {project.sections.map((section, index) => {
          if (section.detailLayout === "text") {
            return (
              <section
                key={`${section.title}-${index}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                {section.title && (
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {section.title}
                  </h2>
                )}
                {section.content && (
                  <p className="mt-3 text-base leading-6 text-slate-600 dark:text-slate-300">
                    {section.content}
                  </p>
                )}
              </section>
            );
          }

          if (section.detailLayout === "cards") {
            const cardItems = (section.items ?? []) as CardItem[];

            return (
              <section key={`cards-${index}`} className="grid gap-5 md:grid-cols-2">
                {cardItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                  >
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-base leading-6 text-slate-600 dark:text-slate-300">
                      {item.content}
                    </p>
                  </article>
                ))}
              </section>
            );
          }

          if (section.detailLayout === "list") {
            const listItems = (section.items ?? []) as string[];

            return (
              <section
                key={`${section.title}-${index}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                {section.title && (
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {section.title}
                  </h2>
                )}
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-6 text-slate-600 dark:text-slate-300">
                  {listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            );
          }

          return null;
        })}
      </div>
    </PageShell>
  );
}
