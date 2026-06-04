import type { DetailPageContent } from './types'
import arMaison2 from '@/assets/ar-maison2.jpg'
import arReal7 from '@/assets/ar-real7.jpg'
import arReal6 from '@/assets/ar-real6.jpg'
import arReal3 from '@/assets/ar-real3.jpg'

export const companySubpages: DetailPageContent[] = [
  {
    slug: 'developpement-domiciliaire',
    href: '/developpement-domiciliaire',
    menuLabel: 'Développement domiciliaire',
    title: 'Développement domiciliaire',
    eyebrow: 'Territoire',
    description:
      'Développements résidentiels et terrains AR Construction au Saguenay-Lac-Saint-Jean.',
    subtitle: 'Créer des milieux de vie, pas seulement des terrains.',
    heroImage: arMaison2,
    gallerySlug: 'developpement-domiciliaire',
    highlights: [
      'Quartiers résidentiels',
      'Terrains stratégiques',
      'Développement régional',
      'Maisons clé en main',
      'Suivi foncier',
    ],
    sections: [
      {
        title: 'AR Construction, le Bâtisseur',
        body: 'Depuis 2001, AR Construction se positionne comme un actor majeur au niveau du développement domiciliaire au Saguenay. Ses projets visionnaires ont donné naissance à des quartiers entiers dans des endroits stratégiques de la région et l\'aventure se poursuit avec le Domaine Luxuor et les nouvelles phases du Quartier des Élus, du quartier du Mont-Jacob et celui de Shipshaw.',
      },
      {
        title: 'La recette de notre succès',
        body: 'Ce succès est attribuable en partie à la facilité avec laquelle ses fondateurs, Messieurs Roger Dumais et Raphaël Dumais, parviennent à communiquer leur vision et leur enthousiasme, tout en sachant s\'entourer d\'une excellente équipe. Voilà pourquoi tant de résidents du Saguenay ont réalisé que leur rêve se mariait parfaitement avec la vision d\'AR Construction.',
      },
      {
        title: 'Projet d’envergure à Mistissini (2012)',
        body: 'Cette compétence a fait naître des projets d\'envergure et a conduit l\'entrepreneur général en 2012 à Mistissini. C\'est ainsi que la communauté autochtone a pu tirer profit de l\'expertise d\'AR Construction afin d\'assurer la continuité de son développement sur la réserve Cri.',
      },
    ],
  },
  {
    slug: 'developpement-durable',
    href: '/developpement-durable',
    menuLabel: 'Développement durable',
    title: 'Politique de développement durable',
    eyebrow: 'Novoclimat et efficacité',
    description:
      'Construction durable, efficacité énergétique et engagement envers des milieux de vie responsables.',
    subtitle: 'Construire avec une attention portée à la performance et au territoire.',
    heroImage: arReal7,
    highlights: [
      'Novoclimat',
      'Domaine Luxuor',
      'Efficacité énergétique',
      'Choix locaux',
      'Durabilité',
    ],
    sections: [
      {
        title: '1. Techniques de construction et matériaux utilisés',
        body: 'Nous choisissons des matériaux de qualité afin de maximiser leur durée de vie et d’offrir des bâtiments hautement performants. De plus, nous informons et sensibilisons notre clientèle sur les avantages d’une construction certifiée Novoclimat.',
      },
      {
        title: '2. Gestion rigoureuse des matières résiduelles',
        body: 'Nous réduisons autant que possible la quantité de matières acheminées vers les sites d’enfouissement en procédant à un tri des résidus de chantier afin de récupérer le métal et les matériaux pouvant être réutilisés ou recyclés.',
      },
      {
        title: '3. Partenaires et sous-contractants régionaux',
        body: 'Nous privilégions les fournisseurs, sous-contractants et produits régionaux afin de stimuler et d’encourager l’économie locale tout en réduisant significativement l’empreinte environnementale liée au transport des matériaux.',
      },
      {
        title: '4. Promotion des saines habitudes de vie',
        body: 'Nous faisons activement la promotion des saines habitudes de vie auprès de nos employés et de la population générale via la mission de l’écoquartier du Domaine Luxuor, dont AR Construction est un partenaire historique majeur.',
      },
    ],
  },
  {
    slug: 'prix-et-distinctions',
    href: '/prix-et-distinctions',
    menuLabel: 'Prix et distinctions',
    title: 'Prix et distinctions',
    eyebrow: 'Reconnaissance',
    description: 'Certifications, distinctions et reconnaissance régionale de AR Construction.',
    subtitle: 'Une réputation bâtie sur la constance et la qualité.',
    heroImage: arReal6,
    gallerySlug: 'prix-et-distinctions',
    highlights: [
      'APCHQ Or 2019',
      'Lauréat Dubuc Gala 2019',
      'ACQ Platine',
      'Novoclimat',
      'RBQ 8271-8974-17',
    ],
    sections: [
      {
        title: 'Prix Distinction Or (APCHQ)',
        body: 'Lors du Congrès de l\'APCHQ tenu le 19 octobre 2019 au Château Frontenac de Québec, AR Construction s\'est vu décerner le Prix Distinction Or. Ce prix prestigieux souligne l\'excellence de son service à la clientèle au cours des 10 dernières années, avec un taux de satisfaction mesuré exceptionnel de 96 %.',
      },
      {
        title: 'Lauréat Gala du Mérite Économique 2019 (Le Dubuc)',
        body: 'AR Construction a été le grand gagnant dans la catégorie Construction lors du 15e Gala du mérite économique de la Chambre de commerce et d\'industrie Saguenay-Le Fjord, en recevant la statuette Dubuc qui couronne l\'effort collectif de l\'ensemble de nos équipes de bureau et de chantier.',
      },
      {
        title: 'Certifications et Licences professionnelles',
        body: 'En complément de nos prix régionaux, AR Construction maintient les plus hauts standards de conformité : certifié Platine par l\'ACQ, accrédité Novoclimat pour l\'efficacité thermique et détenteur de la licence d\'entrepreneur général RBQ : 8271-8974-17.',
      },
    ],
  },
  {
    slug: 'comparatif',
    href: '/comparatif',
    menuLabel: 'Comparatif',
    title: 'Comparatif - Choisir son entrepreneur',
    eyebrow: 'Choisir son entrepreneur',
    description: 'Repères pour comparer une construction AR avec d’autres approches.',
    subtitle: 'Comprendre ce qui est inclus, garanti et suivi.',
    heroImage: arReal3,
    gallerySlug: 'comparatif',
    highlights: [
      'Prix soumissionné respecté',
      'Économies réelles sur place',
      'Pas de frais de grue cachés',
      'Plans 3D et modifications',
      'Constructeur local certifié',
    ],
    sections: [
      {
        title: 'Des prix moins chers en usine : Un mythe',
        body: 'Aujourd\'hui, il n\'est plus vrai que les murs préfabriqués en usine sont moins dispendieux. Les entreprises de fabrication le savent et en profitent pour maximiser leurs marges. C\'est la loi de l\'offre et de la demande.',
      },
      {
        title: 'L’avis de Roger Dumais (fondateur)',
        body: '"Souvent, les gens croient qu\'en optant pour le préfabriqué, ils feront des économies. Il faut savoir que lorsqu\'ils font ce choix, ils font affaires avec des entreprises de l\'extérieur et que des frais de transport coûteux sont à prévoir pour acheminer la maison jusqu\'à son emplacement, sans oublier les coûts de la grue. Tout cela fait en sorte que les prix sont beaucoup moins compétitifs. Nos maisons sont construites sur place avec des matériaux de première qualité et nous sommes en mesure de rivaliser avec n\'importe quel produit usiné provenant de l\'extérieur."',
      },
      {
        title: 'Des économies mesurées',
        body: 'À titre d’exemple, pour 134 pieds linéaires de murs identiques soumissionnés auprès de 3 manufacturiers d’usine différents, AR Construction permet de réaliser une économie nette de 1 467.40 $, pour des murs de qualité supérieure montés directement sur place par nos équipes. Demandez-nous une soumission et comparez !',
      },
    ],
  },
]
