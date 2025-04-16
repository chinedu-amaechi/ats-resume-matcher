// src/components/HeroSection.tsx
import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 hero-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Optimize Your Resume
            <br />
            <span className="text-primary">Beat the ATS System</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Match your resume against job descriptions to increase your chances
            of getting past Applicant Tracking Systems and landing interviews.
          </p>
          <div className="mt-8 space-x-4">
            <Link
              href="#resume-matcher"
              className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-primary-dark transition-all"
            >
              Get Started
            </Link>
            <Link
              href="#how-it-works"
              className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
