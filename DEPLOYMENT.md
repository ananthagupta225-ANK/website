# ANK HR Services — Setup & Deployment Guide

Everything needed to connect the enquiry form, publish the site and hand it
over. Work through the sections in order.

---

## 1. Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

Node 20 or newer is required (this project was built with Node 24).

---

## 2. Confirm the business details

All company details live in **one file**: `src/data/site.ts`.
Open it and check every value. The ones still needing confirmation are marked
with `// ⚠ CONFIRM`.

| Setting | Current value | Action |
|---|---|---|
| `phone` / `phoneDisplay` | +91 97003 69225 | Confirm |
| `whatsapp` | 919700369225 | Confirm |
| `email` | `info@ankhrservices.com` | **Placeholder.** Set the real address, then set `emailIsPlaceholder: false` |
| `addressLine` | Hyderabad, Telangana, India | Add the full street address |
| `serviceArea` | Telangana & Andhra Pradesh | Confirm |
| `hours` / `hoursNote` | Mon–Sat, 09:00 AM – 06:00 PM | Confirm the working days |
| `social` | empty | Add only official, active profiles |
| `logo` | empty (text wordmark shown) | See below |

While `emailIsPlaceholder` is `true` the email address is **hidden everywhere**
on the site, so no incorrect address is ever published.

### The logo

The brief requires the original ANK logo artwork, unaltered — so nothing has
been drawn or recreated. The header currently shows a plain typographic
wordmark. To use the real logo:

1. Save the supplied artwork as `public/images/ank-logo.svg`
   (SVG preferred, transparent PNG also fine — adjust the extension).
2. In `src/data/site.ts` set `logo: '/images/ank-logo.svg'`.
3. Adjust `logoWidth` / `logoHeight` to the artwork's real proportions.

Also replace the placeholder icons, which use a plain "A" monogram rather than
the ANK symbol:
`public/favicon.svg`, `public/apple-touch-icon.png`, `public/icon-192.png`,
`public/icon-512.png`, and the share image `public/images/og-default.png`.

### The site address

In `astro.config.mjs`, set `site` to the final public URL (no trailing slash).
It is used for the sitemap, canonical URLs and social share metadata. Then
update the `Sitemap:` line in `public/robots.txt` to match.

---

## 3. Connect the enquiry form to Google Sheets

The form posts to a Google Apps Script Web App, which appends a row to a Google
Sheet. No server or paid service is involved, and it works on any static host.

**Until step 3.5 is done the form stays switched off** and shows the phone and
WhatsApp options instead — so no enquiry can be silently lost.

### 3.1 — Create the spreadsheet

1. Go to <https://sheets.google.com> and create a blank spreadsheet.
2. Name it something like **ANK HR Services — Website Enquiries**.
3. Use the Google account that should own the enquiry data. Whoever owns this
   file owns the enquiries, so use a company account rather than a personal one.

You do **not** need to create any columns. The script builds and formats the
header row by itself the first time an enquiry arrives.

### 3.2 — Add the script

1. In the spreadsheet, choose **Extensions → Apps Script**.
2. Delete whatever is in `Code.gs`.
3. Paste the entire contents of `google-apps-script/Code.gs` from this project.
4. At the top of the file, edit `CONFIG`:
   - `NOTIFY_EMAIL` — the address that should be emailed on every new enquiry.
     Leave it as `''` for no emails. Several addresses can be comma-separated.
   - `SHEET_NAME`, `MIN_SECONDS` and `MAX_MESSAGE_LENGTH` can stay as they are.
5. Click the **Save** icon.

### 3.3 — Authorise it

1. In the function dropdown at the top, select **`runSelfTest`**, then **Run**.
2. Google will ask for permission. Choose **Review permissions** → your account
   → **Advanced** → **Go to (project name)** → **Allow**.
   (The "unverified app" warning is expected — this is your own script.)
3. Go back to the spreadsheet. A test row should have appeared, and if
   `NOTIFY_EMAIL` is set you should receive a test email.
4. **Delete the test row** once you are satisfied.

### 3.4 — Deploy as a Web App

1. In the Apps Script editor click **Deploy → New deployment**.
2. Click the gear next to "Select type" and choose **Web app**.
3. Set:
   - **Description:** `ANK website enquiry form`
   - **Execute as:** `Me (your@email)`
   - **Who has access:** `Anyone` ← this is required, and is what lets the
     website post to it. It does **not** make the spreadsheet public; the
     script is the only thing exposed, and it can only append rows.
4. Click **Deploy** and copy the **Web app URL**. It looks like:
   `https://script.google.com/macros/s/AKfycb..................../exec`
5. Paste that URL into a browser. You should see
   `{"ok":true,"service":"ANK HR Services enquiry handler"}`.

### 3.5 — Switch the form on

In `src/data/site.ts`:

```ts
formEndpoint: 'https://script.google.com/macros/s/AKfycb..../exec',
```

Rebuild and deploy. Submit a real test enquiry from the live site and confirm
the row appears in the sheet.

### Updating the script later

After editing `Code.gs`, you must redeploy for the change to take effect:
**Deploy → Manage deployments → ✏️ (edit) → Version: New version → Deploy.**
This keeps the same URL. Creating a *new deployment* instead would give you a
different URL and the website would keep posting to the old one.

### How spam is handled

Three layers, no CAPTCHA and no third-party service:

- a hidden "website" field that people never see — if it is filled, the
  submission is discarded;
- a timing check — submissions completed in under 3 seconds are discarded;
- server-side validation in the script, so a bot posting directly to the URL
  still has to satisfy the same rules as the form.

Discarded submissions are silently dropped and never reach the sheet.

### If enquiries stop arriving

1. Open the Web App URL in a browser — it should return `{"ok":true,...}`.
2. In Apps Script, check **Executions** in the left sidebar for errors.
3. Confirm the deployment is still set to **Who has access: Anyone**.
4. Confirm `formEndpoint` in `src/data/site.ts` matches the current URL.

Google Workspace accounts have a daily `MailApp` quota (typically 100–1,500
emails/day). Rows are still written to the sheet even if a notification email
fails, so no enquiry is lost.

---

## 4. Publish the site

The build output is plain static files in `dist/` — no server required.

### Option A — Cloudflare Pages (recommended)

1. Push this project to a GitHub or GitLab repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**, and pick the repository.
3. Build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `24`
4. Deploy. Every push to `main` then rebuilds automatically.
5. **Custom domain:** Pages project → **Custom domains → Set up a domain**.
   HTTPS is issued automatically.

`public/_headers` already applies security headers and long-lived caching for
fonts and hashed assets. Cloudflare picks this file up automatically.

### Option B — GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`.

1. Push the project to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Push to `main`. The workflow builds and publishes.
4. **Custom domain:** set it under Settings → Pages and tick
   *Enforce HTTPS*.

If the site is served from a sub-path — `https://<user>.github.io/<repo>/`
rather than a custom domain — set `base: '/<repo>'` in `astro.config.mjs`
as well, or every internal link will 404.

`public/.nojekyll` is already present so GitHub does not strip Astro's
`_astro/` asset folder. Note that GitHub Pages ignores `public/_headers`; the
security headers only take effect on Cloudflare.

---

## 5. After launch

- [ ] Submit `https://<your-domain>/sitemap-index.xml` in
      [Google Search Console](https://search.google.com/search-console).
- [ ] Test the form once from the live site and confirm the row and the email.
- [ ] Check the site on a real phone, not only a resized browser window.
- [ ] Approve the Privacy Policy (see below) **before** sharing the URL widely.
- [ ] Record who owns the domain, the hosting account, the Google account
      holding the enquiry sheet, and the renewal dates.

### The Privacy Policy

`src/pages/privacy-policy/index.astro` contains a **draft** covering the points
the brief requires. It shows an amber "not yet approved" banner.

Once ANK (and, where appropriate, a qualified adviser) has reviewed and
approved it, set `const approved = true;` near the top of that file to remove
the banner, and update `lastUpdated`.

The brief requires the policy to be approved before personal data is collected,
so do this before switching the form on publicly.

---

## 6. Pre-launch checklist

From the developer acceptance checklist in the brief:

- [ ] Original ANK logo in place, unaltered, in header and footer
- [ ] Brand colours correct: navy `#08244F`, green `#00C025`, orange `#FF5400`
- [ ] All placeholder contact details replaced and confirmed
- [ ] Every nav item, button, phone, email and WhatsApp link works
- [ ] Form submissions reach the sheet; success and error states both tested
- [ ] Tested on mobile, tablet and desktop
- [ ] Page titles, meta descriptions, headings, URLs, sitemap, robots.txt set
- [ ] HTTPS enabled
- [ ] Privacy Policy approved before the form or any analytics goes live
- [ ] No unverified claims: no years of experience, client counts,
      certifications, testimonials or success statistics anywhere
- [ ] Domain, hosting, CMS and renewal ownership documented and handed over
