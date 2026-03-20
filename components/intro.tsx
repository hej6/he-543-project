"use client";
import React from "react";
import ButtonUI from "@/layout/ui/button";
import AccordionUI from "@/layout/ui/accordion";

export default function Intro() {
  return (
    <div className="flex flex-col gap-4 text-white">
      <h1 className="text-3xl font-bold">The CIA Triad</h1>

      <p className="text-lg">
        The CIA Triad is a fundamental model for network security. It stands for:
      </p>

      <ul className="list-disc list-inside flex flex-col gap-1">
        <li>Confidentiality</li>
        <li>Integrity</li>
        <li>Availability</li>
      </ul>

      {/* UI Components */}
      <div className="flex flex-col gap-3">
        <ButtonUI />
        <AccordionUI />
      </div>
    </div>
  );
}
