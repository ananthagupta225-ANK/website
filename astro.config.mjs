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
// Defaults below target the live custom domain, served from the root.
// The GitHub Actions workflow overrides them with whatever
// actions/configure-pages reports, so a move back to a project sub-path
// (…github.io/website/) keeps working without a code change.
// ---------------------------------------------------------------------------

const SITE_URL = process.env.SITE_URL ?? 'https://ankhrservices.com';
const BASE_PATH = process.env.BASE_PATH ?? '';

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
