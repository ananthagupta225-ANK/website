/* ===========================================================================
   URL HELPERS
   ---------------------------------------------------------------------------
   The site may be served from the domain root (Cloudflare Pages, a custom
   domain) or from a sub-folder (a GitHub Pages project site such as
   /website/). Astro does NOT rewrite hrefs automatically, so every internal
   link and asset path goes through `href()`.

   Write paths as if the site were at the root — href('/services/') — and this
   adds the sub-folder when there is one.
   =========================================================================== */

/** '' at the domain root, '/website' when served from a sub-folder. */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Internal link or asset path, prefixed with the base path when needed. */
export const href = (path: string): string =>
  path.startsWith('/') ? `${BASE}${path}` : path;

/** Absolute URL for canonical tags, Open Graph and JSON-LD. */
export const abs = (path: string, site: URL | undefined): string =>
  new URL(href(path), site ?? 'http://localhost').href;
