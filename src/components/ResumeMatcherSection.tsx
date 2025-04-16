// src/components/ResumeMatcherSection.tsx
"use client";

import React, { useState } from "react";
import ResumeTextInput from "./ResumeTextInput";
import JobDescriptionInput from "./JobDescriptionInput";
import Results from "./Results";

export default function ResumeMatcherSection() {
  const [resumeText, setResumeText] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const analyzeResume = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeText || !jobDesc) {
      alert("Please provide both resume content and job description.");
      return;
    }

    setLoading(true);

    // Prepare FormData with text inputs
    const formData = new FormData();
    formData.append("resumeText", resumeText);
    formData.append("jobDescription", jobDesc);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      setAnalysis(data);
      setShowResults(true);

      // Scroll to results section
      setTimeout(() => {
        const resultsElement = document.getElementById("results-section");
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } catch (error) {
      console.error("Error analyzing resume:", error);
      alert("An error occurred while analyzing. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="resume-matcher" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Resume Matcher</h2>
          <p className="text-slate-600 mt-2">
            Paste your resume and job description to analyze the match
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 overflow-hidden">
          <form onSubmit={analyzeResume} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-2 flex justify-between items-center">
                  <label className="font-medium text-slate-700">
                    Resume Content
                  </label>
                </div>
                <ResumeTextInput
                  resumeText={resumeText}
                  setResumeText={setResumeText}
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between items-center">
                  <label className="font-medium text-slate-700">
                    Job Description
                  </label>
                  <button
                    type="button"
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
                    onClick={() =>
                      setJobDesc(
                        "Software Engineer with 3+ years of experience in React and Node.js..."
                      )
                    }
                  >
                    Load example
                  </button>
                </div>
                <JobDescriptionInput
                  jobDesc={jobDesc}
                  setJobDesc={setJobDesc}
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-primary-dark hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="inline-block animate-spin mr-2">↻</span>
                    Analyzing...
                  </>
                ) : (
                  "Analyze Resume"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {showResults && (
        <div id="results-section" className="max-w-6xl mx-auto px-6 mt-10">
          <Results analysis={analysis} />
        </div>
      )}
    </section>
  );
}
