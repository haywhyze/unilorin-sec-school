import type { CollectionConfig } from 'payload'
import { revalidateCollection } from '../hooks/revalidate'

export const GalleryImages: CollectionConfig = {
  slug: 'gallery-images',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'category', 'displaySize'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidateCollection(['/gallery'])],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Campus', value: 'campus' },
        { label: 'Events', value: 'events' },
        { label: 'Academics', value: 'academics' },
        { label: 'Sports', value: 'sports' },
        { label: 'Culture', value: 'culture' },
      ],
      defaultValue: 'campus',
    },
    {
      name: 'displaySize',
      type: 'select',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
      defaultValue: 'medium',
      admin: {
        position: 'sidebar',
        description: 'Size hint for masonry grid layout.',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
