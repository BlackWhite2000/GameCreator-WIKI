import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const commonSchema = z.object({})

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md'
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md']
      },
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional()
      })
    }),
    zh_hans: defineCollection({
      type: 'page',
      source: {
        include: 'zh_hans/**',
        prefix: '/zh_hans'
      },
      schema: commonSchema
    })
  }
})
