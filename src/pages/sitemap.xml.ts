import { tools, siteConfig } from '../data/site';

const routes = ['/', '/tools/', ...tools.map((tool) => tool.href), '/impressum/', '/privacy/', '/disclaimer/'];

export function GET() {
  const urls = routes
    .map(
      (route) => `
  <url>
    <loc>${new URL(route, siteConfig.url).toString()}</loc>
  </url>`,
    )
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
