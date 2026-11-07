# Assets still needed from ANK

The redesign is built and working. Everything below is a slot that is already
wired up — drop the file at the exact path shown and it appears on the next
build. **No code change is needed.**

Until a file arrives, that slot shows a branded navy panel instead. Nothing
looks broken, and nothing has been invented, approximated or substituted.

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
