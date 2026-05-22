# Northern Access Floors Ltd — Website (Next.js)

This is the Northern Access Floors Ltd marketing site, converted from a
single-file HTML page into a **Next.js (App Router) + TypeScript + Tailwind**
project. The visual design is identical to the original — it has just been
reorganised into reusable components so it's easier to maintain and extend.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx      # Root layout — loads fonts, sets <title>/SEO metadata
    page.tsx        # Home page — composes all the sections in order
    globals.css     # All the original site styling (preserved verbatim)
  components/
    TopBar.tsx      # Phone/email/fax strip + Tate badge
    Header.tsx      # Sticky nav, logo, mobile menu (client component)
    Hero.tsx        # Hero with logo, trust stats, floor illustration
    PartnerBand.tsx # "Full Tate portfolio" brand chips
    WhyUs.tsx       # Four "why choose us" stat cards
    WhatIsRAF.tsx   # Explainer text + cross-section SVG diagram
    Services.tsx    # Six service cards
    DataCentres.tsx # Data-centre section + side panel
    CTABand.tsx     # "Ready to start your project?" band
    Contact.tsx     # Contact details + quote form
    QuoteForm.tsx   # The enquiry form (client component, mailto submit)
    Footer.tsx      # Footer with auto-updating copyright year
    ScrollReveal.tsx# Adds fade-in-on-scroll behaviour (client component)
    icons.tsx       # All the inline SVG icons as small components
public/
  logo.jpg          # Company logo (was embedded as base64 in the original)
```

## Editing common content (no deep coding needed)

Most of the wording lives as plain text inside the component files in
`src/components/`. To change something, open the relevant file and edit the
text between the tags, just like the original page. A few pointers:

- **Phone / email / fax / address** appear in `TopBar.tsx`, `Contact.tsx`,
  and `Footer.tsx`. Search for `01482 483950`, `info@nafl.co.uk`, or
  `HU9 5LW` to find them.
- **Service cards** are a simple list at the top of `Services.tsx`.
- **"Why us" cards** are a list at the top of `WhyUs.tsx`.
- **Brand chips** are a list at the top of `PartnerBand.tsx`.
- **The logo** is `public/logo.jpg` — replace that file (keep the name) to
  swap it everywhere.
- **Colours** are defined once as CSS variables at the top of
  `src/app/globals.css` (and mirrored in `tailwind.config.ts`).

## How the quote form works

The form doesn't need a backend. On submit it opens the visitor's email app
with a pre-filled message to `info@nafl.co.uk` — exactly as the original page
did. If you later want submissions to go straight to an inbox without opening
the visitor's email client, that would mean adding a small server route or a
form service; ask Claude Code and it can wire that up.

## Notes

- Fonts (Archivo + Hanken Grotesk) are loaded via `next/font/google`, so they
  are self-hosted automatically — no external font request at runtime.
- Everything renders as static HTML; only the header menu, scroll reveal, and
  quote form run a little JavaScript on the client.
