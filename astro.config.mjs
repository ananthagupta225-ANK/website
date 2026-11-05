// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ---------------------------------------------------------------------------
// WHERE THIS SITE IS PUBLISHED
//
// Both values can be overridden with environment variables at build time, so
// the same code deploys unchanged to GitHub Pages, Cloudflare Pages or a
// custom domain.
//
//   SITE_URL    Public origin, no trailing slash.
//   BASE_PATH   Sub-folder the site is served from, or empty for the root.
//
// Defaults below target the current GitHub Pages project site:
//   https://ananthagupta225-ank.github.io/website/
//
// For a custom domain or Cloudflare Pages (served from the root), build with:
//   SITE_URL=https://www.ankhrservices.com BASE_PATH= npm run build
// ---------------------------------------------------------------------------

const SITE_URL = process.env.SITE_URL ?? 'https://ananthagupta225-ank.github.io';
const BASE_PATH = process.env.BASE_PATH ?? '/website';

export default defineConfig({
  site: SITE_URL,
  // Astro expects `undefined` (not '') when the site lives at the domain root.
  base: BASE_PATH === '' || BASE_PATH === '/' ? undefined : BASE_PATH,
  trailingSlash: 'always',
  build: {
    // Produces /services/payroll-management/index.html -> clean URLs on
    // GitHub Pages and Cloudflare Pages alike.
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
});
