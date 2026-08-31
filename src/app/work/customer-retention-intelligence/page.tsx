import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { ProjectHero } from "@/components/case-study/project-hero";
import { InteractiveArchitecture } from "@/components/case-study/interactive-architecture";
import { MetricsExplorer } from "@/components/case-study/metrics-explorer";
import { UnderTheHood } from "@/components/case-study/under-the-hood";
import { TechStackMap } from "@/components/case-study/tech-stack-map";
import { SystemPreview } from "@/components/case-study/system-preview";
import { RecruiterTechToggle } from "@/components/case-study/recruiter-tech-toggle";
import { Reveal } from "@/components/motion/reveal";
import { customerRetentionProject as project } from "@/content/projects";

export const metadata = {
  title: "Customer Retention Intelligence",
  description:
    "Case study: an end-to-end machine learning decision intelligence platform for churn prediction, explainability and retention prioritisation.",
};

export default function CustomerRetentionPage() {
  return (
    <div className="case-study-shell">
      <CaseStudyNav sections={project.sections} />

      <article className="section-shell case-study">
        <Link href="/#work" className="text-link back-link">
          <ArrowLeft size={16} /> Back to selected systems
        </Link>

        <ProjectHero
          number={project.number}
          kicker={project.kicker}
          statement={project.statement}
          substatement={project.substatement}
          summary={project.summary}
          metrics={project.metrics}
        />

        <section id="problem" className="case-section">
          <Reveal>
            <p className="eyebrow">01 · THE PROBLEM</p>
            <h2>Prediction alone does not tell a retention team what to do next.</h2>
          </Reveal>
          <div className="case-copy-grid">
            <Reveal delay={0.04}>
              <p>
                A conventional churn project often ends with a probability score.
                Useful — but incomplete.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                The practical question is which customers deserve attention, why
                their risk is elevated and how much business exposure sits behind that risk.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="approach" className="case-section">
          <Reveal>
            <p className="eyebrow">02 · THE APPROACH</p>
            <h2>The easy version was a classifier in a notebook. I built the path around it.</h2>
          </Reveal>

          <RecruiterTechToggle
            recruiter={
              <div className="audience-prose">
                <h3>Business view</h3>
                <p>
                  Turn customer data into prioritised, explainable retention intelligence
                  that supports both individual and bulk workflows.
                </p>
              </div>
            }
            technical={
              <div className="audience-prose">
                <h3>Engineering view</h3>
                <p>
                  Separate validation, feature preparation, inference, explainability
                  and presentation so the model does not become the application architecture.
                </p>
              </div>
            }
          />

          <UnderTheHood
            overview={project.underTheHood.overview}
            technical={project.underTheHood.technical}
          />
        </section>

        <section id="architecture" className="case-section">
          <Reveal>
            <p className="eyebrow">03 · ARCHITECTURE</p>
            <h2>From raw customer records to an actionable retention signal.</h2>
          </Reveal>

          <InteractiveArchitecture nodes={project.architecture} />

          <SystemPreview
            eyebrow="PRODUCT WORKFLOW"
            title="Decision intelligence, not just model inference"
            columns={[
              { meta: "RISK", title: "Who is likely to leave?", body: "Churn probability creates the starting signal for customer risk." },
              { meta: "WHY", title: "What is driving the prediction?", body: "SHAP explanations surface the customer-level factors contributing to risk." },
              { meta: "PRIORITY", title: "Who deserves action first?", body: "Risk context and revenue exposure support prioritised retention decisions." },
            ]}
          />
        </section>

        <section id="performance" className="case-section">
          <Reveal>
            <p className="eyebrow">04 · MODEL PERFORMANCE</p>
            <h2>Accuracy was not allowed to tell the whole story.</h2>
          </Reveal>

          <MetricsExplorer metrics={project.metrics} />

          <div className="performance-grid">
            <div><span>HOLDOUT ACCURACY</span><strong>80.4%</strong></div>
            <div><span>F1-SCORE</span><strong>0.596</strong></div>
            <div><span>ROC-AUC</span><strong>0.862</strong></div>
          </div>
        </section>

        <section id="product" className="case-section">
          <Reveal>
            <p className="eyebrow">05 · PRODUCT EXPERIENCE</p>
            <h2>The model became one part of a larger decision workflow.</h2>
          </Reveal>

          <SystemPreview
            eyebrow="APPLICATION"
            title="Customer Retention Intelligence"
            columns={[
              { meta: "INDIVIDUAL", title: "Customer intelligence", body: "Inspect individual churn risk, explanations and customer context." },
              { meta: "BATCH", title: "Bulk prediction", body: "Score up to 5,000 records in a single batch workflow." },
              { meta: "REPORTING", title: "Decision reporting", body: "Export PDF, CSV and Excel outputs for downstream use." },
            ]}
          />
        </section>

        <section id="engineering" className="case-section">
          <Reveal>
            <p className="eyebrow">06 · ENGINEERING</p>
            <h2>The application was designed to survive outside development.</h2>
          </Reveal>

          <TechStackMap groups={project.techGroups} />
        </section>

        <section id="results" className="case-section case-result">
          <p className="eyebrow">07 · RESULT</p>
          <h2>
            A churn model became a deployable system for identifying risk,
            explaining it and supporting prioritised retention action.
          </h2>

          <div className="case-actions">
            <a
              className="button button-primary"
              href="https://customer-retention-dashboard-82yx.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Open live product <ExternalLink size={16} />
            </a>

            <a
              className="button button-secondary"
              href="https://github.com/Just-Tyy/customer-retention-intelligence-platform"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub repository <ExternalLink size={16} />
            </a>
          </div>
        </section>

        <Link href="/work/enterprise-knowledge-intelligence" className="next-project">
          <span>NEXT CASE STUDY</span>
          <strong>Enterprise Knowledge Intelligence Platform</strong>
          <ArrowRight size={22} />
        </Link>
      </article>
    </div>
  );
}
