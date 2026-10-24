"use client";

import { useState } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";

// A link shown as text beside a copy button, for a visitor who would rather
// send it to their phone than scan a QR code.
export function CopyLink({ href, copyLabel, copiedLabel }: { href: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const Icon = copied ? IconCheck : IconCopy;

  async function copy() {
    try {
      await navigator.clipboard.writeText(href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // No clipboard access: the link is still there to select by hand.
    }
  }

  return (
    <div className="copy-link" dir="ltr">
      <a className="copy-link-url" href={href}>
        {href}
      </a>
      <button type="button" className="btn btn-ghost btn-sm" onClick={copy} aria-live="polite">
        <Icon className="icon" aria-hidden="true" />
        <span>{copied ? copiedLabel : copyLabel}</span>
      </button>
    </div>
  );
}
