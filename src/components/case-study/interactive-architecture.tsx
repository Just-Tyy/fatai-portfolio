"use client";

import { useState } from "react";
import type { ArchitectureNode } from "@/content/projects";

export function InteractiveArchitecture({
  nodes,
  title = "Explore the system",
}: {
  nodes: ArchitectureNode[];
  title?: string;
}) {
  const [activeId, setActiveId] = useState(nodes[0]?.id ?? "");
  const active = nodes.find((node) => node.id === activeId) ?? nodes[0];

  return (
    <div className="architecture-explorer">
      <div className="architecture-toolbar">
        <div>
          <span>INTERACTIVE ARCHITECTURE</span>
          <strong>{title}</strong>
        </div>
        <span className="architecture-hint">Select a stage</span>
      </div>

      <div className="architecture-layout">
        <div className="architecture-nodes" role="list" aria-label="Architecture stages">
          {nodes.map((node, index) => (
            <button
              key={node.id}
              className={activeId === node.id ? "architecture-node active" : "architecture-node"}
              onClick={() => setActiveId(node.id)}
              aria-pressed={activeId === node.id}
            >
              <span>0{index + 1}</span>
              <strong>{node.label}</strong>
              {index < nodes.length - 1 && <i aria-hidden="true">→</i>}
            </button>
          ))}
        </div>

        {active && (
          <div className="architecture-detail" aria-live="polite">
            <span>{active.eyebrow}</span>
            <h3>{active.label}</h3>
            <p>{active.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
