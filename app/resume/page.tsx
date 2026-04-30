import PageShell from "@/components/page-shell";

export default function ResumePage() {
  return (
    <PageShell
      eyebrow="Resume"
      title="Resume Download"
      description="View or download my resume here."
    >
      <section className="grid gap-5">
        <iframe
          src="HE_JARED_RESUME.pdf"
          title="Resume Preview"
          className="h-[900px] w-full rounded-xl border"
        />
      </section>
    </PageShell>
  );
}
