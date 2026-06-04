import type { CollectionConfig } from 'payload'

export const Terrains: CollectionConfig = {
  slug: 'terrains',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'location', 'status'],
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom du secteur',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Emplacement',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'Disponible',
      options: [
        { label: 'Disponible', value: 'Disponible' },
        { label: 'Réservé', value: 'Réservé' },
        { label: 'Vendu', value: 'Vendu' },
      ],
      label: 'Statut du secteur',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description du secteur',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Caractéristiques',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
          label: 'Caractéristique (ex: Services municipaux inclus)',
        },
      ],
    },
  ],
}
