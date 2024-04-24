import { z, defineCollection } from 'astro:content';

export const ArticleSchema = ({image}) => z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    pubDate: z.optional(z.date()),
    modDate: z.optional(z.date()),
    // image: image(),
    image: z.optional(image()),
    altText: z.optional(z.string()),
});

export const collections = {
    articles: {
        type: 'content',
        schema: ArticleSchema,
    }
};