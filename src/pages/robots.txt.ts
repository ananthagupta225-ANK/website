import type { APIRoute } from 'astro';
import { abs } from '../lib/url';

/* robots.txt is generated so the sitemap URL always matches whatever origin
   and base path the site was built for.

   Note: search engines only read robots.txt from the DOMAIN ROOT. On a GitHub
   Pages *project* site (…github.io/website/) this file is served at
   /website/robots.txt and will be ignored — submit the sitemap URL directly in
   Search Console instead. On a custom domain or Cloudflare Pages it works
   normally. */

export const GET: APIRoute = ({ site }) =>
  new Response(
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${abs('/sitemap-index.xml', site)}`, ''].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
