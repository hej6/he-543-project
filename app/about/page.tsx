"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button"; 

export default function AboutPage() {
  const [count, setCount] = useState<number>(0);
  
  return (
    <main className="flex flex-col max-w-4xl mx-auto px-4 py-10 gap-6">
      <h1 className="text-3xl font-bold">About</h1>

      <p className="text-lg text-gray-700">
        This is the Mercedes-Benz W140 S-Class. Beset on all sides by competitors, Mercedes-Benz set out
        to build the greatest luxury sedan in the world.
      </p>

      <div className="rounded-2xl overflow-hidden shadow">
        <Image
          src="/about.jpg"
          alt="W140 S-class"
          width={1200}
          height={700}
          className="w-full h-auto"
          priority
        />
      </div>

      <p className="text-lg text-gray-700">
        They succeeded. 
      </p>

      <div className="flex space-x-4">
          <div className="flex">The Count is {count}</div>
          <div>
            <Button variant="contained" onClick={() => setCount(count + 1)}>
              Increment
            </Button>
          </div>
          <div>
            <Button variant="contained" onClick={() => setCount(count - 1)}>
              Decrement
            </Button>
          </div>
        </div>
    </main>
  );
}