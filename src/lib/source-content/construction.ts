import { heroFrom } from './media'
import type { DetailPageContent } from './types'

export const constructionSubpages: DetailPageContent[] = [
  {
    slug: 'cle-en-main',
    href: '/cle-en-main',
    menuLabel: 'Clé en main',
    title: 'Clé en main',
    eyebrow: 'Construction',
    description:
      'AR Construction prend en charge chaque étape de votre maison neuve ou chalet, des plans à la remise des clés.',
    subtitle: "AR Construction s'occupe de tout et construit partout.",
    heroImage: heroFrom('accueil'),
    highlights: [
      'Entrepreneur général reconnu depuis 2001',
      'Salle de montre complète et designer intérieur',
      'Service de plans 3D sans frais lors de la soumission',
      'Plus de 200 terrains dans des secteurs de choix au Saguenay',
      "Supervision de l'excavation à l'aménagement paysager",
    ],
    sections: [
      {
        title: 'Un entrepreneur reconnu',
        body: "Confier votre maison à AR Construction, c'est travailler avec un constructeur établi au Saguenay-Lac-Saint-Jean depuis 2001, reconnu pour la qualité, le suivi et la fiabilité de ses projets.",
      },
      {
        title: "Tranquillité d'esprit",
        body: 'Le service clé en main donne accès à des professionnels qualifiés, à un chantier coordonné et à une prise en charge complète pour livrer le projet selon les exigences établies.',
      },
      {
        title: 'Plans, choix et terrain',
        body: "Les plans 3D, la salle de montre et le designer intérieur facilitent les choix de matériaux, d'armoires, de finis intérieurs et extérieurs avant les travaux.",
      },
    ],
  },
  {
    slug: 'plans',
    href: '/plans',
    menuLabel: 'Plans',
    title: 'Plans architecturaux',
    eyebrow: 'Conception 3D',
    description:
      'Plans personnalisés, visualisation 3D et visite virtuelle pour bien cadrer votre projet avant la construction.',
    subtitle: 'Visualisez votre maison avant le premier coup de pelle.',
    heroImage: heroFrom('plans'),
    gallerySlug: 'plans',
    highlights: [
      '2 technologues en architecture',
      '1 designer professionnel',
      'Visualisation 3D réaliste',
      'Visite virtuelle gratuite',
      'Ajustements avant chantier',
    ],
    sections: [
      {
        title: 'Des ressources sur place et à l’écoute',
        body: 'Pas moins de 2 technologues en architecture ainsi qu’un designer sont disponibles en permanence à nos bureaux de Ville de Saguenay. Dès le début, un technologue rencontre le client afin de bien définir ses besoins et réaliser une première ébauche de plan 2D technique adapté à son budget. C\'est souvent à partir d\'une simple discussion que le projet prend forme.',
      },
      {
        title: 'Modélisation 3D et visite virtuelle',
        body: 'Une fois le plan 2D réalisé, nous le modélisons en 3D. Cette modélisation et visite virtuelle de leur future résidence permettent aux clients de juger si le projet est à la hauteur de leurs attentes, et d’effectuer des ajustements avant la construction ou la rénovation.',
      },
      {
        title: 'Aucun frais et clause de propriété',
        body: 'Tout ce temps d’étude et de conception 3D est alloué gratuitement et sans engagement. La seule condition étant que les plans demeurent la propriété d’AR Construction si, pour une raison ou une autre, le projet ne devait pas connaître de suite.',
      },
      {
        title: 'Les avantages constructeur',
        body: 'Rien ne remplace l’expérience d’un constructeur pour être conseillé sur les avantages ou inconvénients de chacune des options d’implantation et de structure. Si vous le souhaitez, vous pouvez également vous inspirer ou utiliser l’un de nos nombreux plans de réalisations précédentes.',
      },
    ],
  },
  {
    slug: 'design-interieur',
    href: '/design-interieur',
    menuLabel: 'Design intérieur',
    title: 'Design intérieur et Salle de montre',
    eyebrow: 'Salle de montre',
    description:
      'Accompagnement dans le choix des matériaux, couleurs, armoires, finis intérieurs et extérieurs.',
    subtitle: 'Un accompagnement concret pour choisir les bons finis.',
    heroImage: heroFrom('design-interieur'),
    gallerySlug: 'design-interieur',
    highlights: [
      'Martino Bouchard, designer pro',
      '30+ années d’expérience',
      'Showroom complet à Jonquière',
      'Choix d’armoires et planchers',
      'Sans frais additionnels',
    ],
    sections: [
      {
        title: 'M. Martino Bouchard, designer professionnel',
        body: 'Notre designer professionnel, Martino Bouchard, possède plus de 30 années d\'expérience dans le domaine. Il est en mesure de vous conseiller pour vos projets de construction neuve ou de rénovation, résidentiels ou commerciaux, et cela sans frais additionnels. Qu’il s’agisse d’un style classique, champêtre ou contemporain, il s’adapte avec brio à la vision de chaque client.',
      },
      {
        title: 'Une salle de montre complète à Jonquière',
        body: 'Pour vous simplifier la vie, AR Construction dispose d’une salle de montre complète au sein de ses locaux de la rue Alexis-le-Trotteur à Jonquière. Vous y trouverez un vaste choix d’échantillons de matériaux : panneaux d’armoires, poignées, comptoirs, couvre-planchers et revêtements extérieurs. Vous gagnez un temps précieux en choisissant tout sous un même toit avec la certitude que vos choix s’harmoniseront.',
      },
    ],
  },
]
