# Assets

The redesign is built and every image slot is filled. This file records what
is in place, where it came from, and what is still worth improving.

Every slot is checked at build time: a file that exists is used, one that does
not falls back to a branded navy panel. So any image here can be replaced by
dropping a new file at the same path and rebuilding — **no code change
needed** — and a missing file never renders as broken.

---

## 1. Brand artwork — ✅ DONE

Supplied as `HR Final  (1).png` (3750×3750) and now in place.

Both files were produced from that original by **removing the white background
and cropping only**. Nothing was redrawn, recoloured or reproportioned.

| File | What it is |
|---|---|
| `public/images/ank-logo.png` | The full lockup — circular mark, ANK wordmark, "HR Services" and the "Growing Together Beyond Limits" tagline — at its original 2.924:1 proportions, transparent background |
| `public/images/ank-circle-mark.png` | The three-person circular mark alone, padded square, transparent |

The supplied artwork's colours match the official brand hexes almost exactly:
sampling it returns `#07234F` (navy), `#FF5400` (orange) and `#00C025` (green).

**Now live:** the logo appears in the header (180px wide, inside the brief's
160–190px range) and footer, and the circular mark renders as the watermark in
**eight** places at 4–5% opacity behind content. Every app icon and the social
share image were regenerated from the mark.

### Two improvements worth making

1. **A vector original (SVG / AI / EPS), if one exists.** The PNG is 3750px so
   it is sharp everywhere, but it weighs 200 KB where a vector would be a few
   KB and stay crisp at any size.

2. **A reversed (white) version of the logo.** The lockup's navy elements have
   almost no contrast on the dark navy footer. Because the brief forbids
   recolouring the logo, the footer currently places the unaltered logo on a
   small white panel — a standard, brand-safe treatment. A proper reversed
   version would let it sit directly on the navy.

### The tagline

The logo carries **"Growing Together Beyond Limits"**, which was not in either
earlier brief. It currently appears only as part of the logo artwork. If you
want it as live text somewhere — under the hero heading, or in the footer — say
so and it can be added.

---

## 2. Photographs — ✅ DONE (but worth replacing later)

All 16 slots are filled with **CC0 1.0** photographs from StockSnap, found via
the Openverse API. CC0 means free commercial use with **no attribution
required** — nothing needs crediting on the site.

Full provenance for every file is in **[IMAGE-CREDITS.md](IMAGE-CREDITS.md)**,
including one caveat worth reading: CC0 covers copyright, not the personality
rights of the people pictured. Standard stock-photo practice, low risk — but
never present anyone in them as ANK staff or a client.

Each image ships as a `.jpg` plus a `.webp`, and browsers get the WebP first.

| Section | Files |
|---|---|
| Hero and About | `hero-hr-consulting`, `about-ank` |
| Services | 8 files in `public/images/services/`, one per service |
| Industries | 6 files in `public/images/industries/` |

No photograph is reused anywhere, per brief section 12.

### Worth doing when you can

Photographs of your own team, office and client sites would be better than
stock on every count — more credible, more distinctive, and it removes the
personality-rights question entirely. Swapping any file is a drop-in: same
path, same rough aspect ratio, rebuild. Sizes and the WebP command are in
[IMAGE-CREDITS.md](IMAGE-CREDITS.md).

---

## 3. Founder section — optional, not built

Brief section 5 lists a founder introduction and photograph "if approved".
Nothing has been written or assumed, because no founder details were supplied
and the original content brief is clear that unverified personal or credential
claims must not be published.

If you want one, send the photograph and the approved text and it can be added
to the About page.

---

## 4. Still to confirm

| Item | Current value | Why it matters |
|---|---|---|
| **Email domain** | `ananthagupta@ankservices.com` | The brief gives `ankservices.com`, but the site was previously assumed to be `ankhrservices.com`. Please confirm which is correct — a wrong address means enquiries bounce silently. |
| **Street address** | "Hyderabad, Telangana, India" | A full address improves local search. |
| **Working days** | "Monday to Saturday" | Shown in the header, footer and form. |
| **Social profiles** | none shown | Add official, active profiles to `social` in `src/data/site.ts`. |
| **Enquiry form endpoint** | not connected | The form is switched off until the Google Apps Script URL is added — see DEPLOYMENT.md section 3. |
| **Privacy Policy** | draft, banner showing | Approve, then set `approved = true`. |
| **Terms & Conditions** | draft, banner showing | Approve (including the jurisdiction line), then set `approved = true`. |
