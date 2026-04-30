"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-10 mt-6"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">My Portfolio</p>

      <h1 className="6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
        I am Jared,
      </h1>

      <p className="mt-5 w-full text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
        A Computer Science student focused on full-stack development, with experience in cloud
        infrastructure, network security, systems administration, distributed systems, and server
        maintenance.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
        >
          View projects <HiArrowRight />
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-100"
        >
          Contact me <HiOutlineMail />
        </Link>
      </div>
    </motion.section>
  );
}
