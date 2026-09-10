import assert from 'node:assert/strict';
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Keep native directory URLs without triggering Vinext beta.5's export redirect bug.
const output = resolve('dist/client');
const manifest = JSON.parse(
  readFileSync('dist/server/vinext-prerender.json', 'utf8'),
);
for (const { route, status } of manifest.routes) {
  assert.equal(status, 'rendered', `Route was not exported: ${route}`);
  if (route === '/' || route === '/404') continue;
  assert(/^\/[a-z0-9/-]+$/.test(route), `Unexpected export route: ${route}`);
  const directory = resolve(output, '.' + route);
  mkdirSync(directory, { recursive: true });
  copyFileSync(
    resolve(output, '.' + route + '.html'),
    resolve(directory, 'index.html'),
  );
}
