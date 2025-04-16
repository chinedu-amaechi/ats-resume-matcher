// src/app/page.tsx
"use client";

import React, { useState } from "react";
import ResumeTextInput from "@/components/ResumeTextInput";
import JobDescriptionInput from "@/components/JobDescriptionInput";
import Results from "@/components/Results";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import Tips from "@/components/Tips";

export default function HomePage() {
  const [resumeText, setResumeText] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"resume" | "job">("resume");

  const handleSubmit = async (e: React.FormEvent) => {
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

      // Scroll to results
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
    <>
      <Header />

      <main>
        <section className="card p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Match Your Resume</h2>

          <div className="mb-6">
            <div className="flex border-b mb-4">
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === "resume"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("resume")}
              >
                Resume
              </button>
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === "job"
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("job")}
              >
                Job Description
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={activeTab === "resume" ? "block" : "hidden"}>
                <ResumeTextInput
                  resumeText={resumeText}
                  setResumeText={setResumeText}
                />
              </div>

              <div className={activeTab === "job" ? "block" : "hidden"}>
                <JobDescriptionInput
                  jobDesc={jobDesc}
                  setJobDesc={setJobDesc}
                />
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="inline-block animate-spin mr-2">↻</span>
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Match"
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {analysis && (
          <section id="results-section" className="mb-8">
            <Results analysis={analysis} />
          </section>
        )}

        <section id="how-it-works" className="mb-8">
          <HowItWorks />
        </section>

        <section id="tips" className="mb-8">
          <Tips />
        </section>
      </main>
    </>
  );
}
