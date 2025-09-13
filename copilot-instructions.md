# PVC Windows & Doors Company - Project Requirements

## Project Overview
- **Business**: PVC Windows & Doors Company
- **Project Type**: Landing page static website
- **Technology Stack**:
  - Next.js v15.5 (Static Site Generation)
  - Tailwind CSS v4 for styling
  - React components

## Framework Utilization
- Leverage built-in features from Next.js v15.5 and Tailwind CSS v4 wherever possible
- Do not implement custom solutions for functionality already provided by these frameworks
- Use the latest approaches and best practices from these framework versions
- Take advantage of:
  - Next.js App Router and server components
  - Tailwind CSS v4's advanced styling features and animations
  - Built-in image optimization and internationalization

## Internationalization Requirements
- **Languages**:
  - English (en) - Default language
  - Portuguese (pt)
- **URL Structure**: 
  - English URLs: `/en/[page-path]` (e.g., `/en/windows`, `/en/contact`)
  - Portuguese URLs: `/pt/[page-path]` (e.g., `/pt/windows`, `/pt/contact`)
  - Root path (`/`) should redirect to default language (`/en/`)
- **Implementation**: 
  - Use Next.js i18n routing capabilities
  - Language switcher in header
  - Maintain consistent URL structure across languages
  - SEO optimization for multilingual content (hreflang tags)

## Design Requirements
- Clean, professional design suitable for a home improvement company
- Mobile-responsive layout
- Emphasis on visual presentation of products
- Conversion-focused elements (CTAs, forms, etc.)
- Accessible design principles

## UX Design Best Practices
- **Visual Hierarchy:**
  - Use clear visual hierarchy to guide users through content
  - Implement proper heading structure (H1 → H6) for both semantic meaning and visual organization
  - Apply contrast between primary content and supporting elements

- **Navigation:**
  - Keep main navigation simple and intuitive (max 7 primary items)
  - Implement sticky header for easy navigation on long pages
  - Use breadcrumbs on internal pages for improved wayfinding
  - Ensure clickable elements have appropriate hover/active states with minimum 44×44px touch targets

- **Page Load Performance:**
  - Implement progressive image loading (blur-up technique)
  - Use proper image formats (WebP with fallbacks) and sizes
  - Implement critical CSS for above-the-fold content
  - Minimize layout shifts during loading (set image dimensions)

- **Form Design:**
  - Use single-column layouts for forms
  - Implement inline validation with helpful error messages
  - Minimize required fields to reduce friction
  - Use appropriate input types (tel, email, etc.) for mobile optimization
  - Show clear progress indicators for multi-step forms

- **Content Readability:**
  - Maintain proper line length (50-75 characters per line)
  - Use sufficient line height (1.5-1.6 for body text)
  - Ensure text color has at least 4.5:1 contrast ratio against backgrounds
  - Implement proper text hierarchy with varied weights and sizes

- **Interaction Design:**
  - Apply consistent hover and focus states
  - Add subtle animations for state changes (e.g., button hover)
  - Ensure scrolling is smooth and predictable
  - Provide immediate feedback for user actions (e.g., form submissions)

- **Mobile Experience:**
  - Design for touch-first interaction on mobile
  - Implement proper spacing between interactive elements
  - Use appropriate font sizes (minimum 16px for body text)
  - Test and optimize for various screen sizes and orientations

## Key Features to Implement
- Hero section with main value proposition and CTA
- Product showcase sections (Windows, Doors, etc.)
- Benefits/Features section highlighting quality and energy efficiency
- Testimonials/reviews section
- Quick quote request form
- Contact information and map
- Image galleries for products
- Responsive navigation

## Content Requirements
- Focus on energy efficiency, quality materials, and professional installation
- Highlight 10-year guarantees with Cortizo profiles
- Emphasize nationwide service and support
- Showcase different product categories and types

## Technical Implementation
- Static site generation with Next.js
- Tailwind CSS for styling
- SEO optimization
- Fast loading times
- Structured data markup for local business
- Contact form functionality

## Project Structure
- Follow standard Next.js project structure
- Organize components logically
- Create reusable UI components
- Implement responsive design with Tailwind breakpoints

## Visual References & Examples
- Reference visual examples in the `/examples` folder for implementation guidance:
  - `before_after.png`: Before/after implementation comparisons
  - `components1.png` through `components5.png`: Component design examples and patterns
  - Use these as visual guidelines for UI component styling and layout
  - Match the aesthetic quality and user experience shown in these examples

When working on this project, prioritize a clean, professional design that builds trust while showcasing products clearly. Focus on conversion elements like quote forms and clear CTAs.
