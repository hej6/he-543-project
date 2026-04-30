import type { Metadata } from "next";
import React from "react";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSC543 Portfolio",
  description: "Term project for CSC543 - Web programming",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100 text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
