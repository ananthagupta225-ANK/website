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

  /* Logo ---------------------------------------------------------------
     The brief requires the ORIGINAL ANK logo artwork, unaltered. No logo
     file was supplied, so the header currently renders a plain typographic
     wordmark. To switch to the real logo:
       1. Save the supplied file as  public/images/ank-logo.svg
          (SVG preferred; transparent PNG also works — update the extension)
       2. Set  logo  below to  '/images/ank-logo.svg'
     Do not redraw or recreate the logo. ------------------------------- */
  logo: '' as string,
  logoWidth: 168,
  logoHeight: 44,

  /* Contact ------------------------------------------------------------ */
  phone: '+919700369225',
  phoneDisplay: '+91 97003 69225',
  whatsapp: '919700369225',
  whatsappMessage:
    "Hello ANK HR Services, I'd like to discuss my organisation's HR requirements.",

  // ⚠ CONFIRM — the brief lists the business email as "[ANK to provide]".
  // Replace the placeholder below with the official address, then remove
  // the `emailIsPlaceholder` flag. While the flag is true the email is
  // hidden from the website so no incorrect address is published.
  email: 'info@ankhrservices.com',
  emailIsPlaceholder: true,

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
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Why ANK', href: '/why-ank/' },
  { label: 'Contact', href: '/contact/' },
];

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const telLink = `tel:${site.phone}`;
export const mailLink = `mailto:${site.email}`;
