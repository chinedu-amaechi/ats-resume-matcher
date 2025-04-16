// src/components/FileUpload.tsx
import React, { useState, ChangeEvent } from "react";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      onFileUpload(file);
    }
  };

  return (
    <div className="my-4">
      <label className="block font-medium">Upload Resume (PDF/DOC/DOCX):</label>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="mt-2"
      />
      {fileName && <p className="mt-2 text-sm">Selected file: {fileName}</p>}
    </div>
  );
}
