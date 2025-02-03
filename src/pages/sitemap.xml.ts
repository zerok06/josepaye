import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const tutorials = await getCollection('tutoriales');
  const posts = await getCollection('publicaciones');

  const customPages = [
    { url: '/posts', lastmod: '2023-10-01', changefreq: 'monthly', priority: '0.7' },
    { url: '/cv', lastmod: '2023-10-01', changefreq: 'monthly', priority: '0.9' },
    { url: '/cv/proyects', lastmod: '2023-10-01', changefreq: 'monthly', priority: '0.9' },
    { url: '/tutorials', lastmod: '2023-10-01', changefreq: 'monthly', priority: '0.8' },
    { url: '/pdf/JOSE_ENRIQUE_PAYE_MAMANI.pdf', lastmod: '2023-10-01', changefreq: 'monthly', priority: '0.9' },
  ];

  const postUrls = posts.map((post) => {
    return `
      <url>
        <loc>${new URL(`/posts/${post.slug}`, import.meta.env.SITE).href}</loc>
        <lastmod>${new Date(post.data.publishDate).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  }).join('');


  const tutorialesUrls = tutorials.map((tutorial) => {
    return `
      <url>
        <loc>${new URL(`/tutorials/${tutorial.slug}`, import.meta.env.SITE).href}</loc>
        <lastmod>${new Date(tutorial.data.publishDate).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  }).join('');

  const customUrls = customPages.map((page) => {
    return `
      <url>
        <loc>${new URL(page.url, import.meta.env.SITE).href}</loc>
        <lastmod>${page.lastmod}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${new URL('/', import.meta.env.SITE).href}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${postUrls}
      ${tutorialesUrls}
      ${customUrls}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};