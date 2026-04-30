import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import SectionTitle from "@/components/section-title";
import projects from "@/data/projects.json";

type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  sections: {
    title: string;
    content?: string;
    items?: string[];
  }[];
};

export default function HomePage() {
  const featuredProjects = projects as Project[];

  return (
    <div className="space-y-8">
      <Hero />

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 pt-1 md:pt-1">
        <SectionTitle title="Featured Projects" />

        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              summary={project.summary}
              stack={project.stack}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
