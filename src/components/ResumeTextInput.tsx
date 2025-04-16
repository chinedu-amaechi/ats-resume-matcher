// src/components/ResumeTextInput.tsx
import React, { useState } from "react";

interface ResumeTextInputProps {
  resumeText: string;
  setResumeText: (text: string) => void;
}

export default function ResumeTextInput({
  resumeText,
  setResumeText,
}: ResumeTextInputProps) {
  const [showTips, setShowTips] = useState(false);

  const clearText = () => {
    setResumeText("");
  };

  return (
    <div className="space-y-2">
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
      </div>

      {showTips && (
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <h3 className="font-medium text-blue-800 mb-2">
            Tips for best results
          </h3>
          <ul className="text-sm text-blue-700 space-y-1 list-disc pl-5">
            <li>Include all your skills and experiences</li>
            <li>List specific technologies, tools, and methodologies</li>
            <li>Add quantifiable achievements when possible</li>
            <li>Include relevant certifications and education</li>
          </ul>
        </div>
      )}

      <div className="relative">
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-xl focus:border-primary focus:ring focus:ring-primary/20 outline-none resize-none"
          placeholder="Paste your resume content here..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        ></textarea>
        {resumeText && (
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1"
            onClick={clearText}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="mt-1 text-xs text-gray-500 flex justify-between">
        <span>
          Paste your complete resume text including skills and experience
        </span>
        <span>{resumeText.split(/\s+/).filter(Boolean).length} words</span>
      </div>
    </div>
  );
}
