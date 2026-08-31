import type { ProjectMetric } from "@/content/projects";
import { Reveal } from "@/components/motion/reveal";

export function ProjectHero({
  number,
  kicker,
  statement,
  substatement,
  summary,
  metrics,
}: {
  number: string;
  kicker: string;
  statement: string;
  substatement: string;
  summary: string;
  metrics: ProjectMetric[];
}) {
  return (
    <header className="case-hero">
      <Reveal>
        <div className="case-hero-topline">
          <span>CASE STUDY · {number}</span>
          <span>{kicker}</span>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h1>{statement}</h1>
      </Reveal>

      <Reveal delay={0.09}>
        <p className="case-hero-sub">{substatement}</p>
      </Reveal>

      <Reveal delay={0.13}>
        <p className="case-summary">{summary}</p>
      </Reveal>

      <Reveal delay={0.17}>
        <div className="case-metric-strip">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </header>
  );
}
