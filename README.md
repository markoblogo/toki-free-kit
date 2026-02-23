# toki pona free kit + free translations

Live: https://toki-free.abvx.xyz/en (EN) · https://toki-free.abvx.xyz/tp (TP)

A small bilingual landing page that collects free toki pona reader kits and free translations, with direct downloads, teasers, and “learn more” pages for SEO.

## What’s included

- **The Toki Pona Reader’s Kit** — a free starter kit built from texts used in the Stoic Wisdom in toki pona project (includes *The Golden Verses of Pythagoras*).
- **Chinese Wisdom in toki pona (Free Kit)** — a free entry kit that previews the Chinese Wisdom in toki pona series (includes *Mozi: Universal Love*).
- **Heart Sutra in toki pona (Free Translation)** — a free bonus translation edition (Chinese original + English reference + toki pona + sitelen-ready layout).

## Languages

- English: `/en`
- toki pona: `/tp`

## Optional toki pona script layers (sitelen pona / sitelen emoji)

This project can use the `sitelen-layer-plugin` for the toki pona locale (`/tp`):

- Plugin repo: <https://github.com/markoblogo/sitelen-layer-plugin>
- Scope: display-layer enhancement for existing toki pona text (`latin`, `sitelen-pona`, `sitelen-emoji`)
- Not a translator: it does not translate other languages into toki pona

## Tech stack

- Next.js (App Router) + TypeScript
- CSS Modules
- Dictionary-based i18n (JSON)
- Hosted on Vercel

## Project structure

- `src/app/[lang]/page.tsx` — main landing per language
- `src/app/[lang]/books/[slug]/page.tsx` — “learn more” pages per book
- `src/app/[lang]/legal/page.tsx` / `privacy/page.tsx` — legal pages
- `src/dictionaries/en.json` / `tp.json` — all visible copy (hero, sections, FAQ, book texts)
- `src/data/books.ts` — book metadata (slugs, links, assets)
- `public/books/<slug>/...` — book assets (covers, promo images, PDFs)

## Content editing

### Update texts
Edit:
- `src/dictionaries/en.json`
- `src/dictionaries/tp.json`

### Update books / links
Edit:
- `src/data/books.ts`

### Update images / PDFs
Put assets in:
- `public/books/<slug>/`

Recommended naming:
- `cover.png`
- `promo.jpg`
- `<slug>.pdf`

## Development

```bash
npm install
npm run dev
npm run build
```

## **License**
MIT (see LICENSE).
