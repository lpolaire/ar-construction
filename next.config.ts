import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
      {
        pathname: '/ar-source/**',
      },
    ],
  },
  redirects: async () => [
    { source: '/construction', destination: '/', permanent: true },
    { source: '/maisonneuve', destination: '/maison-neuve', permanent: true },
    { source: '/cleenmain', destination: '/cle-en-main', permanent: true },
    { source: '/autoconstruction', destination: '/autoconstructeur', permanent: true },
    { source: '/residentielle', destination: '/renovation/residentielle', permanent: true },
    {
      source: '/quelquesrealisations',
      destination: '/renovation/quelques-realisations',
      permanent: true,
    },
    { source: '/agrandissement', destination: '/renovation/agrandissement', permanent: true },
    {
      source: '/revetementexterieur',
      destination: '/renovation/revetement-exterieur',
      permanent: true,
    },
    { source: '/toiture', destination: '/renovation/toiture', permanent: true },
    {
      source: '/revetementexétieur',
      destination: '/renovation/revetement-exterieur',
      permanent: true,
    },
    {
      source: '/revetementex%C3%A9tieur',
      destination: '/renovation/revetement-exterieur',
      permanent: true,
    },
    {
      source: '/copie-de-réalisations',
      destination: '/realisations/residentiel',
      permanent: true,
    },
    {
      source: '/copie-de-r%C3%A9alisations',
      destination: '/realisations/residentiel',
      permanent: true,
    },
    { source: '/nonresidentiel', destination: '/realisations/commercial', permanent: true },
    {
      source: '/copie-de-commercial',
      destination: '/realisations/multilogements',
      permanent: true,
    },
    { source: '/plain-pied', destination: '/realisations/plain-pied', permanent: true },
    { source: '/niveaux', destination: '/realisations/niveaux', permanent: true },
    { source: '/etage', destination: '/realisations/etage', permanent: true },
    { source: '/jumele', destination: '/realisations/jumele', permanent: true },
    { source: '/terrainscompletes', destination: '/terrains/completes', permanent: true },
    { source: '/terrainsdisponibles', destination: '/terrains/disponibles', permanent: true },
    { source: '/terrainsvillegiature', destination: '/terrains/villegiature', permanent: true },
    { source: '/designinterieur', destination: '/design-interieur', permanent: true },
    {
      source: '/developpementdomiciliaire',
      destination: '/developpement-domiciliaire',
      permanent: true,
    },
    { source: '/developpementdurable', destination: '/developpement-durable', permanent: true },
    { source: '/prixetdistinctions', destination: '/prix-et-distinctions', permanent: true },
    { source: '/apropos', destination: '/a-propos', permanent: true },
    { source: '/contactez-nous', destination: '/contact', permanent: true },
    { source: '/modeles', destination: '/realisations', permanent: true },
    { source: '/modeles/plein-pied', destination: '/realisations/plain-pied', permanent: true },
    { source: '/modeles/niveaux', destination: '/realisations/niveaux', permanent: true },
    { source: '/modeles/etage', destination: '/realisations/etage', permanent: true },
    { source: '/modeles/jumele', destination: '/realisations/jumele', permanent: true },
    {
      source: '/temoignages/clients-maison-neuve',
      destination: '/temoignages',
      permanent: true,
    },
    {
      source: '/temoignages/m-eric-meunier-jonquiere',
      destination: '/temoignages',
      permanent: true,
    },
    { source: '/temoignages/clients-renovation', destination: '/temoignages', permanent: true },
  ],
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
