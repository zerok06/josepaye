// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://josepaye.vercel.app',
  integrations: [tailwind(
    {
      applyBaseStyles: false
    }
  ), react(), mdx(), sitemap(
    {
      lastmod: new Date(),
    }
  )],
});