import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['Dining', 'Outdoors', 'Arts & Culture', 'Entertainment', 'Family', 'Free & Cheap']),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
