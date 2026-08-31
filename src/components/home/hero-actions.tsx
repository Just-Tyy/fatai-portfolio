"use client";

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export function HeroActions() {
  return (
    <div className="hero-actions">
      <Link className="button button-primary" href="/#work">
        Explore selected systems <ArrowRight size={17} />
      </Link>

      <Link className="button button-secondary" href="/resume">
        View résumé <FileText size={16} />
      </Link>
    </div>
  );
}
