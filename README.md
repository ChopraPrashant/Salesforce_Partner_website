# Cubitous Infotech — Website

Modern, responsive marketing website for **Cubitous Infotech**, a Salesforce
consulting, implementation, and training company based in Ahmedabad.

Built with **Astro 7 + React 19 + Tailwind CSS v4 + TypeScript**.

## Commands

Run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## Project structure

```text
src/
├── components/        Reusable UI (Header, Footer, cards, forms, icons…)
│   ├── ContactForm.tsx    React island — validated contact/careers form
│   └── FaqAccordion.tsx   React island — FAQ accordion
├── data/
│   └── site.ts        ← Single source of truth: company info, services,
│                        nav, stats, testimonials, roles, FAQs, etc.
├── layouts/
│   └── Layout.astro   Base HTML shell (SEO meta, fonts, header/footer)
├── pages/             File-based routes
│   ├── index.astro            Home
│   ├── about.astro            About Us
│   ├── services/index.astro   Services overview
│   ├── services/[slug].astro  Individual service pages (auto-generated)
│   ├── training.astro         Training & Internships
│   ├── case-studies.astro     Case Studies
│   ├── careers.astro          Careers + application form
│   ├── contact.astro          Contact + map
│   ├── privacy.astro          Privacy Policy
│   ├── terms.astro            Terms of Service
│   └── 404.astro
└── styles/global.css  Design tokens (colors, fonts) + helpers
```

## How to customize

Almost all content lives in **`src/data/site.ts`** — edit it to update company
details, services, stats, testimonials, open roles, FAQs, and more. New service
pages are generated automatically from the `services` array.

### 1. Add your logo

1. Drop your logo file at `public/logo.svg` (or `public/logo.png`).
2. In `src/data/site.ts`, set `hasLogoImage: true`.
   (If using `.png`, update the `src` in `src/components/Logo.astro`.)

Until then, a built-in text + cube wordmark is shown.

### 2. Update contact details

Edit `company.phone`, `company.email`, `company.careersEmail`, and the address
in `src/data/site.ts`. (The phone number is a placeholder — replace it.)

### 3. Make the forms actually send email

The contact & careers forms (`src/components/ContactForm.tsx`) work out of the
box with client-side validation and a simulated success. To receive submissions,
pass an `endpoint` from a form backend such as
[Formspree](https://formspree.io), [Web3Forms](https://web3forms.com), or your
own API. Example in a page:

```astro
<ContactForm endpoint="https://formspree.io/f/your-id" client:visible />
```

### 4. Set your domain

In `astro.config.mjs`, update `site` to your production domain (used for
canonical URLs and social/OG tags).

### 5. Social links

Update the `company.socials` array in `src/data/site.ts` (LinkedIn, X, GitHub…).

## Deploy

The site is fully static. Deploy the `dist/` output to any static host:

- **Vercel** — `npm i -g vercel && vercel` (auto-detects Astro)
- **Cloudflare Pages / Netlify** — connect the repo; build `npm run build`,
  output directory `dist`.
```
