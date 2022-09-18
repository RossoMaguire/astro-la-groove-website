import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://lagroove.ie',
  integrations: [vue(), sitemap({
    filter: page => page !== 'https://lagroove.ie/newsletter-success/'
  }), netlify()],
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  trailingSlash: 'always'
});