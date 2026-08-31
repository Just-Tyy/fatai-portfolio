"use client";

import { useState, useSyncExternalStore } from "react";
import { Check, Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const options = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Laptop },
] as const;

const subscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function ThemeMenu() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();

  /*
   * IMPORTANT:
   * During SSR we intentionally render a stable "System" trigger.
   * Once hydration completes, we can safely display the real current theme.
   * This prevents the server from rendering Laptop/System while the browser
   * immediately renders Sun/Light (or Moon/Dark).
   */
  const currentValue = isClient ? (theme ?? "system") : "system";

  const current =
    options.find((option) => option.value === currentValue) ?? options[2];

  const CurrentIcon = current.icon;

  const currentLabel =
    current.value === "system" && isClient
      ? `System`
      : current.label;

  const resolvedLabel =
    current.value === "system" && isClient
      ? resolvedTheme === "dark"
        ? "System · Dark"
        : resolvedTheme === "light"
          ? "System · Light"
          : "System"
      : currentLabel;

  return (
    <div className="theme-menu-wrap">
      <button
        className="theme-trigger"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Appearance: ${resolvedLabel}`}
        title={`Appearance: ${resolvedLabel}`}
      >
        <CurrentIcon size={15} aria-hidden="true" />
        <span>{currentLabel}</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            className="theme-menu-scrim"
            aria-label="Close appearance menu"
            onClick={() => setOpen(false)}
          />

          <div className="theme-menu" role="menu" aria-label="Choose appearance">
            <span className="theme-menu-label">APPEARANCE</span>

            {options.map((option) => {
              const Icon = option.icon;
              const selected = isClient && currentValue === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={selected}
                  onClick={() => {
                    setTheme(option.value);
                    setOpen(false);
                  }}
                >
                  <span className="theme-option-main">
                    <Icon size={16} aria-hidden="true" />
                    <span>{option.label}</span>
                  </span>

                  {selected && <Check size={14} aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
