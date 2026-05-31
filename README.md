# ng-biz-starter

An Angular 21 + Tailwind CSS skeleton for quickly spinning up simple business websites hosted on GitHub Pages.

## Stack

- **Angular 21** — standalone components, new `@if`/`@for` control flow
- **Tailwind CSS 3** — dark retro theme, mobile-first
- **SCSS** — per-component style files ready to extend
- **Formspree** — serverless contact form (optional, free tier available)
- **GitHub Pages** — one-command deploy via `angular-cli-ghpages`

## Getting started

```bash
# 1. Clone / copy this repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git my-client-site
cd my-client-site

# 2. Install dependencies
npm install

# 3. Customize (see below)

# 4. Run locally
npm start
```

## Customization

**Everything is driven from a single file:**

```
src/app/site.config.ts
```

Open it and fill in:

| Field | Description |
|---|---|
| `business.name` | Displayed in the header, footer, and page `<title>` |
| `business.tagline` | Short line used in the footer |
| `hero.*` | Headline, sub-headline, and CTA buttons |
| `services[]` | Array of service cards (icon emoji + title + description) |
| `about.*` | Paragraphs, stat highlights, optional image path |
| `contact.formspreeId` | Formspree form ID for in-browser email delivery |
| `social.*` | Email, phone, LinkedIn, GitHub, Instagram, Facebook URLs |
| `nav[]` | Navigation links (each `fragment` maps to a section `id`) |

### Contact form

The contact form uses [Formspree](https://formspree.io) for serverless email delivery:

1. Sign up for a free Formspree account
2. Create a new form → copy the form ID (looks like `xpwzdzzl`)
3. Set `formspreeId: 'xpwzdzzl'` in `site.config.ts`

If `formspreeId` is `null`, clicking **Send Message** opens the visitor's default mail client instead (`mailto:` fallback).

### Adding/removing sections

- Add items to `services[]` in `site.config.ts` — the grid grows automatically
- Remove a section by deleting the `<app-section>` tag from `src/app/home/home.component.html` and the matching nav item from `site.config.ts`
- Add a new section: create a component in `src/app/sections/`, import it in `home.component.ts`, and add it to the template

### Changing the theme

Edit `tailwind.config.js`:
- `colors.accent.DEFAULT` — the primary brand/highlight colour (default: `#00D9FF` cyan)
- `colors.primary.DEFAULT` — the page background (default: `#111111`)
- Any Tailwind utility in `src/styles.scss` under `@layer components`

### Custom domain (optional)

To use a custom domain with GitHub Pages:

1. Add a `CNAME` file to the project root containing your domain, e.g. `www.mybusiness.com`
2. Add it to the `assets` array in `angular.json`:
   ```json
   { "glob": "CNAME", "input": ".", "output": "." }
   ```
3. Point your domain's DNS to GitHub Pages

## Deploying to GitHub Pages

### First deploy

```bash
# Build and deploy (uses / as base-href — correct for custom domains)
npm run deploy
```

This runs `ng build --configuration production` then `npx angular-cli-ghpages --dir=dist/biz-starter/browser`.

### Repo subdirectory (no custom domain)

If hosting at `https://username.github.io/repo-name/`, change the base-href:

```bash
ng build --configuration production --base-href /repo-name/
npx angular-cli-ghpages --dir=dist/biz-starter/browser
```

Or update the `build:gh-pages` script in `package.json` permanently.

### Subsequent deploys

```bash
npm run deploy
```

> **Note:** GitHub Pages serves static files only. No server-side rendering is used — the build produces a plain browser SPA.

## Adding sub-page routes (optional)

The default setup uses a single route (`/`) with anchor navigation. If you add Angular routes (e.g. `/blog`, `/team`), GitHub Pages needs help serving them since there is no server to redirect all requests to `index.html`.

**Option A — Hash location strategy** (easiest):

```typescript
// app.config.ts
provideRouter(routes, withHashLocation())
```

URLs will look like `/#/blog`.

**Option B — 404 redirect** (clean URLs):

Copy `dist/biz-starter/browser/index.html` to `dist/biz-starter/browser/404.html` after building. GitHub Pages serves `404.html` for unknown paths, and your Angular router handles the rest.

## Project structure

```
src/
├── index.html              ← Update <title> and <meta description>
├── styles.scss             ← Global Tailwind + component styles
└── app/
    ├── site.config.ts      ← ★ THE file to edit for every new site
    ├── app.component.*     ← Shell (header + router-outlet + footer + back-to-top)
    ├── app.routes.ts       ← Route definitions
    ├── header/             ← Sticky nav, mobile menu
    ├── footer/             ← Footer with nav, social links, copyright
    ├── home/               ← Composes all sections
    └── sections/
        ├── hero/           ← Full-screen hero
        ├── services/       ← Service cards grid
        ├── about/          ← About with optional image + stat highlights
        └── contact/        ← Contact form (Formspree or mailto)
```
