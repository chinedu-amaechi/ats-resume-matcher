// src/app/page.tsx
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResumeMatcherSection from "@/components/ResumeMatcherSection";
import HowItWorks from "@/components/HowItWorks";
import Tips from "@/components/Tips";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-off-white min-h-screen">
      <Navbar />

      <main className="pt-16">
        <HeroSection />

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-white rounded-xl shadow-md p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Why Resume Matching Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-lg">Beat the ATS</h3>
                <p className="text-gray-600">
                  75% of resumes are rejected by ATS before a human ever sees
                  them. Our tool helps you optimize your resume to pass these
                  systems.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-lg">Improve Match Rate</h3>
                <p className="text-gray-600">
                  Job seekers who tailor their resumes see a 60% higher
                  interview rate. Our tool helps identify missing keywords.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-lg">Save Time</h3>
                <p className="text-gray-600">
                  Instantly analyze your resume against job descriptions instead
                  of manually comparing keywords and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ResumeMatcherSection />
        <HowItWorks />
        <Tips />

        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900">
                  About Resume Matcher
                </h2>
                <p className="text-slate-600 mt-2">
                  Helping job seekers optimize their applications since 2023
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                  <p className="text-slate-600 mb-4">
                    We believe that talented individuals should not be
                    overlooked simply because their resumes don't contain the
                    right keywords. Our mission is to level the playing field by
                    giving job seekers the tools to optimize their resumes for
                    modern hiring systems.
                  </p>
                  <p className="text-slate-600">
                    By helping job seekers tailor their resumes to specific job
                    descriptions, we increase their chances of getting past
                    automated screening systems and into the hands of human
                    recruiters who can recognize their true potential.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    How We're Different
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-600">
                        Free to use with no hidden fees or premium tiers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-600">
                        Private and secure - we don't store your resume or job
                        description data
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-600">
                        Detailed analysis with actionable recommendations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-slate-600">
                        Built by hiring managers and recruitment experts
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
