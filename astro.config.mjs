// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  site: 'https://jakefixestech.com',
  vite: {
    plugins: [tailwindcss(), yaml()],
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js']
      }
    }
  },
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ]
});