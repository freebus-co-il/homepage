import Image from "next/image";
import QRCode from "qrcode";
import { IconExternalLink } from "@tabler/icons-react";
import { CopyLink } from "@/components/copy-link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { androidListing, androidOptIn, dicts, testersGroup, testersGroupUrl, type Lang } from "@/lib/i18n";

// Joining the Android beta: the testers group, the Play opt-in, then the
// install. Steps 1 and 2 work in any browser signed in to the right Google
// account; step 3 needs the phone, so a desktop visitor gets a QR code.
export async function AndroidPage({ lang }: { lang: Lang }) {
  const t = dicts[lang];
  // Rendered at build time, dark on white so every camera reads it.
  const qr = await QRCode.toString(androidListing, { type: "svg", margin: 0, errorCorrectionLevel: "M" });

  return (
    <>
      <SiteHeader lang={lang} slug="android" />
      <main className="doc-main">
        <div className="container android">
          <header className="android-head">
            <p className="eyebrow">{t.android_eyebrow}</p>
            <h1>{t.android_title}</h1>
            <p className="section-sub">{t.android_sub}</p>
          </header>

          <ol className="cell-grid android-steps">
            <li className="cell">
              <span className="step-num">01</span>
              <h3>{t.android_1t}</h3>
              <p>{t.android_1d}</p>
              <p className="android-mono" dir="ltr">
                {testersGroup}
              </p>
              <a className="btn btn-primary android-action" href={testersGroupUrl}>
                <span>{t.android_1cta}</span>
                <IconExternalLink className="icon" aria-hidden="true" />
              </a>
            </li>
            <li className="cell">
              <span className="step-num">02</span>
              <h3>{t.android_2t}</h3>
              <p>{t.android_2d}</p>
              <a className="btn btn-primary android-action" href={androidOptIn}>
                <span>{t.android_2cta}</span>
                <IconExternalLink className="icon" aria-hidden="true" />
              </a>
            </li>
            <li className="cell">
              <span className="step-num">03</span>
              <h3>{t.android_3t}</h3>
              {/* Phones get the Play badge; a mouse-and-keyboard screen gets the QR code. */}
              <div className="on-phone">
                <p>{t.android_3d}</p>
                <a className="store-badge android-action" href={androidListing}>
                  <Image src={`/assets/badges/google-play-${lang}.png`} alt={t.googlePlayBadge} width={564} height={168} />
                </a>
              </div>
              <div className="on-desktop">
                <p>{t.android_3qr}</p>
                <div className="qr" role="img" aria-label={t.android_qrAlt} dangerouslySetInnerHTML={{ __html: qr }} />
                <p className="android-copy-label">{t.android_3copy}</p>
                <CopyLink href={androidListing} copyLabel={t.android_copy} copiedLabel={t.android_copied} />
              </div>
            </li>
          </ol>

          <p className="android-keep">{t.android_keep}</p>

          <section className="android-faq">
            <h2>{t.android_faqTitle}</h2>
            <div className="faq">
              {(
                [
                  [t.android_q1, t.android_a1],
                  [t.android_q2, t.android_a2],
                  [t.android_q3, t.android_a3],
                ] as const
              ).map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
