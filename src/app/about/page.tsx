import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export const metadata = {
  title: "About",
  description:
    "About Fatai Komolafe — a Data Scientist working across machine learning, applied AI and production-oriented intelligent systems.",
};

export default function AboutPage() {
  return (
    <section className="section-shell page-shell about-page">
      <Reveal>
        <p className="eyebrow">ABOUT</p>
        <h1 className="page-title">I kept asking what happens after the model finishes training.</h1>
      </Reveal>

      <div className="about-story-grid">
        <Reveal delay={0.04}>
          <div className="about-story-lead">
            <p className="eyebrow">THE SHORT VERSION</p>

            <p className="about-short-version-copy">
              I&apos;m Fatai &mdash; a Data Scientist with a Statistics background and a
              habit of following technical problems past the point where the notebook
              ends.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="about-story-copy">
            <p>
              Statistics gave me the foundation for asking better questions about
              data, uncertainty and evidence. Machine learning made those questions
              more operational. Then I became increasingly interested in everything
              required to turn the resulting intelligence into software people could
              actually use.
            </p>
            <p>
              That path pulled me into APIs, deployment, Retrieval-Augmented
              Generation, intelligent routing, evaluation, backend architecture and
              frontend product work. Not because I was trying to collect job titles,
              but because useful systems rarely stop at one layer.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="about-principles">
        <article>
          <span>01</span>
          <h2>Evidence over theatre.</h2>
          <p>
            If I claim a system works, I want metrics, architecture, behaviour or a
            live product capable of supporting that claim.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Useful beats impressive.</h2>
          <p>
            A technically clever solution still has to help someone make a better
            decision.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Build the whole path.</h2>
          <p>
            Data, intelligence, API, product and deployment all matter when the goal is
            something that survives outside development.
          </p>
        </article>
      </div>

      <div className="about-cta">
        <p>
          Today, I&apos;m most interested in Data Science, Machine Learning and Applied
          AI work where there is a real system to build — not just a model to train.
        </p>
        <Link href="/contact" className="button button-primary">
          Start a conversation <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

