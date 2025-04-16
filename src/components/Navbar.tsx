// src/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar py-4 px-6 fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-slate-900">
          <Link href="/">
            <span className="gradient-text">Resume</span>Matcher
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link href="/#" className="text-slate-700 hover:text-primary">
            Home
          </Link>
          <Link
            href="/#how-it-works"
            className="text-slate-700 hover:text-primary"
          >
            How It Works
          </Link>
          <Link href="/#tips" className="text-slate-700 hover:text-primary">
            Tips
          </Link>
          <Link href="/#about" className="text-slate-700 hover:text-primary">
            About
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/#resume-matcher"
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors"
          >
            Try Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg">
          <div className="px-4 py-2 space-y-1">
            <Link
              href="/#"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#tips"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tips
            </Link>
            <Link
              href="/#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#resume-matcher"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
