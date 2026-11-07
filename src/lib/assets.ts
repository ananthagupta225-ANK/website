/* ===========================================================================
   ASSET PRESENCE CHECK
   ---------------------------------------------------------------------------
   The redesign depends on artwork the owner still has to supply: the approved
   ANK logo, the circular mark extracted from it, and licensed photographs.

   Rather than ship broken <img> tags or invent substitutes, every slot is
   checked at BUILD time. A file that exists is used; a file that does not is
   replaced by a branded fallback panel, so the layout always looks finished.

   Drop the real file at the documented path and it appears on the next build —
   no code change needed.
   =========================================================================== */

import { existsSync } from 'node:fs';
import { join, isAbsolute } from 'node:path';

/* Resolved from the working directory, which is the project root for both
   `astro dev` and `astro build`. Do NOT derive this from import.meta.url —
   this module is bundled into dist/ at build time, so a relative path would
   point at dist/public/ and every asset would read as missing. */
const PUBLIC_DIR = join(process.cwd(), 'public');

/** True when a file exists in public/ at the given site-absolute path. */
export const hasAsset = (path: string | undefined | null): boolean => {
  if (!path || isAbsolute(path) === false) {
    if (!path) return false;
  }
  return existsSync(join(PUBLIC_DIR, path.replace(/^\/+/, '')));
};

/**
 * Picks the best available file for an image slot.
 * Prefers a .webp sibling when one has been generated alongside the original.
 */
export const resolveImage = (
  path: string | undefined | null
): { src: string; webp: string | null } | null => {
  if (!hasAsset(path)) return null;
  const src = path as string;
  const webp = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  return { src, webp: webp !== src && hasAsset(webp) ? webp : null };
};
