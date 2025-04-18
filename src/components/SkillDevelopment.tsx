// src/components/SkillDevelopment.tsx
import React from "react";

interface SkillDevelopmentProps {
  skills: string[];
}

export default function SkillDevelopment({ skills }: SkillDevelopmentProps) {
  // Dictionary of skill development resources
  const skillResources: {
    [key: string]: {
      description: string;
      resources: { name: string; type: string }[];
    };
  } = {
    react: {
      description: "A popular JavaScript library for building user interfaces",
      resources: [
        { name: "React Official Documentation", type: "Documentation" },
        { name: "React - The Complete Guide", type: "Course" },
        { name: "Build a Personal Portfolio", type: "Project" },
      ],
    },
    node: {
      description: "A JavaScript runtime built on Chrome's V8 engine",
      resources: [
        { name: "Node.js Official Documentation", type: "Documentation" },
        { name: "Node.js API Development", type: "Course" },
        { name: "Build a REST API", type: "Project" },
      ],
    },
    typescript: {
      description:
        "A strongly typed programming language that builds on JavaScript",
      resources: [
        { name: "TypeScript Official Documentation", type: "Documentation" },
        { name: "TypeScript - The Complete Developer's Guide", type: "Course" },
        { name: "Convert a JavaScript Project to TypeScript", type: "Project" },
      ],
    },
    python: {
      description: "A high-level, interpreted programming language",
      resources: [
        { name: "Python Official Documentation", type: "Documentation" },
        { name: "Python for Everybody", type: "Course" },
        { name: "Build a Data Analysis Tool", type: "Project" },
      ],
    },
    docker: {
      description:
        "A platform for developing, shipping, and running applications in containers",
      resources: [
        { name: "Docker Official Documentation", type: "Documentation" },
        { name: "Docker & Kubernetes: The Practical Guide", type: "Course" },
        { name: "Containerize an Application", type: "Project" },
      ],
    },
    aws: {
      description:
        "Amazon's cloud computing platform offering various services",
      resources: [
        { name: "AWS Documentation", type: "Documentation" },
        { name: "AWS Certified Cloud Practitioner", type: "Course" },
        { name: "Deploy a Web Application on AWS", type: "Project" },
      ],
    },
    mongodb: {
      description: "A NoSQL document database",
      resources: [
        { name: "MongoDB University", type: "Documentation" },
        { name: "MongoDB - The Complete Developer's Guide", type: "Course" },
        { name: "Build a Database-Driven App", type: "Project" },
      ],
    },
    agile: {
      description:
        "An iterative approach to project management and software development",
      resources: [
        { name: "Agile Manifesto", type: "Documentation" },
        { name: "Agile Fundamentals", type: "Course" },
        { name: "Implement Agile in a Team Project", type: "Project" },
      ],
    },
    scrum: {
      description:
        "A framework for project management emphasizing teamwork and accountability",
      resources: [
        { name: "Scrum Guide", type: "Documentation" },
        { name: "Scrum Master Certification", type: "Course" },
        { name: "Run a Sprint with a Team", type: "Project" },
      ],
    },
  };

  // Get the top 3 skills to prioritize
  const prioritySkills = skills.slice(0, 3);

  return (
    <div className="space-y-6">
      <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
        Skill Development Recommendations
      </h4>

      {prioritySkills.length > 0 ? (
        <div className="space-y-6">
          {prioritySkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="ml-4 flex-1">
                  <h5 className="font-medium text-gray-900">
                    {skill.charAt(0).toUpperCase() + skill.slice(1)}
                  </h5>
                  <p className="text-sm text-gray-600 mt-1">
                    {skillResources[skill]
                      ? skillResources[skill].description
                      : `A valuable skill for this position`}
                  </p>

                  {skillResources[skill] && (
                    <div className="mt-3">
                      <p className="text-xs font-medium text-gray-500 uppercase mb-1">
                        Learning Resources
                      </p>
                      <div className="space-y-2">
                        {skillResources[skill].resources.map(
                          (resource, idx) => (
                            <div key={idx} className="flex items-center">
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  resource.type === "Documentation"
                                    ? "bg-blue-500"
                                    : resource.type === "Course"
                                    ? "bg-green-500"
                                    : "bg-purple-500"
                                } mr-2`}
                              ></div>
                              <span className="text-sm text-gray-700">
                                {resource.name}
                              </span>
                              <span className="text-xs text-gray-500 ml-2">
                                ({resource.type})
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <p className="text-indigo-700 text-sm">
              Focus on developing these skills to improve your match rate for
              similar positions. Learning these skills will make your resume
              more attractive to employers and increase your chances of landing
              interviews.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-green-400"
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
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                Great job! Your skills align well with this position. No
                specific skill development recommendations at this time.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
