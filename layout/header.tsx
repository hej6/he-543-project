"use client";
import React from "react";
import { FaFlagUsa } from "react-icons/fa6";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-fuchsia-700 p-4 flex items-center justify-between rounded">
      
      {/* Icon and header container */}
      <div className="flex items-center gap-4">
        
        {/* Icon container */}
        <div className="bg-pink-400 w-24 h-16 flex items-center justify-center rounded">
          <FaFlagUsa className="text-white text-5xl"/>
        </div>

        {/* Header container */}
        <div className="bg-pink-400 h-16 px-10 flex items-center justify-center rounded">
          <span className="text-white text-2xl font-semibold">
            To-Do App
          </span>
        </div>

      </div>

      {/* Nav container, 3 nav items */}
      <nav className="bg-pink-400 p-3 flex items-center gap-3 rounded">
        
        {/* Nav Label */}
        <span className="text-white font-semibold mr-2">
          Navigation
        </span>

        {/* Nav Items */}
        <a
        href="/"
        className="
            bg-purple-800 text-white px-6 py-3 rounded
            shadow-md
            hover:bg-purple-700
            active:scale-90
            active:shadow-inner
            transition
        "
        >
        Home
        </a>

        <a
        href="/about"
        className="
            bg-purple-800 text-white px-6 py-3 rounded
            shadow-md
            hover:bg-purple-700
            active:scale-90
            active:shadow-inner
            transition
        "
        >
        About
        </a>

        <a
        href="#"
        className="
            bg-purple-800 text-white px-6 py-3 rounded
            shadow-md
            hover:bg-purple-700
            active:scale-90
            active:shadow-inner
            transition
        "
        >
        Contact
        </a>

      </nav>

    </header>
  );
};

export default Header;
