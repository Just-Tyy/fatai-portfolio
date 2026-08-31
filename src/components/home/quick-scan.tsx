"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import Link from "next/link";

const proof = [
  { value: "7,000+", label: "customer records", meta: "Retention intelligence" },
  { value: "0.862", label: "ROC-AUC", meta: "Churn model" },
  { value: "3", label: "reasoning routes", meta: "Enterprise knowledge" },
  { value: "3", label: "LLM providers", meta: "AI resilience" },
];

export function QuickScan() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="quick-scan-button quick-scan-button-v4" onClick={() => setOpen(true)}>
        <span className="quick-scan-pulse" aria-hidden="true" />
        <span>Recruiter in a hurry?</span>
        <strong>See the 30-second cut</strong>
        <ArrowRight size={15} />
      </button>

      {open && (
        <div className="quick-scan-backdrop" onMouseDown={() => setOpen(false)}>
          <div
            className="quick-scan-panel quick-scan-panel-v4"
            role="dialog"
            aria-modal="true"
            aria-label="30-second recruiter summary"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="quick-close quick-close-v4"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="quick-scan-content">
              <div className="quick-scan-copy">
                <span className="modal-kicker">30-SECOND RECRUITER CUT</span>
                <h2>
                  What I build,
                  <br />
                  in one screen.
                </h2>
                <p>
                  Data Scientist building production-oriented machine learning and
                  applied AI systems — from data and modelling to APIs, products and
                  deployable decision workflows.
                </p>

                <div className="quick-scan-tags">
                  <span>Data Science</span>
                  <span>Machine Learning</span>
                  <span>Applied AI</span>
                </div>
              </div>

              <div className="quick-scan-proof">
                {proof.map((item) => (
                  <article key={item.label}>
                    <div>
                      <span>{item.meta}</span>
                      <strong>{item.value}</strong>
                    </div>
                    <p>{item.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="quick-scan-footer">
              <div>
                <span>PRIMARY POSITIONING</span>
                <strong>Data Scientist</strong>
              </div>

              <div className="quick-scan-actions">
                <Link
                  className="button button-primary"
                  href="/#work"
                  onClick={() => setOpen(false)}
                >
                  Inspect the work
                </Link>

                <Link
                  className="button button-secondary"
                  href="/contact"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>

                <a
                  className="quick-github-link"
                  href="https://github.com/just-Tyy"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
