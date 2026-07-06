# Action Plan — littlebritaindaycare.com

## Phase 1: Critical Fixes (this week)
- [ ] Resize/compress `logo.png` (currently 320 KB @ 2051×1989px) to ~WebP/PNG at actual display size; should drop to <20 KB
- [ ] Remove the unused 65 KB base64 `LB_LOGO_FB` fallback blob from the inline `<script>` in `<head>`
- [ ] Add `sitemap.xml` (single URL) and `robots.txt` at site root
- [ ] Add `<link rel="canonical" href="https://littlebritaindaycare.com/">` to `<head>`
- [ ] Fix or remove the malformed `<google-site-verification=...>` tag (line 8) — not valid HTML

## Phase 2: High-Impact Improvements (weeks 2–3)
- [ ] Replace duplicate inline base64 favicon/apple-touch-icon with real cacheable image files
- [ ] Add `og:image`, `og:url`, and Twitter Card meta tags
- [ ] Add `width`/`height` attributes to the two `<img>` tags to prevent CLS
- [ ] Fix `www` → apex redirect to be permanent (301/308) instead of `307`
- [ ] Add security headers (CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy) via `vercel.json`
- [ ] Trim meta description to ~155 characters

## Phase 3: Content & Authority (month 2)
- [ ] Add real facility photos (classrooms, kids at play) — fixes the "Come and see us in action" section, which currently shows only a map
- [ ] Add a short FAQ block (ages accepted, pricing, hours, curriculum/language) for AI Overviews/ChatGPT/Perplexity citability and PAA capture
- [ ] Add trust signals: staff credentials/accreditation, testimonials, or review snippets
- [ ] Add `aggregateRating`/`review` to JSON-LD once Google reviews exist
- [ ] Add Google Business Profile URL to `sameAs` in schema

## Phase 4: Monitoring & Iteration (ongoing)
- [ ] Connect Google Search Console and verify indexation of the homepage
- [ ] Monitor Core Web Vitals via PageSpeed Insights / CrUX after the image fixes ship
- [ ] Track local pack visibility and review count growth for "daycare Tashkent" / "English daycare Tashkent" queries
