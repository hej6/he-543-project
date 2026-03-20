"use client";
import React from "react";
import { FaRectangleList } from "react-icons/fa6";

const Aside: React.FC = () => {
  return (
    <aside className="bg-teal-500 w-1/4 p-6 rounded flex flex-col items-center justify-center">
      
      {/* Aside Label */}
      <div className="text-white text-2xl font-semibold mb-6">
        Aside
      </div>

      {/* Icon Container */}
      <div className="bg-sky-300 w-64 h-64 flex items-center justify-center rounded">
        <FaRectangleList className="text-white text-7xl" />
      </div>
    </aside>
  );
};

export default Aside;
