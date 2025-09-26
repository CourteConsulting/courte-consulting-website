# Image Assets for Courte Consulting Website

## Folder Structure

### `/hero/`
- Hero section background images
- Call-to-action images
- Main landing visuals

### `/services/`
- Service-specific icons and images
- Website development visuals
- Digital marketing graphics
- Branding design examples
- Product development images

### `/about/`
- Arianna Courte professional photos
- Company team photos
- Office/workspace images
- Company milestone visuals

### `/portfolio/`
- Client project screenshots
- Before/after examples
- Case study visuals
- Website mockups

### `/testimonials/`
- Client headshots
- Company logos
- Review graphics

### `/icons/`
- Service icons
- Social media icons
- UI/UX icons
- Feature icons

## Image Guidelines

### Technical Requirements
- **Format**: WebP preferred, PNG/JPG fallback
- **Hero Images**: 1920x1080px minimum
- **Service Images**: 400x300px
- **Portrait Photos**: 400x400px
- **Icons**: 64x64px SVG preferred

### Optimization
- Compress images for web
- Use appropriate formats (WebP for photos, SVG for icons)
- Include alt text descriptions
- Consider lazy loading for performance

## Usage in Components

Images should be imported and used like this:

```typescript
// In your React components
import heroImage from '/images/hero/main-background.webp';
import ariannaPhoto from '/images/about/arianna-courte.jpg';

// Usage
<img src={heroImage} alt="Creative business solutions" />
<img src={ariannaPhoto} alt="Arianna Courte, Founder of Courte Consulting" />
```

## Current Needs (Based on PROJECT_OVERVIEW.md)

1. **Professional photo of Arianna Courte** → `/about/`
2. **Service-specific graphics** → `/services/`
3. **Client portfolio screenshots** → `/portfolio/`
4. **Hero section background** → `/hero/`
5. **Company icons and logos** → `/icons/`