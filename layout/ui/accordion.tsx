"use client";
import { useState } from "react";

export default function AccordionUI() {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-300 bg-white p-4 text-slate-900">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full text-left font-semibold"
      >
        Quick note
      </button>
      {open ? (
        <p className="mt-3 text-sm text-slate-600">
          This project has been converted into a portfolio website.
        </p>
      ) : null}
    </div>
  );
}
