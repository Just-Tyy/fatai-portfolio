"use client";

import { useEffect, useState } from "react";
import type { ProjectSection } from "@/content/projects";

export function CaseStudyNav({ sections }: { sections: ProjectSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const updateActive = () => {
      const marker = 96 + window.innerHeight * 0.24;
      let current = sections[0]?.id ?? "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= marker) current = section.id;
      }

      setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [sections]);

  return (
    <aside className="case-rail" aria-label="Case study progress">
      <span className="case-rail-label">YOU&apos;RE READING</span>
      <nav>
        {sections.map((section, index) => {
          const isActive = active === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={isActive ? "active" : ""}
              aria-current={isActive ? "location" : undefined}
            >
              <span>0{index + 1}</span>
              {section.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
