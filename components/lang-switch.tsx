"use client";

import { paths, type Lang } from "@/lib/i18n";

// A plain link: each language has its own root layout, so switching is a full
// page load either way. The choice is remembered for the next visit to "/".
export function LangSwitch({ to, label }: { to: Lang; label: string }) {
  return (
    <a
      className="nav-link"
      href={paths[to]}
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
