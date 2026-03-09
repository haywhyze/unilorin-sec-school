import type { Field, FieldHook } from 'payload'

const formatSlug: FieldHook = ({ value, data, operation }) => {
  if (operation === 'create' || (operation === 'update' && !value)) {
    return (
      data?.title
        ?.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim() || value
    )
  }
  return value
}

export const slugField: Field = {
  name: 'slug',
  type: 'text',
  unique: true,
  index: true,
  admin: {
    position: 'sidebar',
    description: 'Auto-generated from title. Edit to customize.',
  },
  hooks: {
    beforeValidate: [formatSlug],
  },
}
