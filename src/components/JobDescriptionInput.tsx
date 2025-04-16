// src/components/JobDescriptionInput.tsx
import React, { useState } from "react";

interface JobDescriptionInputProps {
  jobDesc: string;
  setJobDesc: (text: string) => void;
}

export default function JobDescriptionInput({
  jobDesc,
  setJobDesc,
}: JobDescriptionInputProps) {
  const [showTips, setShowTips] = useState(false);

  const clearText = () => {
    setJobDesc("");
  };

  // Sample job description example
  const exampleDesc =
    "Software Engineer with 3+ years of experience in React, Node.js, and TypeScript. The ideal candidate will have a strong foundation in front-end development and be comfortable with modern JavaScript frameworks. Responsibilities include developing user interface components, implementing responsive designs, and optimizing application performance. Requirements: Bachelor's degree in Computer Science or related field, experience with RESTful APIs, and knowledge of Git version control.";

  const loadExample = () => {
    setJobDesc(exampleDesc);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setShowTips(!showTips)}
          className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {showTips ? "Hide tips" : "Show tips"}
        </button>

        <div className="text-sm">
          <button
            type="button"
            className="text-blue-600 hover:text-blue-800"
            onClick={loadExample}
          >
            Load example
          </button>
        </div>
      </div>

      {showTips && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-medium text-blue-800 mb-2">
            Tips for best results
          </h3>
          <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
            <li>
              Include the full job description for better keyword matching
            </li>
            <li>
              Make sure to include requirements, responsibilities, and
              qualifications
            </li>
            <li>
              The more detailed the job description, the more accurate the
              analysis
            </li>
          </ul>
        </div>
      )}

      <div className="relative">
        <textarea
          rows={10}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all"
          placeholder="Paste job description here..."
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />

        {jobDesc && (
          <button
            type="button"
            onClick={clearText}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            aria-label="Clear text"
          >
            <svg
              className="w-5 h-5"
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
          </button>
        )}
      </div>

      <div className="text-xs text-gray-500 flex justify-between">
        <span>{jobDesc.length} characters</span>
        <span>{jobDesc.split(/\s+/).filter(Boolean).length} words</span>
      </div>
    </div>
  );
}
