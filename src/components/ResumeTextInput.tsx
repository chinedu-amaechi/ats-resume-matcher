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

  // Example resume text to demonstrate usage
  const exampleResume = `JOHN DOE
Software Engineer
john.doe@example.com | (123) 456-7890 | linkedin.com/in/johndoe | github.com/johndoe

SUMMARY
Results-driven Software Engineer with 4+ years of experience developing web applications using JavaScript, React, and Node.js. Passionate about creating clean, maintainable code and implementing responsive designs.

SKILLS
Programming Languages: JavaScript, TypeScript, HTML, CSS
Frameworks/Libraries: React, Redux, Express.js, Jest
Tools: Git, Webpack, Docker
Databases: MongoDB, PostgreSQL
Cloud: AWS (S3, EC2, Lambda)
Methodologies: Agile, Scrum

WORK EXPERIENCE
Senior Frontend Developer | TechCorp Inc. | Jan 2021 - Present
• Developed and maintained responsive web applications using React and TypeScript
• Implemented state management with Redux and optimized application performance
• Collaborated with UX designers to implement responsive designs
• Reduced load time by 40% through code optimization and lazy loading

Software Engineer | WebSolutions | Mar 2019 - Dec 2020
• Built RESTful APIs using Node.js and Express
• Designed and implemented MongoDB database schemas
• Contributed to frontend development using React
• Participated in code reviews and mentored junior developers

EDUCATION
Bachelor of Science in Computer Science | University of Technology | 2015-2019
• GPA: 3.8/4.0
• Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems

PROJECTS
E-commerce Platform (github.com/johndoe/ecommerce)
• Developed a full-stack e-commerce application using the MERN stack
• Implemented authentication, product catalog, and payment processing
• Deployed on AWS using Docker containers

Task Management App (github.com/johndoe/taskmanager)
• Created a task management application with React and Firebase
• Implemented real-time updates and collaborative features
• Designed a responsive UI that works across devices`;

  const loadExample = () => {
    setResumeText(exampleResume);
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

        <button
          type="button"
          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
          onClick={loadExample}
        >
          Load example resume
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
            <li>Organize content with clear section headings</li>
          </ul>
        </div>
      )}

      <div className="relative">
        <textarea
          className="w-full h-64 p-4 border border-gray-300 rounded-xl focus:border-primary focus:ring focus:ring-primary/20 outline-none resize-none font-mono text-sm"
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
