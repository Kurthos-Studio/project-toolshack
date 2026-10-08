export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  relatedTools: string[];
  author: string;
  publishedDate: string;
  readingTime: number;
  contentFile: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'json-formatting-guide',
    title: 'How to Format JSON: A Step-by-Step Guide for Beginners',
    slug: 'how-to-format-json-step-by-step-guide',
    excerpt:
      'Learn how to make messy JSON readable and why proper formatting matters for developers and data engineers.',
    category: 'Development',
    relatedTools: ['json-formatter'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-08',
    readingTime: 6,
    contentFile: 'json-formatting.md',
  },
  {
    id: 'password-security-best-practices',
    title: 'Password Generator Best Practices: Creating Secure Passwords That Actually Work',
    slug: 'password-generator-best-practices',
    excerpt:
      'Understand what makes a password truly secure and how to generate passwords that protect your accounts.',
    category: 'Security',
    relatedTools: ['password-generator'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-07',
    readingTime: 7,
    contentFile: 'password-security.md',
  },
  {
    id: 'text-case-conversions-explained',
    title: 'Understanding Case Conversions: camelCase, snake_case, kebab-case, and Beyond',
    slug: 'understanding-case-conversions',
    excerpt:
      'Learn why programmers use different text cases and when to use each one in your code.',
    category: 'Development',
    relatedTools: ['case-converter'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-06',
    readingTime: 8,
    contentFile: 'case-conversions.md',
  },
  {
    id: 'color-psychology-designers',
    title: 'Color Psychology for Designers: Using Your Color Picker Strategically',
    slug: 'color-psychology-for-designers',
    excerpt:
      'Learn how colors influence user emotions and behavior, and use this knowledge in your design work.',
    category: 'Design',
    relatedTools: ['color-picker'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-05',
    readingTime: 9,
    contentFile: 'color-psychology.md',
  },
  {
    id: 'qr-codes-explained',
    title: 'QR Codes Explained: From History to Modern Uses (and How to Create Them)',
    slug: 'qr-codes-explained-modern-uses',
    excerpt:
      'Understand what QR codes are, why they are everywhere, and how to create them for your business or project.',
    category: 'Utility',
    relatedTools: ['qr-code-generator'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-04',
    readingTime: 7,
    contentFile: 'qr-codes.md',
  },
  {
    id: 'word-unscrambling-guide',
    title: 'Word Unscrambling: The Science Behind Finding Words in Letters',
    slug: 'word-unscrambling-science',
    excerpt:
      'Explore the science, strategy, and psychology behind word unscrambling, from competitive Scrabble to how your brain recognizes patterns.',
    category: 'Games & Puzzles',
    relatedTools: ['word-unscrambler'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-03',
    readingTime: 8,
    contentFile: 'word-unscrambling.md',
  },
  {
    id: 'unit-conversion-explained',
    title: 'Unit Conversion Explained: Mastering Measurements Across Systems',
    slug: 'unit-conversion-systems',
    excerpt:
      'Understand the history of measurement systems, why conversions matter, and master converting between metric, imperial, and other units.',
    category: 'Science & Math',
    relatedTools: ['unit-converter'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-02',
    readingTime: 9,
    contentFile: 'unit-conversion.md',
  },
];
