"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const intents = ["Hiring", "Collaboration", "Project discussion", "Something else"];

export function ContactIntent() {
  const [intent, setIntent] = useState("Hiring");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`${intent} — Fatai Komolafe`);
    const body = encodeURIComponent(
      `Hi Fatai,\n\nI'm reaching out regarding ${intent.toLowerCase()}.\n\n`,
    );
    return `mailto:fatai.abiodunkomolafe@gmail.com?subject=${subject}&body=${body}`;
  }, [intent]);

  return (
    <div className="contact-intent">
      <p className="eyebrow">WHAT BRINGS YOU HERE?</p>
      <div className="intent-options">
        {intents.map((item) => (
          <button
            key={item}
            className={intent === item ? "active" : ""}
            onClick={() => setIntent(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <a className="button button-primary" href={mailto}>
        Email me about {intent.toLowerCase()} <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
