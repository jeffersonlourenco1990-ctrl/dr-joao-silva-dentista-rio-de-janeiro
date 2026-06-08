import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://dr-joao-silva-dentista-rio-de-janeiro.netlify.app',
  output: 'static',
  devToolbar: { enabled: false },
});
