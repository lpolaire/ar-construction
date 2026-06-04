import type { DetailPageContent } from './types'
import arReal6 from '@/assets/ar-real6.jpg'
import constructionSite from '@/assets/construction-site.jpg'
import arReal9 from '@/assets/ar-real9.jpg'

export const terrainSubpages: DetailPageContent[] = [
  {
    slug: 'completes',
    href: '/terrains/completes',
    menuLabel: 'Terrains complétés',
    title: 'Terrains complétés',
    eyebrow: 'Développements',
    description:
      'Quartier des Élus, Mont Jacob, Domaine Luxuor et Laterrière: développements complétés par AR Construction.',
    subtitle: 'Les secteurs développés et vendus par AR Construction.',
    heroImage: arReal6,
    gallerySlug: 'terrains-completes',
    highlights: [
      'Quartier des Élus 2-3-4',
      'Quartier des Élus 5-6-7',
      'Mont Jacob',
      'Domaine Luxuor',
      'Laterrière',
    ],
    sections: [
      {
        title: 'Quartier des Élus',
        body: "Les phases 2, 3 et 4, puis 5, 6 et 7, sont vendues. Ce succès confirme l'intérêt pour ce développement situé entre Chicoutimi et Jonquière.",
      },
      {
        title: 'Domaine Luxuor',
        body: 'AR Construction a participé au premier écoquartier à Saguenay. De 2017 à 2023, le site initial indique que 95% des habitations du quartier complet ont été fabriquées par AR Construction.',
      },
      {
        title: 'Laterrière et Mont Jacob',
        body: 'Ces secteurs complétés mettent de l’avant des cadres de vie paisibles, familiaux et bien situés à Saguenay.',
      },
    ],
  },
  {
    slug: 'disponibles',
    href: '/terrains/disponibles',
    menuLabel: 'Terrains disponibles',
    title: 'Terrains disponibles',
    eyebrow: 'Inventaire',
    description: 'Terrains disponibles à Shipshaw et Mont Jacob phase 2 selon le site initial.',
    subtitle: 'Des lots pour bâtir dans des secteurs tranquilles et accessibles.',
    heroImage: constructionSite,
    gallerySlug: 'terrains-disponibles',
    highlights: [
      'Shipshaw',
      'Mont Jacob phase 2',
      'Cadre naturel',
      'Proximité de Jonquière',
      'Secteurs familiaux',
    ],
    sections: [
      {
        title: 'Shipshaw',
        body: 'Un cadre enchanteur, un site où la nature est omniprésente et un environnement paisible, à proximité de Jonquière et de la rivière Saguenay.',
      },
      {
        title: 'Mont Jacob phase 2',
        body: 'Le site initial présente Mont Jacob phase 2 comme un secteur disponible. Les détails de prix et de lots doivent être confirmés directement avec AR Construction.',
      },
    ],
  },
  {
    slug: 'villegiature',
    href: '/terrains/villegiature',
    menuLabel: 'Terrains villégiature',
    title: 'Terrain de villégiature',
    eyebrow: 'Chemin des Villas, Chicoutimi',
    description:
      'Terrain de villégiature au Chemin des Villas, Chicoutimi, avec vue sur le Saguenay selon le site initial.',
    subtitle: 'Un emplacement tranquille avec vue sur le Saguenay.',
    heroImage: arReal9,
    gallerySlug: 'terrains-villegiature',
    highlights: [
      'Chemin des Villas',
      'Chicoutimi',
      'Vue sur le Saguenay',
      'Résidence principale ou secondaire',
      'Contact: 418-695-6646',
    ],
    sections: [
      {
        title: 'Chemin des Villas, Chicoutimi',
        body: 'Situé dans un endroit tranquille et paisible, ce terrain offre une vue sur le Saguenay tout en restant à proximité des commodités de Chicoutimi.',
      },
      {
        title: 'Disponibilité à confirmer',
        body: 'Le site initial invite à contacter AR Construction pour plus d’information au 418-695-6646. La disponibilité et les conditions doivent être validées avec l’équipe.',
      },
    ],
  },
]
