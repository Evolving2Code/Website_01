// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alder-and-ash.designyum.com',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  image: {
    responsiveStyles: true,
  },
});
