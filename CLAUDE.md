# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Unilorin Secondary School (USS) website — a Next.js 16 + Payload CMS 3 application with a PostgreSQL database and Cloudinary for media storage.

## Commands

- `npm run dev` — Start dev server (Next.js + Payload admin)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run generate:types` — Regenerate `src/payload-types.ts` from Payload config

## Environment Variables

Required in `.env.local`:
- `DATABASE_URL` — PostgreSQL connection string
- `PAYLOAD_SECRET` — Secret for Payload auth
- `CLOUDINARY_CLOUD_NAME` — Cloudinary cloud name
- `CLOUDINARY_API_KEY` — Cloudinary API key
- `CLOUDINARY_API_SECRET` — Cloudinary API secret

## Architecture

### Route Groups

The app uses Next.js route groups to separate concerns:
- `src/app/(frontend)/` — Public-facing pages (about, academics, admissions, contact, news, gallery). Uses its own layout with Header, Footer, fonts, and global CSS.
- `src/app/(payload)/` — Payload CMS admin panel at `/admin`. Uses Payload's own layout.
- `src/app/layout.tsx` — Root layout is a passthrough; each route group provides its own `<html>`/`<body>`.

### Payload CMS (Headless CMS)

Config: `src/payload.config.ts`

**Collections:** Users, Media, Pages, News, GalleryImages, Principals, Testimonials
**Globals:** SiteSettings (school info, contact, social links, admission steps)

- DB uses `push: true` (schema pushes on startup, no migration files)
- Rich text uses Lexical editor
- Media uploads go to Cloudinary (folder: `uss-media`) via `payload-cloudinary` plugin

### Reusable Field Configs

- `src/fields/slug.ts` — Auto-generates slug from `title` on create; unique + indexed
- `src/fields/meta.ts` — SEO group (meta title, description, social image) added to content collections

### Revalidation

`src/hooks/revalidate.ts` — `afterChange` hook factory that calls `revalidatePath()` for specified paths + always revalidates `/` (homepage shows featured content).

### Data Access

`src/lib/payload.ts` — `getPayload()` helper wraps Payload's `getPayload()` with the config promise. Use this in server components/route handlers to query collections.

### Frontend Components

- `src/components/layout/` — Header, Footer
- `src/components/home/` — Homepage sections (Hero, Stats, QuickInfo, FeaturedNews, Testimonials)
- `src/components/shared/` — Reusable across pages (BackToTop, ScrollReveal, ContactForm, GalleryGrid)
- `src/components/ui/` — Small UI primitives (AnimatedCounter, SectionHeading)
- `src/components/about/` — About page components (PrincipalTimeline)

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss` plugin. Custom design tokens (colors like `uss-body`, fonts) are defined in `src/app/globals.css`. Fonts: DM Sans (body) and Playfair Display (headings), loaded via Google Fonts in the frontend layout.

### Path Aliases

- `@/*` → `./src/*`
- `@payload-config` → `./src/payload.config.ts`

## Key Patterns

- News collection has draft/published status with access control: anonymous users only see published articles
- News items can be marked `featured` to appear on the homepage
- The `_old_static/` directory contains the previous static HTML site (reference only)
- Images config allows remote patterns from `res.cloudinary.com` and `staging.pixelsdigitals.com`
