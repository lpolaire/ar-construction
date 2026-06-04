import type { CollectionConfig } from 'payload'

export const Realisations: CollectionConfig = {
  slug: 'realisations',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'year', 'featured'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre du projet',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Plain-pied', value: 'Plain-pied' },
        { label: 'À niveaux', value: 'À niveaux' },
        { label: 'Deux étages', value: 'Deux étages' },
        { label: 'Jumelé', value: 'Jumelé' },
        { label: 'Rénovation', value: 'Rénovation' },
        { label: 'Commercial', value: 'Commercial' },
      ],
      label: 'Catégorie de réalisation',
    },
    {
      name: 'year',
      type: 'text',
      required: true,
      defaultValue: '2022',
      label: 'Année de réalisation',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image du projet',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Mettre en vedette (Afficher sur la page d\'accueil)',
    },
  ],
}
