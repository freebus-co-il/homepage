"use client";

import { useSyncExternalStore, type ReactNode } from "react";

// The site is a static export, so the device is only known in the browser.
// Android opens the store listing in the Play app; everything else (desktop,
// iOS, unknown) gets the web opt-in page.
const webLink = "https://play.google.com/apps/testing/il.co.freebus";
const androidLink = "https://play.google.com/store/apps/details?id=il.co.freebus";

const subscribe = () => () => {};
const isAndroid = () => /android/i.test(navigator.userAgent);

export function AndroidBetaLink({ className, children }: { className?: string; children: ReactNode }) {
  const android = useSyncExternalStore(subscribe, isAndroid, () => false);

  return (
    <a className={className} href={android ? androidLink : webLink}>
      {children}
    </a>
  );
}
