// src/app/api/analyze/route.ts
import { NextResponse } from "next/server";

// Helper function to perform text analysis based on keyword matching.
function analyzeResume(resumeText: string, jobDescription: string) {
  // Normalize texts by converting to lowercase and splitting into words
  const resumeWords = resumeText.toLowerCase().split(/\W+/).filter(Boolean);
  const jobDescWords = jobDescription
    .toLowerCase()
    .split(/\W+/)
    .filter(Boolean);

  // Create sets for unique words
  const resumeWordSet = new Set(resumeWords);
  const jobDescWordSet = new Set(jobDescWords);

  // Count keywords from the job description present in the resume
  let matchCount = 0;
  jobDescWordSet.forEach((word) => {
    if (resumeWordSet.has(word)) {
      matchCount++;
    }
  });

  // Calculate match percentage and compile missing keywords
  const matchPercentage =
    jobDescWordSet.size > 0 ? (matchCount / jobDescWordSet.size) * 100 : 0;

  const missingKeywords: string[] = [];
  jobDescWordSet.forEach((word) => {
    if (!resumeWordSet.has(word)) missingKeywords.push(word);
  });

  return {
    matchPercentage: Math.round(matchPercentage),
    totalKeywords: jobDescWordSet.size,
    matchedKeywords: matchCount,
    missingKeywords,
  };
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const resumeText = formData.get("resumeText") as string;
    const jobDescription = formData.get("jobDescription") as string;

    if (!resumeText || !jobDescription) {
      return NextResponse.json(
        { error: "Missing resume text or job description." },
        { status: 400 }
      );
    }

    // Analyze the resume content against the job description
    const analysis = analyzeResume(resumeText, jobDescription);
    return NextResponse.json(analysis, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Error processing analysis." },
      { status: 500 }
    );
  }
}
