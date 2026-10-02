"use client";

import type { Lang } from "@/lib/i18n";

// A plain link: each language has its own root layout, so switching is a full
// page load either way. The choice is remembered for the next visit.
export function LangSwitch({ to, href, label }: { to: Lang; href: string; label: string }) {
  return (
    <a
      className="nav-link"
      href={href}
      hrefLang={to}
      lang={to}
      onClick={() => {
        try {
          localStorage.setItem("lang", to);
        } catch {}
      }}
    >
      {label}
    </a>
  );
}
