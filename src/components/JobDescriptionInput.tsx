// src/components/JobDescriptionInput.tsx
import React from "react";

interface JobDescriptionInputProps {
  jobDesc: string;
  setJobDesc: (text: string) => void;
}

export default function JobDescriptionInput({
  jobDesc,
  setJobDesc,
}: JobDescriptionInputProps) {
  return (
    <div className="my-4">
      <label className="block font-medium">Job Description:</label>
      <textarea
        rows={8}
        className="w-full mt-2 p-2 border rounded"
        placeholder="Paste job description here..."
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
      />
    </div>
  );
}
