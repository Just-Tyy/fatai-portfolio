"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const stages = [
  {
    index: "01",
    label: "DATA",
    short: "Collect & validate",
    detail:
      "Clean, validate and structure the information before modelling anything. Better inputs make every downstream decision more reliable.",
  },
  {
    index: "02",
    label: "INTELLIGENCE",
    short: "Model & reason",
    detail:
      "Use statistical, machine-learning or AI methods that fit the decision instead of forcing every problem into the same technique.",
  },
  {
    index: "03",
    label: "PRODUCT",
    short: "Make it usable",
    detail:
      "Expose the intelligence through APIs, interfaces and workflows so people can actually use it outside a development environment.",
  },
  {
    index: "04",
    label: "DECISION",
    short: "Support action",
    detail:
      "Present the context, explanation and evidence needed for someone to understand the output and act on it confidently.",
  },
];

export function HeroVisual() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-system hero-system-v2 hero-system-ux">
      <div className="hero-system-header hero-system-header-ux">
        <div>
          <span className="hero-system-kicker">HOW I BUILD</span>
          <strong>From raw information to a decision someone can use.</strong>
        </div>
        <span className="hero-system-context">MY APPROACH</span>
      </div>

      <div className="hero-system-stage hero-system-stage-ux">
        <div className="pipeline-grid pipeline-grid-ux" role="list" aria-label="How I build systems">
          {stages.map((stage, index) => (
            <motion.button
              type="button"
              key={stage.label}
              className={
                active === index
                  ? "pipeline-node pipeline-node-ux active"
                  : "pipeline-node pipeline-node-ux"
              }
              onClick={() => setActive(index)}
              aria-pressed={active === index}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.07 * index, duration: 0.35 }}
            >
              <div className="pipeline-node-top">
                <span>{stage.index}</span>
                <i aria-hidden="true" />
              </div>
              <strong>{stage.label}</strong>
              <small>{stage.short}</small>
            </motion.button>
          ))}
        </div>

        <div className="hero-system-detail" aria-live="polite">
          <div>
            <span>STEP {stages[active].index}</span>
            <strong>{stages[active].short}</strong>
          </div>
          <p>{stages[active].detail}</p>
        </div>

        <div className="system-kpi-row system-kpi-row-ux">
          <div>
            <span>FOUNDATION</span>
            <strong>Statistics & data</strong>
          </div>
          <div>
            <span>INTELLIGENCE</span>
            <strong>ML & Applied AI</strong>
          </div>
          <div>
            <span>DELIVERY</span>
            <strong>APIs & product engineering</strong>
          </div>
        </div>
      </div>

      <div className="hero-system-footer">
        <span>Observe the path, not just the model.</span>
        <span>Built for decisions</span>
      </div>
    </div>
  );
}
