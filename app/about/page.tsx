import Image from "next/image";
import PageShell from "@/components/page-shell";
import { HiCheckCircle } from "react-icons/hi";

const requirements = [
  "Must be more than 10 pages",
  "Must include MongoDB",
  "Must use 5 NPM libraries, not including NextJS",
  "Must include one form to allow others to contact you",
  "Website must be responsive, mobile, tablet, and desktop views",
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Purpose"
      description="The purpose of this site is to present my coursework, projects, skills and other useful employment information in a manner that is simple and easy to navigate."
    >
      <div className="space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10 dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Requirements
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            All Requirements Met
          </h1>
          <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
            {requirements.map((item) => (
              <li key={item}>
                <HiCheckCircle className="mr-2 inline-block align-[-0.15em] text-sky-600 dark:text-sky-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}

{
  /*<div className="overflow-hidden rounded-3xl">
          <Image
            src="/about.jpg"
            alt="Desk setup representing development work"
            width={2000}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>*/
}
