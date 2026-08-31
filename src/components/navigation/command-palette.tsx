"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { BriefcaseBusiness, FileText, Home, Mail, Search, UserRound } from "lucide-react";

const commands = [
  { label: "Home", href: "/", group: "Navigate", icon: Home },
  { label: "Customer Retention Intelligence", href: "/work/customer-retention-intelligence", group: "Projects", icon: BriefcaseBusiness },
  { label: "Enterprise Knowledge Intelligence", href: "/work/enterprise-knowledge-intelligence", group: "Projects", icon: BriefcaseBusiness },
  { label: "About Komolafe", href: "/about", group: "Navigate", icon: UserRound },
  { label: "Résumé", href: "/resume", group: "Navigate", icon: FileText },
  { label: "Contact", href: "/contact", group: "Navigate", icon: Mail },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    return value
      ? commands.filter((item) => item.label.toLowerCase().includes(value))
      : commands;
  }, [query]);

  const navigate = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  if (!open) return null;

  const groups = ["Projects", "Navigate"];

  return (
    <div className="command-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
      <div
        className="command-panel command-panel-v3"
        role="dialog"
        aria-modal="true"
        aria-label="Portfolio search"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="command-head">
          <span>PORTFOLIO SEARCH</span>
          <kbd>ESC</kbd>
        </div>

        <div className="command-input-row command-input-row-v3">
          <Search size={18} />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, pages and résumé..."
          />
        </div>

        <div className="command-list command-list-v3">
          {groups.map((group) => {
            const items = filtered.filter((item) => item.group === group);
            if (!items.length) return null;

            return (
              <div className="command-group" key={group}>
                <span>{group}</span>
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button key={item.href} onClick={() => navigate(item.href)}>
                      <span className="command-item-main">
                        <Icon size={16} />
                        <span>{item.label}</span>
                      </span>
                      <span>↵</span>
                    </button>
                  );
                })}
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="command-empty">
              No match. The portfolio refuses to hallucinate one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
