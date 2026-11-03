import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Must match SITE.url in src/data/site.js — needed for canonical URLs and sitemap-index.xml
  site: 'https://www.agikuyuwomenandmen.co.ke',
  integrations: [sitemap()],
  // No CSS/UI framework wired up on purpose — this build is functionality-only.
  // Add Tailwind / your design system before shipping to production.
});
