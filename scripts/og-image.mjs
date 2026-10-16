// Gera public/og-image.png (1200x630) a partir de scripts/og-image.html.
// Usa um Chromium instalado; defina CHROME_PATH para escolher outro binário.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const candidates = [process.env.CHROME_PATH, '/usr/bin/chromium', '/usr/bin/google-chrome', '/usr/bin/brave'];
const chrome = candidates.find((path) => path && existsSync(path));
if (!chrome) {
  throw new Error('Nenhum Chromium encontrado. Defina CHROME_PATH.');
}

const source = pathToFileURL(resolve('scripts/og-image.html')).href;
const output = resolve('public/og-image.png');
const profile = mkdtempSync(join(tmpdir(), 'og-image-'));

try {
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    `--user-data-dir=${profile}`,
    '--window-size=1200,630',
    '--virtual-time-budget=3000',
    `--screenshot=${output}`,
    source,
  ], { stdio: 'inherit' });
} finally {
  rmSync(profile, { recursive: true, force: true });
}

console.log(`Imagem gerada em ${output}`);
