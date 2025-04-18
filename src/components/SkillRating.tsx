// src/components/SkillRating.tsx
import React from "react";

interface SkillRatingProps {
  skill: string;
  category: "technical" | "soft" | "domain";
  priority: "high" | "medium" | "low";
}

export default function SkillRating({
  skill,
  category,
  priority,
}: SkillRatingProps) {
  // Determine color based on category
  const getColor = () => {
    switch (category) {
      case "technical":
        return "blue";
      case "soft":
        return "green";
      case "domain":
        return "purple";
      default:
        return "gray";
    }
  };

  // Determine icon based on priority
  const getPriorityIcon = () => {
    switch (priority) {
      case "high":
        return (
          <svg
            className="w-4 h-4 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        );
      case "medium":
        return (
          <svg
            className="w-4 h-4 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        );
      case "low":
        return (
          <svg
            className="w-4 h-4 text-gray-600"
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
        );
      default:
        return null;
    }
  };

  const color = getColor();
  const priorityIcon = getPriorityIcon();

  return (
    <div
      className={`flex items-center px-3 py-2 bg-${color}-50 border border-${color}-200 rounded-lg`}
    >
      <span className={`text-${color}-700 font-medium mr-2`}>
        {skill.charAt(0).toUpperCase() + skill.slice(1)}
      </span>
      <span
        className="ml-auto flex items-center"
        title={`${priority} priority`}
      >
        {priorityIcon}
      </span>
    </div>
  );
}
