// @ts-check
import { defineConfig } from 'astro/config';

// TODO: definir "site" quando o domínio da Heat On for contratado
// (necessário para URLs absolutas de Open Graph e sitemap).
export default defineConfig({
  server: { port: 4321 },
  build: {
    inlineStylesheets: 'auto',
  },
});
