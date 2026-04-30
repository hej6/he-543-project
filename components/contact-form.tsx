"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import type { ContactFormValues } from "@/lib/contact-schema";
import { contactSchema } from "@/lib/contact-schema";

const fieldClassName =
  "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:ring-sky-900";

export default function ContactForm() {
  const [serverMessage, setServerMessage] = useState("");
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });
  const onSubmit = async (values: ContactFormValues) => {
    setServerError("");
    setServerMessage("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = (await response.json()) as { message?: string; error?: string };
    if (!response.ok) {
      setServerError(data.error || "Something went wrong while sending your message.");
      return;
    }
    setServerMessage(data.message || "Your message has been sent.");
    reset();
  };
  return (
    <motion.form
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Name
          <input {...register("name")} className={fieldClassName} placeholder="Your name" />
          {errors.name ? (
            <span className="mt-2 block text-xs text-rose-500">{errors.name.message}</span>
          ) : null}
        </label>
        <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Email
          <input {...register("email")} className={fieldClassName} placeholder="you@example.com" />
          {errors.email ? (
            <span className="mt-2 block text-xs text-rose-500">{errors.email.message}</span>
          ) : null}
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium text-slate-700 dark:text-slate-200">
        Subject
        <input {...register("subject")} className={fieldClassName} placeholder="Project inquiry" />
        {errors.subject ? (
          <span className="mt-2 block text-xs text-rose-500">{errors.subject.message}</span>
        ) : null}
      </label>
      <label className="mt-5 block text-sm font-medium text-slate-700 dark:text-slate-200">
        Message
        <textarea
          {...register("message")}
          rows={6}
          className={fieldClassName}
          placeholder="Type your message here"
        />
        {errors.message ? (
          <span className="mt-2 block text-xs text-rose-500">{errors.message.message}</span>
        ) : null}
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
        {serverMessage ? <p className="text-sm text-emerald-600">{serverMessage}</p> : null}
        {serverError ? <p className="text-sm text-rose-500">{serverError}</p> : null}
      </div>
    </motion.form>
  );
}
