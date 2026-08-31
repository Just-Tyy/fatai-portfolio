import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { ProjectHero } from "@/components/case-study/project-hero";
import { InteractiveArchitecture } from "@/components/case-study/interactive-architecture";
import { MetricsExplorer } from "@/components/case-study/metrics-explorer";
import { UnderTheHood } from "@/components/case-study/under-the-hood";
import { TechStackMap } from "@/components/case-study/tech-stack-map";
import { SystemPreview } from "@/components/case-study/system-preview";
import { RecruiterTechToggle } from "@/components/case-study/recruiter-tech-toggle";
import { Reveal } from "@/components/motion/reveal";
import { enterpriseKnowledgeProject as project } from "@/content/projects";

export const metadata = {
  title: "Enterprise Knowledge Intelligence",
  description:
    "Case study: enterprise RAG, specialised reasoning workflows, evidence judgment, verification and resilient multi-provider AI inference.",
};

export default function EnterpriseKnowledgePage() {
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
            <h2>Finding text is easy. Knowing which evidence deserves trust is harder.</h2>
          </Reveal>
          <div className="case-copy-grid">
            <p>
              Enterprise knowledge is fragmented across policies, standards,
              operational material and departmental documents. A relevant paragraph is
              not automatically an authoritative answer.
            </p>
            <p>
              The system treats retrieval, authority, synthesis and verification as
              separate problems instead of hiding everything behind a single
              “chat with your documents” prompt.
            </p>
          </div>
        </section>

        <section id="approach" className="case-section">
          <Reveal>
            <p className="eyebrow">02 · THE APPROACH</p>
            <h2>Another RAG chatbot? Thankfully, no.</h2>
          </Reveal>

          <RecruiterTechToggle
            recruiter={
              <div className="audience-prose">
                <h3>Executive view</h3>
                <p>
                  Give users grounded answers with visible evidence while making the
                  system resilient enough to handle different enterprise knowledge tasks.
                </p>
              </div>
            }
            technical={
              <div className="audience-prose">
                <h3>Technical view</h3>
                <p>
                  Separate routing, retrieval, relevance control, evidence judgment,
                  synthesis and verification so failures can be observed and improved independently.
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
            <h2>A visible reasoning path from query to grounded answer.</h2>
          </Reveal>
          <InteractiveArchitecture nodes={project.architecture} />
        </section>

        <section id="routes" className="case-section">
          <Reveal>
            <p className="eyebrow">04 · SPECIALISED ROUTES</p>
            <h2>Different questions deserve different reasoning paths.</h2>
          </Reveal>

          <div className="route-grid">
            <article>
              <span>01</span>
              <h3>Enterprise Retrieval</h3>
              <p>Grounded internal knowledge retrieval for direct enterprise questions.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Policy Intelligence</h3>
              <p>Authority-aware reasoning for policy, standard and governance questions.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Hybrid Research</h3>
              <p>Bounded comparison of internal evidence with external research when the task requires both.</p>
            </article>
          </div>
        </section>

        <section id="verification" className="case-section">
          <Reveal>
            <p className="eyebrow">05 · EVIDENCE & VERIFICATION</p>
            <h2>Generation is not the final step.</h2>
          </Reveal>

          <MetricsExplorer metrics={project.metrics} />

          <div className="verification-flow">
            <span>RETRIEVE</span><i>→</i><span>RANK</span><i>→</i>
            <span>EVIDENCE JUDGE</span><i>→</i><span>SYNTHESISE</span><i>→</i><span>VERIFY</span>
          </div>
        </section>

        <section id="product" className="case-section">
          <Reveal>
            <p className="eyebrow">06 · PRODUCT EXPERIENCE</p>
            <h2>The backend capabilities are exposed through dedicated workspaces.</h2>
          </Reveal>

          <SystemPreview
            eyebrow="NEXT.JS APPLICATION"
            title="Different knowledge tasks, different workspaces"
            columns={[
              { meta: "KNOWLEDGE", title: "Grounded query workspace", body: "Ask enterprise questions with evidence and request-level diagnostics." },
              { meta: "POLICY", title: "Policy intelligence", body: "Inspect policy-oriented responses through authority-aware workflows." },
              { meta: "EVALUATION", title: "System diagnostics", body: "Observe request IDs, provider telemetry, evaluation and reliability signals." },
            ]}
          />

          <TechStackMap groups={project.techGroups} />
        </section>

        <section id="results" className="case-section case-result">
          <p className="eyebrow">07 · RESULT</p>
          <h2>
            A RAG system built around evidence quality, specialised reasoning,
            provider resilience and verification — not simply document chat.
          </h2>

          <div className="case-actions">
            <a
              className="button button-primary"
              href="https://ekip-production-frontend.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Open live product <ExternalLink size={16} />
            </a>

            <a
              className="button button-secondary"
              href="https://github.com/Just-Tyy/enterprise-knowledge-intelligence-platform"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub repository <ExternalLink size={16} />
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}
