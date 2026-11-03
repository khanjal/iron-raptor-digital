// Post-build step for GitHub Pages.
// - Copies index.html into a folder for each app route (e.g. projects/index.html) so those
//   URLs are served with a 200 status instead of falling through to 404.html.
// - Copies index.html to 404.html so any other deep link still loads the app.
// - With --preview, drops CNAME so the site is served at khanjal.github.io/iron-raptor-digital/
//   instead of redirecting to the custom domain.
import { copyFileSync, mkdirSync, rmSync } from 'node:fs';

const out = 'dist/iron-raptor-digital/browser';
const routes = ['projects']; // keep in sync with src/app/app.routes.ts

for (const route of routes) {
  mkdirSync(`${out}/${route}`, { recursive: true });
  copyFileSync(`${out}/index.html`, `${out}/${route}/index.html`);
}

copyFileSync(`${out}/index.html`, `${out}/404.html`);

if (process.argv.includes('--preview')) {
  rmSync(`${out}/CNAME`, { force: true });
}
