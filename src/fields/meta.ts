import type { Field } from 'payload'

export const metaFields: Field = {
  name: 'meta',
  type: 'group',
  label: 'SEO',
  admin: {
    position: 'sidebar',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Meta Title',
      admin: {
        description: 'Override the page title for search engines.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Meta Description',
      admin: {
        description: 'Brief summary for search engine results (150-160 chars).',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Social Image',
      admin: {
        description: 'Image shown when shared on social media.',
      },
    },
  ],
}
