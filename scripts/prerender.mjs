import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { render } from '../dist-ssr/entry-server.js';

const dist = new URL('../dist/', import.meta.url);
const page = new URL('index.html', dist);
const sitemap = new URL('sitemap.xml', dist);
const ssrDir = new URL('../dist-ssr/', import.meta.url);
const marker = '<div id="root"></div>';

let html = await readFile(page, 'utf8');

if (!html.includes(marker)) {
  throw new Error(`Marcador ${marker} não encontrado em dist/index.html.`);
}

const body = render();
html = html.replace(marker, `<div id="root">${body}</div>`);

const assets = await readdir(new URL('assets/', dist));
const fonts = assets.filter((name) => name.endsWith('.woff2'));

if (fonts.length === 0) {
  throw new Error('Nenhuma fonte .woff2 encontrada em dist/assets/.');
}

const preloads = fonts
  .map(
    (name) =>
      `<link rel="preload" href="./assets/${name}" as="font" type="font/woff2" crossorigin />`,
  )
  .join('\n    ');

html = html.replace('</head>', `    ${preloads}\n  </head>`);

await writeFile(page, html);

const today = new Date().toISOString().slice(0, 10);
const xml = await readFile(sitemap, 'utf8');
await writeFile(sitemap, xml.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${today}</lastmod>`));

await rm(ssrDir, { recursive: true, force: true });

const words = body
  .replace(/<[^>]*>/g, ' ')
  .trim()
  .split(/\s+/).length;
console.log(
  `prerender: ${words} palavras, ${fonts.length} fonte(s) em preload, sitemap atualizado em ${today}`,
);
