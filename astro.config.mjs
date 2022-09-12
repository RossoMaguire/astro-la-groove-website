import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

export default {
  site: 'https://lagroove.ie',
  integrations: [
    vue(),
    sitemap({
      filter: (page) => page !== 'https://lagroove.ie/newsletter-success/',
    }),
  ],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  trailingSlash: 'always',
};
