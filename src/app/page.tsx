import Link from "next/link";
import { Download, ExternalLink, ArrowRight } from "lucide-react";
import { HeroVisual } from "@/components/home/hero-visual";
import { QuickScan } from "@/components/home/quick-scan";
import { ProjectShowcase } from "@/components/home/project-showcase";
import { ScrollToSection } from "@/components/home/scroll-to-section";
import { Reveal } from "@/components/motion/reveal";

const capabilities = [
  {
    title: "Data science",
    body: "Statistics, exploratory analysis, feature engineering, predictive modelling, model evaluation and explainability.",
  },
  {
    title: "Applied AI",
    body: "LLMs, RAG, intelligent retrieval, agent workflows, grounding, evaluation and evidence-aware generation.",
  },
  {
    title: "Engineering",
    body: "Python, FastAPI, REST APIs, PostgreSQL, SQLite, Docker, testing and production-oriented application architecture.",
  },
  {
    title: "Product",
    body: "Next.js, React, TypeScript, Streamlit, responsive interfaces and data visualization that make intelligence usable.",
  },
];

const thinking = [
  {
    number: "01",
    title: "Find the actual problem",
    body: "“Predict churn” is a modelling request. “Reduce preventable customer loss” is the business problem.",
  },
  {
    number: "02",
    title: "Design around the decision",
    body: "Intelligence only matters when someone can understand it, trust it and act on it.",
  },
  {
    number: "03",
    title: "Build the complete path",
    body: "Data → Intelligence → System → User → Decision. The model matters, but it is not the whole product.",
  },
  {
    number: "04",
    title: "Measure what matters",
    body: "Model performance matters. So do reliability, explainability, evidence quality and usefulness outside development.",
  },
];

export default function Home() {
  return (
    <>
      <section id="home" className="hero section-shell hero-v2 homepage-anchor">
        <div className="ambient-grid" aria-hidden="true" />

        <div className="hero-layout">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">DATA SCIENTIST</p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1>
                I build intelligent systems that turn
                <span className="accent-text"> messy information </span>
                into useful decisions.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="hero-intro">
                Building production-oriented machine learning and applied AI systems —
                because good models deserve better than dying inside notebooks.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="hero-actions">
                <ScrollToSection sectionId="work">
                  Explore selected systems
                </ScrollToSection>

                <Link className="button button-secondary" href="/resume">
                  View résumé <Download size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="availability">
                <span className="status-dot" aria-hidden="true" />
                Open to Data Science, Machine Learning & Applied AI opportunities
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="hero-visual-wrap">
            <HeroVisual />
          </Reveal>
        </div>

        <div className="quick-scan-wrap">
          <QuickScan />
        </div>
      </section>

      <section className="credibility-rail" aria-label="Core disciplines">
        <div className="section-shell credibility-inner">
          <span>STATISTICS</span>
          <span>MACHINE LEARNING</span>
          <span>APPLIED AI</span>
          <span>DECISION SYSTEMS</span>
        </div>
      </section>

      <section className="section-shell section-block intro-section intro-section-v2">
        <Reveal>
          <p className="eyebrow">THE SHORT VERSION</p>
          <h2>Data Scientist by title. Systems thinker by habit.</h2>
        </Reveal>

        <Reveal delay={0.07}>
          <div className="intro-copy">
            <p>
              My background started in Statistics, but I became increasingly
              interested in what happens after a model performs well in a notebook.
            </p>
            <p>
              That curiosity pulled me into APIs, AI systems, retrieval,
              application engineering and deployment — essentially everything
              required to turn intelligence into something people can actually use.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="work" className="section-shell section-block work-section-v2 homepage-anchor">
        <Reveal>
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">SELECTED SYSTEMS</p>
              <h2>Two completed systems.</h2>
            </div>
            <p className="section-note">Built to be inspected, tested and understood.</p>
          </div>
        </Reveal>

        <div className="project-stack">
          <ProjectShowcase
            number="01"
            title="Customer Retention Intelligence Platform"
            kicker="Machine Learning Decision Intelligence"
            description="Predicting churn was the easy part. The harder problem was deciding who deserves intervention first."
            href="/work/customer-retention-intelligence"
            liveHref="https://customer-retention-dashboard-82yx.onrender.com/"
            metrics={[
              ["7,000+", "customer records"],
              ["0.862", "ROC-AUC"],
              ["5,000", "batch capacity"],
            ]}
            flow={["DATA", "MODEL", "EXPLAIN", "DECIDE"]}
            tone="retention"
          />

          <ProjectShowcase
            number="02"
            title="Enterprise Knowledge Intelligence Platform"
            kicker="Enterprise RAG & Grounded AI"
            description="Enterprise knowledge usually exists. Finding the right evidence, proving it is authoritative and generating a grounded answer is the difficult part."
            href="/work/enterprise-knowledge-intelligence"
            liveHref="https://ekip-production-frontend.vercel.app/"
            metrics={[
              ["3", "LLM providers"],
              ["3", "reasoning routes"],
              ["1", "verification layer"],
            ]}
            flow={["RETRIEVE", "RANK", "REASON", "VERIFY"]}
            tone="knowledge"
          />
        </div>
      </section>

      <section id="approach" className="section-shell section-block thinking-section-v2 homepage-anchor">
        <Reveal>
          <p className="eyebrow">HOW I THINK</p>
          <h2>Start with the decision, not the algorithm.</h2>
        </Reveal>

        <div className="thinking-grid thinking-grid-v2">
          {thinking.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.05}>
              <article className="thinking-card thinking-card-v2">
                <span className="thinking-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section-shell section-block capability-section capability-section-v2 homepage-anchor">
        <Reveal>
          <p className="eyebrow">CAPABILITIES</p>
          <h2>Yes, I use more than Jupyter notebooks.</h2>
        </Reveal>

        <div className="capability-list">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="capability-row capability-row-v2">
                <span className="capability-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="section-shell section-block about-preview about-preview-v2 homepage-anchor">
        <Reveal>
          <p className="eyebrow">ABOUT</p>
          <h2>Somewhere between statistics and “why are we still doing this manually?”</h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="about-preview-grid">
            <p>
              I studied Statistics and eventually became more interested in
              building the systems around intelligence than stopping at analysis
              alone. Today my work sits at the intersection of data science,
              machine learning, AI and application engineering.
            </p>
            <Link className="text-link" href="/about">
              More about me <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section-shell section-block cta-section-v2">
        <Reveal>
          <div className="cta-panel cta-panel-v2">
            <div>
              <p className="eyebrow">LET&apos;S TALK</p>
              <h2>Got a difficult problem involving data or AI?</h2>
              <p>Good. Difficult problems are considerably more interesting.</p>
            </div>

            <div className="cta-actions">
              <Link className="button button-primary" href="/contact">
                Start a conversation <ArrowRight size={17} />
              </Link>

              <a
                className="button button-secondary"
                href="https://www.linkedin.com/fatai-komolafe"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
