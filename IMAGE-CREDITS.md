# Photograph credits and licensing

All 16 photographs on this site are **CC0 1.0 (Public Domain Dedication)**,
sourced from [StockSnap.io](https://stocksnap.io) and located through the
[Openverse](https://openverse.org) API.

## What CC0 means here

CC0 waives copyright to the extent possible. In practice:

- ✅ Free for commercial use, including on a company website
- ✅ **No attribution required** — this file is for your records, not a legal
  obligation, and nothing needs to be credited on the site itself
- ✅ No fee, no licence to renew, no usage cap

## Please read before launch

CC0 covers **copyright**. It does not cover **personality or publicity
rights**. Several of these photographs show identifiable people, and the
photographer's CC0 dedication does not amount to those people consenting to
appear in ANK HR Services' marketing.

In practice this is how stock photography is used everywhere, and the risk is
low. But two things are worth being deliberate about:

1. **Do not caption or present anyone in these photographs as ANK staff, a
   client, or a person ANK has placed.** The alt text written for each image
   describes the scene generically and never implies this — please keep it
   that way.
2. **If you want to eliminate the question entirely,** replace them with
   photographs of your own team and offices. That is also simply better
   marketing. Every file can be swapped without touching any code — see
   [ASSETS.md](ASSETS.md).

## The files

Each image ships as a `.jpg` plus a `.webp`; browsers are served the WebP
first and fall back to the JPEG automatically.

| File (in `public/images/`) | Original title | Photographer | Source |
|---|---|---|---|
| `hero-hr-consulting.jpg` | Team Meeting | Startup Stock Photos | [stocksnap](https://stocksnap.io/photo/team-meeting-JBW2PXDOL6) |
| `about-ank.jpg` | Work Business | Kristin Hardwick | [stocksnap](https://stocksnap.io/photo/work-business-J5LXKNDREC) |
| `services/payroll-management.jpg` | Accounting Finance | Wilfred Iven | [stocksnap](https://stocksnap.io/photo/accounting-finance-JONMP7TPGK) |
| `services/pf-esi-labour-law-compliance.jpg` | Filefolders Business | Michal Kulesza | [stocksnap](https://stocksnap.io/photo/filefolders-business-6RHKEELJ8F) |
| `services/hr-operations-consultancy.jpg` | Business Team | Startup Stock Photos | [stocksnap](https://stocksnap.io/photo/business-team-Q1OSKR7D42) |
| `services/hr-policies-documentation.jpg` | Writing Drawing | Green Chameleon | [stocksnap](https://stocksnap.io/photo/writing-drawing-8Y0EDX4VP9) |
| `services/recruitment-staffing.jpg` | Conferenceroom Meeting | Christina Morillo | [stocksnap](https://stocksnap.io/photo/conferenceroom-meeting-GVUWVKUHZE) |
| `services/factory-establishment-compliance.jpg` | Construction Tools | The World is a Stage | [stocksnap](https://stocksnap.io/photo/construction-tools-ZEYJ3YBEGP) |
| `services/contract-labour-management.jpg` | Construction Workers | The Building Envelope | [stocksnap](https://stocksnap.io/photo/construction-workers-4UHTOF5OE9) |
| `services/pf-esi-scrutiny-cases.jpg` | Business Man | Direct Media | [stocksnap](https://stocksnap.io/photo/business-man-LLINRLUPA4) |
| `industries/corporate-offices.jpg` | Office Interior | Matt Moloney | [stocksnap](https://stocksnap.io/photo/office-interior-NSQTXCLWQ5) |
| `industries/manufacturing-factories.jpg` | Industrial Machine | Joe deSousa | [stocksnap](https://stocksnap.io/photo/industrial-machine-TJ20HKB9BY) |
| `industries/retail-hospitality.jpg` | Fashion Clothes | Hannah Morgan | [stocksnap](https://stocksnap.io/photo/fashion-clothes-ZN97ZIF3ZU) |
| `industries/healthcare-institutions.jpg` | Doctors Hospital | Oles kanebckuu | [stocksnap](https://stocksnap.io/photo/doctors-hospital-5YUFL6LC0E) |
| `industries/it-ites.jpg` | Programming Code | One Idea LLC | [stocksnap](https://stocksnap.io/photo/programming-code-1STVFMTBJY) |
| `industries/service-organisations.jpg` | Business Team | Direct Media | [stocksnap](https://stocksnap.io/photo/business-team-W6PNBNYHM6) |
All licensed CC0 1.0 — <https://creativecommons.org/publicdomain/zero/1.0/>

## Replacing one

Drop a new file at the same path and rebuild. Keep the aspect ratio close to
the original so the crop still works:

| Slot | Ratio | Size |
|---|---|---|
| Hero | 4:3.4 | 1000×850 |
| About | 1:1 | 900×900 |
| Service cards and page banners | 16:10 | 1000×625 |
| Industry cards | 3:2 | 1000×667 |

Generate the matching WebP with:

```bash
npx sharp-cli -i public/images/<name>.jpg -o public/images/<name>.webp
```

If no `.webp` exists the JPEG is served on its own, so a missing WebP is never
a broken image — only a slightly larger download.
