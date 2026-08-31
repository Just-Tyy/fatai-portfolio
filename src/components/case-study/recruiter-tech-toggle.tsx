"use client";

import { useState } from "react";

export function RecruiterTechToggle({
  recruiter,
  technical,
}: {
  recruiter: React.ReactNode;
  technical: React.ReactNode;
}) {
  const [mode, setMode] = useState<"recruiter" | "technical">("recruiter");

  return (
    <div className="audience-toggle-panel">
      <div className="audience-toggle">
        <button
          className={mode === "recruiter" ? "active" : ""}
          onClick={() => setMode("recruiter")}
        >
          Executive view
        </button>
        <button
          className={mode === "technical" ? "active" : ""}
          onClick={() => setMode("technical")}
        >
          Technical view
        </button>
      </div>

      <div className="audience-content">
        {mode === "recruiter" ? recruiter : technical}
      </div>
    </div>
  );
}
