// Centrale site-configuratie. Alle pagina's, menu's en NAW staan hier.
// Eén plek aanpassen = overal aangepast.

export const SITE = {
  name: 'Fotograaf Peter',
  tagline: 'Beleef jouw moment',
  description:
    'Fotograaf Peter uit Nijverdal — bedrijfsfotografie, personal branding, reclamefotografie en hondenfotografie in Twente en Overijssel. Authentieke beelden, geen stock.',
  url: 'https://www.fotograafpeter.nl',
  locale: 'nl-NL',
  language: 'nl',
  // Bedrijfsgegevens (uit huidige site)
  business: {
    legalName: 'Peter Rutgers Media',
    owner: 'Peter Rutgers',
    kvk: '56996071',
    btw: 'NL002187807B34',
    iban: 'NL45 RABO 0338 8049 19',
    bank: 'Rabobank',
  },
  // Contact
  contact: {
    email: 'peter@fotograafpeter.nl',
    phone: '+31629251220',
    phoneDisplay: '06 - 29 25 12 20',
    address: {
      street: 'Zevenblad 35',
      postalCode: '7443 LZ',
      city: 'Nijverdal',
      region: 'Overijssel',
      country: 'NL',
    },
  },
  // Openingstijden (uit huidige site)
  openingHours: [
    { day: 'Maandag', hours: 'Gesloten', isOpen: false },
    { day: 'Dinsdag', hours: '09:00 – 17:00', isOpen: true, open: '09:00', close: '17:00' },
    { day: 'Woensdag', hours: '09:00 – 17:00', isOpen: true, open: '09:00', close: '17:00' },
    { day: 'Donderdag', hours: '09:00 – 17:00', isOpen: true, open: '09:00', close: '17:00' },
    { day: 'Vrijdag', hours: '09:00 – 17:00', isOpen: true, open: '09:00', close: '17:00' },
    { day: 'Zaterdag', hours: 'Op afspraak', isOpen: false },
    { day: 'Zondag', hours: 'Niet bereikbaar', isOpen: false },
  ],
  social: {
    // Vul aan zodra je accounts hebt
    instagram: '',
    facebook: '',
    linkedin: '',
  },
  // Service-gebied (belangrijk voor lokale SEO)
  serviceArea: [
    'Nijverdal',
    'Hellendoorn',
    'Wierden',
    'Rijssen',
    'Almelo',
    'Hengelo',
    'Enschede',
    'Twente',
    'Overijssel',
    'Salland',
  ],
};

// HOOFDMENU — zichtbaar in header op iedere pagina
export const MAIN_MENU = [
  { label: 'Home', href: '/' },
  { label: 'Over Peter', href: '/over-peter/' },
  { label: 'Bedrijfsfotografie', href: '/bedrijfsfotografie/' },
  { label: 'Personal Branding', href: '/personal-branding/' },
  { label: 'Reclamefotografie', href: '/reclamefotografie/' },
  { label: 'Contact', href: '/contact/' },
];

// LANDINGSPAGINA'S — verborgen voor menu, zichtbaar in footer
// onder "Alle pagina's bekijken". Hier voeg je ze toe voor lokale SEO.
export const LANDING_PAGES = [
  {
    label: 'Hondenfotografie',
    href: '/honden/',
    description: 'Liefdevolle hondenfotografie tegen een vriendelijk tarief.',
  },
  {
    label: 'Fotograaf Nijverdal',
    href: '/landingspaginas/fotograaf-nijverdal/',
    description: 'Professionele fotograaf in Nijverdal voor bedrijven en particulieren.',
  },
  {
    label: 'Bedrijfsfotograaf Nijverdal',
    href: '/landingspaginas/bedrijfsfotograaf-nijverdal/',
    description: 'Zakelijke fotografie voor bedrijven in en rond Nijverdal.',
  },
  {
    label: 'Personal Branding Fotograaf Nijverdal',
    href: '/landingspaginas/personal-branding-fotograaf-nijverdal/',
    description: 'Authentieke personal branding shoots voor ondernemers in Nijverdal.',
  },
  {
    label: 'Reclamefotograaf Nijverdal',
    href: '/landingspaginas/reclamefotograaf-nijverdal/',
    description: 'Reclamefotografie en productfotografie voor merken in Nijverdal.',
  },
  {
    label: 'Fotograaf Hellendoorn',
    href: '/landingspaginas/fotograaf-hellendoorn/',
    description: 'Fotograaf in de gemeente Hellendoorn — bedrijven, gezinnen en honden.',
  },
  {
    label: 'Fotograaf Wierden',
    href: '/landingspaginas/fotograaf-wierden/',
    description: 'Bedrijfs- en portretfotografie in Wierden en omgeving.',
  },
  {
    label: 'Fotograaf Rijssen',
    href: '/landingspaginas/fotograaf-rijssen/',
    description: 'Professionele fotografie voor bedrijven en particulieren in Rijssen.',
  },
  {
    label: 'Fotograaf Almelo',
    href: '/landingspaginas/fotograaf-almelo/',
    description: 'Bedrijfsfotografie en personal branding in Almelo.',
  },
  {
    label: 'Fotograaf Twente',
    href: '/landingspaginas/fotograaf-twente/',
    description: 'Fotograaf actief in heel Twente — Nijverdal, Almelo, Hengelo, Enschede.',
  },
  {
    label: 'Fotograaf Overijssel',
    href: '/landingspaginas/fotograaf-overijssel/',
    description: 'Fotograaf voor opdrachten door heel Overijssel.',
  },
  {
    label: 'Zakelijk fotograaf Twente',
    href: '/landingspaginas/zakelijk-fotograaf-twente/',
    description: 'Zakelijke portretten en bedrijfsfotografie in Twente.',
  },
  {
    label: 'Hondenfotograaf Twente',
    href: '/landingspaginas/hondenfotograaf-twente/',
    description: 'Liefdevolle hondenfotografie in Twente en Overijssel.',
  },
];

// Juridische pagina's — in footer
export const LEGAL_PAGES = [
  { label: 'Algemene voorwaarden', href: '/algemene-voorwaarden/' },
  { label: 'Privacybeleid', href: '/privacybeleid/' },
  { label: 'Cookiebeleid', href: '/cookiebeleid/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
];
