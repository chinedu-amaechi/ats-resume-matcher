// src/components/ResumeTextInput.tsx
import React from "react";

interface ResumeTextInputProps {
  resumeText: string;
  setResumeText: (text: string) => void;
}

export default function ResumeTextInput({
  resumeText,
  setResumeText,
}: ResumeTextInputProps) {
  const clearText = () => {
    setResumeText("");
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
        <h3 className="font-medium text-blue-800 mb-2">
          <svg
            className="w-4 h-4 inline-block mr-1"
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
          Tips for best results
        </h3>
        <p className="text-sm text-blue-700">
          Include your skills, job titles, and relevant experience for a more
          accurate match.
        </p>
      </div>

      <div className="relative">
        <textarea
          rows={12}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all"
          placeholder="Paste your resume content here..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />

        {resumeText && (
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
        <span>{resumeText.length} characters</span>
        <span>{resumeText.split(/\s+/).filter(Boolean).length} words</span>
      </div>
    </div>
  );
}
