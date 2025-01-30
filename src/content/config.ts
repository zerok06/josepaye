import { defineCollection, reference, z } from "astro:content";

const opiniones = defineCollection({
    type: 'data',
    schema: z.object(
        {
            name: z.string(),
            title: z.string(),
            description: z.string(),
            image: z.string().default('public/assets/images/opiniones/default-avatar.jpg'),
            job: z.string(),
            linkedin: z.string()
        }
    ),
});

/* Blog */

const publicaciones = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        shortTitle: z.string(),
        description: z.string(),
        publishDate: z.date(),
        timeReadMins: z.number(),
        heroImage: z.string(),
        tags: z.array(z.string()),
        keywords: z.array(z.string()),
    }),
});


const tutoriales = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        shortTitle: z.string(),
        description: z.string(),
        publishDate: z.date(),
        timeReadMins: z.number(),
        heroImage: z.string(),
        tags: z.array(z.string()),
        posts: z.array(reference('publicaciones')),
        keywords: z.array(z.string()),
    }),
});


export const collections = {
    opiniones,
    publicaciones,
    tutoriales
}