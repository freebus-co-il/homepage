import { IconBrandGithub } from "@tabler/icons-react";
import { Glyph } from "@/components/icons";
import { LangSwitch } from "@/components/lang-switch";
import { dicts, pathFor, type Lang, type Slug } from "@/lib/i18n";

export const repo = "https://github.com/freebus-co-il/freebus";

// `slug` is the page being shown, so the language switch lands on the same
// page in the other language.
export function SiteHeader({ lang, slug }: { lang: Lang; slug?: Slug }) {
  const t = dicts[lang];
  const other: Lang = lang === "he" ? "en" : "he";
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={pathFor(lang)} aria-label={t.brand}>
          <Glyph />
          <span>{t.brand}</span>
        </a>
        <nav className="header-end">
          <LangSwitch to={other} href={pathFor(other, slug)} label={t.switchTo} />
          <a className="btn btn-ghost btn-sm" href={repo}>
            <IconBrandGithub className="icon gh" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

const footerLinks: Slug[] = ["privacy", "terms", "support"];

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>{t.license}</span>
        <nav className="footer-links">
          {footerLinks.map((slug) => (
            <a key={slug} href={pathFor(lang, slug)}>
              {t[`nav_${slug}`]}
            </a>
          ))}
        </nav>
        <span>
          {t.mapAttribution} <a href="https://www.openstreetmap.org/copyright">{t.mapContributors}</a>
        </span>
      </div>
    </footer>
  );
}
