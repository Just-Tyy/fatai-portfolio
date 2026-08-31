"use client";

import { useState } from "react";
import type { ProjectMetric } from "@/content/projects";

export function MetricsExplorer({ metrics }: { metrics: ProjectMetric[] }) {
  const [active, setActive] = useState(0);
  const current = metrics[active];

  return (
    <div className="metrics-explorer">
      <div className="metrics-tabs" role="tablist" aria-label="Project metrics">
        {metrics.map((metric, index) => (
          <button
            key={metric.label}
            role="tab"
            aria-selected={active === index}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          >
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </button>
        ))}
      </div>
      <div className="metric-explanation" role="tabpanel">
        <span>CONTEXT</span>
        <p>{current.detail}</p>
      </div>
    </div>
  );
}
