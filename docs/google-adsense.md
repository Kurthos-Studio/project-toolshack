# Google AdSense Setup for Toolshack

This guide shows how to connect Google AdSense to this project on `tools.kurthos.app`.

## What you need

- A Google account
- Access to the domain `tools.kurthos.app`
- A live site that can be visited publicly over HTTPS
- A privacy policy page on the site

## How this project uses AdSense

The site already has an ad slot component in `src/components/AdSlot.astro`.
That component checks the `PUBLIC_ADSENSE_CLIENT` environment variable.
When the variable is set, it loads the AdSense script and renders an ad unit.
When it is not set, the page just shows a plain placeholder.

That means you do not need a backend. You only need to:

1. Add your AdSense publisher client ID.
2. Add ad slot IDs for any manual ad units.
3. Deploy the site.

## Step 1: Create your AdSense account

1. Go to the Google AdSense website and sign in.
2. Create a new AdSense account.
3. Add your site URL as `https://tools.kurthos.app`.
4. Follow Google’s instructions to prove that you own the site.

## Step 2: Verify the site

Google will ask you to verify ownership of the domain.
You usually do this in one of these ways:

- Add a DNS record at your domain registrar or DNS provider
- Add a verification meta tag to the site
- Upload a verification HTML file

For a static Astro site, DNS verification is often the simplest.
If you use a meta tag or HTML file, place it where Google tells you to place it.

## Step 3: Wait for review

After verification, Google reviews the site before ads are fully enabled.
During this time, make sure the site is live, accessible, and has the core legal pages in place.

At minimum, keep these pages available:

- Impressum
- Disclaimer
- Privacy policy

## Step 4: Add your publisher client ID

When AdSense is approved, Google gives you a publisher client ID.
It looks like this:

```bash
ca-pub-1234567890123456
```

Set it as an environment variable in production:

```bash
PUBLIC_ADSENSE_CLIENT=ca-pub-1234567890123456
PUBLIC_SITE_URL=https://tools.kurthos.app
```

If you deploy with a hosting panel or environment settings screen, add the same values there.

## Step 5: Decide between auto ads and manual ad slots

There are two common AdSense approaches:

### Auto ads

Google places ads automatically.
This is the easiest option, but it gives you less control over layout.

### Manual ad units

You place ad units yourself using slot IDs.
This project is already set up for that style.
Each ad slot can receive a `slot` value in `src/components/AdSlot.astro`.

Example:

```astro
<AdSlot label="Sponsored" slot="1234567890" />
```

If you do not pass a slot value, the component uses a placeholder slot ID.
You can replace that with your real ad unit ID when you are ready.

## Step 6: Make the site ready for ads

Before you turn ads on, check these points:

- The site loads on mobile
- Each tool page has a clear purpose
- The legal pages are present and linked
- The site uses HTTPS
- The pages are not empty or under construction

Google prefers sites that feel complete and useful.

## Step 7: Add an ads.txt file if Google asks for it

AdSense may ask you to publish an `ads.txt` file.
For this Astro project, add it to `public/ads.txt` so it is served from the site root.

Example structure:

```txt
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
```

Use the exact line Google gives you.
Do not invent the publisher ID.

## Step 8: Deploy and test

After the environment variables are set:

1. Build the project.
2. Deploy it to the live domain.
3. Visit the site in a private browser window.
4. Confirm the pages load and the ad placeholder changes into a real ad once AdSense is active.

## Files involved in this project

- `src/components/AdSlot.astro` - renders AdSense when the client ID is present
- `src/layouts/BaseLayout.astro` - includes the shared ad slot on pages
- `src/pages/impressum.astro` - legal notice page
- `src/pages/disclaimer.astro` - liability disclaimer page
- `src/pages/privacy.astro` - privacy policy page
- `astro.config.mjs` - site URL configuration

## Short version

If you only want the minimal setup:

1. Create and approve the AdSense account.
2. Verify `tools.kurthos.app`.
3. Set `PUBLIC_ADSENSE_CLIENT` in production.
4. Add `ads.txt` if Google requests it.
5. Deploy and let Google review the site.
