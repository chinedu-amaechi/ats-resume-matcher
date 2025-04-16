// src/components/Results.tsx
import React from "react";

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
  return (
    <div className="my-4 p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">Analysis Results</h2>
      <p>Match Percentage: {analysis.matchPercentage}%</p>
      <p>Total Keywords in Job Description: {analysis.totalKeywords}</p>
      <p>Keywords Matched: {analysis.matchedKeywords}</p>
      {analysis.missingKeywords.length > 0 && (
        <>
          <h3 className="mt-4 font-medium">Missing Keywords:</h3>
          <ul className="list-disc ml-6">
            {analysis.missingKeywords.map((word, idx) => (
              <li key={idx}>{word}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
