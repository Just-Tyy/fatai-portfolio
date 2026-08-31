import type { Metadata } from "next";
import Link from "next/link";
import "./resume-page.css";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of Komolafe Fatai Abiodun — Data Scientist building production-oriented machine learning and applied AI systems.",
};

const resumeUrl = "/Komolafe-Fatai-Abiodun-Resume.pdf";

const signals = [
  ["2", "production systems", "Machine Learning + Enterprise AI"],
  ["0.862", "ROC-AUC", "Production churn classifier"],
  ["3", "reasoning routes", "Purpose-built enterprise RAG"],
  ["3", "LLM providers", "Provider-resilient inference"],
];

const systems = [
  {
    index: "01",
    title: "Customer Retention Intelligence",
    eyebrow: "Machine Learning Decision Intelligence",
    copy:
      "From 7,000+ customer records to explainable churn predictions, batch scoring and retention decisions.",
    proof: "0.862 ROC-AUC · 5,000-customer batch capacity",
    href: "/work/customer-retention-intelligence",
  },
  {
    index: "02",
    title: "Enterprise Knowledge Intelligence",
    eyebrow: "Enterprise RAG & Grounded AI",
    copy:
      "A multi-route knowledge system built around retrieval, evidence judgment, synthesis and verification.",
    proof: "3 reasoning routes · 3 LLM providers",
    href: "/work/enterprise-knowledge-intelligence",
  },
];

export default function ResumePage() {
  return (
    <div className="resume-page">
      <section className="resume-hero">
        <div className="resume-hero-grid">
          <div className="resume-hero-copy">
            <div className="resume-eyebrow">
              <span aria-hidden="true" />
              RÉSUMÉ
            </div>

            <p className="resume-kicker">THE TWO-PAGE VERSION</p>

            <h1>
              Two pages.
              <span>No fluff.</span>
              Just the work.
            </h1>

            <p className="resume-intro">
              A fast read on the statistics foundation, production systems and
              technical range behind the portfolio.
            </p>

            <div className="resume-actions">
              <a
                className="resume-button resume-button-primary"
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View full résumé</span>
                <span className="resume-button-mark" aria-hidden="true">↗</span>
              </a>

              <a
                className="resume-button resume-button-secondary"
                href={resumeUrl}
                download="Komolafe-Fatai-Abiodun-Resume.pdf"
              >
                <span>Download PDF</span>
                <span className="resume-button-mark" aria-hidden="true">↓</span>
              </a>
            </div>

            <p className="resume-side-note">
              If you&apos;ve made it this far, the résumé has probably earned 90 seconds.
            </p>
          </div>

          <div className="resume-scan" aria-label="Résumé quick scan">
            <div className="resume-scan-top">
              <span>RECRUITER SIGNAL SCAN</span>
              <span>READY</span>
            </div>

            <div className="resume-scan-line" />

            <div className="resume-scan-profile">
              <div>
                <span className="resume-scan-label">PRIMARY SIGNAL</span>
                <strong>Data Scientist</strong>
              </div>

              <p>
                Statistics at the foundation. Machine Learning and Applied AI
                in production.
              </p>
            </div>

            <div className="resume-signal-grid">
              {signals.map(([value, label, detail]) => (
                <article className="resume-signal" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                  <p>{detail}</p>
                </article>
              ))}
            </div>

            <div className="resume-scan-footer">
              <span>MODEL</span>
              <span>API</span>
              <span>PRODUCT</span>
              <span>DEPLOYMENT</span>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-fast-read">
        <div className="resume-section-heading">
          <div>
            <p className="resume-section-index">01 / 03</p>
            <h2>In 15 seconds.</h2>
          </div>

          <p>The part a recruiter should understand before opening page one.</p>
        </div>

        <div className="resume-fast-grid">
          <article>
            <span>FOUNDATION</span>
            <h3>Statistics first.</h3>
            <p>
              B.Sc. Statistics with hands-on modelling, evaluation and
              evidence-driven problem solving.
            </p>
          </article>

          <article>
            <span>WORK</span>
            <h3>Systems, not notebooks.</h3>
            <p>
              Models extended into APIs, explainability, product workflows and
              deployed applications.
            </p>
          </article>

          <article>
            <span>RANGE</span>
            <h3>ML to Applied AI.</h3>
            <p>
              Predictive intelligence, RAG, LLM routing, evidence verification
              and decision-support experiences.
            </p>
          </article>
        </div>
      </section>

      <section className="resume-proof">
        <div className="resume-section-heading">
          <div>
            <p className="resume-section-index">02 / 03</p>
            <h2>The proof is already live.</h2>
          </div>

          <p>
            The résumé summarizes it. The case studies show how the systems
            were actually built.
          </p>
        </div>

        <div className="resume-system-grid">
          {systems.map((system) => (
            <Link className="resume-system-card" href={system.href} key={system.index}>
              <div className="resume-system-head">
                <span>{system.index}</span>
                <span>CASE STUDY ↗</span>
              </div>

              <p className="resume-system-eyebrow">{system.eyebrow}</p>
              <h3>{system.title}</h3>
              <p className="resume-system-copy">{system.copy}</p>
              <div className="resume-system-proof">{system.proof}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="resume-final">
        <div className="resume-final-panel">
          <div className="resume-final-copy">
            <p className="resume-section-index">03 / 03</p>
            <h2>Still curious?</h2>
            <p>Good. That&apos;s what page one is for.</p>
          </div>

          <div className="resume-final-actions">
            <a
              className="resume-button resume-button-primary"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open résumé</span>
              <span className="resume-button-mark" aria-hidden="true">↗</span>
            </a>

            <Link className="resume-text-link" href="/#work">
              Or inspect the systems first →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
