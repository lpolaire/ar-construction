import type { DetailPageContent } from './types'
import arReal5 from '@/assets/ar-real5.jpg'
import arReal2 from '@/assets/ar-real2.jpg'
import arReal1 from '@/assets/ar-real1.jpg'
import arReal8 from '@/assets/ar-real8.jpg'
import renovationImg from '@/assets/renovation.jpg'

export const renovationSubpages: DetailPageContent[] = [
  {
    slug: 'residentielle',
    href: '/renovation/residentielle',
    menuLabel: 'Résidentielle',
    title: 'Rénovation résidentielle',
    eyebrow: 'Division rénovation',
    description:
      'Agrandissement, annexe, étage, verrière, réaménagement intérieur, revêtement extérieur, toiture, portes, fenêtres, cuisine, salle de bain et béton.',
    subtitle: 'Une équipe dédiée aux rénovations de toutes envergures.',
    heroImage: arReal5,
    highlights: [
      'Entrepreneur certifié Or en rénovation par l’APCHQ',
      'Designer professionnel et salle de montre',
      'Service gratuit de plan 3D',
      'Équipe attitrée à la rénovation',
      'Suivi du début à la fin',
    ],
    sections: [
      {
        title: 'Une expertise variée',
        body: "AR Construction prend en charge agrandissements, annexes, élévations d'étage, verrières, réaménagements intérieurs, revêtements extérieurs, toitures, portes, fenêtres, cuisines, salles de bain et béton.",
      },
      {
        title: 'Une équipe de professionnels',
        body: "Les imprévus viennent souvent d'un projet mal orienté. L'équipe évalue les besoins, guide les décisions et assure un résultat conforme aux attentes et à l'échéancier.",
      },
    ],
  },
  {
    slug: 'quelques-realisations',
    href: '/renovation/quelques-realisations',
    menuLabel: 'Quelques réalisations',
    title: 'Quelques réalisations de rénovations',
    eyebrow: 'Avant / après',
    description:
      'Galerie interactive des transformations de rénovations réalisées par AR Construction.',
    subtitle: 'Comparez les états avant et après les travaux.',
    heroImage: arReal2,
    gallerySlug: 'renovation-quelques-realisations',
    beforeAfterSlug: 'renovation-quelques-realisations',
    highlights: [
      'Avant / après interactif',
      'Agrandissements',
      'Revêtements extérieurs',
      'Toitures',
      'Transformations complètes',
    ],
    sections: [
      {
        title: 'Des transformations visibles',
        body: "Les comparateurs permettent de visualiser le travail d'enveloppe, de volume et de finition réalisé par les équipes.",
      },
    ],
  },
  {
    slug: 'agrandissement',
    href: '/renovation/agrandissement',
    menuLabel: 'Agrandissement',
    title: 'Agrandissement',
    eyebrow: 'Rénovation',
    description: 'Réalisations de rénovations et agrandissements avec vues avant / après.',
    subtitle: 'Créer plus d’espace sans perdre la cohérence de la maison.',
    heroImage: arReal1,
    gallerySlug: 'renovation-agrandissement',
    beforeAfterSlug: 'renovation-agrandissement',
    highlights: [
      'Ajout d’espace habitable',
      'Annexes et volumes complémentaires',
      'Structure et enveloppe',
      'Finition extérieure harmonisée',
      'Gestion complète du chantier',
    ],
    sections: [
      {
        title: 'Ajouter sans dénaturer',
        body: "Un bon agrandissement répond au besoin d'espace tout en respectant l'architecture existante, les fondations, l'enveloppe et les contraintes du terrain.",
      },
    ],
  },
  {
    slug: 'revetement-exterieur',
    href: '/renovation/revetement-exterieur',
    menuLabel: 'Revêtement extérieur',
    title: 'Revêtement extérieur',
    eyebrow: 'Rénovation',
    description:
      'Réalisations de rénovations de revêtement extérieur avec comparateurs avant / après.',
    subtitle: "Moderniser l'enveloppe, protéger la maison et améliorer son apparence.",
    heroImage: arReal8,
    gallerySlug: 'renovation-revetement-exterieur',
    beforeAfterSlug: 'renovation-revetement-exterieur',
    highlights: [
      'Parement extérieur',
      'Soffites et fascias',
      'Portes et fenêtres',
      'Détails de finition',
      'Protection durable de l’enveloppe',
    ],
    sections: [
      {
        title: "Une enveloppe qui fait durer l'investissement",
        body: "Le revêtement extérieur change l'allure de la maison, mais il protège aussi la structure. Les interventions tiennent compte de l'isolation, des ouvertures et de la durabilité.",
      },
    ],
  },
  {
    slug: 'toiture',
    href: '/renovation/toiture',
    menuLabel: 'Toiture',
    title: 'Toiture',
    eyebrow: 'Rénovation',
    description: 'Réalisations de rénovations de toiture et transformations extérieures.',
    subtitle: 'Un toit bien exécuté protège toute la maison.',
    heroImage: renovationImg,
    gallerySlug: 'renovation-toiture',
    beforeAfterSlug: 'renovation-toiture',
    highlights: [
      'Réfection de toiture',
      'Bardeaux et détails',
      'Ventilation et enveloppe',
      'Soffites, fascias et transitions',
      'Coordination avec les travaux extérieurs',
    ],
    sections: [
      {
        title: 'Protéger la structure',
        body: 'La toiture est une intervention critique. AR Construction aborde ces travaux avec rigueur: préparation, choix des matériaux et exécution propre.',
      },
    ],
  },
]
