# Custom Domain & SEO Setup Guide

## Domain Configuration

### Recommended: Subdomain

**Domain**: `evolution.shiyaohuang.com`

**Why subdomain**: Keeps the apex domain free for other uses, simpler DNS setup, free HTTPS via GitHub Pages.

### DNS Configuration

Add a CNAME record to your DNS provider:

| Type  | Name                | Value                        | TTL  |
|-------|---------------------|------------------------------|------|
| CNAME | evolution           | shiyao-huang.github.io       | 3600 |

### Steps

1. **DNS**: Add the CNAME record above at your domain registrar/DNS provider
2. **GitHub**: Go to repo Settings → Pages → Custom domain → enter `evolution.shiyaohuang.com`
3. **HTTPS**: Check "Enforce HTTPS" in GitHub Pages settings (auto-provisioned by GitHub)
4. **Verify**: Wait for DNS propagation (5-30 min), then check:
   - `https://evolution.shiyaohuang.com` loads the site
   - `https://shiyao-huang.github.io/awesome-agent-evolution/` redirects to custom domain
   - HTTPS certificate is valid

### After Custom Domain

When the custom domain is active:
1. Update `site/astro.config.mjs` → change `site` to `'https://evolution.shiyaohuang.com'` and remove `base: '/awesome-agent-evolution'`
2. Remove `site/scripts/apply-base-path.mjs` from the build command (no longer needed)
3. Update `site/src/data/site.ts` → update `url`, `github`, `discord`, `x` fields
4. Run `(cd site && npm run build)` to verify

## SEO Status (2026-05-25)

### What's in place

| Feature | Status | Location |
|---------|--------|----------|
| robots.txt | ✅ | `site/public/robots.txt` |
| Sitemap | ✅ Auto-generated | `@astrojs/sitemap` integration |
| OG tags | ✅ All pages | `site/src/layouts/BaseLayout.astro` |
| Twitter cards | ✅ All pages | `site/src/layouts/BaseLayout.astro` |
| Canonical URLs | ✅ All pages | `BaseLayout.astro` |
| JSON-LD WebSite | ✅ | `BaseLayout.astro` |
| JSON-LD Organization | ✅ | `BaseLayout.astro` |
| JSON-LD TechArticle | ✅ Project pages | `site/src/pages/projects/[slug].astro` |
| RSS feed | ✅ | `site/src/pages/rss.xml.js` |
| Skip link | ✅ | `BaseLayout.astro` |
| Mobile responsive | ✅ | `site/src/styles/global.css` |
| lang="zh-CN" | ✅ | `BaseLayout.astro` |

### SEO enhancements applied

1. **ScholarlyArticle JSON-LD** added to research detail pages
2. **ItemList JSON-LD** added to projects index page
3. **Unique title/description** on every page
4. **Semantic HTML** (article, section, nav, header, main, footer)
5. **Reduced motion** support via `prefers-reduced-motion`

### Target: Lighthouse SEO > 95

Expected scores with current setup:
- SEO: ~98 (all meta tags, structured data, sitemap, robots)
- Accessibility: ~92 (skip link, semantic HTML, aria labels)
- Performance: ~90 (static site, no JS frameworks)
