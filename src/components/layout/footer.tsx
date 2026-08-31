import Link from "next/link";
import { KomolafeLogo } from "@/components/brand/komolafe-logo";
import "./footer-grand.css";

const footerNavigation = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
];

const footerSocial = [
  {
    href: "https://github.com/just-Tyy",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/fataikomolafe",
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="footer grand-footer">
      <div className="grand-footer-orbit" aria-hidden="true">
        <span className="grand-footer-orbit-line" />
        <span className="grand-footer-orbit-node" />
      </div>

      <div className="section-shell grand-footer-shell">
        <div className="grand-footer-main">
          <div className="grand-footer-brand">
            <div className="grand-footer-logo-wrap">
              <KomolafeLogo animated />
            </div>

            <div className="grand-footer-identity">
              <p className="grand-footer-kicker">DATA SCIENTIST</p>
              <p className="grand-footer-brand-line">
                Building systems beyond notebooks.
              </p>
            </div>
          </div>

          <div className="grand-footer-columns">
            <div className="grand-footer-column">
              <p className="grand-footer-column-label">NAVIGATION</p>

              <nav
                className="footer-links grand-footer-links"
                aria-label="Footer navigation"
              >
                {footerNavigation.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <span>{item.label}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="grand-footer-column">
              <p className="grand-footer-column-label">ELSEWHERE</p>

              <div className="footer-links grand-footer-links">
                {footerSocial.map((item) => (
                  <a
                    href={item.href}
                    key={item.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="grand-footer-column grand-footer-availability">
              <p className="grand-footer-column-label">CURRENT SIGNAL</p>

              <div className="grand-footer-status">
                <span className="grand-footer-status-dot" aria-hidden="true" />

                <div>
                  <strong>Open to opportunities</strong>
                  <p>Data Science · Machine Learning · Applied AI</p>
                </div>
              </div>

              <Link className="grand-footer-contact-link" href="/contact">
                Start a conversation
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grand-footer-bottom">
          <div className="grand-footer-person">
            <strong>Komolafe Fatai Abiodun</strong>
            <span>Lagos, Nigeria</span>
          </div>

          <p className="grand-footer-signoff">Built beyond notebooks.</p>

          <p className="grand-footer-copyright">
            © {new Date().getFullYear()} KOMOLAFE
          </p>
        </div>
      </div>
    </footer>
  );
}
