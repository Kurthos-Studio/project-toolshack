import { siteConfig } from '../data/site';

export function GET() {
  const body = `User-agent: *
Allow: /
Sitemap: ${new URL('/sitemap.xml', siteConfig.url).toString()}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
