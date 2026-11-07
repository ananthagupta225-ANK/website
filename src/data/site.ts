/* ===========================================================================
   ANK HR SERVICES — CENTRAL SITE CONFIGURATION
   ---------------------------------------------------------------------------
   Everything the company needs to change after launch lives in this one file.
   Items marked  // ⚠ CONFIRM  are taken from the brief but were listed as
   "to be confirmed by ANK". Verify them before the site goes live.
   =========================================================================== */

export const site = {
  name: 'ANK HR Services',
  legalName: 'ANK HR Services',
  tagline: 'Your One-Stop Partner for All HR Needs',
  description:
    'ANK HR Services supports businesses in Telangana and Andhra Pradesh with HR operations, payroll management, employee documentation, recruitment coordination and applicable statutory compliance support.',

  /* Brand assets -------------------------------------------------------
     The redesign brief requires the ORIGINAL approved ANK artwork, used
     unaltered. Nothing here is recreated, approximated or redrawn.

     1. FULL LOGO — header and footer.
        Save as  public/images/ank-logo.svg  (SVG preferred; a transparent
        PNG also works — just change the extension below).

     2. CIRCULAR MARK — the oversized background watermark.
        The circle must be EXTRACTED from the approved logo as its own
        transparent file, not substituted with a generic circle.
        Save as  public/images/ank-circle-mark.svg

     Both appear automatically as soon as the files exist at these paths.
     Until then the header shows a plain typographic wordmark and the
     watermark simply does not render — nothing looks broken.
     ------------------------------------------------------------------ */
  logo: '/images/ank-logo.svg',
  logoWidth: 176,
  logoHeight: 46,
  circleMark: '/images/ank-circle-mark.svg',

  /* Contact ------------------------------------------------------------ */
  phone: '+919700369225',
  phoneDisplay: '+91 97003 69225',
  whatsapp: '919700369225',
  whatsappMessage:
    "Hello ANK HR Services, I'd like to discuss my organisation's HR requirements.",

  // Supplied in the redesign brief (section 10).
  // ⚠ NOTE the domain is ankservices.com, NOT ankhrservices.com — please
  // double-check this is right before launch, since a wrong address means
  // enquiries bounce silently.
  email: 'ananthagupta@ankservices.com',
  emailIsPlaceholder: false,

  addressLine: 'Hyderabad, Telangana, India', // ⚠ CONFIRM full street address
  locality: 'Hyderabad',
  region: 'Telangana',
  country: 'IN',
  serviceArea: 'Telangana & Andhra Pradesh',
  hours: '09:00 AM – 06:00 PM',
  hoursNote: 'Monday to Saturday', // ⚠ CONFIRM working days
  hoursSchema: 'Mo-Sa 09:00-18:00',

  /* Official social profiles — add only verified, active company pages.
     Any entry left out simply will not render. ------------------------- */
  social: [
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/company/...' },
  ] as { label: string; href: string }[],

  /* Enquiry form destination ------------------------------------------
     Paste the Google Apps Script Web App URL here after deploying
     google-apps-script/Code.gs — full instructions in DEPLOYMENT.md.
     Until this is set the form stays disabled and shows the phone /
     WhatsApp fallback instead of silently losing enquiries. ----------- */
  formEndpoint: '' as string,
};

export const nav = [
  { label: 'About Us', href: '/about/' },
  { label: 'Our Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Why ANK', href: '/why-ank/' },
  { label: 'Contact Us', href: '/contact/' },
];

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const telLink = `tel:${site.phone}`;
export const mailLink = `mailto:${site.email}`;
