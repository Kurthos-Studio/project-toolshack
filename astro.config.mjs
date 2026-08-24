import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL ?? 'https://tools.kurthos.app';

export default defineConfig({
  site,
  trailingSlash: 'always',
});
