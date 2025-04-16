// src/components/Results.tsx
import React, { useState } from "react";

interface AnalysisResults {
  matchPercentage: number;
  totalKeywords: number;
  matchedKeywords: number;
  missingKeywords: string[];
}

interface ResultsProps {
  analysis: AnalysisResults;
}

export default function Results({ analysis }: ResultsProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "keywords">(
    "overview"
  );

  // Determine match score color
  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-emerald-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-amber-600";
    return "text-red-600";
  };

  // Determine match score text
  const getScoreText = (percentage: number) => {
    if (percentage >= 80) return "Excellent Match";
    if (percentage >= 60) return "Good Match";
    if (percentage >= 40) return "Fair Match";
    return "Poor Match";
  };

  // Calculate circular progress
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (analysis.matchPercentage / 100) * circumference;

  return (
    <div className="card p-6">
      <h2 className="text-2xl font-semibold mb-6">Analysis Results</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <svg
              className="w-32 h-32 transform -rotate-90"
              viewBox="0 0 100 100"
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="stroke-gray-200"
                strokeWidth="8"
                fill="transparent"
              />

              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                className={`${getScoreColor(analysis.matchPercentage).replace(
                  "text-",
                  "stroke-"
                )}`}
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className={`text-3xl font-bold ${getScoreColor(
                  analysis.matchPercentage
                )}`}
              >
                {analysis.matchPercentage}%
              </span>
              <span className="text-xs text-gray-500">match score</span>
            </div>
          </div>

          <div className="text-center">
            <h3
              className={`text-lg font-medium ${getScoreColor(
                analysis.matchPercentage
              )}`}
            >
              {getScoreText(analysis.matchPercentage)}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {analysis.matchedKeywords} of {analysis.totalKeywords} keywords
              matched
            </p>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                className={`py-2 px-4 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`py-2 px-4 border-b-2 font-medium text-sm ${
                  activeTab === "keywords"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("keywords")}
              >
                Keywords
              </button>
            </nav>
          </div>

          <div className="mt-4">
            {activeTab === "overview" ? (
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Match Summary
                  </h4>
                  <p className="text-gray-700">
                    Your resume matches {analysis.matchPercentage}% of keywords
                    from the job description.
                    {analysis.matchPercentage >= 70
                      ? " This is a strong match! You're likely to pass keyword screening systems."
                      : analysis.matchPercentage >= 50
                      ? " This is a decent match, but there's room for improvement."
                      : " Consider updating your resume to include more relevant keywords."}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Recommendation
                  </h4>
                  <p className="text-gray-700">
                    {analysis.matchPercentage >= 70
                      ? "Your resume is well-tailored for this position. Consider highlighting these matched keywords in your cover letter as well."
                      : analysis.matchPercentage >= 50
                      ? "Try to incorporate more of the missing keywords in your resume where relevant and truthful."
                      : "Review the missing keywords list and update your resume to include more of these terms where applicable."}
                  </p>
                </div>

                <div className="bg-blue-50 p-3 rounded-md">
                  <h4 className="text-sm font-medium text-blue-700 mb-1">
                    Pro Tip
                  </h4>
                  <p className="text-sm text-blue-600">
                    Always customize your resume for each job application to
                    maximize your match score.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    Missing Keywords ({analysis.missingKeywords.length})
                  </h4>

                  {analysis.missingKeywords.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {analysis.missingKeywords.map((keyword, idx) => (
                        <div
                          key={idx}
                          className="py-1 px-3 bg-red-100 text-red-800 rounded-full text-sm"
                        >
                          {keyword}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700">
                      No missing keywords! Great job!
                    </p>
                  )}
                </div>

                <div className="bg-amber-50 p-3 rounded-md">
                  <h4 className="text-sm font-medium text-amber-700 mb-1">
                    Important Note
                  </h4>
                  <p className="text-sm text-amber-600">
                    Only include keywords that honestly represent your skills
                    and experience. Never add keywords that aren't true just to
                    improve your score.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex justify-between items-center">
          <button
            className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Edit Resume & Job Description
          </button>
        </div>
      </div>
    </div>
  );
}
