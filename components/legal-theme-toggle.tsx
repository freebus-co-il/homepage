"use client";

import { useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

// The label names the mode the button switches to, so it isn't aria-pressed;
// data-light drives the light palette in globals.css.
export function LegalThemeToggle({ lightLabel, darkLabel }: { lightLabel: string; darkLabel: string }) {
  const [light, setLight] = useState(false);
  const Icon = light ? IconMoon : IconSun;

  return (
    <button
      type="button"
      className="btn btn-ghost btn-sm legal-theme-toggle"
      data-light={light || undefined}
      onClick={() => setLight((value) => !value)}
    >
      <Icon className="icon" aria-hidden="true" />
      <span>{light ? darkLabel : lightLabel}</span>
    </button>
  );
}
