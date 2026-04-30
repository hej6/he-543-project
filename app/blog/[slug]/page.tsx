import { notFound } from "next/navigation";
import PageShell from "@/components/page-shell";
import posts from "@/data/posts.json";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  content: string[];
};

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = (posts as BlogPost[]).find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell eyebrow="Blog post" title={post.title} description={post.description}>
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
        <p className="mb-6 text-base text-slate-500 dark:text-slate-400">{post.publishedAt}</p>

        <div className="space-y-4">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
