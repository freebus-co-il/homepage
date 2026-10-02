"use client";

import { useState } from "react";
import { IconSun } from "@tabler/icons-react";

export function LegalThemeToggle({ label }: { label: string }) {
  const [light, setLight] = useState(false);

  return (
    <button
      type="button"
      className="btn btn-ghost btn-sm legal-theme-toggle"
      aria-pressed={light}
      onClick={() => setLight((value) => !value)}
    >
      <IconSun className="icon" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
}
