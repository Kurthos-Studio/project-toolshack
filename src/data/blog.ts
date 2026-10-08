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
    id: 'regex-explained',
    title: 'Regular Expressions Explained: From Basics to Powerful Pattern Matching',
    slug: 'regular-expressions-explained',
    excerpt:
      'Learn how regular expressions work, from their mathematical foundations to practical applications in web development and text processing.',
    category: 'Development',
    relatedTools: ['regex-tester'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-08',
    readingTime: 10,
    contentFile: 'regex-explained.md',
  },
  {
    id: 'uuid-explained',
    title: 'UUIDs and GUIDs Explained: Creating Unique Identifiers at Scale',
    slug: 'uuids-guids-unique-identifiers',
    excerpt:
      'Understand how UUIDs work, why they are essential for distributed systems, and how to choose the right UUID version for your application.',
    category: 'Development',
    relatedTools: ['uuid-generator'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-07',
    readingTime: 9,
    contentFile: 'uuid-explained.md',
  },
  {
    id: 'hash-security-explained',
    title: 'Cryptographic Hashing Explained: How to Secure Data with MD5, SHA-1, and SHA-256',
    slug: 'cryptographic-hashing-security',
    excerpt:
      'Discover how cryptographic hashing protects passwords, verifies data integrity, and powers blockchain technology—and why MD5 and SHA-1 are no longer safe.',
    category: 'Security',
    relatedTools: ['hash-generator'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-06',
    readingTime: 11,
    contentFile: 'hash-explained.md',
  },
  {
    id: 'json-formatting-guide',
    title: 'How to Format JSON: A Step-by-Step Guide for Beginners',
    slug: 'how-to-format-json-step-by-step-guide',
    excerpt:
      'Learn how to make messy JSON readable and why proper formatting matters for developers and data engineers.',
    category: 'Development',
    relatedTools: ['json-formatter'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-05',
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
  {
    id: 'url-encoding-explained',
    title: 'URLs Explained: Encoding, Special Characters & Why They Matter',
    slug: 'urls-encoding-special-characters',
    excerpt:
      'Learn how URL encoding works, why special characters must be escaped, and why proper URLs matter for SEO and functionality.',
    category: 'Development',
    relatedTools: ['url-encoder'],
    author: 'Toolshack Team',
    publishedDate: '2025-10-01',
    readingTime: 9,
    contentFile: 'url-encoding.md',
  },
  {
    id: 'base64-encoding-explained',
    title: 'The Hidden Language: Understanding Base64 Encoding',
    slug: 'base64-encoding-guide',
    excerpt:
      'Discover how Base64 encoding enables binary data to travel safely through email, APIs, and web services.',
    category: 'Development',
    relatedTools: ['base64-encoder'],
    author: 'Toolshack Team',
    publishedDate: '2025-09-30',
    readingTime: 9,
    contentFile: 'base64-encoding.md',
  },
  {
    id: 'unix-timestamp-guide',
    title: 'Time in Computing: Understanding Unix Timestamps & Time Zones',
    slug: 'unix-timestamps-time-zones',
    excerpt:
      'Learn how computers represent time using Unix timestamps and the complexity of time zones, daylight saving, and synchronization.',
    category: 'Development',
    relatedTools: ['unix-timestamp'],
    author: 'Toolshack Team',
    publishedDate: '2025-09-29',
    readingTime: 10,
    contentFile: 'unix-timestamp.md',
  },
];
