# ANK HR Services — Website

Marketing and enquiry website for ANK HR Services: HR operations, payroll
management, employee documentation, recruitment coordination and applicable
statutory compliance support.

Built from the approved *Website Content & Developer Brief* and the
*One-Stop HR Services Website Strategy* (both kept in `docs-source/`).

**→ Setup, Google Sheets connection and deployment: [DEPLOYMENT.md](DEPLOYMENT.md)**

---

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) 7 — static HTML output |
| Styling | Hand-written CSS with design tokens (no utility framework) |
| Fonts | IBM Plex Serif + IBM Plex Sans, self-hosted, Latin subsets only |
| Form backend | Google Apps Script → Google Sheet |
| Hosting | Any static host — Cloudflare Pages or GitHub Pages |

The site ships **no client-side framework and no third-party requests**. The
only JavaScript is a few lines for the mobile menu and the form — both inlined.
Fonts are served from the site's own domain, which matters for the privacy
commitments in the policy.

A typical page is around 6 KB of HTML and 6 KB of CSS over the wire.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

---

## Project layout

```
src/
  data/
    site.ts              All company details — phone, email, hours, form URL
    services.ts          All seven services: copy, activities, FAQs, SEO text
  layouts/Base.astro     <head>, metadata, JSON-LD, header + footer
  components/
    Header.astro         Utility bar, nav, services dropdown, mobile menu
    Footer.astro
    EnquiryForm.astro    Validation + submission to Google Sheets
    CtaBand.astro        Reusable closing call-to-action
    PageHero.astro       Inner-page heading with breadcrumbs
    Logo.astro           Supplied logo file, or a text wordmark fallback
  pages/
    index.astro          Home
    about/ industries/ why-ank/ contact/ privacy-policy/
    services/
      index.astro        Services listing
      [slug].astro       One page per service, generated from services.ts
    404.astro
  styles/
    global.css           Design tokens and shared components
    fonts.css            Generated @font-face rules (see "Fonts" below)
public/                  Served as-is: icons, robots.txt, fonts, _headers
google-apps-script/      The form handler to paste into Apps Script
docs-source/             The original Word briefs this site was built from
```

---

## Editing content

### Company details, phone, hours, form URL
`src/data/site.ts` — one file, used everywhere. Values still awaiting
confirmation are marked `// ⚠ CONFIRM`.

### Service pages
`src/data/services.ts`. Each service is one object. Editing it updates the
service page, the services listing, the homepage cards, the header dropdown,
the footer, the contact form's checkboxes and the sitemap — all at once.

Adding an eighth service means adding one object to that array. Nothing else
needs touching. Keep the scope-safe wording ("support", "coordination",
"as applicable", "where agreed") — section 11 of the strategy brief requires it.

### Page copy
Each page's text lives in its own file under `src/pages/`.

### Colours and type
The tokens at the top of `src/styles/global.css`:

| Token | Value | Use |
|---|---|---|
| `--navy` | `#08244F` | Headings, header, footer, dark sections |
| `--green` | `#00C025` | Accent rules, numbers, markers |
| `--green-ink` | `#00881A` | The same green where it must pass contrast as text |
| `--orange` | `#FF5400` | Primary CTA buttons, scope-note markers |
| `--grey` | `#F4F6F8` | Alternate section backgrounds and cards |

`--green-ink` is a darkened green used only for small text — the brand green
is too light to read on white at body size. Both are the brand green visually;
the darker one keeps text legible.

### Fonts

`src/styles/fonts.css` is generated: it declares only the Latin and Latin-Extended
subsets, pointing at the files in `public/fonts/`. The upstream
`@fontsource` packages are devDependencies and are not needed at build time —
they are kept so the font files can be regenerated or extra weights added.

---

## Things deliberately left out

The brief is explicit that unverified claims must not be published. The site
therefore contains **no** years of experience, client counts, certifications,
awards, testimonials, client logos, case studies or success statistics, and no
promise of guaranteed compliance, zero errors or guaranteed hiring outcomes.

Add any of these only once ANK has confirmed and approved the specific claim.

Stock photography has also been left out. The design is typographic rather than
image-led, so it does not depend on generic office photos — and no image on the
site implies a client, credential or workplace that has not been verified.
