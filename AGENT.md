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

### When Adding a New Tool:

1. **Create Blog Post**
   - Write 3,000-5,000+ words
   - Educational content, not just a tool description
   - Link to the actual tool in "How to Use" section

2. **Fact-Check**
   - Verify all claims against sources
   - Check all calculations
   - Correct any historical inaccuracies
   - Document corrections

3. **Add Citations**
   - Minimum 5 sources per post
   - Mix of academic, official, and industry sources
   - Include full citations with URLs

4. **Update Files**
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

5. **Build & Test**
   ```bash
   npm run build
   # Test blog URLs render correctly
   # Verify sources section visible
   # Check no console errors
   ```

6. **Commit**
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
