// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ---------------------------------------------------------------------------
// IMPORTANT (one-time setup before going live)
//
//  `site`  Set this to the final public URL, with no trailing slash.
//          It is used for the sitemap, robots.txt and social-share metadata.
//          e.g. 'https://www.ankhrservices.com'
//
//  `base`  Leave as-is for Cloudflare Pages or a GitHub Pages *user/custom
//          domain* site. ONLY set it if you deploy to a GitHub *project*
//          page served from a sub-folder, e.g. base: '/ank-hr-services'.
// ---------------------------------------------------------------------------

export default defineConfig({
  site: 'https://www.ankhrservices.com',
  trailingSlash: 'always',
  build: {
    // Produces /services/payroll-management/index.html -> clean URLs on
    // Cloudflare Pages and GitHub Pages alike.
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
});
