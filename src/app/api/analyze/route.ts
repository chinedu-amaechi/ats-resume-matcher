// src/app/api/analyze/route.ts
import { NextResponse } from "next/server";

interface AnalysisResult {
  matchPercentage: number;
  totalKeywords: number;
  matchedKeywords: number;
  missingKeywords: string[];
}

// Helper function to perform text analysis based on keyword matching.
function analyzeResume(
  resumeText: string,
  jobDescription: string
): AnalysisResult {
  // Clean and normalize the texts
  const cleanText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ") // Replace non-alphanumeric characters with spaces
      .replace(/\s+/g, " ") // Replace multiple spaces with a single space
      .trim();
  };

  const cleanedResume = cleanText(resumeText);
  const cleanedJobDesc = cleanText(jobDescription);

  // Extract keywords from job description
  // We consider words with 4+ characters as potential keywords to avoid matching common words
  const jobDescWords = cleanedJobDesc
    .split(/\s+/)
    .filter((word) => word.length >= 4)
    .filter((word) => !commonWords.includes(word));

  // Create a set of unique words from the job description
  const uniqueJobDescWords = Array.from(new Set(jobDescWords));

  // Prepare resume text for matching
  const resumeWordSet = new Set(
    cleanedResume.split(/\s+/).filter((word) => word.length >= 4)
  );

  // Find matched and missing keywords
  const matchedKeywords: string[] = [];
  const missingKeywords: string[] = [];

  uniqueJobDescWords.forEach((keyword) => {
    if (resumeWordSet.has(keyword)) {
      matchedKeywords.push(keyword);
    } else {
      missingKeywords.push(keyword);
    }
  });

  // Calculate match percentage
  const totalKeywords = uniqueJobDescWords.length;
  const matchCount = matchedKeywords.length;
  const matchPercentage =
    totalKeywords > 0 ? Math.round((matchCount / totalKeywords) * 100) : 0;

  return {
    matchPercentage,
    totalKeywords,
    matchedKeywords: matchCount,
    missingKeywords,
  };
}

// Common words to filter out from keyword analysis
const commonWords = [
  "about",
  "above",
  "across",
  "after",
  "again",
  "against",
  "almost",
  "alone",
  "along",
  "already",
  "also",
  "although",
  "always",
  "among",
  "around",
  "because",
  "been",
  "before",
  "being",
  "between",
  "both",
  "computer",
  "could",
  "does",
  "doesn",
  "doing",
  "down",
  "during",
  "each",
  "either",
  "else",
  "every",
  "following",
  "from",
  "further",
  "have",
  "having",
  "here",
  "hers",
  "herself",
  "himself",
  "into",
  "just",
  "like",
  "more",
  "most",
  "much",
  "myself",
  "never",
  "once",
  "only",
  "other",
  "ought",
  "ours",
  "ourselves",
  "over",
  "owns",
  "rather",
  "really",
  "said",
  "same",
  "shall",
  "should",
  "since",
  "some",
  "still",
  "such",
  "than",
  "that",
  "their",
  "them",
  "themselves",
  "then",
  "there",
  "these",
  "they",
  "this",
  "those",
  "through",
  "thus",
  "under",
  "until",
  "very",
  "well",
  "were",
  "what",
  "when",
  "where",
  "which",
  "while",
  "will",
  "with",
  "within",
  "would",
  "your",
  "yours",
  "yourself",
  "yourselves",
  "able",
  "aboard",
  "about",
  "above",
  "area",
  "areas",
  "company",
  "business",
  "position",
  "work",
  "working",
  "worker",
  "workers",
  "team",
  "teams",
  "role",
  "roles",
  "person",
  "people",
  "individual",
  "individuals",
  "professional",
  "professionals",
  "staff",
  "candidate",
  "candidates",
];

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
