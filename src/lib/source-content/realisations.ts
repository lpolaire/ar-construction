import type { DetailPageContent } from './types'
import arMaison1 from '@/assets/ar-maison1.jpg'
import arMaison2 from '@/assets/ar-maison2.jpg'
import proj2232 from '@/assets/proj-2232.jpg'
import arReal6 from '@/assets/ar-real6.jpg'
import proj2308 from '@/assets/proj-2308.jpg'
import heroHouse from '@/assets/hero-house.jpg'

export const realisationSubpages: DetailPageContent[] = [
  {
    slug: 'residentiel',
    href: '/realisations/residentiel',
    menuLabel: 'Résidentiel',
    title: 'Réalisations résidentielles',
    eyebrow: 'Portfolio',
    description: 'Maisons neuves, modèles résidentiels et projets livrés par AR Construction.',
    subtitle: 'Maisons unifamiliales, niveaux, étages et jumelés.',
    heroImage: arMaison1,
    gallerySlug: 'realisations-residentiel',
    highlights: ['Maisons neuves', 'Plain-pied', 'Maisons à niveaux', 'Deux étages', 'Jumelés'],
    sections: [
      {
        title: 'Des modèles pour inspirer le projet',
        body: 'Les réalisations résidentielles servent de point de départ pour définir les volumes, le style, les matériaux et les possibilités de personnalisation.',
      },
    ],
  },
  {
    slug: 'commercial',
    href: '/realisations/commercial',
    menuLabel: 'Commercial',
    title: 'Construction commerciale',
    eyebrow: 'Non résidentiel',
    description:
      'Réalisations commerciales, industrielles et institutionnelles au Saguenay-Lac-Saint-Jean.',
    subtitle: 'Un savoir-faire au service des entreprises.',
    heroImage: arMaison2,
    gallerySlug: 'realisations-commercial',
    highlights: [
      'Commercial',
      'Industriel',
      'Institutionnel',
      'Ressources intermédiaires',
      'Agrandissements d’espaces de bureaux',
    ],
    sections: [
      {
        title: 'Un savoir-faire au service des entreprises',
        body: 'AR Construction a réalisé des projets commerciaux, industriels et institutionnels: bâtiments de soins, bureaux, commerces, garderies, multilogements et agrandissements spécialisés.',
      },
      {
        title: 'Références régionales',
        body: "Le site initial cite notamment La Maison d'Éloïse, Véolia, OTL Gouverneur Saguenay, Multitech, Motel Princesse, Chaussures Pop, GO Sport, Inspection SEP et Excavation LMR.",
      },
    ],
  },
  {
    slug: 'multilogements',
    href: '/realisations/multilogements',
    menuLabel: 'Multilogements',
    title: 'Multilogements',
    eyebrow: 'Investissement résidentiel',
    description:
      'Construction de bâtiments contenant plusieurs appartements spacieux haut de gamme.',
    subtitle: 'Des bâtiments pensés pour la qualité de vie et la rentabilité.',
    heroImage: proj2232,
    gallerySlug: 'realisations-multilogements',
    highlights: [
      'Appartements spacieux',
      'Bâtiments haut de gamme',
      'Structure durable',
      'Gestion de chantier',
      'Livraison professionnelle',
    ],
    sections: [
      {
        title: 'Bâtiments à plusieurs logements',
        body: 'AR Construction réalise des immeubles à logements avec une attention particulière aux volumes, aux circulations et à la qualité des finis.',
      },
    ],
  },
  {
    slug: 'plain-pied',
    href: '/realisations/plain-pied',
    menuLabel: 'Plain-pied',
    title: 'Maisons plain-pied',
    eyebrow: 'Modèles résidentiels',
    description: 'Galerie de maisons plain-pied construites par AR Construction.',
    subtitle: 'Des plans pratiques, lumineux et faciles à vivre.',
    heroImage: arReal6,
    gallerySlug: 'plain-pied',
    highlights: [
      'Vie sur un niveau',
      'Plans efficaces',
      'Façades variées',
      'Personnalisation',
      'Construction clé en main',
    ],
    sections: [
      {
        title: 'Un classique durable',
        body: 'Le plain-pied demeure un modèle recherché pour sa simplicité, son confort et sa flexibilité.',
      },
    ],
  },
  {
    slug: 'niveaux',
    href: '/realisations/niveaux',
    menuLabel: 'Niveaux',
    title: 'Maisons à niveaux',
    eyebrow: 'Modèles résidentiels',
    description: 'Galerie de maisons à niveaux réalisées par AR Construction.',
    subtitle: 'Des volumes adaptés au terrain et au mode de vie.',
    heroImage: proj2308,
    gallerySlug: 'niveaux',
    highlights: [
      'Implantation flexible',
      'Volumes distincts',
      'Maisons familiales',
      'Façades dynamiques',
      'Plans personnalisés',
    ],
    sections: [
      {
        title: 'Jouer avec le terrain',
        body: 'Les maisons à niveaux permettent de composer avec la pente, les vues et les besoins de chaque famille.',
      },
    ],
  },
  {
    slug: 'etage',
    href: '/realisations/etage',
    menuLabel: 'Étage',
    title: 'Maisons à étage',
    eyebrow: 'Modèles résidentiels',
    description: 'Galerie de maisons à étage construites par AR Construction.',
    subtitle: 'Maximiser le terrain avec des espaces bien séparés.',
    heroImage: arMaison1,
    gallerySlug: 'etage',
    highlights: [
      'Deux niveaux',
      'Présence architecturale',
      'Séparation jour/nuit',
      'Optimisation du terrain',
      'Maisons familiales',
    ],
    sections: [
      {
        title: 'Plus de présence, moins d’emprise',
        body: "La maison à étage permet de gagner de l'espace habitable tout en conservant plus de terrain extérieur.",
      },
    ],
  },
  {
    slug: 'jumele',
    href: '/realisations/jumele',
    menuLabel: 'Jumelé',
    title: 'Jumelés',
    eyebrow: 'Modèles résidentiels',
    description: 'Galerie de jumelés, duplex et triplex réalisés par AR Construction.',
    subtitle: 'Des projets résidentiels compacts et bien conçus.',
    heroImage: heroHouse,
    gallerySlug: 'jumele',
    highlights: ['Jumelés', 'Duplex', 'Triplex', 'Optimisation du lot', 'Qualité de finition'],
    sections: [
      {
        title: 'Optimiser le potentiel du terrain',
        body: 'Les jumelés et petits immeubles combinent efficacité foncière, qualité de construction et confort résidentiel.',
      },
    ],
  },
]
