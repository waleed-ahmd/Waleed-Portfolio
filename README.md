# Waleed Ahmad Portfolio

A modern single-page portfolio website built with **React**, **TypeScript**, **Vite**, and **styled-components**.

## Features

- Professional dark tech design
- Fully responsive layout
- React + TypeScript component structure
- styled-components theme and global styles
- Typed data files for projects, skills, services, and experience
- Contact form using `mailto:` by default
- Ready for deployment on Vercel or Netlify

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal.

## Build for Production

```bash
npm run build
npm run preview
```

## Customize Your Details

Update these files first:

```txt
src/data/profile.ts
src/data/projects.ts
src/data/skills.ts
src/data/experience.ts
src/data/services.ts
```

### Add Your CV

1. Put your CV PDF inside the `public` folder, for example:

```txt
public/Waleed_Ahmad_CV.pdf
```

2. Update `resumeUrl` in `src/data/profile.ts`:

```ts
resumeUrl: '/Waleed_Ahmad_CV.pdf'
```

### Add Real Links

Replace the placeholder GitHub, LinkedIn, Fiverr, project, and email links in:

```txt
src/data/profile.ts
src/data/projects.ts
```

## Deployment

### Vercel

```bash
npm run build
```

Push the project to GitHub, import it in Vercel, and deploy.

### Netlify

Build command:

```txt
npm run build
```

Publish directory:

```txt
dist
```
