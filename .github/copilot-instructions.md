# ng-biz-starter — AI Development Guide

## Project Overview
`ng-biz-starter` is a skeleton Angular 21 + Tailwind CSS project for quickly spinning up simple business websites hosted on GitHub Pages. All site content is driven from `src/app/site.config.ts`.

## Stack
- **Angular 21** — standalone components, `@if`/`@for` control flow, `inject()`
- **Tailwind CSS 3** — `darkMode: ['class', 'html.theme-dark']`
- **SCSS** — CSS custom properties for theme switching, semantic utility classes
- **No Angular Material** — intentionally lightweight

## Key File
```
src/app/site.config.ts   ← The only file to edit per client
```

## Architecture

```
src/app/
├── site.config.ts            ← All content (name, nav, services, about, contact)
├── app.component.*           ← Shell: header + router-outlet + footer + back-to-top
├── app.config.ts             ← Bootstraps ThemeService via APP_INITIALIZER
├── app.routes.ts             ← Routes (default: single-page with anchor nav)
├── shared/services/
│   └── theme.service.ts      ← Light/dark/system theme, persists to localStorage
├── header/                   ← Sticky nav, mobile menu, theme toggle
├── footer/                   ← 3-column footer
├── home/                     ← Composes all sections
└── sections/
    ├── hero/                 ← Full-screen hero with retro grid
    ├── services/             ← Emoji card grid
    ├── about/                ← 2-col (with image) or 1-col (without)
    └── contact/              ← Reactive form: Formspree or mailto fallback
```

## Coding Conventions

### Components
- All components are **standalone**
- Use `inject()` for DI instead of constructor injection
- Use `signal()` for mutable UI state
- Use `@if` / `@for` control flow (not `*ngIf` / `*ngFor`)
- Always provide `track` on `@for`

### Styling
- **Use CSS custom properties** (`var(--color-accent)`) for all theme-sensitive colors — never raw hex
- **Semantic utility classes** from `styles.scss`: `text-primary`, `text-secondary`, `bg-surface`, `bg-surface-2`, `border-soft`
- For dark mode in component SCSS: use `:host-context(html.theme-dark)` instead of Tailwind `dark:` utilities inside component files
- Prefer Tailwind utilities for layout, spacing, typography
- Add new semantic tokens to `src/styles.scss` — don't add one-off hex values to component files

### Theme System
- `ThemeService` (`src/app/shared/services/theme.service.ts`) manages `light | dark | system` preference
- Persisted to `localStorage` under key `theme-preference`
- Adds/removes `theme-dark` class on `<html>` element
- Initialized via `APP_INITIALIZER` in `app.config.ts`
- Toggle: `themeService.toggle()` | Set: `themeService.setTheme('dark')`

### Dark Mode Rules
- Every visual element must work in both light and dark themes
- Use CSS variables for colors — they automatically switch with the theme
- Test by toggling via the header sun/moon button
- Browser DevTools: manually toggle `html.theme-dark` class to verify

## Adding a New Section
1. Create component in `src/app/sections/<name>/`
2. Read content from `SITE_CONFIG` (add fields to `site.config.ts` if needed)
3. Import in `home.component.ts` and add `<app-name>` to `home.component.html`
4. Add nav item in `site.config.ts` (`nav` array)

## Deployment — AWS (S3 + CloudFront)

Each client site is deployed to AWS. Infrastructure is managed with AWS CDK (TypeScript) in the `infra/` folder.

```
infra/
├── config.ts          ← Edit this per client (name, billing code, region, domain)
├── lib/site-stack.ts  ← CDK stack: S3 + CloudFront + optional Route53/ACM
├── bin/app.ts         ← CDK app entry point
├── cdk.json           ← CDK config
└── package.json       ← CDK dependencies (separate from the Angular app)
```

### First-time setup for a new client
1. Fill in `infra/config.ts` — client name, project slug, billing code, region, optional domain.
2. Set up OIDC trust between the GitHub repo and AWS IAM (one-time per account).
3. From the `infra/` folder: `npm install && npm run deploy`
4. Copy CDK outputs (`BucketName`, `DistributionId`) into GitHub repo secrets.

### GitHub Actions secrets required
| Secret | Description |
|--------|-------------|
| `AWS_DEPLOY_ROLE_ARN` | IAM role ARN with S3 + CloudFront permissions (OIDC) |
| `AWS_REGION` | e.g. `us-east-1` |
| `AWS_S3_BUCKET` | From CDK output `BucketName` |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | From CDK output `DistributionId` |

### AWS resource tagging
All resources are tagged with `Client`, `Project`, `Environment`, `BillingCode`, and `ManagedBy` for per-client cost allocation via AWS Cost Explorer.

### Deploy workflow
CI passes → `deploy-aws.yml` triggers → S3 sync + CloudFront invalidation (OIDC, no stored keys).

## Development Commands
```bash
npm start    # Dev server at http://localhost:4200
npm run build  # Production build
npm test     # Unit tests (Karma + Jasmine)
```

### CDK commands (run from infra/)
```bash
npm run synth    # Preview CloudFormation output
npm run diff     # Show what will change
npm run deploy   # Provision/update AWS resources
npm run destroy  # Tear down (S3 bucket is RETAIN — delete manually)
```
