# Deployment Guide (Easy + Cheap)

This project is a static Astro site, so the easiest and cheapest deployment path is **Cloudflare Pages (Free Tier)**.

## Recommended Option: Cloudflare Pages

### Why this is the best default

- Free hosting for static sites on the free tier
- Free HTTPS and global CDN
- Git-based auto-deploys on every push
- Works well with custom domains like `tools.kurthos.app`

## Prerequisites

- A GitHub repository containing this project
- A Cloudflare account
- Control over DNS for `tools.kurthos.app`

## 1. Push your project to GitHub

If your code is not on GitHub yet, create a repository and push this project.

## 2. Create a Cloudflare Pages project

1. Open Cloudflare Dashboard.
2. Go to **Workers & Pages** -> **Create** -> **Pages**.
3. Connect your GitHub account.
4. Select your repository.

## 3. Configure build settings

Use these values:

- **Framework preset**: `None` (or leave unselected if Astro is not listed)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node version**: 20+ recommended

Cloudflare Pages does not require an Astro preset. The build command and output directory are what matter.

## 4. Add environment variables

In Cloudflare Pages project settings, add:

- `PUBLIC_SITE_URL=https://tools.kurthos.app`
- `PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx` (optional, when AdSense is ready)

## 5. Attach custom domain

1. In Cloudflare Pages, open your project.
2. Go to **Custom domains**.
3. Add `tools.kurthos.app`.
4. Cloudflare will show the required DNS records.
5. Add/confirm those DNS records in your DNS zone.

## 6. Deploy and verify

After setup, each push to your production branch triggers a deployment automatically.

If you deploy manually from CLI instead of Git integration, use:

```bash
npm run build
npx wrangler pages deploy dist --project-name <your-pages-project-name>
```

Check:

- Homepage and all tools load
- HTTPS works
- `sitemap.xml` and `robots.txt` are reachable
- Ad slots render correctly when `PUBLIC_ADSENSE_CLIENT` is set

## Estimated cost

- Hosting: usually **$0** on Cloudflare Pages free tier
- Domain: annual registrar cost only

## Alternatives

### Netlify (Free Tier)

Very similar setup to Cloudflare Pages, also easy and cheap.

### Vercel (Free Tier)

Also straightforward for static Astro sites.

### Self-hosting on your Linux server

Can be low cost if you already pay for a server, but setup/maintenance is usually more work than Pages/Netlify/Vercel.

## Project values summary

- Framework preset: `None` (if Astro preset is unavailable)
- Build command: `npm run build`
- Output directory: `dist`
- Production URL: `https://tools.kurthos.app`
