// src/components/Header.tsx
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Resume</span>Matcher
          </h1>
          <p className="text-gray-600 mt-2">
            Match your resume with job descriptions for maximum impact
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <nav className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600"
            >
              How it works
            </Link>
            <Link href="#tips" className="text-gray-600 hover:text-blue-600">
              Tips
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
