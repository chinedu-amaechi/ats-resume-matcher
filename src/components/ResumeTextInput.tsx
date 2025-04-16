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
  return (
    <div className="my-4">
      <label className="block font-medium">Resume Content:</label>
      <textarea
        rows={10}
        className="w-full mt-2 p-2 border rounded"
        placeholder="Paste resume content here..."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
      />
    </div>
  );
}
