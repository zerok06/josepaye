import { defineCollection, z } from "astro:content";

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






export const collections = {
    opiniones
}