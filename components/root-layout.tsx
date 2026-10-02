import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Cascadia_Mono, Google_Sans, Google_Sans_Code } from "next/font/google";
import type { ReactNode } from "react";
import { dicts, paths, type Lang } from "@/lib/i18n";
import "@/app/globals.css";

const googleSans = Google_Sans({ subsets: ["latin", "hebrew"], variable: "--font-google-sans" });
const googleSansCode = Google_Sans_Code({ subsets: ["latin"], variable: "--font-google-sans-code" });
// Google Sans Code has no Hebrew; Cascadia Mono supplies just those letters.
const cascadiaMono = Cascadia_Mono({ subsets: ["hebrew"], variable: "--font-cascadia-mono" });

// GA4 measurement ID. Not a secret: it ships in every page's HTML anyway.
// Left out of `next dev` so local work doesn't show up in the stats.
const gaId = "G-CN3617M6EY";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export function metadataFor(lang: Lang): Metadata {
  const t = dicts[lang];
  return {
    metadataBase: new URL("https://freebus.co.il"),
    title: t.title,
    description: t.description,
    alternates: {
      canonical: paths[lang],
      languages: { he: paths.he, en: paths.en, "x-default": paths.he },
    },
    openGraph: {
      title: t.title,
      description: t.ogDescription,
      url: paths[lang],
      // 1200×630, one per language (public/assets/og-{he,en}.jpg).
      images: { url: `/assets/og-${lang}.jpg`, width: 1200, height: 630, alt: `${t.h1a} ${t.h1b}` },
      locale: lang === "he" ? "he_IL" : "en_US",
    },
    twitter: { card: "summary_large_image", images: `/assets/og-${lang}.jpg` },
    icons: {
      icon: { url: "/assets/favicon.svg", type: "image/svg+xml" },
      apple: "/assets/apple-touch-icon.png",
    },
  };
}

// Runs before first paint, so a visitor who chose English never sees a flash
// of Hebrew. Only "/" auto-switches; an /en/ link is always honoured.
// ?lang= works on both, as it did on the static page.
const redirectScript: Record<Lang, string> = {
  he: `try{var q=new URLSearchParams(location.search).get("lang");if((q||localStorage.getItem("lang"))==="en")location.replace("${paths.en}")}catch(e){}`,
  en: `try{if(new URLSearchParams(location.search).get("lang")==="he")location.replace("${paths.he}")}catch(e){}`,
};

export function RootLayout({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} dir={lang === "he" ? "rtl" : "ltr"} className={`${googleSans.variable} ${googleSansCode.variable} ${cascadiaMono.variable}`}>
      {/* A plain blocking script, not next/script: beforeInteractive is queued for
          the runtime in the App Router and would run after first paint. */}
      {/* eslint-disable-next-line @next/next/no-head-element -- root layout head, App Router */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: redirectScript[lang] }} />
      </head>
      <body>{children}</body>
      {gaId && process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
