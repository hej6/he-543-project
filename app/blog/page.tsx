import Link from "next/link";
import PageShell from "@/components/page-shell";
import posts from "@/data/posts.json";

export default function BlogPage() {
  return (
    <PageShell eyebrow="Blog" title="Personal Blog" description="View my personal blog posts here.">
      <section className="grid gap-5">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{post.title}</h2>

            <p className="mt-3 text-base leading-6 text-slate-600 dark:text-slate-300">
              {post.description}
            </p>

            <p className="mt-3 text-base text-slate-500 dark:text-slate-400">{post.publishedAt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-base font-semibold text-sky-700 hover:text-sky-500 dark:text-sky-400"
            >
              Read the post
            </Link>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
