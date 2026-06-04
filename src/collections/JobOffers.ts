import type { CollectionConfig } from 'payload'

export const JobOffers: CollectionConfig = {
  slug: 'job-offers',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'location', 'isActive'],
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
      label: 'Titre du poste',
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Jonquière, Saguenay-Lac-Saint-Jean',
      label: 'Lieu',
    },
    {
      name: 'salary',
      type: 'text',
      label: 'Salaire / Conditions',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description du poste',
    },
    {
      name: 'requirements',
      type: 'textarea',
      label: 'Exigences requises',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Offre active',
    },
  ],
}
