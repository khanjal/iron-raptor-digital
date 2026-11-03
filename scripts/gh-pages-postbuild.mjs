// Post-build step for GitHub Pages.
// - Copies index.html to 404.html so deep links like /projects load the app.
// - With --preview, drops CNAME so the site is served at khanjal.github.io/iron-raptor-digital/
//   instead of redirecting to the custom domain (still on WordPress until DNS moves).
import { copyFileSync, rmSync } from 'node:fs';

const out = 'dist/iron-raptor-digital/browser';

copyFileSync(`${out}/index.html`, `${out}/404.html`);

if (process.argv.includes('--preview')) {
  rmSync(`${out}/CNAME`, { force: true });
}
