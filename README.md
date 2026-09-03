# Fieldnotes — Blog + Resume (Angular 16)

A component-based Angular 16 app: a blog journal with a dedicated resume/CV page,
built entirely from standalone components (no NgModules, no single mega-component).

## Structure

```
src/app/
  app.component.ts          Shell: nav + router-outlet + footer
  app.routes.ts              Route table
  app.config.ts              provideRouter setup
  components/
    nav/                     Site navigation
    footer/                  Site footer
  pages/
    home/                    Blog index ("/")
    blog-post/               Single entry ("/blog/:slug")
    resume/                  Dedicated resume page ("/resume")
    not-found/                404 page
  models/post.model.ts       BlogPost interface
  services/blog.service.ts   Blog post data + lookups
```

Every route renders its own top-level component, and every component owns its
own `.ts` / `.html` / `.scss` files.

## Run it

Requires Node.js 18+.

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Build for production

```bash
npm run build
```

Output goes to `dist/fieldnotes-blog`.

## Customize

- Edit blog posts in `src/app/services/blog.service.ts`.
- Edit resume content (experience, education, skills) in
  `src/app/pages/resume/resume.component.ts`.
- Design tokens (colors, fonts, spacing) live in `src/styles.scss`.
