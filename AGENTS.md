<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## No em dashes

**Never write an em dash (U+2014 EM DASH) anywhere in this repository.** This
covers code, comments, string literals, UI copy in every language (Hebrew
included), Markdown, MDX content, commit messages, and PR descriptions. It
also covers its encoded forms: `&mdash;`, `&#8212;`, `&#x2014;`, `\u2014`.

Do not swap in a stand-in either: no en dash (U+2013), no spaced hyphen
(` - `), no `--`. Rewrite the sentence with ordinary punctuation instead:

- a comma, or a pair of commas, for an aside
- a colon before an explanation, an example, or a list
- a semicolon or a full stop between two complete clauses
- parentheses for a side note

The one exception is the `nextjs-agent-rules` block above: `next dev`
rewrites it from Next.js's own template on every run, so edits to it do not
stick. Leave it alone.

Before you finish any change, run this from the repo root; it must print
nothing:

```bash
git grep -n $'\xe2\x80\x94' -- ':!AGENTS.md'
```
