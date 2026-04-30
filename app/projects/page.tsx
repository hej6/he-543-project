import PageShell from "@/components/page-shell";
import ProjectCard from "@/components/project-card";
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

export default function ProjectsPage() {
  const featuredProjects = projects as Project[];

  return (
    <PageShell
      eyebrow="Projects"
      title="Selected Projects"
      description="Listed below are select projects from my coursework."
    >
      <section className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            summary={project.summary}
            stack={project.stack}
            href={`/projects/${project.slug}`}
          />
        ))}
      </section>
    </PageShell>
  );
}
