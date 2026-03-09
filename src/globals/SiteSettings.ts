import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Admin',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'schoolName',
              type: 'text',
              required: true,
              defaultValue: 'Unilorin Secondary School',
            },
            {
              name: 'motto',
              type: 'text',
              defaultValue: 'Hardwork, Discipline and Progress',
            },
            {
              name: 'description',
              type: 'textarea',
              defaultValue:
                'Unilorin Secondary School (USS) is a distinguished co-educational institution affiliated with the University of Ilorin, founded in 1982.',
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'favicon',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'contactPhone',
              type: 'text',
              defaultValue: '0705 154 9666',
            },
            {
              name: 'contactEmail',
              type: 'email',
              defaultValue: 'info@uilsecondary.unilorin.edu.ng',
            },
            {
              name: 'address',
              type: 'textarea',
              defaultValue:
                'Mini Campus, University of Ilorin, Ilorin, Kwara State, Nigeria',
            },
            {
              name: 'portalUrl',
              type: 'text',
              defaultValue: 'https://portal.uss.sch.ng',
            },
          ],
        },
        {
          label: 'Social',
          fields: [
            {
              name: 'socialLinks',
              type: 'array',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Twitter / X', value: 'twitter' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'YouTube', value: 'youtube' },
                    { label: 'LinkedIn', value: 'linkedin' },
                  ],
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Admissions',
          fields: [
            {
              name: 'admissionSteps',
              type: 'array',
              label: 'Admission Process Steps',
              fields: [
                {
                  name: 'stepNumber',
                  type: 'number',
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'requiredDocuments',
              type: 'array',
              label: 'Required Documents',
              fields: [
                {
                  name: 'document',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
