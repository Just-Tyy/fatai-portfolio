"use client";

import { useState } from "react";

export function UnderTheHood({
  overview,
  technical,
}: {
  overview: string;
  technical: string[];
}) {
  const [mode, setMode] = useState<"overview" | "technical">("overview");

  return (
    <div className="hood-panel">
      <div className="hood-tabs" role="tablist" aria-label="Technical detail level">
        <button
          className={mode === "overview" ? "active" : ""}
          onClick={() => setMode("overview")}
          role="tab"
          aria-selected={mode === "overview"}
        >
          Overview
        </button>
        <button
          className={mode === "technical" ? "active" : ""}
          onClick={() => setMode("technical")}
          role="tab"
          aria-selected={mode === "technical"}
        >
          Under the hood
        </button>
      </div>

      {mode === "overview" ? (
        <p className="hood-overview">{overview}</p>
      ) : (
        <div className="hood-grid">
          {technical.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
