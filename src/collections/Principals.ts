import type { CollectionConfig } from 'payload'
import { revalidateCollection } from '../hooks/revalidate'

export const Principals: CollectionConfig = {
  slug: 'principals',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
    defaultColumns: ['name', 'tenureStart', 'tenureEnd', 'order'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateCollection(['/about'])],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'E.g. "Chief", "Mrs.", "Alhaji", "Alhaja"',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'tenureStart',
      type: 'number',
      required: true,
      min: 1900,
      max: 2100,
      admin: {
        description: 'Year tenure began.',
      },
    },
    {
      name: 'tenureEnd',
      type: 'text',
      admin: {
        description: 'Year tenure ended, or "Present" for the current principal.',
      },
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        description: 'Display order (1 = first principal).',
      },
    },
  ],
}
