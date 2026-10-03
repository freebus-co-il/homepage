import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { LegalThemeToggle } from "@/components/legal-theme-toggle";
import { dicts, type Lang, type Slug } from "@/lib/i18n";

// One language's copy of a text page: the privacy policy, the terms of use
// or the support page.
export type Doc = {
  title: string;
  // For <meta name="description">.
  description: string;
  // Legal pages carry the date they last changed; support doesn't.
  updated?: string;
  body: ReactNode;
};

export function DocPage({ lang, slug, doc }: { lang: Lang; slug: Slug; doc: Doc }) {
  const t = dicts[lang];
  return (
    <>
      <SiteHeader lang={lang} slug={slug} />
      <main className="doc-main">
        <article className="container doc">
          <header className="doc-head">
            <div className="doc-tools">
              <p className="eyebrow">{slug === "support" ? t.supportEyebrow : t.legalEyebrow}</p>
              {(slug === "privacy" || slug === "terms") && (
                <LegalThemeToggle key={`${lang}/${slug}`} lightLabel={t.legalLightMode} darkLabel={t.legalDarkMode} />
              )}
            </div>
            <h1>{doc.title}</h1>
            {doc.updated && (
              <p className="doc-updated">
                {t.updated}: {doc.updated}
              </p>
            )}
          </header>
          <div className="doc-body">{doc.body}</div>
        </article>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
