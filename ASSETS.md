# Assets still needed from ANK

The redesign is built and working. Everything below is a slot that is already
wired up — drop the file at the exact path shown and it appears on the next
build. **No code change is needed.**

Until a file arrives, that slot shows a branded navy panel instead. Nothing
looks broken, and nothing has been invented, approximated or substituted.

---

## 1. Brand artwork — required

The brief is explicit that the approved artwork must be used unaltered and
must not be recreated from a reference image. Neither file has been supplied,
so neither has been guessed at.

| Save as | What it is | Format |
|---|---|---|
| `public/images/ank-logo.svg` | The full approved ANK HR Services logo | SVG preferred, or transparent PNG |
| `public/images/ank-circle-mark.svg` | **Just the circular mark**, extracted from that same logo as its own transparent file | SVG preferred, or transparent PNG |

**Right now:** the header and footer fall back to a plain typographic wordmark,
and the watermark does not render at all.

**Once added:** the logo appears in the header and footer at the brief's sizes
(176px desktop, scaling down on smaller screens), and the circular watermark
appears automatically in **eight** places — the hero, About, Services, Why ANK,
Industries, Working Approach, Contact and the footer — at 3–5% opacity, behind
all content, with `pointer-events: none`.

If the extension differs (`.png` instead of `.svg`), update the two paths in
`src/data/site.ts`.

### Also worth replacing

These currently use a plain "A" monogram, not the ANK symbol:
`public/favicon.svg`, `public/apple-touch-icon.png`, `public/icon-192.png`,
`public/icon-512.png`, and the social share image `public/images/og-default.png`.

---

## 2. Photographs

The brief asks for licensed stock or original photography. **Licensing is the
owner's call, so nothing has been downloaded or embedded.** The slots are ready.

Guidance from brief section 12: professional corporate photographs, no
cartoon-style illustrations, consistent style, landscape for major sections,
and **do not reuse the same photograph across service cards**.

### Main sections

| Save as | What it shows | Suggested size |
|---|---|---|
| `public/images/hero-hr-consulting.jpg` | Homepage hero — HR consultants with a client | 1200×1020 |
| `public/images/about-ank.jpg` | About — consultant or business meeting | 1200×1380 |

### The eight services

Each service card and service page has its own slot:

| Save as | Service | Suggested size |
|---|---|---|
| `public/images/services/payroll-management.jpg` | Payroll Management | 1200×800 |
| `public/images/services/pf-esi-labour-law-compliance.jpg` | PF, ESI & Labour Law Compliances | 1200×800 |
| `public/images/services/hr-operations-consultancy.jpg` | HR Operations & Consultancy | 1200×800 |
| `public/images/services/hr-policies-documentation.jpg` | HR Policies & Documentation | 1200×800 |
| `public/images/services/recruitment-staffing.jpg` | Recruitment & Staffing | 1200×800 |
| `public/images/services/factory-establishment-compliance.jpg` | Factory & Establishment Compliance | 1200×800 |
| `public/images/services/contract-labour-management.jpg` | Contract Labour Management | 1200×800 |
| `public/images/services/pf-esi-scrutiny-cases.jpg` | PF, ESI & Labour Law Scrutiny Cases | 1200×800 |

### The six industries

| Save as | Industry | Suggested size |
|---|---|---|
| `public/images/industries/corporate-offices.jpg` | Corporate Offices | 1200×800 |
| `public/images/industries/manufacturing-factories.jpg` | Manufacturing & Factories | 1200×800 |
| `public/images/industries/retail-hospitality.jpg` | Retail & Hospitality | 1200×800 |
| `public/images/industries/healthcare-institutions.jpg` | Healthcare & Institutions | 1200×800 |
| `public/images/industries/it-ites.jpg` | IT & ITES | 1200×800 |
| `public/images/industries/service-organisations.jpg` | Service Organisations | 1200×800 |

### WebP

The brief asks for optimised WebP images. This is automatic: if a `.webp`
sibling sits next to the `.jpg`, it is served first and the `.jpg` stays as the
fallback. So `payroll-management.jpg` **and** `payroll-management.webp` in the
same folder means modern browsers get the WebP.

To generate them from the JPGs you have:

```bash
# one file
npx sharp-cli -i public/images/hero-hr-consulting.jpg -o public/images/hero-hr-consulting.webp

# or convert everything in place
for f in public/images/**/*.jpg; do
  npx sharp-cli -i "$f" -o "${f%.jpg}.webp"
done
```

### Alt text

Every slot already has descriptive alt text written for it. If a photograph
shows something different from what the alt text describes, update it in the
page or in `src/data/services.ts` — the alt text should describe the actual
image.

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
