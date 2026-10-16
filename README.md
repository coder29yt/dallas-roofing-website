# Dallas Roofing — Website

Production website for **Dallas Roofing** (Instagram: [@dallasroofing_org](https://www.instagram.com/dallasroofing_org/)) — built with **Next.js 15 (App Router, fully static prerender)**, styled with a bespoke design system, copywritten for trust and conversion, and shipped with a complete technical SEO layer.

## Run it

```bash
npm install        # already installed in this workspace
npm run build      # static production build
npm run start      # serves on 0.0.0.0:3000
# dev: npm run dev
```

## What's inside

| Section | Notes |
|---|---|
| Hero | Animated spec build: gradient + cloud glow + 4 grid lines, word-by-word blur-in headline, rising transparent house cutout, bottom-left "reel" card with clickable progress bars |
| EN/ES toggle | Nav + hero copy switches live (default EN) |
| Our Latest Projects | Scroll-reveal heading + 3 swipeable project cards |
| Services | 6 service cards with inline SVG icons |
| Why Us | Dark stats/trust band |
| Process | 4-step "how it works" |
| Reviews | Testimonials + rating chips |
| FAQ | Animated accordion (also powers FAQPage schema) |
| Estimate | Validated lead form (honeypot spam trap) + call/email CTAs |
| Footer | NAP, service areas, social, legal |
| Sticky mobile CTA | Call / quote bar after scroll |

## SEO layer
- Static HTML prerender (crawlable without JS), canonical, OG/Twitter cards with branded 1200×630 image
- JSON-LD: `RoofingContractor` (LocalBusiness), `WebSite`, `FAQPage`, offers, service area, geo
- `app/robots.txt` + `app/sitemap.xml` generated as code
- AVIF/WebP image pipeline (sharp), 31-day cache headers, self-hosted preloaded fonts
- Full audit & ranking roadmap: **see `SEO-AUDIT.md`**

## Before going live (owner checklist)
1. **Connect the domain** — dallasroofing.org is currently parked/for sale on GoDaddy (~$1,999). Either acquire it or point this site at the client's live domain; then update `metadataBase`, schema `@id`s, robots/sitemap URLs (all in `app/layout.jsx`, `app/robots.js`, `app/sitemap.js`) to the final domain.
2. **Confirm NAP** — phone (214) 205-8979 and Mon–Sat 9–7 came from the brand's public Yelp listing; verify, and add the real street address to footer + schema when available.
3. **Replace placeholder ratings** (4.9 / 127) with the real aggregate once reviews are live.
4. **Wire the form** — v1 opens a pre-filled email to info@dallasroofing.org; swap for your CRM/endpoint in `app/components/Estimate.jsx`.
5. Set up Google Search Console, Bing Webmaster, GA4 and the Google Business Profile (details in `SEO-AUDIT.md` §6).

## Imagery
All photos (hero cutout, project shots, reel frames, OG banner) are **original AI-generated assets made for this brand** — no third-party copyright exposure. The hero cutout was processed to a true alpha PNG.

## Performance
Lab-audited under Lighthouse-style throttling (Slow 4G + 4× CPU, mobile):
| Metric | Initial build | Optimized |
|---|---|---|
| Total transfer | 1,551 KB | **428 KB (−72%)** |
| Fully loaded | 7.9 s | **2.2 s (−72%)** |
| LCP | 1.63 s | **1.68 s** ✓ (< 2.5 s) |
| FCP | 0.81 s | **0.89 s** ✓ |
| CLS | 0 | **0** ✓ |
| Desktop load | 1.46 s | **0.58 s (−60%)** |

Key optimizations: right-sized WebP reel frames (1,238 KB → 206 KB), chained next-frame preloading (zero LCP competition), AVIF/WebP pipeline for all `<Image>`s, immutable cache headers on `/images/*`, self-hosted preloaded fonts, static prerender.

## Smooth scrolling
[Lenis](https://lenis.darkroom.engineering) (v1.3, ~4 KB) drives lerped inertial wheel scrolling with gliding `#anchor` navigation (nav pills, CTA buttons, footer links). Native touch momentum is preserved on phones; `prefers-reduced-motion` users get instant, unsmoothed scrolling. Sticky CTA, scroll reveals and the drag carousel all operate on real scroll positions, so they keep working.

## Stack
Next.js 15 · React 19 · next/font (Playfair Display, Archivo, Manrope) · hand-rolled CSS design system (zero UI libraries) · IntersectionObserver reveals · Lenis smooth scroll · sharp image optimizer.
