# Haris Siddiqui — portfolio

The source for [harissiddiqui.me](https://harissiddiqui.me). The site builds to static HTML, CSS, JavaScript, and images for GitHub Pages. It needs no hosted application server, database, or sign-in.

## Local development

Use Node 22.13 or newer:

```sh
npm ci
npm run dev
```

On Windows, use `npm.cmd` if PowerShell blocks npm's script shim.

```sh
npm run lint
npm run typecheck
npm run build
npm run check:export
npm start
```

The static export is `dist/client`. GitHub Actions checks each change and deploys successful builds from `main`. GitHub Pages uses the Actions publishing source and the existing `harissiddiqui.me` custom domain with HTTPS.

The repository also uses GitHub's default CodeQL setup to satisfy its required pull-request security scan.

Pages use native links and static images, so the linter's Next.js router and image-service preferences are disabled. `scripts/prepare-pages.mjs` adds directory indexes after export to work around a trailing-slash prerender issue in Vinext beta.5.

## Editing

- `app/page.tsx`: homepage, projects, experience placeholder, and education.
- `app/portfolio.tsx`: shared navigation, footer, and project graphics.
- `app/projects/`: individual project pages.
- `app/globals.css`: shared styling and responsive layouts.
- `public/images/secret-weapon-*.svg`: generic desktop and mobile concepts. They contain fictional demo content and do not link to the private app.

The name appears in the footer; the homepage hero retains the original moon photograph without a name, location, or tagline. Work experience awaits résumé content.

## Existing DataCity material

The original `datacity.html`, `sql.html`, associated images, scripts, and use-case files are retained under `public/` and keep their original published URLs. The new DataCity project page links to that material.

The moon photograph is reused from the original portfolio. Interface concepts and chart graphics are illustrative, with generic or simulated data.
