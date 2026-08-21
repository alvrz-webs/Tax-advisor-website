// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Cambia esto por tu dominio final cuando lo tengas (necesario para el sitemap/canonical correctos)
  site: 'https://pili-web.malvmar5.workers.dev',

  integrations: [sitemap()],
});