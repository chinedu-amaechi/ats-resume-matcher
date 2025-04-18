// src/components/SkillsChart.tsx
import React from "react";

interface SkillsChartProps {
  matchedSkills: string[];
  missingSkills: string[];
}

export default function SkillsChart({
  matchedSkills,
  missingSkills,
}: SkillsChartProps) {
  const totalSkills = matchedSkills.length + missingSkills.length;

  // Ensure we don't divide by zero
  const matchedPercent =
    totalSkills > 0
      ? Math.round((matchedSkills.length / totalSkills) * 100)
      : 0;
  const missingPercent =
    totalSkills > 0
      ? Math.round((missingSkills.length / totalSkills) * 100)
      : 0;

  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-neutral-500 mb-2">
        Skills Match Distribution
      </h4>

      <div className="w-full bg-gray-200 rounded-full h-4 mb-1">
        <div
          className="bg-primary h-4 rounded-full"
          style={{ width: `${matchedPercent}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm text-neutral-500">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
          <span>Matched Skills ({matchedSkills.length})</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
          <span>Missing Skills ({missingSkills.length})</span>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-neutral-700">
          {matchedPercent >= 80
            ? "Excellent skills match! Your skills align well with the job requirements."
            : matchedPercent >= 60
            ? "Good skills match. Consider adding a few more relevant skills to your resume."
            : matchedPercent >= 40
            ? "Average skills match. Try to develop some of the missing skills to improve your candidacy."
            : "Significant skills gap. Consider looking for jobs that better match your current skillset or invest in learning the missing skills."}
        </p>
      </div>
    </div>
  );
}
