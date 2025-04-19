// src/app/api/analyze/route.ts
import { NextResponse } from "next/server";

interface AnalysisResult {
  matchPercentage: number;
  totalKeywords: number;
  matchedKeywords: number;
  missingKeywords: string[];
  matchedSkills: string[];
  missingSkills: string[];
  skillCategories: {
    technical: string[];
    soft: string[];
    domain: string[];
  };
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
  const resumeWords = cleanedResume
    .split(/\s+/)
    .filter((word) => word.length >= 4);
  const resumeWordSet = new Set(resumeWords);

  // Find matched and missing keywords
  const matchedKeywordsList: string[] = [];
  const missingKeywordsList: string[] = [];

  uniqueJobDescWords.forEach((keyword) => {
    if (resumeWordSet.has(keyword)) {
      matchedKeywordsList.push(keyword);
    } else {
      missingKeywordsList.push(keyword);
    }
  });

  // Calculate match percentage
  const totalKeywords = uniqueJobDescWords.length;
  const matchCount = matchedKeywordsList.length;
  const matchPercentage =
    totalKeywords > 0 ? Math.round((matchCount / totalKeywords) * 100) : 0;

  // Skill categorization
  const technicalSkills = [
    "javascript",
    "typescript",
    "react",
    "angular",
    "vue",
    "node",
    "express",
    "python",
    "java",
    "c#",
    "php",
    "ruby",
    "go",
    "rust",
    "swift",
    "kotlin",
    "objective-c",
    "html",
    "css",
    "sass",
    "less",
    "bootstrap",
    "tailwind",
    "jquery",
    "sql",
    "mysql",
    "postgresql",
    "mongodb",
    "firebase",
    "graphql",
    "rest",
    "api",
    "aws",
    "azure",
    "gcp",
    "docker",
    "kubernetes",
    "jenkins",
    "gitlab",
    "github",
    "bitbucket",
    "jira",
    "testing",
    "jest",
    "mocha",
    "selenium",
    "webpack",
    "babel",
    "npm",
    "yarn",
    "redux",
    "vuex",
    "mobx",
    "frontend",
    "backend",
    "fullstack",
    "devops",
    "cicd",
    "continuous",
    "integration",
    "deployment",
    "algorithms",
    "data structures",
    "databases",
    "ml",
    "ai",
  ];

  const softSkills = [
    "communication",
    "teamwork",
    "leadership",
    "problem-solving",
    "critical",
    "thinking",
    "adaptability",
    "flexibility",
    "creativity",
    "innovation",
    "collaboration",
    "interpersonal",
    "presentation",
    "facilitation",
    "negotiation",
    "conflict",
    "resolution",
    "management",
    "decision",
    "making",
    "organization",
    "planning",
    "prioritization",
    "time",
    "stress",
    "emotional",
    "intelligence",
    "customer",
    "service",
    "attention",
    "detail",
    "analytical",
    "mentoring",
    "coaching",
  ];

  const domainSkills = [
    "agile",
    "scrum",
    "kanban",
    "waterfall",
    "sdlc",
    "compliance",
    "regulatory",
    "cybersecurity",
    "security",
    "networking",
    "cloud",
    "data",
    "machine",
    "learning",
    "artificial",
    "intelligence",
    "blockchain",
    "iot",
    "internet",
    "things",
    "fintech",
    "healthcare",
    "ecommerce",
    "retail",
    "marketing",
    "analytics",
    "business",
    "intelligence",
    "research",
    "development",
    "product",
    "project",
    "management",
    "architecture",
    "infrastructure",
    "systems",
    "engineering",
    "quality",
    "assurance",
    "ux",
    "ui",
    "design",
    "user",
    "experience",
    "interface",
    "performance",
    "seo",
    "saas",
    "paas",
    "iaas",
  ];

  // Categorize missing and matched skills
  const matchedSkills: string[] = [];
  const missingSkills: string[] = [];
  const skillCategories = {
    technical: [] as string[],
    soft: [] as string[],
    domain: [] as string[],
  };

  // Process missing keywords to identify missing skills
  missingKeywordsList.forEach((keyword) => {
    if (technicalSkills.includes(keyword)) {
      missingSkills.push(keyword);
      skillCategories.technical.push(keyword);
    } else if (softSkills.includes(keyword)) {
      missingSkills.push(keyword);
      skillCategories.soft.push(keyword);
    } else if (domainSkills.includes(keyword)) {
      missingSkills.push(keyword);
      skillCategories.domain.push(keyword);
    }
  });

  // Process matched keywords to identify matched skills
  matchedKeywordsList.forEach((keyword) => {
    if (
      technicalSkills.includes(keyword) ||
      softSkills.includes(keyword) ||
      domainSkills.includes(keyword)
    ) {
      matchedSkills.push(keyword);
    }
  });

  return {
    matchPercentage,
    totalKeywords,
    matchedKeywords: matchCount,
    missingKeywords: missingKeywordsList,
    matchedSkills,
    missingSkills,
    skillCategories,
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
