import { Glyph } from "@/components/icons";
import { IPhone } from "@/components/iphone";
import { LangSwitch } from "@/components/lang-switch";
import {
  IconBrandGithub,
  IconCheck,
} from "@tabler/icons-react";
import { dicts, paths, type Dict, type Lang } from "@/lib/i18n";

const repo = "https://github.com/freebus-co-il/freebus";

// Operators, as named in the national timetable feed.
const operators: { he: string; en: string }[] = [
  { he: "אגד", en: "Egged" },
  { he: "דן", en: "Dan" },
  { he: "קווים", en: "Kavim" },
  { he: "מטרופולין", en: "Metropoline" },
  { he: "סופרבוס", en: "Superbus" },
  { he: "רכבת ישראל", en: "Israel Railways" },
  { he: "נתיב אקספרס", en: "Nateev Express" },
  { he: "אלקטרה אפיקים", en: "Electra Afikim" },
  { he: "תנופה", en: "Tnufa" },
  { he: "אקסטרה", en: "Extra" },
  { he: "דן בדרום", en: "Dan BaDarom" },
  { he: "דן באר שבע", en: "Dan Be'er Sheva" },
  { he: "בית שמש אקספרס", en: "Beit Shemesh Express" },
];

const shot = (name: string, lang: Lang, t: Dict) => ({
  src: `/assets/screens/${name}-${lang}.webp`,
  alt: t[`alt_${name}` as keyof Dict],
});

function Head({ eyebrow, title, text, center }: { eyebrow?: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "section-head center" : "section-head"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-sub">{text}</p>}
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <IconCheck className="icon" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LandingPage({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  const other: Lang = lang === "he" ? "en" : "he";
  const rows = [operators.slice(0, 7), operators.slice(7)];

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href={paths[lang]} aria-label={t.brand}>
            <Glyph />
            <span>{t.brand}</span>
          </a>
          <nav className="header-end">
            <LangSwitch to={other} label={t.switchTo} />
            <a className="btn btn-ghost btn-sm" href={repo}>
              <IconBrandGithub className="icon gh" />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <h1 className="display">
              <span>{t.h1a}</span>
              <strong>{t.h1b}</strong>
            </h1>
            <p className="hero-sub">{t.lede}</p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href={repo}>
                <IconBrandGithub className="icon gh" />
                <span>{t.ctaGithub}</span>
              </a>
              <p className="hero-note">{t.noAccount}</p>
            </div>
          </div>
          <div className="hero-preview">
            <div className="hero-phone side start">
              <IPhone screens={[shot("home", lang, t)]} />
            </div>
            <div className="hero-phone middle">
              <IPhone screens={[shot("plan", lang, t)]} />
            </div>
            <div className="hero-phone side end">
              <IPhone screens={[shot("realtime", lang, t)]} />
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="container">
            <Head title={t.opsTitle} text={t.opsSub} />
          </div>
          <div className="marquee" aria-label={t.opsTitle}>
            {rows.map((row, i) => (
              <div key={i} className={i ? "marquee-row reverse" : "marquee-row"}>
                <div className="marquee-track">
                  {[0, 1].map((copy) => (
                    <div key={copy} className="marquee-group" aria-hidden={copy === 1}>
                      {[...row, ...row].map((op, j) => (
                        <span key={j} className="op-chip">
                          {op[lang]}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sec">
          <div className="container split">
            <div>
              <Head eyebrow={t.plan_phase} title={t.plan_t} text={t.plan_d} />
              <Checklist items={[t.plan_p1, t.plan_p2, t.plan_p3]} />
            </div>
            <div className="phone-tile">
              <IPhone screens={[shot("plan", lang, t)]} />
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="container split">
            <div className="phone-tile">
              <IPhone screens={[shot("realtime", lang, t)]} />
            </div>
            <div>
              <Head eyebrow={t.live_phase} title={t.live_t} text={t.live_d} />
              <Checklist items={[t.live_p1, t.live_p2, t.live_p3]} />
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="container">
            <div className="peek-grid">
              {(
                [
                  ["board", "station"],
                  ["leave", "lock"],
                  ["yours", "home"],
                ] as const
              ).map(([key, name]) => (
                <article className="tile peek" key={key}>
                  <p className="eyebrow">{t[`${key}_phase`]}</p>
                  <h3>{t[`${key}_t`]}</h3>
                  <p className="peek-text">{t[`${key}_d`]}</p>
                  <Checklist items={[t[`${key}_p1`], t[`${key}_p2`], t[`${key}_p3`]]} />
                  <div className="peek-phone">
                    <IPhone screens={[shot(name, lang, t)]} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="container">
            <Head eyebrow={t.ctbEyebrow} title={t.ctbTitle} text={t.ctbSub} />
            <div className="cell-grid steps">
              {[
                { title: t.ctb1t, text: t.ctb1d },
                { title: t.ctb2t, text: t.ctb2d },
                { title: t.ctb3t, text: t.ctb3d },
              ].map((step, i) => (
                <div className="cell" key={step.title}>
                  <span className="step-num">0{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
            <div className="section-actions">
              <a className="btn btn-primary" href={`${repo}/issues/new?template=feature_request.yml`}>
                {t.ctbIssue}
              </a>
              <a className="btn btn-ghost" href={`${repo}/blob/main/.github/CONTRIBUTING.md`}>
                {t.ctbGuide}
              </a>
            </div>
          </div>
        </section>

        <section className="sec cta">
          <div className="container">
            <h2 className="display">{t.ctaTitle}</h2>
            <p className="cta-sub">{t.ctaSub}</p>
            <div className="cta-actions">
              <a className="btn btn-primary btn-lg" href={repo}>
                <IconBrandGithub className="icon gh" />
                <span>{t.ctaGithub}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>{t.license}</span>
          <span>
            {t.mapAttribution} <a href="https://www.openstreetmap.org/copyright">{t.mapContributors}</a>
          </span>
        </div>
      </footer>
    </>
  );
}
