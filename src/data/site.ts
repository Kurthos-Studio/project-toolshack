export const siteConfig = {
  name: 'Toolshack',
  shortName: 'Toolshack',
  tagline: 'Fast tools for everyday tasks.',
  description: 'Toolshack is a browser-based tool set for quick everyday tasks.',
  url: process.env.PUBLIC_SITE_URL ?? 'https://tools.kurthos.app',
  ogImage: '/og-image.svg',
};

export const mainNavigation = [{ label: 'Tools', href: '/tools/' }];

export const tools = [
  {
    title: 'Password Generator',
    slug: 'password-generator',
    href: '/tools/password-generator/',
    description: 'Generate strong passwords with a clean set of controls.',
    category: 'Security',
    accent: 'sun',
  },
  {
    title: 'Word Unscrambler',
    slug: 'word-unscrambler',
    href: '/tools/word-unscrambler/',
    description: 'Turn a scramble into a useful word list quickly.',
    category: 'Text',
    accent: 'mint',
  },
  {
    title: 'Color Picker',
    slug: 'color-picker',
    href: '/tools/color-picker/',
    description: 'Pick a color and copy its values instantly.',
    category: 'Design',
    accent: 'sky',
  },
];
