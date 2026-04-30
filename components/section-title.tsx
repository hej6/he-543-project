export default function SectionTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mt-6 space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
