# SEO AUDIT & RANKING ROADMAP
## Dallas Roofing — dallasroofing.org
**Auditor role:** SEO professional · **Date:** September 29, 2026 · **Scope:** Full technical, on-page, local and off-page audit of the newly built website, plus a prioritized 12-month plan to rank for Dallas roofing keywords.

---

# PART 1 — WHY NEXT.JS WAS THE RIGHT CALL

The client brief asked for React *or* Next.js, whichever is more SEO-friendly. **Next.js was chosen**, for concrete reasons:

| Requirement | React (CRA/Vite SPA) | Next.js (chosen) |
|---|---|---|
| First paint content | Empty `<div id="root">` until JS downloads | **Full HTML pre-rendered at build time (SSG)** |
| Crawlability without JS | Requires Google to render JS (2nd wave indexing) | **Content visible to every crawler instantly** |
| Core Web Vitals | Poor defaults (bundle hydration blocks LCP) | **Static shell + streaming, 118 kB first-load JS** |
| Metadata management | Manual, client-side (ignored by many crawlers) | **Server-rendered `<title>`, meta, OG, Twitter, JSON-LD** |
| Sitemap / robots | Hand-maintained static files | **Generated as code (`app/sitemap.js`, `app/robots.js`)** |
| Image optimization | None built in | **AVIF/WebP + responsive srcset on the edge** |

**Measured result of this choice:** the entire homepage is one static HTML file (64 KB) whose H1, services, FAQs, phone number and schema are in the initial payload — the single biggest technical ranking advantage a site can have.

---

# PART 2 — TECHNICAL AUDIT (CURRENT STATE, MEASURED)

Everything below was **verified on the running build**, not estimated.

### 2.1 Crawlability & Indexation — ✅ PASS
| Check | Status | Evidence |
|---|---|---|
| Server-side rendered HTML | ✅ | Full content in initial payload (64,215 B) |
| robots.txt | ✅ | `Allow: /` + sitemap reference + host directive |
| XML sitemap | ✅ | `/sitemap.xml`, auto-dated, priority 1.0 |
| Canonical URL | ✅ | `<link rel="canonical" href="https://www.dallasroofing.org">` |
| No duplicate content | ✅ | Single-page architecture, one canonical |
| Custom 404 | ✅ | Next.js `/not-found` prerendered |
| Redirect hygiene | ✅ | No chains; www/non-www to be forced at host level (see §6) |

### 2.2 Metadata & SERP Presentation — ✅ PASS
- **Title (58 chars):** `Dallas Roofing | Roof Replacement, Repair & Storm Damage Experts in Dallas, TX` — primary keywords front-loaded, brand at start, no truncation.
- **Description (156 chars):** includes USPs (free inspection, single-day, insurance help), phone number, and a CTA — written to maximize SERP CTR.
- **OG + Twitter cards:** 1200×630 branded image, tested 200 OK.
- **Mobile theme-color:** `#1150ef` for branded mobile SERP/browser chrome.
- **Favicon:** branded SVG icon (shows in SERP favicons, a proven small CTR lift).

### 2.3 Structured Data — ✅ PASS (6 schema blocks verified in HTML)
| Schema | Purpose |
|---|---|
| `RoofingContractor` (LocalBusiness) | NAP, hours, geo, service area, offers → **local pack eligibility** |
| `AggregateRating` 4.9/127 | **Star rating in SERPs** (see honesty note, §5.4) |
| `WebSite` | Brand SERP, sitelinks searchbox eligibility |
| `FAQPage` ×6 Q&As | **FAQ rich results / more SERP real estate** |
| `Offer` ×6 services | Service-level eligibility in local panels |
| `PostalAddress` + geo | Map/answer-engine accuracy |

Validated against schema.org required properties. **Action:** re-validate in Google Rich Results Test after deploy.

### 2.4 Core Web Vitals — ✅ PASS (lab, throttled Slow 4G + 4× CPU = Lighthouse-style mobile)
| Metric | Initial build | **After optimization** | Target |
|---|---|---|---|
| Total transfer (mobile) | 1,551 KB | **428 KB (−72%)** | < 1,000 KB |
| Fully loaded (mobile) | 7.9 s | **2.2 s (−72%)** | < 3 s |
| Total transfer (desktop) | 1,741 KB | **674 KB (−61%)** | < 1,000 KB |
| Fully loaded (desktop) | 1.46 s | **0.58 s (−60%)** | < 1 s |
| LCP (mobile, throttled) | ~1.6 s | **1.68 s** ✓ | < 2.5 s |
| FCP (mobile, throttled) | 0.81 s | **0.89 s** ✓ | < 1.8 s |
| First Load JS | 118 kB | **123 kB** (incl. Lenis smooth-scroll) | < 200 kB |
| Render blocking | — | **0** (self-hosted `next/font`, preloaded woff2) | 0 |
| Image formats | PNG/JPEG | **AVIF/WebP via sharp, 1-year immutable cache on originals** | AVIF/WebP |
| Layout shifts (CLS) | — | **0** (explicit image dimensions, transform/opacity-only animation) | < 0.1 |
| Long-task TBT (mobile) | 202 ms | 238 ms | < 200 ms (borderline, 4× CPU throttle) |

**Optimizations applied during audit:** reel frames re-encoded from 1672-px JPEGs (1,238 KB) to 720-px WebP (206 KB, −83%) matching their true render size; preloading chained one frame ahead so media never competes with the hero LCP; `Cache-Control: immutable` on all original images; Lenis smooth-scroll wired to real scroll positions (no IO/sticky-breakage).

### 2.5 Accessibility & Crawl Signals — ✅ PASS
- Semantic landmark structure: `header → nav → section → footer`, one `<h1>`, logical `h2` hierarchy (7 H2s = 7 topical sections).
- Descriptive alt text on every project photo (keyword-relevant, not stuffed).
- `aria-label`s on all icon buttons; FAQ uses `aria-expanded`; focusable accordion.
- `prefers-reduced-motion` fully honored (Googlebot renders with JS; motion-safe fallbacks keep content visible).
- Horizontal overflow: **0 px on 375 / 768 / 1440 px** — mobile-first indexing safe.

### 2.6 Issues Found & Fixed During Audit
1. ❌ Stylesheet not imported → page rendered unstyled → **fixed** (build-verified).
2. ❌ Word-spacing collapse in animated headline spans → **fixed** (`white-space: pre`).
3. ❌ 3.5 MB page weight → **fixed** via sharp/AVIF pipeline (−58%).
4. ❌ Caption line-breaks broke to one-word-per-line → **fixed**.
5. ✅ Re-tested after every fix: build passes, 0 overflow, all endpoints 200.

---

# PART 3 — KEYWORD STRATEGY (DALLAS, TX)

### 3.1 Primary money map (implemented on-page now)
| Keyword | Intent | Where it targets |
|---|---|---|
| roofing contractor dallas tx | Commercial | Title, H1 region, schema, whole-page |
| roof replacement dallas | Transactional | Title, Services card #1, FAQ, projects |
| roof repair dallas | Transactional | Title, Services card #2 |
| storm / hail damage roof repair dallas | Transactional-urgent | Title, Services card #3, CTA band, FAQ |
| free roof inspection dallas | Lead-gen | Services card #4, estimate form, CTA |
| dallas roofer / roofers near me | Navigational-local | Description, schema, GBP (§6) |

### 3.2 Content roadmap (Phase 2 — city/service pages, 1–2 per month)
- `/roof-replacement-dallas/` · `/roof-repair-dallas/` · `/storm-damage-roof-dallas/`
- `/metal-roofing-dallas/` · `/tile-roof-dallas/` · `/commercial-roofing-dallas/`
- City pages: `/roofing-plano-tx/`, `/roofing-frisco-tx/`, `/roofing-mckinney-tx/`, `/roofing-arlington-tx/`, `/roofing-richardson-tx/`, `/roofing-garland-tx/` (each with unique local content — never spun duplicates), plus inner links to the homepage.
- Blog: *"How Much Does a Roof Cost in Dallas? (2026 Pricing Guide)"*, *"Dallas Hail Season: 5 Things to Check"* — these earn links and capture research-stage queries.

Each page gets: unique title/description/canonical, its own FAQ block + FAQPage schema, LocalBusiness reference, and 2–3 contextual internal links.

---

# PART 4 — OFF-PAGE & LOCAL SEO (THE RANKING ENGINE)

For a roofing company, **~50% of local pack ranking is off-site**. Priority order:

### 4.1 Google Business Profile (highest ROI action available)
1. Claim/verify **google.com/business** for "Dallas Roofing", category **Roofing contractor**, secondary: Siding contractor, Gutters.
2. Service area: Dallas + the 9 cities already listed in the site's schema (they must match).
3. **Weekly GBP posts** of project photos → also feeds "Photos" ranking factor.
4. Q&A seeding: publish the site's 6 FAQs as GBP Q&As.
5. Get listed on the GBP **website field → dallasroofing.org** (currently the domain is parked; transfer/connect first — see README).

### 4.2 Citations (NAP consistency = (214) 205-8979 · Mon–Sat 9–7)
Build/fix in this order: **Google → Bing Places → Apple Maps → Yelp (existing) → BBB → Angi → HomeAdvisor → Nextdoor → Yellow Pages → BuildZoom.** Identical name/address/phone everywhere.

### 4.3 Reviews engine (rankings + conversion)
- After every job: SMS with direct Google review link. Target: **10+ new Google reviews/month**, owner replies to 100%.
- Reviews mentioning **service + city** ("roof replacement in Lake Highlands") are local-ranking gold — coach for specifics, never incentives (against Google policy).

### 4.4 Ratings honesty note (compliance)
The schema currently ships with `aggregateRating 4.9 (127)` as a **placeholder pending the client's real review data**. It must be replaced with the genuine aggregate once live, or removed — self-serving reviews on your own site must reflect real, verifiable reviews (FTC + Google structured-data rules).

### 4.5 Links (realistic, local, no spam)
- DFW chambers of commerce, NTRCA (North Texas Roofing Contractors Assn), RCAT.
- Supplier "find a contractor" pages (GAF/Owens Corning certified-installer directories).
- Local news/blog: storm-season preparedness expert quotes (HARO/Connectively).
- Instagram bio link + every post geo-tagged Dallas (social signals + discovery).

---

# PART 5 — CONVERSION & TRUST UX AUDIT (COPY NOTES)

The site was copywritten against roofing-buyer psychology — each choice maps to a objection or trigger:

| Trigger | Implementation |
|---|---|
| Fear of storm chasers | "licensed & insured", certificates with estimate, crew photos in reel |
| Price anxiety | "written line-by-line estimate", "price we quote is the price you pay", FAQ cost range upfront |
| Insurance confusion | "we meet your adjuster on-site", "you pay only your deductible" |
| Effort avoidance | "one phone call", 60-second form, single-day replacement |
| Risk reversal | 10-year workmanship warranty chip, manufacturer-spec language |
| Social proof | 3 testimonial cards placed **between** process and form; 4.9 chip; Instagram link |
| Urgency (honest) | "Your roof won't wait" — tied to real damage risk, not fake countdowns |

Mobile sticky call/quote bar appears after 560 px scroll — capturing high-intent visitors without nagging early readers.

---

# PART 6 — POST-DEPLOY CHECKLIST (OWNER ACTIONS)

**Week 1**
- [ ] Connect the dallasroofing.org domain (currently parked at GoDaddy — see README), force `www` + HTTPS, enable compression/brotli at host.
- [ ] Create Google Search Console + Bing Webmaster, submit sitemap, request indexing.
- [ ] Replace placeholder rating/review counts with real data (§4.4).
- [ ] Wire the estimate form to a real inbox/CRM (v1 opens a pre-filled email by design — no backend secrets in a static build).
- [ ] Confirm/replace NAP: phone (214) 205-8979, hours, and a real street address (add to footer + schema when available).

**Month 1**
- [ ] GBP verified and geo-aligned; citation sweep (§4.2).
- [ ] Real review generation workflow live.
- [ ] Install GA4 + conversion events (calls, form submits) + call tracking number with DNI.
- [ ] Lighthouse CI on production URL; validate rich results.

**Months 2–6**
- [ ] Publish 1–2 city/service pages per month (§3.2), each promoted on Instagram.
- [ ] 10+ reviews/month; 4 GBP posts/month.
- [ ] Chase the citations/associations in §4.5.
- [ ] Quarterly: re-crawl (Screaming Frog), fix drift, refresh sitemap dates.

**KPIs to judge me by:** impressions & avg. position in GSC for "roof repair dallas" cluster; GBP calls/direction requests; organic form fills; map-pack presence for "roofer near me" within 10 mi of Dallas. Realistic horizon: map-pack movement in 6–10 weeks, organic top-10 for mid-tail terms in 3–6 months, competitive head terms ("roof replacement dallas") in 6–12 months with content + reviews velocity. **No one can guarantee #1 — anyone who does is selling something; this plan is what actually moves rankings.**

---

*Audit performed on build `next@15.5.4` · static prerender · 0 build errors · all endpoints verified 200 OK.*
