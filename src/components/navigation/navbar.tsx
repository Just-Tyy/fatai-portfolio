"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { ThemeMenu } from "@/components/theme/theme-menu";
import { KomolafeLogo } from "@/components/brand/komolafe-logo";

const homeSections = [
  { href: "/#home", id: "home", label: "Home" },
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#approach", id: "approach", label: "Approach" },
  { href: "/#capabilities", id: "capabilities", label: "Skills" },
  { href: "/#about", id: "about", label: "About" },
];

const secondaryLinks = [
  { href: "/", id: "home-page", label: "Home" },
  { href: "/#work", id: "work", label: "Work" },
  { href: "/about", id: "about-page", label: "About" },
  { href: "/resume", id: "resume", label: "Résumé" },
  { href: "/contact", id: "contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const shellRef = useRef<HTMLDivElement | null>(null);
  const brandMeasureRef = useRef<HTMLDivElement | null>(null);
  const navMeasureRef = useRef<HTMLDivElement | null>(null);
  const actionsMeasureRef = useRef<HTMLDivElement | null>(null);

  const desktopLinks = useMemo(
    () => (onHome ? homeSections : secondaryLinks),
    [onHome],
  );

  const currentLabel = useMemo(() => {
    if (onHome) {
      return (
        homeSections.find((item) => item.id === activeSection)?.label ?? "Home"
      );
    }

    if (pathname === "/about") return "About";
    if (pathname === "/resume") return "Résumé";
    if (pathname === "/contact") return "Contact";

    if (pathname.includes("customer-retention")) {
      return "Customer Retention";
    }

    if (pathname.includes("enterprise-knowledge")) {
      return "Enterprise Knowledge";
    }

    return "Home";
  }, [activeSection, onHome, pathname]);

  const measureNavbar = useCallback(() => {
    const shell = shellRef.current;
    const brand = brandMeasureRef.current;
    const nav = navMeasureRef.current;
    const actions = actionsMeasureRef.current;

    if (!shell || !brand || !nav || !actions) return;

    const available = shell.clientWidth;

    const required =
      brand.scrollWidth +
      nav.scrollWidth +
      actions.scrollWidth +
      96;

    const shouldCollapse = required > available;

    setCollapsed((previous) => {
      if (previous === shouldCollapse) return previous;
      return shouldCollapse;
    });

    if (!shouldCollapse) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    const firstMeasure = window.requestAnimationFrame(measureNavbar);

    const observer = new ResizeObserver(() => {
      measureNavbar();
    });

    if (shellRef.current) {
      observer.observe(shellRef.current);
    }

    window.addEventListener("resize", measureNavbar);

    return () => {
      window.cancelAnimationFrame(firstMeasure);
      observer.disconnect();
      window.removeEventListener("resize", measureNavbar);
    };
  }, [measureNavbar]);

  useEffect(() => {
    if (!onHome) return;

    const updateActiveSection = () => {
      const marker = 82 + window.innerHeight * 0.28;
      let active = "home";

      for (const item of homeSections) {
        const element = document.getElementById(item.id);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= marker) {
          active = item.id;
        }
      }

      setActiveSection(active);
    };

    const firstUpdate =
      window.requestAnimationFrame(updateActiveSection);

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(firstUpdate);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [onHome]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollable > 0
          ? window.scrollY / scrollable
          : 0;

      setScrollProgress(
        Math.max(0, Math.min(1, progress)),
      );
    };

    const firstUpdate =
      window.requestAnimationFrame(updateProgress);

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.cancelAnimationFrame(firstUpdate);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const isDesktopLinkActive = (
    link: (typeof desktopLinks)[number],
  ) => {
    if (onHome) {
      return activeSection === link.id;
    }

    if (link.href === "/") {
      return pathname === "/";
    }

    if (link.href === "/about") {
      return pathname === "/about";
    }

    if (link.href === "/resume") {
      return pathname === "/resume";
    }

    if (link.href === "/contact") {
      return pathname === "/contact";
    }

    return false;
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="site-header smart-header">
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
      />

      <div
        ref={shellRef}
        className="section-shell smart-nav-shell"
      >
        {/*
            NEW KOMOLAFE BRAND
         */}
        <div className="smart-signature smart-signature-logo">
          <KomolafeLogo animated compact />
        </div>

        {!collapsed && (
          <nav
            className="smart-desktop-nav"
            aria-label="Primary navigation"
          >
            {desktopLinks.map((link) => {
              const active =
                isDesktopLinkActive(link);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active ? "active" : ""
                  }
                  aria-current={
                    active
                      ? "location"
                      : undefined
                  }
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <i aria-hidden="true" />
                </Link>
              );
            })}
          </nav>
        )}

        <div className="smart-nav-actions">
          {collapsed && (
            <button
              type="button"
              className="current-section-chip"
              onClick={() =>
                setOpen((value) => !value)
              }
              aria-expanded={open}
              aria-label={`Current section: ${currentLabel}. Open navigation.`}
            >
              <span>{currentLabel}</span>

              <ChevronDown
                size={14}
                className={
                  open ? "rotated" : ""
                }
                aria-hidden="true"
              />
            </button>
          )}

          {!collapsed && (
            <Link
              className="nav-contact-cta"
              href="/contact"
              onClick={closeMenu}
            >
              Contact
            </Link>
          )}

          <ThemeMenu />

          {collapsed && (
            <button
              className="nav-menu-button"
              aria-label={
                open
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={open}
              onClick={() =>
                setOpen((value) => !value)
              }
            >
              {open ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          )}
        </div>

        {/*
            HIDDEN WIDTH MEASUREMENT
         */}
        <div
          className="navbar-measurements"
          aria-hidden="true"
        >
          <div
            ref={brandMeasureRef}
            className="measure-brand measure-brand-logo"
          >
            KOMOLAFE
          </div>

          <div
            ref={navMeasureRef}
            className="measure-nav"
          >
            {desktopLinks.map((link) => (
              <span key={link.href}>
                {link.label}
              </span>
            ))}
          </div>

          <div
            ref={actionsMeasureRef}
            className="measure-actions"
          >
            <span>Contact</span>
            <span>System</span>
          </div>
        </div>
      </div>

      {collapsed && open && (
        <nav
          className="section-shell smart-mobile-nav"
          aria-label="Navigation"
        >
          <div className="smart-mobile-nav-head">
            <span>YOU&apos;RE HERE</span>
            <strong>{currentLabel}</strong>
          </div>

          <div className="smart-mobile-links">
            {(onHome
              ? homeSections
              : secondaryLinks
            ).map((link) => {
              const active = onHome
                ? activeSection === link.id
                : isDesktopLinkActive(
                    link,
                  );

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    active
                      ? "active"
                      : ""
                  }
                  aria-current={
                    active
                      ? "location"
                      : undefined
                  }
                  onClick={closeMenu}
                >
                  <span>
                    {link.label}
                  </span>

                  <span aria-hidden="true">
                    {active
                      ? "●"
                      : "↗"}
                  </span>
                </Link>
              );
            })}
          </div>

          <Link
            className="smart-mobile-contact"
            href="/contact"
            onClick={closeMenu}
          >
            Start a conversation
          </Link>
        </nav>
      )}
    </header>
  );
}