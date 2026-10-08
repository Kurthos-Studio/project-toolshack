# AGENT.md - Project Standards & Guidelines

This file documents all standards and workflows for Project Toolshack. Read this file at the start of any new session.

## Project Context

**Name:** Project Toolshack  
**Purpose:** Collection of online utility tools with educational blog content  
**AdSense Goal:** Approval through comprehensive blog system (45,000+ words, 40+ citations, 100% factually accurate)  
**Status:** Blog system complete with 7 posts covering all tools

## Mandatory Standards for ALL Blog Posts

### 1. Blog Post Requirements for New Tools
**WHEN:** Every time a new tool is added to the site  
**ACTION:** Create a matching blog post  

#### Blog Post Structure
```
1. Title: Educational topic related to the tool (NOT just "Tool Name Guide")
2. Introduction: Hook + why it matters
3. Main Content: 3,000-5,000+ words
4. How-to Section: Using the actual tool
5. Practical Examples: Real-world use cases
6. Sources & Further Reading: 5+ citations (see #3 below)
7. Call-to-action: Link to the tool
```

#### Blog Metadata Requirements
```typescript
{
  id: 'unique-kebab-case-id',
  title: 'Educational Topic: Full Description',
  slug: 'kebab-case-url-slug',
  excerpt: 'Summary for blog listing (150 chars)',
  category: 'Category Name',
  relatedTools: ['tool-slug'], // Must match actual tool slug
  author: 'Toolshack Team',
  publishedDate: 'YYYY-MM-DD',
  readingTime: 7, // 7-9 minutes typical
  contentFile: 'filename.md', // Must match file name exactly (case-sensitive)
}
```

**Files to Update:**
- `/src/data/blog.ts` - Add metadata entry
- `/src/pages/blog/[slug].astro` - Add markdown import (top) and mapping (postModules object)
- `/src/content/blog/filename.md` - Create new markdown file

### 2. Fact-Checking Requirements

**MANDATORY:** Before publishing any blog post

#### Check All Claims Against:
- Academic sources / peer-reviewed research
- Official standards (NIST, BIPM, IETF, ISO, etc.)
- Government/official documentation
- Industry best practices
- Primary sources where possible

#### Common Pitfalls to Avoid:
- ❌ Overstating individual contributions (e.g., Laplace and metric system)
- ❌ Using outdated information (e.g., old kilogram definition)
- ❌ Including unverified anecdotes (e.g., Iridium satellite claim)
- ❌ Incorrect historical facts
- ❌ Wrong letter counts or name lengths

#### Verification Tools:
```
- Manual calculation verification for all math
- Letter-by-letter counting for anagrams/acronyms
- Cross-reference multiple sources
- Check Wikipedia for first-pass facts, then verify with primary sources
```

### 3. Sources & Further Reading Requirements

**MANDATORY:** Every blog post must have a "Sources & Further Reading" section

#### Citation Format:
```markdown
## Sources & Further Reading

- **Author/Organization.** (Year). *Title of Work*. Publication. URL (if available)
- **Smith, John.** (2020). "Article Title." *Journal Name*, Volume(Issue), pages.
- **Official Body.** Standards documentation. Retrieved from URL
```

#### Minimum Sources:
- 5+ per blog post (can be more)
- Mix of: academic papers, official standards, government resources, industry docs
- Must be from authoritative sources (not random blogs)
- Links included where available

#### Example:
```markdown
## Sources & Further Reading

- **BIPM.** (2019). *The International System of Units (SI Brochure)* (9th ed.). https://www.bipm.org/en/measurement-units/si
- **Kula, Witold.** (1986). *Measures and Men*. Princeton University Press.
- **NASA.** (1999). Mars Climate Orbiter Mishap Investigation Report. https://sunnyday.mit.edu/accidents/MCO_report.pdf
```

### 4. Mathematical Calculation Verification

**MANDATORY:** Every numerical example must be verified

#### Verification Checklist:
- [ ] All conversions checked with correct formulas
- [ ] All percentages sum to correct total
- [ ] All factorials/combinations calculated correctly
- [ ] All approximations clearly labeled as "rough" or "approximate"
- [ ] Actual vs. approximate values shown side-by-side when both exist

#### Example:
```markdown
**Celsius to Fahrenheit:**
- Multiply °C by 2, then add 30 (rough)
- 20°C ≈ 70°F (actually 68°F)
- 30°C ≈ 90°F (actually 86°F)
```

#### Common Checks:
```python
# Verify conversions
km_to_miles = km * 0.621
kg_to_pounds = kg * 2.20462
celsius_to_f = (celsius * 1.8) + 32

# Verify factorials
6! = 6 × 5 × 4 × 3 × 2 × 1 = 720

# Verify percentages
60% + 30% + 10% = 100%
```

## Blog Post Workflow

### Tool Page Structure Requirements

**ALL tool pages MUST follow this exact structure and styling (applies to new tools):**

#### File Location & Naming
```
/src/pages/tools/[tool-slug].astro
Example: /src/pages/tools/url-encoder.astro
```

#### Mandatory Structure
```astro
---
import AdSlot from '../../components/AdSlot.astro';
import BaseLayout from '../../layouts/BaseLayout.astro';
import RelatedTools from '../../components/RelatedTools.astro';
import { siteConfig } from '../../data/site';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Tool Full Name',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  description: 'One-line tool description.',
};
---

<BaseLayout title={`Tool Name | ${siteConfig.name}`} description="..." schema={schema}>
  <section class="tool-page">
    <!-- Hero Section -->
    <div class="hero compact">
      <p class="eyebrow">Category</p>
      <h1>Tool Full Name</h1>
    </div>

    <!-- Explainer Section -->
    <section class="content-card tool-explainer">
      <p class="eyebrow">How to use</p>
      <h2>Clear action headline</h2>
      <p>Paragraph 1: Brief explanation of what it does</p>
      <p>Paragraph 2: Key use case or benefit</p>
    </section>

    <AdSlot label="Ad" />

    <!-- Tool Interface -->
    <div class="tool-shell [tool-name]-shell">
      <section class="tool-panel stack" data-[tool-slug]-tool>
        <!-- Input fields with proper labels -->
        <label>
          Field Name
          <textarea data-input placeholder="..."></textarea>
        </label>

        <!-- Action buttons - MUST use tool-actions class -->
        <div class="tool-actions">
          <button type="button" class="primary" data-action>Primary Action</button>
          <button type="button" class="secondary" data-secondary>Secondary Action</button>
          <button type="button" class="secondary" data-copy>Copy</button>
        </div>

        <!-- Result panel -->
        <div class="result-panel">
          <p class="eyebrow">Output</p>
          <textarea data-output readonly></textarea>
          <p class="field-hint" data-message>Help text here</p>
        </div>
      </section>
    </div>

    <!-- Related tools section -->
    <RelatedTools currentSlug="[tool-slug]" />
  </section>

  <!-- JavaScript with is:inline attribute -->
  <script is:inline>
    const root = document.querySelector('[data-[tool-slug]-tool]');
    if (root) {
      // Tool logic here
    }
  </script>
</BaseLayout>
```

#### Button Styling - CRITICAL
- **PRIMARY button:** `class="primary"` - Main action
- **SECONDARY buttons:** `class="secondary"` - Additional actions (copy, decode, etc.)
- **NEVER use:** `btn btn-primary`, `btn btn-secondary`, `btn btn-tertiary` (WRONG)
- **Wrapper:** `<div class="tool-actions">` (NEVER use field-grid for buttons)

#### Label Format
- Category label MUST use: `<p class="eyebrow">Category</p>`
- This ensures consistency with tool cards and blog post categories
- NOT `<span>`, NOT custom classes, NOT inline styles

#### JavaScript Pattern
```javascript
// Always use is:inline attribute on script tag
// Always check if root exists before accessing elements
const root = document.querySelector('[data-[tool-slug]-tool]');
if (root) {
  const input = root.querySelector('[data-input]');
  // Access other elements relative to root
  input?.addEventListener('click', () => {
    // handler
  });
}
```

#### Files to Update
1. Create: `/src/pages/tools/[tool-slug].astro`
2. Update: `/src/data/site.ts` - Add tool to tools array:
   ```typescript
   {
     title: 'Tool Full Name',
     slug: 'tool-slug',
     href: '/tools/tool-slug/',
     description: 'One-line description',
     category: 'Category',
     accentColor: '#hex-color', // Pick unique color
   }
   ```

### When Adding a New Tool:

1. **Create Tool Page**
   - Follow Tool Page Structure Requirements (above)
   - Update `/src/data/site.ts` with tool metadata
   - Ensure button classes are `primary` and `secondary` (NOT `btn btn-*`)
   - Ensure category label uses `<p class="eyebrow">` (NOT `<span>`)
   - Use `is:inline` on script tag

2. **Create Blog Post**
   - Write 3,000-5,000+ words
   - Educational content, not just a tool description
   - Link to the actual tool in "How to Use" section

3. **Fact-Check**
   - Verify all claims against sources
   - Check all calculations
   - Correct any historical inaccuracies
   - Document corrections

4. **Add Citations**
   - Minimum 5 sources per post
   - Mix of academic, official, and industry sources
   - Include full citations with URLs

5. **Update Files**
   ```
   Add to /src/data/blog.ts:
   {
     id: 'post-id',
     title: 'Title',
     slug: 'slug',
     excerpt: 'excerpt',
     category: 'Category',
     relatedTools: ['tool-slug'],
     author: 'Toolshack Team',
     publishedDate: 'YYYY-MM-DD',
     readingTime: 7,
     contentFile: 'filename.md',
   }
   
   Add to /src/pages/blog/[slug].astro:
   - Import: import * as postModule from '../../content/blog/filename.md';
   - Map: 'filename.md': postModule,
   
   Create: /src/content/blog/filename.md
   ```

6. **Update Main Page Blog Labels**
   - Blog post category labels MUST use `<p class="eyebrow">` class
   - This ensures consistency with tool category labels
   - NOT `<span class="blog-category">` (OLD FORMAT)
   - The `eyebrow` class provides: rounded background, small caps, proper spacing

7. **Build & Test**
   ```bash
   npm run build
   # Test blog URLs render correctly
   # Verify sources section visible
   # Check no console errors
   # Verify blog category labels match tool category styling
   ```

8. **Commit**
   ```
   git add -A
   git commit -m "feat: add blog post for [Tool Name]

   Title: [Post Title]
   Length: ~X words, Y min read
   Topics covered: topic1, topic2, topic3
   
   Includes:
   ✓ Educational content with real-world examples
   ✓ Tool usage walkthrough
   ✓ Z sources and citations
   ✓ All facts verified
   ✓ All calculations checked
   
   Related tool: [tool-slug]"
   ```

## Current Blog Posts (Reference)

| Tool | Blog Post | Status |
|------|-----------|--------|
| JSON Formatter | How to Format JSON | ✓ Complete |
| Password Generator | Password Generator Best Practices | ✓ Complete |
| Word Unscrambler | Word Unscrambling: The Science | ✓ Complete |
| Case Converter | Understanding Case Conversions | ✓ Complete |
| Color Picker | Color Psychology for Designers | ✓ Complete |
| QR Code Generator | QR Codes Explained | ✓ Complete |
| Unit Converter | Unit Conversion Explained | ✓ Complete |

**All 7 tools have matching blog posts (100% coverage)**

## Documentation Files

Located in `/docs/`:
- `blog-adsense-strategy.md` - AdSense approval strategy
- `blog-implementation.md` - Blog implementation guide
- `blog-quick-reference.md` - Quick reference for blog management
- `blog-fact-checking-report.md` - Detailed audit of facts and citations
- `blog-calculation-audit-report.md` - Detailed audit of all calculations

Read these for context on why this system was built.

## Key Lessons Learned

### Fact-Checking Issues Corrected
- ❌ Laplace's metric system role → Fixed to mention Lagrange, de Prony, Fourier
- ❌ Kilogram definition outdated → Updated to 2019 Planck constant definition
- ❌ Unverified Iridium claim → Replaced with verified Hubble mirror error
- ❌ Anagram letter count wrong → Fixed ASTRONOMER from 11 to 10 letters
- ❌ Celsius conversion calculation wrong → Fixed 30°C ≈ 90°F (not 86°F for rough approximation)

### Why This Matters
- Google AdSense requires factually accurate content
- Readers trust cited sources
- Demonstrates professional, human-authored content (not AI-generated)
- Improves SEO and credibility

## Build & Test Commands

```bash
# Build project
npm run build

# Verify blog post renders
# Check /dist/blog/[slug]/index.html exists
# Verify sources section visible

# Test specific blog post
grep "Sources" dist/blog/[slug]/index.html

# Count total pages
npm run build | grep "page(s) built"
```

## AdSense Reapplication Checklist

- [ ] All blog posts published and indexed by Google (2-3 weeks)
- [ ] Updated sitemap submitted to Google Search Console
- [ ] All 7 blog posts appear in Google Search results
- [ ] Monitor indexation status in Search Console
- [ ] Reapply to Google AdSense
- [ ] Reference `/docs/blog-fact-checking-report.md` in approval request
- [ ] Reference `/docs/blog-calculation-audit-report.md` for accuracy
- [ ] Mention 40+ academic and official citations
- [ ] Point out 100% factual accuracy with corrections documented

## Questions? See:

- Blog strategy: `/docs/blog-adsense-strategy.md`
- Implementation details: `/docs/blog-implementation.md`
- Fact audit: `/docs/blog-fact-checking-report.md`
- Calculation audit: `/docs/blog-calculation-audit-report.md`
- Example posts: `/src/content/blog/*.md`

## 🎯 Quick Style Reference (Remember These!)

### Button Classes (Tools)
```
✅ CORRECT:
  <button class="primary">Action</button>
  <button class="secondary">Secondary</button>

❌ WRONG:
  <button class="btn btn-primary">Action</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-tertiary">Tertiary</button>
```

### Label/Category Classes
```
✅ CORRECT:
  <p class="eyebrow">Developer</p>  <!-- Tools and blog posts -->

❌ WRONG:
  <span class="blog-category">Developer</span>
  <span class="category">Developer</span>
```

### Tool Page Button Container
```
✅ CORRECT:
  <div class="tool-actions">
    <button class="primary">Encode</button>
    <button class="secondary">Copy</button>
  </div>

❌ WRONG:
  <div class="field-grid">
    <button>Encode</button>
    <button>Copy</button>
  </div>
```

### Blog Labels on Main Page
```
✅ CORRECT:
  {latestPosts.map((post) => (
    <a href={...} class="blog-preview-card">
      <p class="eyebrow">{post.category}</p>
      ...
    </a>
  ))}

❌ WRONG:
  <span class="blog-category">{post.category}</span>
```

### Script Tag in Tool Pages
```
✅ CORRECT:
  <script is:inline>
    const root = document.querySelector('[data-tool-name]');
    if (root) {
      // tool logic
    }
  </script>

❌ WRONG:
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Doesn't work with Astro
    });
  </script>
```

---
**Last Updated:** Oct 8, 2026  
**Remember:** Consistency = Professionalism = Trust = AdSense Approval ✨
