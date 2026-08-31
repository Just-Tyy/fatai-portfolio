"use client";

import { ArrowRight } from "lucide-react";

export function ScrollToSection({
  sectionId,
  children,
}: {
  sectionId: string;
  children: React.ReactNode;
}) {
  const handleClick = () => {
    const target = document.getElementById(sectionId);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <button
      type="button"
      className="button button-primary"
      onClick={handleClick}
    >
      {children}
      <ArrowRight size={17} />
    </button>
  );
}
