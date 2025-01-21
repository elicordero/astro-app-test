import { z, defineCollection } from 'astro:content';

const clasesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string().url(),
    duration: z.string(),
  }),
});

export const collections = { clase : clasesCollection };
