import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'icon', 'href'],
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
      label: 'Titre du service',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description abrégée',
    },
    {
      name: 'icon',
      type: 'select',
      required: true,
      options: [
        { label: 'Maison (Home)', value: 'Home' },
        { label: 'Marteau (Hammer)', value: 'Hammer' },
        { label: 'Boîte/Kit (Package)', value: 'Package' },
      ],
      label: 'Icône du service',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image de couverture',
    },
    {
      name: 'href',
      type: 'text',
      required: true,
      label: 'Lien de la page (ex: /maison-neuve)',
    },
  ],
}
