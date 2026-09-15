import { Github, Linkedin, Mail } from "lucide-react";
import { ContactIntent } from "@/components/contact/contact-intent";
import { Reveal } from "@/components/motion/reveal";

export const metadata = {
  title: "Contact",
  description:
    "Contact Fatai Komolafe about Data Science, Machine Learning, Applied AI, collaboration or technical opportunities.",
};

export default function ContactPage() {
  return (
    <section className="section-shell page-shell contact-page">
      <Reveal>
        <p className="eyebrow">CONTACT</p>
        <h1 className="page-title">Let&apos;s build something useful.</h1>
        <p className="page-lead">
          Opportunities, collaborations, technical conversations and unusually
          difficult problems are welcome.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <ContactIntent />
      </Reveal>

      <div className="contact-grid">
        <a
          className="contact-card"
          href="mailto:fatai.abiodunkomolafe@gmail.com"
        >
          <Mail size={20} />
          <div>
            <span>Email</span>
            <strong>fatai.abiodunkomolafe@gmail.com</strong>
          </div>
        </a>

        <a
          className="contact-card"
          href="https://www.linkedin.com/in/fatai-komolafe/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={20} />
          <div>
            <span>LinkedIn</span>
            <strong>Professional profile</strong>
          </div>
        </a>

        <a
          className="contact-card"
          href="https://github.com/just-Tyy"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} />
          <div>
            <span>GitHub</span>
            <strong>Inspect the work</strong>
          </div>
        </a>
      </div>
    </section>
  );
}
