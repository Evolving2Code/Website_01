// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alderandash.example',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  image: {
    responsiveStyles: true,
  },
});
