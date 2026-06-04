export const SITE = {
  name: 'AR Construction',
  tagline: 'Entrepreneur général · Saguenay-Lac-Saint-Jean',
  phone: '418-695-6646',
  phoneHref: 'tel:4186956646',
  email: 'info@ar-construction.ca',
  emailHref: 'mailto:info@ar-construction.ca',
  address: '2485, Alexis-le-Trotteur, Jonquière (Québec) G7X 0E4',
  rbq: '8271-8974-17',
  foundedYear: 2001,
  social: {
    facebook: 'https://www.facebook.com/arconstructionQC/',
    youtube: 'https://www.youtube.com/channel/UCirfjkhZ1aCGPZlZC7gtPhQ',
  },
} as const

export type NavLink = {
  label: string
  href: string
  sub?: { label: string; href: string }[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Construction',
    href: '/maison-neuve',
    sub: [
      { label: 'Maison neuve', href: '/maison-neuve' },
      { label: 'Clé en main', href: '/cle-en-main' },
      { label: 'Plans', href: '/plans' },
      { label: 'Design intérieur', href: '/design-interieur' },
      { label: 'Forfait autoconstructeur', href: '/autoconstructeur' },
    ],
  },
  {
    label: 'Rénovation',
    href: '/renovation',
    sub: [
      { label: 'Rénovation', href: '/renovation' },
      { label: 'Résidentielle', href: '/renovation/residentielle' },
      { label: 'Quelques réalisations', href: '/renovation/quelques-realisations' },
      { label: 'Agrandissement', href: '/renovation/agrandissement' },
      { label: 'Revêtement extérieur', href: '/renovation/revetement-exterieur' },
      { label: 'Toiture', href: '/renovation/toiture' },
    ],
  },
  {
    label: 'Réalisations',
    href: '/realisations',
    sub: [
      { label: 'Toutes les réalisations', href: '/realisations' },
      { label: 'Résidentiel', href: '/realisations/residentiel' },
      { label: 'Commercial', href: '/realisations/commercial' },
      { label: 'Multilogements', href: '/realisations/multilogements' },
      { label: 'Plain-pied', href: '/realisations/plain-pied' },
      { label: 'Niveaux', href: '/realisations/niveaux' },
      { label: 'Étage', href: '/realisations/etage' },
      { label: 'Jumelé', href: '/realisations/jumele' },
    ],
  },
  {
    label: 'Terrains',
    href: '/terrains',
    sub: [
      { label: 'Terrains', href: '/terrains' },
      { label: 'Terrains complétés', href: '/terrains/completes' },
      { label: 'Terrains disponibles', href: '/terrains/disponibles' },
      { label: 'Terrains villégiature', href: '/terrains/villegiature' },
    ],
  },
  { label: 'Témoignages', href: '/temoignages' },
  { label: 'Emploi', href: '/emploi' },
]

export const FOOTER_SERVICES = [
  { label: 'Maison neuve clé en main', href: '/maison-neuve' },
  { label: 'Clé en main', href: '/cle-en-main' },
  { label: 'Plans architecturaux', href: '/plans' },
  { label: 'Design intérieur', href: '/design-interieur' },
  { label: 'Forfait autoconstructeur', href: '/autoconstructeur' },
  { label: 'Rénovation résidentielle', href: '/renovation/residentielle' },
  { label: 'Avant / après rénovation', href: '/renovation/quelques-realisations' },
]

export const FOOTER_COMPANY = [
  { label: 'À propos', href: '/a-propos' },
  { label: 'Témoignages', href: '/temoignages' },
  { label: 'Terrains à vendre', href: '/terrains' },
  { label: 'Réalisations commerciales', href: '/realisations/commercial' },
  { label: 'Développement domiciliaire', href: '/developpement-domiciliaire' },
  { label: 'Développement durable', href: '/developpement-durable' },
  { label: 'Prix et distinctions', href: '/prix-et-distinctions' },
  { label: 'Comparatif', href: '/comparatif' },
  { label: 'Emploi', href: '/emploi' },
  { label: 'Contact', href: '/contact' },
]
