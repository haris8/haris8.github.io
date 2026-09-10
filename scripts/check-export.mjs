import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, resolve, relative, sep } from 'node:path';

const output = resolve('dist/client');
const pages = [
  'index.html',
  'projects/secret-weapon/index.html',
  'projects/gas-trader-academy/index.html',
  'projects/datacity/index.html',
];
const required = [
  ...pages,
  '404.html',
  'CNAME',
  '.nojekyll',
  'images/moon.jpg',
  'images/secret-weapon-desktop.svg',
  'images/secret-weapon-mobile.svg',
  'datacity.html',
  'sql.html',
  'style.css',
  'images/er.jpg',
  'images/rm.jpg',
  'images/datacity.jpg',
];
for (const file of required)
  assert(existsSync(resolve(output, file)), `Missing output: ${file}`);
assert.equal(
  readFileSync(resolve(output, 'CNAME'), 'utf8').trim(),
  'harissiddiqui.me',
);

let checkedLinks = 0;
for (const page of pages) {
  const file = resolve(output, page);
  const html = readFileSync(file, 'utf8');
  assert(html.includes('<h1'), `Missing page content: ${page}`);
  assert(!html.includes('chatgpt.site'), `Private preview URL in ${page}`);
  assert(
    !html.includes('the-secret-weapon.hsiddiqui'),
    `Private app URL in ${page}`,
  );
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (/^(?:[a-z]+:|\/\/|#)/i.test(url)) continue;
    const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
    let target = pathname.startsWith('/')
      ? resolve(output, '.' + pathname)
      : resolve(dirname(file), pathname);
    const within = relative(output, target);
    assert(
      within !== '..' && !within.startsWith('..' + sep),
      `Link leaves output: ${url}`,
    );
    if (existsSync(target) && statSync(target).isDirectory())
      target = resolve(target, 'index.html');
    assert(existsSync(target), `Broken local link in ${page}: ${url}`);
    checkedLinks++;
  }
}
const home = readFileSync(resolve(output, 'index.html'), 'utf8');
for (const phrase of [
  'Houston, TX',
  'Energy / Systems / Curiosity',
  'Focus, one action at a time.',
  'A hands-on look at energy markets.',
  'Connecting people and opportunities.',
  'Always curious.',
])
  assert(!home.includes(phrase), `Removed copy reappeared: ${phrase}`);
assert(
  home.includes('footer-name') && home.includes('Haris Siddiqui'),
  'Missing footer name',
);
assert(home.includes('id="experience"'), 'Missing experience section');
console.log(
  `Static export validated: ${pages.length} pages, ${checkedLinks} local links, preserved domain and DataCity assets.`,
);
