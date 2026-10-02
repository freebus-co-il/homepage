# freebus.co.il

The landing page for [FreeBus](https://github.com/freebus-co-il/freebus), a free, open-source public transit app for Israel.

Built with Next.js (App Router) and TypeScript and exported as a static site. Hebrew is the default language; English lives at `/en/`.

## Running it

Requires Node.js 22 or later.

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run lint
npm run typecheck
npm run build      # writes the static site to out/
```

`out/` is plain HTML, CSS, JS and images. Any static host can serve it, with no Node.js server. `trailingSlash` is on, so each page is a folder with an `index.html`.

## How it's put together

| Path | What's there |
| --- | --- |
| `app/(he)/page.tsx` | `/`, the Hebrew page |
| `app/(en)/en/page.tsx` | `/en/`, the English page |
| `app/(he)/layout.tsx`, `app/(en)/layout.tsx` | One root layout per language, so each page is prerendered with the right `lang` and `dir` |
| `components/landing-page.tsx` | The page itself, shared by both languages |
| `components/root-layout.tsx` | Fonts, metadata and the language redirect |
| `components/iphone.tsx` | The iPhone frame around the screenshots, drawn in CSS |
| `lib/i18n.ts` | All copy, in Hebrew and English |
| `app/globals.css` | All styles |
| `public/assets/screens/` | App screenshots, one per screen per language (`plan-he.webp`, `plan-en.webp`, …) |

### Language

`/` serves Hebrew. Before first paint, a small script in `<head>` sends visitors who chose English earlier, or who open `/?lang=en`, to `/en/`. A link to `/en/` always shows English, unless it carries `?lang=he`.

Every string lives in `lib/i18n.ts`. The Hebrew dictionary is typed against the English one, so a missing translation fails the build.

### Screenshots

Screenshots come from the iOS Simulator (iPhone 17 Pro, 1206×2622), scaled to 640px wide and saved as WebP. To replace one, overwrite both language versions under `public/assets/screens/`, keeping the file names.

## Contributing

Issues and pull requests are welcome. For anything about the app itself (features, bugs, data), please use the [main FreeBus repository](https://github.com/freebus-co-il/freebus), which has the [contributing guide](https://github.com/freebus-co-il/freebus/blob/main/.github/CONTRIBUTING.md) and [code of conduct](https://github.com/freebus-co-il/freebus/blob/main/.github/CODE_OF_CONDUCT.md).

## License

[MIT](LICENSE).

Third-party material:

- **Fonts:** [Google Sans](https://fonts.google.com/specimen/Google+Sans), [Google Sans Code](https://fonts.google.com/specimen/Google+Sans+Code) and [Cascadia Mono](https://fonts.google.com/specimen/Cascadia+Mono), from Google Fonts under the SIL Open Font License. They're downloaded at build time by `next/font` and served with the site; they aren't stored in this repository.
- **Icons:** [Tabler Icons](https://tabler.io/icons), MIT.
- **Data:** timetable data from Israel's Ministry of Transport. Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright).
- **Screenshots:** the screenshots are of the FreeBus iOS app, whose map view is Apple Maps.
