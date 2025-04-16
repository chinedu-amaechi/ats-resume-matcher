// src/app/page.tsx
"use client";

import React, { useState } from "react";
import ResumeTextInput from "@/components/ResumeTextInput";
import JobDescriptionInput from "@/components/JobDescriptionInput";
import Results from "@/components/Results";

export default function HomePage() {
  const [resumeText, setResumeText] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeText || !jobDesc) {
      alert("Please paste the resume content and enter the job description.");
      return;
    }
    setLoading(true);

    // Prepare FormData with text inputs
    const formData = new FormData();
    formData.append("resumeText", resumeText);
    formData.append("jobDescription", jobDesc);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setAnalysis(data);
    setLoading(false);
  };

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold my-4">Resume Matcher</h1>
      <form onSubmit={handleSubmit}>
        <ResumeTextInput
          resumeText={resumeText}
          setResumeText={setResumeText}
        />
        <JobDescriptionInput jobDesc={jobDesc} setJobDesc={setJobDesc} />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      {analysis && <Results analysis={analysis} />}
    </main>
  );
}
