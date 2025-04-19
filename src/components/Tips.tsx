// src/components/Tips.tsx
import React, { useState } from "react";

export default function Tips() {
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  const toggleTip = (index: number) => {
    if (expandedTip === index) {
      setExpandedTip(null);
    } else {
      setExpandedTip(index);
    }
  };

  const tips = [
    {
      title: "Tailor Your Resume",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
          />
        </svg>
      ),
      summary:
        "Always customize your resume for each job application to beat ATS systems.",
      details:
        "Applicant Tracking Systems (ATS) scan your resume for relevant keywords before a human ever sees it. Customize your resume for each job by using exact phrases from the job description where they honestly apply to your skills and experience. This increases your chances of passing through the initial screening.",
    },
    {
      title: "Use Action Verbs",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      summary:
        "Start bullet points with strong action verbs to make your accomplishments stand out.",
      details:
        "Instead of using passive language, begin your achievement descriptions with powerful action verbs like: Achieved, Implemented, Developed, Led, Created, Managed, Increased, Decreased, Improved, Negotiated, Launched, etc. These verbs convey confidence and highlight your direct impact.",
    },
    {
      title: "Quantify Your Achievements",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      summary:
        "Include specific numbers and metrics when describing your accomplishments.",
      details:
        "Instead of vague statements like 'increased sales' or 'reduced costs', quantify your impact: 'Increased sales by 27% over 6 months' or 'Reduced operational costs by $50K annually by implementing new workflows.' Numbers catch attention and provide concrete evidence of your contributions.",
    },
    {
      title: "Optimize for ATS",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      summary:
        "Keep formatting simple and use standard section titles for best results.",
      details:
        "ATS software can struggle with complex formatting. Use standard fonts like Arial or Calibri, avoid tables, text boxes, headers/footers, and graphics. Use conventional section headings like 'Experience', 'Education', and 'Skills' rather than creative alternatives. Save your resume as a .docx or .pdf file, as these formats are most ATS-friendly.",
    },
    {
      title: "Keep it Concise",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      summary:
        "Aim for a 1-2 page resume with the most relevant information for the position.",
      details:
        "Most recruiters spend less than 10 seconds initially scanning a resume. Focus on the most relevant experience for the specific position and remove outdated or irrelevant information. For most professionals, keep your resume to 1-2 pages at most, with recent graduates sticking to one page and senior executives possibly extending to three.",
    },
    {
      title: "Showcase Skills Strategically",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      summary:
        "Highlight both hard skills and soft skills that match the job requirements.",
      details:
        "Include a dedicated skills section that lists both technical skills (programming languages, software, certifications) and soft skills (leadership, communication, problem-solving) that are relevant to the position. Prioritize skills mentioned in the job description, and consider using a simple rating system or categorization to showcase proficiency levels.",
    },
  ];

  return (
    <section id="tips" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Resume Optimization Tips
          </h2>
          <p className="text-slate-600 mt-2">
            Expert advice to help your resume stand out and pass ATS systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              style={{
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="p-6 cursor-pointer flex-grow"
                onClick={() => toggleTip(index)}
                style={{ position: "relative" }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {tip.icon}
                    </div>
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-medium text-slate-900">
                        {tip.title}
                      </h3>
                      <button
                        className="text-slate-400 hover:text-primary transition-colors"
                        aria-label={
                          expandedTip === index ? "Collapse tip" : "Expand tip"
                        }
                      >
                        <svg
                          className={`w-5 h-5 transform transition-transform ${
                            expandedTip === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="mt-1 text-slate-600">{tip.summary}</p>
                  </div>
                </div>
              </div>

              {expandedTip === index && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                  <p className="text-slate-700 leading-relaxed">
                    {tip.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Final Checklist
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center items-center">
              <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">
                    Proofread your resume carefully for spelling and grammar
                    errors
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">
                    Ensure your contact information is up-to-date and
                    professional
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">
                    Use our Resume Matcher to optimize for specific job
                    descriptions
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg">
                    Save your resume in both .docx and .pdf formats for
                    different application systems
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
