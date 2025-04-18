// src/components/Results.tsx
import React, { useState } from "react";
import SkillsChart from "./SkillsChart";

interface AnalysisResults {
  matchPercentage: number;
  totalKeywords: number;
  matchedKeywords: number;
  missingKeywords: string[];
  matchedSkills?: string[];
  missingSkills?: string[];
  skillCategories?: {
    technical: string[];
    soft: string[];
    domain: string[];
  };
}

interface ResultsProps {
  analysis: AnalysisResults;
}

export default function Results({ analysis }: ResultsProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "missing" | "skillgap"
  >("overview");

  // Calculate circular progress
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const dashoffset =
    circumference - (analysis.matchPercentage / 100) * circumference;

  // Use the skills data from the analysis if available, otherwise fallback to local detection
  const missingSkills =
    analysis.missingSkills ||
    analysis.missingKeywords.filter((keyword) => {
      const lowerKeyword = keyword.toLowerCase();
      return [
        "javascript",
        "typescript",
        "react",
        "angular",
        "vue",
        "node",
        "express",
        "python",
        "java",
        "c#",
        "php",
        "ruby",
        "go",
        "rust",
        "swift",
        "kotlin",
        "objective-c",
        "html",
        "css",
        "sass",
        "less",
        "bootstrap",
        "tailwind",
        "jquery",
        "sql",
        "mysql",
        "postgresql",
        "mongodb",
        "firebase",
        "graphql",
        "rest",
        "api",
        "aws",
        "azure",
        "gcp",
        "docker",
        "kubernetes",
        "jenkins",
        "gitlab",
        "github",
        "bitbucket",
        "jira",
        "agile",
        "scrum",
        "kanban",
        "ci/cd",
        "testing",
        "jest",
        "mocha",
        "selenium",
        "cypress",
        "webpack",
        "babel",
        "npm",
        "yarn",
        "redux",
        "vuex",
        "mobx",
      ].includes(lowerKeyword);
    });

  // Get skill categories if available
  const skillCategories = analysis.skillCategories || {
    technical: missingSkills,
    soft: [],
    domain: [],
  };

  // Determine match level based on percentage
  const getMatchLevel = (score: number) => {
    if (score >= 80)
      return { class: "text-emerald-600", label: "Excellent Match" };
    if (score >= 65) return { class: "text-primary", label: "Good Match" };
    if (score >= 50) return { class: "text-amber-600", label: "Fair Match" };
    return { class: "text-red-600", label: "Poor Match" };
  };

  const matchLevel = getMatchLevel(analysis.matchPercentage);

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-8 border-b border-neutral-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Analysis Results
            </h2>
            <p className="text-slate-600">
              See how well your resume matches the job requirements
            </p>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Match Score Circle */}
              <div className="w-full lg:w-1/3 flex flex-col items-center">
                <div className="relative">
                  <svg
                    className="w-60 h-60 transform -rotate-90"
                    viewBox="0 0 200 200"
                  >
                    {/* Background circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r={radius}
                      className="stroke-neutral-200"
                      strokeWidth="12"
                      fill="transparent"
                    />

                    {/* Progress circle */}
                    <circle
                      cx="100"
                      cy="100"
                      r={radius}
                      className={
                        analysis.matchPercentage >= 80
                          ? "stroke-emerald-500"
                          : analysis.matchPercentage >= 65
                          ? "stroke-primary"
                          : analysis.matchPercentage >= 50
                          ? "stroke-amber-500"
                          : "stroke-red-500"
                      }
                      strokeWidth="12"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-5xl font-bold ${matchLevel.class}`}>
                      {analysis.matchPercentage}%
                    </span>
                    <span className="text-neutral-500 mt-1">match score</span>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <h3 className={`text-xl font-semibold ${matchLevel.class}`}>
                    {matchLevel.label}
                  </h3>
                  <p className="text-neutral-600 mt-1">
                    {analysis.matchedKeywords} of {analysis.totalKeywords}{" "}
                    keywords matched
                  </p>

                  <div className="mt-6 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                    <h4 className="font-medium text-neutral-800 mb-2">
                      Quick Summary
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {analysis.matchPercentage >= 80
                        ? "Your resume is exceptionally well matched to this job description. You're likely to pass ATS screening with ease."
                        : analysis.matchPercentage >= 65
                        ? "Your resume is well-matched to this job description. Consider adding a few more keywords to improve your score."
                        : analysis.matchPercentage >= 50
                        ? "Your resume has a fair match with this job description. Consider updating your resume to include more relevant keywords."
                        : "Your resume needs significant improvement to match this job description. Focus on adding the missing keywords where applicable."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabs Content */}
              <div className="w-full lg:w-2/3">
                <div className="border-b border-neutral-200">
                  <nav className="flex -mb-px">
                    <button
                      className={`py-3 px-6 border-b-2 ${
                        activeTab === "overview"
                          ? "border-primary text-primary"
                          : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
                      } font-medium text-sm`}
                      onClick={() => setActiveTab("overview")}
                    >
                      Overview
                    </button>
                    <button
                      className={`py-3 px-6 border-b-2 ${
                        activeTab === "missing"
                          ? "border-primary text-primary"
                          : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
                      } font-medium text-sm`}
                      onClick={() => setActiveTab("missing")}
                    >
                      Missing Keywords
                    </button>
                    <button
                      className={`py-3 px-6 border-b-2 ${
                        activeTab === "skillgap"
                          ? "border-primary text-primary"
                          : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
                      } font-medium text-sm`}
                      onClick={() => setActiveTab("skillgap")}
                    >
                      Skill Gap
                    </button>
                  </nav>
                </div>

                <div className="py-6">
                  {activeTab === "overview" ? (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
                          Match Analysis
                        </h4>
                        <p className="text-neutral-700">
                          Your resume matches{" "}
                          <span className="font-semibold">
                            {analysis.matchPercentage}%
                          </span>{" "}
                          of keywords from the job description.
                          {analysis.matchPercentage >= 80
                            ? " This is an excellent match! You're highly likely to pass keyword screening systems."
                            : analysis.matchPercentage >= 65
                            ? " This is a strong match! You're likely to pass keyword screening systems."
                            : analysis.matchPercentage >= 50
                            ? " This is a decent match, but there's room for improvement to pass ATS systems."
                            : " Consider updating your resume to include more relevant keywords to better pass ATS systems."}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
                          Recommendation
                        </h4>
                        <p className="text-neutral-700">
                          {analysis.matchPercentage >= 80
                            ? "Your resume is exceptionally well-tailored for this position. Highlight these matched keywords in your cover letter as well."
                            : analysis.matchPercentage >= 65
                            ? "Your resume is well-tailored for this position. Consider highlighting these matched keywords in your cover letter as well."
                            : analysis.matchPercentage >= 50
                            ? "Try to incorporate more of the missing keywords in your resume where relevant and truthful."
                            : "Review the missing keywords list and update your resume to include more of these terms where applicable and truthful."}
                        </p>
                      </div>

                      <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-primary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-primary">
                              Pro Tip
                            </h4>
                            <p className="mt-1 text-sm text-primary-dark">
                              Always customize your resume for each job
                              application to maximize your match score.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : activeTab === "missing" ? (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
                          Missing Keywords ({analysis.missingKeywords.length})
                        </h4>

                        {analysis.missingKeywords.length > 0 ? (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {analysis.missingKeywords.map((keyword, idx) => (
                              <div
                                key={idx}
                                className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                              >
                                {keyword}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-neutral-700 mt-2">
                            No missing keywords! Great job on including all
                            relevant keywords from the job description.
                          </p>
                        )}
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
                          How to Integrate Keywords
                        </h4>
                        <p className="text-neutral-700">
                          Look at the missing keywords above and consider how
                          you can naturally incorporate them into your resume.
                          Only include keywords that truly reflect your skills
                          and experience.
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-neutral-700 space-y-1">
                          <li>Add relevant keywords to your skills section</li>
                          <li>
                            Incorporate keywords naturally in your experience
                            descriptions
                          </li>
                          <li>
                            Include technologies and methodologies in project
                            descriptions
                          </li>
                          <li>
                            Mention relevant keywords in your professional
                            summary
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-amber-700"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-amber-800">
                              Important Note
                            </h4>
                            <p className="mt-1 text-sm text-amber-700">
                              Only add keywords that honestly represent your
                              skills and experience. Never add keywords that
                              aren't true just to improve your score.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
                          Skills Gap Analysis
                        </h4>

                        <SkillsChart
                          matchedSkills={analysis.matchedSkills || []}
                          missingSkills={missingSkills}
                        />

                        {missingSkills.length > 0 ? (
                          <>
                            <p className="text-neutral-700 mb-4">
                              We've identified the following skills that appear
                              in the job description but are not detected in
                              your resume:
                            </p>

                            {skillCategories.technical.length > 0 && (
                              <div className="mb-4">
                                <h5 className="text-sm font-medium text-neutral-700 mb-2">
                                  Technical Skills
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {skillCategories.technical.map(
                                    (skill, idx) => (
                                      <div
                                        key={idx}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                      >
                                        {skill}
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}

                            {skillCategories.domain.length > 0 && (
                              <div className="mb-4">
                                <h5 className="text-sm font-medium text-neutral-700 mb-2">
                                  Domain Skills
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {skillCategories.domain.map((skill, idx) => (
                                    <div
                                      key={idx}
                                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                                    >
                                      {skill}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {skillCategories.soft.length > 0 && (
                              <div className="mb-4">
                                <h5 className="text-sm font-medium text-neutral-700 mb-2">
                                  Soft Skills
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {skillCategories.soft.map((skill, idx) => (
                                    <div
                                      key={idx}
                                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                                    >
                                      {skill}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <div className="flex">
                              <div className="flex-shrink-0">
                                <svg
                                  className="h-5 w-5 text-green-600"
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
                              </div>
                              <div className="ml-3">
                                <p className="text-green-700">
                                  No significant skill gaps detected! Your
                                  resume appears to cover all the key skills
                                  mentioned in the job description.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {missingSkills.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
                            Skill Development Recommendations
                          </h4>
                          <p className="text-neutral-700 mb-2">
                            Consider developing these skills to improve your
                            match for similar positions:
                          </p>
                          <ul className="list-disc pl-5 text-neutral-700 space-y-3">
                            {missingSkills.slice(0, 3).map((skill, idx) => (
                              <li key={idx}>
                                <span className="font-medium">
                                  {skill.charAt(0).toUpperCase() +
                                    skill.slice(1)}
                                </span>
                                :
                                {skill.toLowerCase() === "react" &&
                                  " Learn React fundamentals through the official documentation and build small projects to demonstrate your skills."}
                                {skill.toLowerCase() === "node" &&
                                  " Practice building backend applications with Node.js and understand how to create RESTful APIs."}
                                {skill.toLowerCase() === "typescript" &&
                                  " Add TypeScript to your JavaScript projects to show your understanding of type systems and interfaces."}
                                {skill.toLowerCase() === "python" &&
                                  " Develop Python applications focusing on data processing or automation to showcase your capabilities."}
                                {skill.toLowerCase() === "docker" &&
                                  " Learn containerization concepts and demonstrate your ability to deploy applications using Docker."}
                                {skill.toLowerCase() === "aws" &&
                                  " Familiarize yourself with key AWS services like S3, EC2, and Lambda through the free tier offerings."}
                                {skill.toLowerCase() === "mongodb" &&
                                  " Build projects that use MongoDB as a database to store and retrieve data efficiently."}
                                {skill.toLowerCase() === "agile" &&
                                  " Participate in or lead projects using Agile methodologies to demonstrate your process knowledge."}
                                {![
                                  "react",
                                  "node",
                                  "typescript",
                                  "python",
                                  "docker",
                                  "aws",
                                  "mongodb",
                                  "agile",
                                ].includes(skill.toLowerCase()) &&
                                  " Consider courses, tutorials or small projects to develop this skill and add it to your resume."}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-indigo-700"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-indigo-800">
                              Career Insight
                            </h4>
                            <p className="mt-1 text-sm text-indigo-700">
                              Focus on developing skills that appear frequently
                              in job postings for your target role. Practical
                              projects demonstrating these skills can be more
                              valuable than certifications alone.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <button className="px-6 py-2 bg-primary text-white rounded-lg inline-flex items-center hover:bg-primary-dark transition-colors">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                  Update Resume
                </button>
                <button className="ml-4 text-neutral-500 hover:text-neutral-700">
                  Save Results
                </button>
              </div>

              <div>
                <button className="text-primary hover:text-primary-dark font-medium text-sm inline-flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z"
                    />
                  </svg>
                  Print Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
