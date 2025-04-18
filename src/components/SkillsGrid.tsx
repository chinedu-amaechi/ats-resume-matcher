// src/components/SkillsGrid.tsx
import React from "react";

interface SkillsGridProps {
  skills: string[];
  colorClass: string;
  emptyMessage?: string;
}

export default function SkillsGrid({
  skills,
  colorClass,
  emptyMessage = "No skills in this category",
}: SkillsGridProps) {
  if (skills.length === 0) {
    return <div className="text-sm text-gray-500 italic">{emptyMessage}</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`px-3 py-2 ${colorClass} rounded-lg text-sm font-medium text-center`}
        >
          {skill.charAt(0).toUpperCase() + skill.slice(1)}
        </div>
      ))}
    </div>
  );
}
