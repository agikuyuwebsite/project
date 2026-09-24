// Central place for contact details — used across the whole site.
export const SITE = {
  name: "Agìkūyū Women & Men",
  tagline: "Retrieve. Re-evaluate. Replenish. Document. Celebrate.",

  // One number for calls and WhatsApp.
  phone: "+254790224189",
  whatsappNumber: "254790224189", // digits only (no "+"), used for wa.me links
  email: "info@agikuyuwomenandmen.co.ke",

  // Mpesa Buy Goods / Till number for direct donations.
  mpesaTill: "507969",

  contactPerson: {
    name: "Wambūi MN",
    role: "Gìkūyū Language Teacher and Program Coordinator",
    organisation: "Gìkūyū and Mūmbi Women & Men",
  },

  // `url` is left empty where the real link is not known yet — those entries show as
  // plain text. Paste the full profile URL to turn them into links everywhere.
  social: [
    { id: "facebook",  label: "Facebook",  short: "FB", handle: "Gìkūyū and Mūmbi Women & Men", url: "https://www.facebook.com/AgikuyuWomen/" },
    { id: "twitter",   label: "Twitter",   short: "TW", handle: "@AgikuyuWomen",                url: "https://x.com/AgikuyuWomen" },
    { id: "instagram", label: "Instagram", short: "IG", handle: "AgìkūyūWomen",                 url: "https://www.instagram.com/agikuyuwomen/" },
    { id: "youtube",   label: "YouTube",   short: "YT", handle: "Gìkūyū and Mūmbi Women",       url: "https://www.youtube.com/@gikuyuandmumbiwomen4058" },
  ],
};

// Builds a wa.me link with a prefilled message.
export function whatsappLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encoded}`;
}

// Topics for the contact form (and the ?topic= links used on other pages).
export const CONTACT_TOPICS = [
  { value: "research-consultancy",  label: "Research Consultancy" },
  { value: "research-sponsorship",  label: "Research Sponsorship" },
  { value: "membership",            label: "Membership" },
  { value: "partnership",           label: "Partnership" },
  { value: "cultural-programme",    label: "Cultural Programme" },
  { value: "publications",          label: "Publications" },
  { value: "language",              label: "Gìkūyū Language" },
  { value: "donation",              label: "Donation / Supporting Our Work" },
  { value: "general",               label: "General Enquiry" },
];
