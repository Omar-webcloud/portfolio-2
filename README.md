# Mohammad Omar — Portfolio

A single-page portfolio built with Vite + React 19 + Tailwind CSS v4, laid out in
the clean "panel + hairline" style of [chanhdai.com](https://chanhdai.com/).

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## Editing content

All copy lives in [`src/data/user.js`](src/data/user.js) — name, role, contact
details, about lines, stack, experience, education, certifications, articles and
nav. Projects live in [`src/data/projects.js`](src/data/projects.js).

## GitHub contributions graph

The contribution heatmap is generated at build time so the page ships without
any runtime API call or token. To refresh it (requires `gh`, authenticated):

```bash
npm run contributions
```

This rewrites `src/data/contributions.json` from the GitHub GraphQL API.

## Theming

Colours are CSS variables in `src/index.css` (light + `.dark`). The theme is
toggled by a class on `<html>`, persisted in `localStorage`, and applied before
first paint by an inline script in `index.html`.

## Notes

- Press <kbd>L</kbd> (or click the avatar) to flip the studio lights on the headshot.
- Click the isometric mark for a sound.
