# AGENT.md - Project Standards & Guidelines

This file documents all standards and workflows for Project Toolshack. Read this file at the start of any new session.

## Project Context

**Name:** Project Toolshack  
**Purpose:** Collection of online utility tools with educational blog content  
**AdSense Goal:** Approval through comprehensive blog system and consistent design  
**Status:** 13 tools, 13 blog posts, 130,000+ words of content, 100+ citations  
**Latest Addition:** Regex Tester, UUID Generator, Hash Generator (Oct 8, 2025)

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

## 🎨 Main Page Design Consistency (CRITICAL)

The home page `/src/pages/index.astro` must maintain strict design consistency:

### Hero Section (Top)
```
✅ CORRECT:
- "Overview" eyebrow
- Main headline
- "Browse tools" CTA button
- Stat cards (only tool count + blog post count)
- Remove: "Clean" stat card or any non-numeric cards

❌ WRONG:
- Including descriptive stats like "Clean" or "Fast"
- Only include metrics (tool count, blog count, etc.)
```

### Blog Section (Middle-Upper)
```
✅ CORRECT STRUCTURE:
<section class="section">
  <div class="section-header">
    <div>
      <h2>Latest from the blog</h2>
      <p>Descriptive subtitle</p>
    </div>
    <a href="/blog/" class="link-arrow">View all posts →</a>
  </div>
  <div class="blog-preview-grid">
    {latestPosts.map((post) => (
      <a href={...} class="blog-preview-card">
        <p class="eyebrow">{post.category}</p>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span class="blog-meta">{post.readingTime} min read</span>
      </a>
    ))}
  </div>
</section>
```

### Tools Section (Middle-Lower)
```
✅ CORRECT STRUCTURE (MUST MATCH BLOG SECTION):
<section class="section">
  <div class="section-header">
    <div>
      <h2>Featured tools</h2>
      <p>Quick utility tools for everyday tasks</p>
    </div>
    <a href="/tools/" class="link-arrow">View all tools →</a>
  </div>
  <div class="tool-grid">
    {sortedTools.map((tool) => <ToolCard {...tool} />)}
  </div>
</section>

With ToolCard component as:
<a href={href} class="tool-card">
  <p class="eyebrow">{category}</p>
  <h3>{title}</h3>
  <p>{description}</p>
</a>

❌ WRONG:
- Tool card is <article> instead of <a> link
- Tool card has "Open tool" button link
- Tool card doesn't have section-header with "View all tools" link
- Section structure doesn't match blog section
- Stat bubbles on hero with non-numeric values
```

### CSS Consistency for Cards
```
Blog Preview Card (.blog-preview-card):
- display: flex; flex-direction: column;
- padding: 1.5rem;
- border: 1px solid #e1e4e8;
- border-radius: 8px;
- text-decoration: none; color: inherit;
- Hover: border color change + box shadow + translateY(-2px)
- Eyebrow: margin-bottom: 0.75rem;
- h3: margin: 0.5rem 0 1rem 0; font-size: 1.25rem;
- p: margin: 0; color: #666; font-size: 0.95rem;

Tool Card (.tool-card):
- MUST MATCH blog-preview-card exactly (plus decorative ::after element)
- Same display, padding, border, border-radius
- Same hover effects
- Same h3 and p styling
- .tool-card .eyebrow: margin-bottom: 0.75rem; (matches blog)
```

### When Modifying Home Page:
1. Keep blog and tool sections structurally identical
2. Use same section-header layout for both
3. Both should have "View all X" links
4. Both should use grid layout (blog-preview-grid, tool-grid)
5. Both cards should be clickable links (no nested buttons)
6. Both use eyebrow class for categories
7. NO "Open tool" or similar action buttons on main page cards
8. Stats on hero should ONLY show numbers (tools count, blog post count)

## 🎨 Complete Design Consistency Guide (Read Before Modifying UI)

**CRITICAL:** The entire website must maintain consistent styling. One design standard applies everywhere.

### 1. Card Styling (Blog + Tools Cards)

**BOTH blog-preview-card AND tool-card MUST BE IDENTICAL (except tool-card has ::after accent):**

```css
/* The Standard Card Template */
.card-component {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid var(--color-border, #e1e4e8);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  background: var(--color-background, #fff);
  /* position: relative; overflow: hidden; only for tool-card */
}

.card-component:hover {
  border-color: var(--color-primary, #0969da);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card-component .eyebrow {
  margin: 0 0 0.75rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(16, 35, 49, 0.06);
  color: var(--accent-2);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  width: fit-content;
}

.card-component h3 {
  margin: 0.5rem 0 1rem 0;
  font-size: 1.25rem;
  line-height: 1.4;
  color: var(--color-text-primary, #111);
}

.card-component p {
  margin: 0;
  color: var(--color-text-secondary, #666);
  font-size: 0.95rem;
  line-height: 1.6;
}

.card-component .meta {
  font-size: 0.875rem;
  color: var(--color-text-secondary, #666);
  margin-top: auto;
}
```

**Implementation:**
- Blog: `.blog-preview-card` (no ::after)
- Tools: `.tool-card` (has decorative ::after element for visual accent)

### 2. Category/Label Styling (Eyebrow Class)

**ALL categories/labels use ONLY `<p class="eyebrow">` - NEVER use span or custom classes:**

```html
✅ CORRECT everywhere:
  <p class="eyebrow">Developer</p>
  <p class="eyebrow">Security</p>
  <p class="eyebrow">Design</p>

❌ NEVER use:
  <span class="blog-category">Developer</span>
  <span class="category">Developer</span>
  <span class="label">Developer</span>
  <div class="tag">Developer</div>
```

**Where eyebrow appears:**
- Hero section (e.g., "Overview")
- Blog cards (category)
- Tool cards (category)
- Section headers (e.g., "How to use")
- Ad slots (e.g., "Ad")
- ALL must use identical styling

### 3. Section Header Structure

**EVERY section with a title + "View all" link MUST use this exact structure:**

```html
<section class="section">
  <div class="section-header">
    <div>
      <h2>{Main Title}</h2>
      <p>{Descriptive subtitle}</p>
    </div>
    <a href="{url}" class="link-arrow">View all {items} →</a>
  </div>
  <div class="{grid-class}">
    {/* cards/items */}
  </div>
</section>
```

**CSS for section-header:**
```css
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
}

.section-header h2 {
  margin: 0;
}

.section-header p {
  color: #666;
  margin: 0.5rem 0 0 0;
}

.link-arrow {
  color: var(--color-primary, #0969da);
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
  align-self: center;
  transition: color 0.2s;
}

.link-arrow:hover {
  color: var(--color-primary-dark, #0860ca);
}
```

**Applied to:**
- "Latest from the blog" section (has "View all posts →")
- "Featured tools" section (has "View all tools →")
- ANY future section listing items

### 4. Spacing & Margins (Universal Rules)

**Ad Slots:**
```css
.ad-slot {
  margin-top: 1.5rem;      /* Space from section above */
  margin-bottom: 1.5rem;   /* Space to next section */
  background: linear-gradient(...);
}

.tool-shell .ad-slot {
  margin-top: 0;           /* Grid handles spacing */
  margin-bottom: 0;        /* Grid handles spacing */
}
```

**Sections:**
```css
.section {
  margin-top: 1.5rem;      /* Consistent spacing between sections */
}

.section h2 {
  margin: 0 0 1rem;        /* Heading to content */
}
```

**Cards in Grid:**
```css
.blog-preview-grid,
.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;             /* Consistent card spacing */
}
```

### 5. Button Styling (Tool Pages)

**ONLY use `class="primary"` and `class="secondary"` - NEVER use "btn" prefix:**

```html
✅ CORRECT:
  <div class="tool-actions">
    <button type="button" class="primary">Main Action</button>
    <button type="button" class="secondary">Secondary</button>
    <button type="button" class="secondary">Copy</button>
  </div>

❌ WRONG:
  <div class="field-grid">
    <button class="btn btn-primary">Action</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-tertiary">Tertiary</button>
  </div>
```

**Container:** MUST be `<div class="tool-actions">` - NEVER use field-grid for buttons

### 6. Main Page Design Checklist

```
Hero Section:
☐ "Overview" eyebrow label
☐ Main headline: "Useful tools that stay out of your way."
☐ Subtitle: "Pick a tool, use it, move on."
☐ CTA button: "Browse tools"
☐ Stat cards: ONLY numeric (tool count + blog count)
☐ NO descriptive stats like "Clean", "Fast", "Private"

Blog Section:
☐ section-header with h2 + subtitle + "View all posts" link
☐ Blog cards use .blog-preview-card class
☐ Cards are <a> links (whole card clickable)
☐ Each card has eyebrow + h3 + excerpt + reading time
☐ Grid uses blog-preview-grid class
☐ Spacing: gap: 1.5rem between cards

Tools Section:
☐ section-header with h2 + subtitle + "View all tools" link
☐ Tool cards use .tool-card class (NOT article, NOT with buttons)
☐ Cards are <a> links (whole card clickable)
☐ Each card has eyebrow + h3 + description
☐ Grid uses tool-grid class
☐ Spacing: gap: 1.5rem between cards
☐ Structure MUST MATCH blog section exactly

"Now" Section:
☐ .section.tool-shell container
☐ Content card on left (1.15fr width)
☐ Ad slot on right (0.85fr width)
☐ Ad slot inside grid has margin-top: 0, margin-bottom: 0
☐ Ad slot aligns with content (no extra spacing)

Footer Ad Slot:
☐ margin-top: 1.5rem (space from content above)
☐ margin-bottom: 1.5rem (space to footer)
```

### 7. Responsive Behavior

**At 960px breakpoint and below:**
```css
@media (max-width: 960px) {
  .hero-grid,
  .tool-shell,
  .card-grid,
  .tool-grid,
  .feature-grid,
  .stat-grid {
    grid-template-columns: 1fr;  /* Single column */
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .link-arrow {
    align-self: flex-start;
  }

  .blog-preview-grid {
    grid-template-columns: 1fr;
  }
}
```

**Keep consistent:**
- Card padding stays 1.5rem
- Gap between cards stays 1.5rem
- Eyebrow styling identical
- Hover effects work same way

### 8. Color Consistency

**Standard palette used everywhere:**
```css
--color-primary: #0969da           /* Blue links, hover states */
--color-primary-dark: #0860ca      /* Hover dark */
--color-border: #e1e4e8            /* Card borders */
--color-background: #fff           /* Card background */
--color-text-primary: #111         /* Headings */
--color-text-secondary: #666       /* Descriptions */
--accent-2: {category color}       /* Eyebrow text */
```

**Never hardcode colors** - use CSS variables for consistency

### 9. Typography Consistency

```
Hero h1: clamp(2rem, 4vw, 3.5rem)
Section h2: clamp(1.4rem, 2.5vw, 2rem)
Card h3: 1.25rem
Eyebrow: 0.8rem, uppercase, letter-spacing: 0.08em
Description: 0.95rem
Meta (reading time): 0.875rem
```

### 10. Checklist for Every UI Change

Before committing ANY styling changes:

```
☐ Does it match existing similar components?
☐ Are colors using CSS variables (not hardcoded)?
☐ Are margins/padding consistent with rest of site?
☐ Do hover effects match other interactive elements?
☐ Is responsive behavior tested (mobile/tablet/desktop)?
☐ Are eyebrow labels using <p class="eyebrow">?
☐ Are cards full clickable links (not nested buttons)?
☐ Do sections use section-header structure?
☐ Are grids using consistent gap: 1.5rem?
☐ Is ad slot spacing correct (1.5rem margin)?
☐ Does it look professional and polished?
☐ Will it pass AdSense approval (consistent design)?
```

---

## 📚 Current Tools & Blog Posts Reference

### 13 Tools Currently Available

**Security & Developer Tools:**
1. **Password Generator** - Generate random passwords or word chains
2. **Regex Tester** - Test and debug regular expressions ⭐ NEW
3. **Hash Generator** - Generate cryptographic hashes (SHA-256, SHA-1, MD5) ⭐ NEW
4. **UUID/GUID Generator** - Generate unique identifiers in multiple formats ⭐ NEW

**Text & Encoding Tools:**
5. **Case Converter** - Convert between camelCase, snake_case, kebab-case, etc.
6. **URL Encoder/Decoder** - Encode and decode URLs safely
7. **Base64 Encoder/Decoder** - Encode/decode Base64 strings

**Developer Tools:**
8. **JSON Formatter** - Format, minify, validate JSON
9. **Unix Timestamp Converter** - Convert timestamps to dates and vice versa

**Utility & Design Tools:**
10. **Color Picker** - Pick colors and copy HEX, RGB, HSL values
11. **QR Code Generator** - Generate QR codes for URLs or text
12. **Unit Converter** - Convert between metric, imperial, and other units
13. **Word Unscrambler** - Find buildable words from letters

### 13 Blog Posts Currently Available

**Security Category (3 posts):**
- Password Generator Best Practices
- Cryptographic Hashing Explained (Hash Generator) ⭐ NEW
- Word Unscrambling: The Science Behind Pattern Recognition

**Development Category (7 posts):**
- How to Format JSON
- Understanding Case Conversions
- URLs Explained: Encoding & Special Characters
- The Hidden Language: Base64 Encoding
- Time in Computing: Unix Timestamps & Time Zones
- Regular Expressions Explained ⭐ NEW
- UUIDs and GUIDs Explained ⭐ NEW

**Design Category (1 post):**
- Color Psychology for Designers

**Science & Math Category (1 post):**
- Unit Conversion Explained

**Utility & Games Category (2 posts):**
- QR Codes Explained: Modern Uses
- None (reserved for future utility tool)

### Recommended Tools to Add Next

**High Priority (Strong Blog Content + High Demand):**
1. **CSV to JSON Converter** - Data transformation tool
   - Blog: "Data Format Conversion Guide"
   - Category: Developer
   - Reading time: 8 mins

2. **Markdown to HTML Converter** - Content creation tool
   - Blog: "Markdown and HTML: Technical Writing Guide"
   - Category: Development
   - Reading time: 8 mins

3. **JSON to YAML Converter** - Configuration tool
   - Blog: "YAML vs JSON: Configuration Formats Explained"
   - Category: Development
   - Reading time: 7 mins

**Medium Priority (Good Utility + Educational Value):**
4. **Hex/Binary/Decimal Converter** - Number systems
5. **HTML to Markdown Converter** - Content migration
6. **Minify/Beautify CSS** - Performance optimization
7. **Slug Generator** - SEO and URL optimization

---

## 🛠️ Tool-Specific Implementation Requirements

### UUID/GUID Generator Features

**Quantity Input:** MUST use `<input type="range">` with slider
- Min: 1, Max: 30
- Wrap in flexbox container: `display: flex; align-items: center; gap: 1rem;`
- Display element: separate `<span data-quantity-display>` showing current value
- Update display in real-time on slider input event
- Line reference: UUID tool implements this pattern - follow exact structure

```html
<input type="range" data-quantity value="1" min="1" max="30" style="flex: 1;" />
<span data-quantity-display style="min-width: 3rem; text-align: center; font-weight: 600;">1</span>
```

**Event Handler:**
```javascript
quantityInput?.addEventListener('input', (e) => {
  quantityDisplay.textContent = (e.target).value;
});
```

### Regex Tester Features

**Functionality Requirements:**
1. **Method Selector:** Dropdown supporting JavaScript, PCRE, Python, PHP (note: all run as JavaScript in browser)
2. **Pattern Format:** Must accept `/pattern/flags` format with regex parser
3. **Results Display:** Color-coded output with inline styles
   - **Blue (#4a9eff)** - Match count and labels
   - **Green (#90ee90)** - Match indicators
   - **Yellow (#ffd700)** - Highlighted matched text
   - **Purple (#dda0dd)** - Captured groups
   - **Red (#ff6b6b)** - Error messages

**Syntax Reference Panel:**
- Display 2-column grid of syntax reference sections
- Sections: Character Classes, Quantifiers, Anchors, Groups & Flags
- Use inline styles for consistent display
- Include common regex elements: `.`, `\d`, `\w`, `\s`, `[abc]`, `*`, `+`, `?`, `^`, `$`, `\b`, `|`, `()`

**Event Handlers:**
- Test button: Parse regex, match against text, display colored results
- Clear button: Reset all fields to defaults
- Enter key in pattern input: Trigger test
- Method selector change: Clear results

**Implementation Notes:**
- Use `<script is:inline>` for event handlers (client-side only)
- Parse regex with: `const m = str.match(/^\/(.+?)\/([gimsuvy]*)$/)`
- Match all with: `const matches = [...text.matchAll(regex)]`
- Use `.innerHTML` with inline style spans for color coding (avoid CSS classes)
- Test phrase: "Test 123 and another test 456" with `/test/gi` should find 2 matches

---

**Design Philosophy Summary:**

> "One design standard, applied consistently everywhere. Blog cards, tool cards, sections, buttons, labels - all follow the same rules. This creates a professional appearance that demonstrates:
> - Attention to detail
> - Quality craftsmanship
> - Professional standards
> - Trust and credibility
> 
> Consistency = Professionalism = Trust = Google AdSense Approval ✨"

**Last Updated:** Oct 8, 2026  
**Enforced By:** AGENT.md (this file)  
**Remember:** Consistency beats cleverness every time. When in doubt, copy the existing pattern.
