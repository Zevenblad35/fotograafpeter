// Data voor alle landingspagina's.
// Eén plek om aan te passen. Nieuwe pagina = nieuwe entry hier + entry in config.ts.

export interface LandingData {
  slug: string;
  city?: string;
  region?: string;
  service: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  primaryService: 'bedrijfsfotografie' | 'personal-branding' | 'reclamefotografie' | 'honden' | 'algemeen';
}

export const landingsData: LandingData[] = [
  {
    slug: 'fotograaf-nijverdal',
    city: 'Nijverdal',
    region: 'Overijssel',
    service: 'Fotograaf',
    title: 'Fotograaf Nijverdal | Bedrijf, Personal Branding & Honden',
    description: 'Op zoek naar een fotograaf in Nijverdal? Fotograaf Peter verzorgt bedrijfsfotografie, personal branding, reclame- en hondenfotografie. Lokaal, persoonlijk, professioneel.',
    h1: 'Fotograaf Nijverdal',
    intro: 'Op zoek naar een professionele fotograaf in Nijverdal? Mijn studio en uitvalsbasis zit aan de Zevenblad 35 in Nijverdal. Vanuit hier werk ik voor bedrijven én particulieren in Nijverdal, de gemeente Hellendoorn en heel Twente.',
    primaryService: 'algemeen',
  },
  {
    slug: 'bedrijfsfotograaf-nijverdal',
    city: 'Nijverdal',
    region: 'Overijssel',
    service: 'Bedrijfsfotograaf',
    title: 'Bedrijfsfotograaf Nijverdal | Zakelijke Fotografie',
    description: "Bedrijfsfotograaf in Nijverdal voor zakelijke portretten, teamfoto's, sfeerbeelden en bedrijfsreportages. Authentiek, professioneel, op locatie in Nijverdal en omgeving.",
    h1: 'Bedrijfsfotograaf in Nijverdal',
    intro: 'Bedrijven in Nijverdal die professionele beelden willen voor website, social media en jaarverslag, kiezen voor een vaste bedrijfsfotograaf in de regio. Ik werk op jouw locatie, met jouw team — niet vanuit een afgesloten studio.',
    primaryService: 'bedrijfsfotografie',
  },
  {
    slug: 'personal-branding-fotograaf-nijverdal',
    city: 'Nijverdal',
    region: 'Overijssel',
    service: 'Personal Branding Fotograaf',
    title: 'Personal Branding Fotograaf Nijverdal | Voor Ondernemers',
    description: "Personal branding fotograaf in Nijverdal voor ondernemers, zzp'ers en experts. Authentieke portretten voor website, LinkedIn en social media. Zonder gladde stockfoto-look.",
    h1: 'Personal Branding Fotograaf in Nijverdal',
    intro: "Ondernemers en zzp'ers in Nijverdal die een sterke online aanwezigheid willen, hebben sterke persoonlijke beelden nodig. Geen LinkedIn-headshots die op elkaar lijken — wel foto's die laten zien wie jij bent en waar jij voor staat.",
    primaryService: 'personal-branding',
  },
  {
    slug: 'reclamefotograaf-nijverdal',
    city: 'Nijverdal',
    region: 'Overijssel',
    service: 'Reclamefotograaf',
    title: 'Reclamefotograaf Nijverdal | Product, Food, Interieur',
    description: 'Reclamefotograaf in Nijverdal voor productfotografie, food, interieur en campagnebeeld. Voor merken en mkb in Twente en Overijssel die opvallen tussen de ruis.',
    h1: 'Reclamefotograaf Nijverdal',
    intro: 'Merken en bedrijven in Nijverdal die producten, ruimtes of campagnes professioneel willen laten fotograferen, kiezen voor specialistische reclamefotografie. Geen "even snel iets met de telefoon" — wel beelden die overtuigen.',
    primaryService: 'reclamefotografie',
  },
  {
    slug: 'fotograaf-hellendoorn',
    city: 'Hellendoorn',
    region: 'Overijssel',
    service: 'Fotograaf',
    title: 'Fotograaf Hellendoorn | Bedrijf, Personal Branding & Honden',
    description: 'Fotograaf in Hellendoorn voor bedrijfsfotografie, personal branding en hondenshoots. Lokaal actief in de hele gemeente Hellendoorn — Nijverdal, Daarle, Daarlerveen.',
    h1: 'Fotograaf Hellendoorn',
    intro: 'De gemeente Hellendoorn omvat naast Hellendoorn ook Nijverdal, Daarle, Daarlerveen en Haarle. Vanuit mijn basis in Nijverdal ben ik snel in elk van die kernen. Of het nu om een bedrijf gaat, een ondernemer, een gezin of een hond — ik ben dichtbij.',
    primaryService: 'algemeen',
  },
  {
    slug: 'fotograaf-wierden',
    city: 'Wierden',
    region: 'Overijssel',
    service: 'Fotograaf',
    title: 'Fotograaf Wierden | Bedrijf & Personal Branding',
    description: 'Fotograaf voor bedrijven en particulieren in Wierden. Bedrijfsfotografie, personal branding en reclamefotografie — vanuit Nijverdal, snel op locatie in Wierden en Enter.',
    h1: 'Fotograaf Wierden',
    intro: 'Wierden ligt op een steenworp afstand van mijn basis in Nijverdal. Ik werk regelmatig in Wierden, Enter en omgeving — voor bedrijven die hun mensen, hun werk of hun product professioneel in beeld willen brengen.',
    primaryService: 'algemeen',
  },
  {
    slug: 'fotograaf-rijssen',
    city: 'Rijssen',
    region: 'Overijssel',
    service: 'Fotograaf',
    title: 'Fotograaf Rijssen | Zakelijk & Particulier',
    description: 'Professionele fotograaf actief in Rijssen en de gemeente Rijssen-Holten. Bedrijfsfotografie, personal branding, reclame- en hondenfotografie.',
    h1: 'Fotograaf Rijssen',
    intro: 'Rijssen en Holten kennen veel ondernemers en mkb-bedrijven die hun online aanwezigheid serieus nemen. Vanuit Nijverdal kom ik graag naar Rijssen voor een bedrijfsshoot, personal branding sessie of campagnebeeld.',
    primaryService: 'algemeen',
  },
  {
    slug: 'fotograaf-almelo',
    city: 'Almelo',
    region: 'Twente',
    service: 'Fotograaf',
    title: 'Fotograaf Almelo | Bedrijfs- & Personal Branding Fotografie',
    description: 'Fotograaf actief in Almelo voor bedrijfsfotografie, personal branding en reclamefotografie. Voor mkb, zzp en lokale merken in Almelo en omgeving.',
    h1: 'Fotograaf Almelo',
    intro: 'Almelo is een belangrijk centrum binnen Twente — met een sterke mix van mkb, industrie en dienstverlening. Ik werk regelmatig in Almelo voor bedrijven die hun website en social media willen updaten met sterke, eerlijke beelden.',
    primaryService: 'algemeen',
  },
  {
    slug: 'fotograaf-twente',
    city: '',
    region: 'Twente',
    service: 'Fotograaf',
    title: 'Fotograaf Twente | Bedrijfsfotografie & Personal Branding',
    description: 'Fotograaf actief in heel Twente: Nijverdal, Almelo, Hengelo, Enschede, Rijssen, Wierden, Oldenzaal en omgeving. Bedrijfsfotografie, personal branding en reclamefotografie.',
    h1: 'Fotograaf Twente',
    intro: 'Twente is mijn natuurlijke werkgebied. Vanuit Nijverdal kom ik naar Almelo, Hengelo, Enschede, Oldenzaal, Rijssen, Wierden en alle plaatsen ertussenin. Bedrijven, ondernemers en particulieren in heel Twente kunnen rekenen op consistente, lokale fotografie.',
    primaryService: 'algemeen',
  },
  {
    slug: 'fotograaf-overijssel',
    city: '',
    region: 'Overijssel',
    service: 'Fotograaf',
    title: 'Fotograaf Overijssel | Voor de hele Provincie',
    description: 'Fotograaf actief in heel Overijssel: Twente, Salland, Vechtdal, Kop van Overijssel. Bedrijfsfotografie, personal branding, reclamefotografie en honden.',
    h1: 'Fotograaf Overijssel',
    intro: 'Overijssel is groter dan Twente alleen — Salland, Vechtdal en Kop van Overijssel horen er ook bij. Vanuit Nijverdal werk ik in heel Overijssel voor opdrachten waar het lokale verhaal telt.',
    primaryService: 'algemeen',
  },
  {
    slug: 'zakelijk-fotograaf-twente',
    city: '',
    region: 'Twente',
    service: 'Zakelijk Fotograaf',
    title: 'Zakelijk Fotograaf Twente | B2B Fotografie',
    description: 'Zakelijk fotograaf voor bedrijven in Twente. Bedrijfsportretten, sfeer- en aan-het-werk beelden, evenementenfotografie en personal branding voor zzp en mkb.',
    h1: 'Zakelijk Fotograaf Twente',
    intro: 'B2B-fotografie verschilt van particuliere fotografie — andere verwachtingen, andere deadlines, andere belangen. Ik werk al jaren voor zakelijke klanten in heel Twente en spreek die taal.',
    primaryService: 'bedrijfsfotografie',
  },
  {
    slug: 'hondenfotograaf-twente',
    city: '',
    region: 'Twente',
    service: 'Hondenfotograaf',
    title: 'Hondenfotograaf Twente | Liefdevolle Hondenfotografie',
    description: "Hondenfotograaf in Twente: speelse foto's en portretten van jouw hond. Op de Sallandse Heuvelrug, in jullie tuin of op een plek die jullie hond fijn vindt.",
    h1: 'Hondenfotograaf Twente',
    intro: 'Twente heeft prachtige plekken om honden te fotograferen — van de Sallandse Heuvelrug tot de bossen rond Hellendoorn en Markelo. Met geduld, snoepjes en zonder druk maken we beelden waarin jouw hond zichzelf is.',
    primaryService: 'honden',
  },
];
