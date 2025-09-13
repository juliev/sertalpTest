# PVC Windows & Doors Company - Website Plan

## Technical Implementation

- **Framework:** Next.js v15.5 with Static Site Generation (SSG)
- **CSS Framework:** Tailwind CSS v4
- **Deployment:** GitHub Pages
- **Backend Services:** AWS Lambda for contact form handling
- **Asset Management:** Optimized images using Next.js Image component with lazy loading
- **Performance Target:** 90+ Google Lighthouse score
- **SEO:** 
  - Structured data for local business
  - Metadata optimization with proper title tags and meta descriptions
  - Schema markup for rich search results
  - Image alt tags and proper heading structure
  - XML sitemap generation
  - Canonical URLs implementation
- **Internationalization:** Support for English (default) and Portuguese

## Framework Best Practices

- **Next.js v15.5 Features to Utilize:**
  - App Router architecture instead of Pages Router
  - Server Components for improved performance
  - Built-in image optimization with next/image
  - Native i18n routing capabilities
  - Static and dynamic rendering strategies
  - Route handlers for API functionality
  - Use built-in SEO metadata components
  - Leverage React Server Components where appropriate

- **Tailwind CSS v4 Features to Utilize:**
  - Modern container queries
  - Advanced animation utilities
  - Custom variant utilities
  - Simplified responsive design approach
  - Native dark mode support
  - Leverage native Tailwind components when possible
  - Use built-in transition and transform utilities

- **Implementation Philosophy:**
  - Do not reinvent or custom code functionality already provided by these frameworks
  - Use framework-provided solutions over custom implementations
  - Follow the latest recommended patterns for both frameworks
  - Prioritize native solutions over third-party libraries

## Internationalization (i18n) Implementation

### Language Support
- **English (en)** - Default language
- **Portuguese (pt)**

### URL Structure
- English URLs follow pattern: `/en/[page-path]` (e.g., `/en/windows`)
- Portuguese URLs follow pattern: `/pt/[page-path]` (e.g., `/pt/janelas`)
- Root path (`/`) redirects to default language (`/en/`)

### Technical Implementation
- Use Next.js built-in i18n routing with internationalized routing
- Configure `next.config.js` with supported locales:
  ```js
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetection: true,
  }
  ```
- Implement language switching component in header
- Let Next.js handle translation file loading during build process

### SEO Implementation
- Implement hreflang tags for proper search engine indexing
- Ensure all meta tags are properly translated
- Use proper canonical URLs for language variants

### User Experience
- Language selector in header with flag icons
- Remember user language preference (localStorage)
- Automatic language detection based on browser settings (with option to override)

---

## Site Structure & Page Map

### Navigation Structure
- **Primary Navigation:**
  - Home
  - Windows
  - Doors
  - Other Products (Blinds & Shutters)
  - Projects/Gallery
  - About Us
  - Contact

- **Secondary Navigation:**
  - Get a Quote
  - FAQ
  - Privacy Policy
  - Terms of Service

---

## Page Content Details

### 1. **Homepage**

#### Hero Section
- **Headline:** "High-Performance PVC Windows & Doors for a More Comfortable Home"
- **Subheading:** "Certified quality, custom design, nationwide installation, guaranteed durability"
- **Primary CTA:** "Request a Free Quote" (Opens form modal)
- **Secondary CTA:** "Explore Our Products" (Smooth scroll to products section)
- **Visual:** Full-width image slider showing premium installations with subtle animation
- **Implementation:** 
  - Responsive hero with Next.js Image optimization
  - Tailwind classes for responsive text sizing
  - Animated CTA buttons with hover effects

#### Why Choose Us Section
- **Layout:** 6-column grid with icons and text (3-column on tablet, 2-column on mobile)
- **Content Items:**
  - **Premium Materials:** "10-year guarantee with premium Cortizo profiles and German hardware"
  - **Energy Efficiency:** "Up to 40% reduction in heating & cooling costs with triple glazing options"
  - **Sound Insulation:** "Reduce external noise by up to 32dB for peaceful living spaces"
  - **Expert Installation:** "Certified technicians with 10+ years of industry experience"
  - **Nationwide Coverage:** "Fast production and professional installation across the country"
  - **After-Sales Support:** "Dedicated maintenance team with quick response times"
  - **Custom Solutions:** "Tailor-made products to fit any architectural style or requirement"
  - **Security Features:** "Multi-point locking systems and reinforced frames for maximum protection"
- **Visual Elements:**
  - Custom SVG icons for each benefit
  - Subtle animation on hover
  - Optional counter statistics (e.g., "1000+ successful installations")
  - "Learn More" links under each benefit leading to detailed explanation pages
- **Implementation:**
  - Responsive Tailwind grid with proper spacing
  - Animated SVG icons with hover state changes
  - Lazy-loaded images for optimal performance
  - Micro-interactions for enhanced engagement

#### Featured Products Section
- **Layout:** 4-column card grid with image, title, brief description
- **Categories:**
  - **Windows:** Featuring tilt-and-turn model
  - **Doors:** Featuring entrance door
  - **Blinds & Shutters:** Featuring external blinds
  - **Accessories:** Featuring premium handles
- **Each Card Contains:**
  - High-quality product image
  - Product name
  - Brief feature list (3 points)
  - "Learn More" link
- **Implementation:**
  - Tailwind card components
  - CSS hover effects
  - Next.js Image component for optimization

#### Quick Estimate Section
- **Headline:** "Get your personalized quote in 24 hours"
- **Form Fields:**
  - Product type (dropdown)
  - Approximate dimensions (simple input)
  - Name
  - Phone/Email
  - Submit button
- **Implementation:**
  - React Hook Form for validation
  - Tailwind form styling
  - Simple animation on submit
  - Success modal

#### Testimonials Section
- **Layout:** Carousel/slider with testimonial cards
- **Each Testimonial Contains:**
  - Customer name and location
  - Star rating (5-star system)
  - Brief quote
  - Optional small image
- **Implementation:**
  - Custom carousel component
  - Swipe-enabled for mobile
  - Auto-rotating with pause on hover

#### Recent Projects Section
- **Layout:** Masonry grid of completed installation photos
- **Implementation:**
  - Lazy-loaded images
  - Lightbox effect on click
  - Filter options by project type

#### Contact/CTA Section
- **Layout:** Split design with map and contact form
- **Content:**
  - Contact form (name, email, message)
  - Phone number with click-to-call
  - Email with click-to-email
  - Physical address
  - Google Maps integration
- **Implementation:**
  - Google Maps API integration
  - Form validation with React Hook Form
  - Success/error handling

#### Footer
- **Layout:** 4-column grid with logo, links, contact, social
- **Content:**
  - Company logo and brief description
  - Quick links to main pages
  - Contact information
  - Social media icons
  - Newsletter signup
  - Copyright and legal links
- **Implementation:**
  - Responsive grid layout
  - Subtle animation on hover states

---

### 2. **Windows Page**

#### Hero Section
- **Headline:** "PVC Windows Built for Comfort, Efficiency, and Security"
- **Subheading:** "Premium quality windows customized for your home's unique style"
- **Visual:** Full-width image of premium window installation

#### Benefits Section
- **Layout:** Icon grid with 5 main benefits
- **Content Items:**
  - **Energy Savings:** "Up to 40% reduction in heating and cooling costs"
  - **Acoustic Insulation:** "Reduce outside noise by up to 32 decibels"
  - **Extended Lifespan:** "10+ year warranty on all installations"
  - **Eco-Friendly:** "Sustainable materials and production processes"
  - **Low Maintenance:** "Easy to clean and resistant to weather damage"

#### Window Types Section
- **Layout:** Tabs or accordion interface
- **Types (each with image, description, key features):**
  - **Tilt-and-Turn:** Multi-functional opening, enhanced ventilation
  - **Casement:** Maximum ventilation, clean aesthetic
  - **Pivot:** Space-saving, modern design
  - **Sliding:** Space-efficient, panoramic views
- **Implementation:**
  - Interactive tab component
  - Smooth animations between tab changes
  - Technical specifications expandable section

#### Technical Systems Section
- **Layout:** Card grid with expandable details
- **Systems:**
  - A 70 Casement
  - C 70 Sliding
  - A 84 Concealed Leaf
  - E 170 Lift-and-Slide
- **Each Card Contains:**
  - System name and image
  - Key specifications
  - Energy rating
  - "View Technical Details" button (expands to show more)
- **Implementation:**
  - Expandable cards with animation
  - Technical specs presented in clean, scannable format

#### Customization Options Section
- **Layout:** Visual selector interface
- **Options:**
  - Colors (visual selector)
  - Finishes (visual selector)
  - Glass types (cards with properties)
  - Opening mechanisms (animated diagrams)

#### Smart Features Section
- **Layout:** 3-column feature grid
- **Features:**
  - Micro-ventilation system
  - Smart-Box integration
  - Integrated shutters and blinds
- **Implementation:**
  - Animated illustrations
  - "How it works" expandable sections

#### CTA Section
- **Primary CTA:** "Request a Quote" (Form)
- **Secondary CTA:** "Download Technical Specifications" (PDF)

---

### 3. **Doors Page**

#### Hero Section
- **Headline:** "PVC Doors: Elegant Design, Lasting Protection"
- **Subheading:** "Security, style, and energy efficiency for your entryways"

#### Benefits Section
- **Content Items:**
  - Durability (weather resistance, long-term performance)
  - Insulation (thermal and acoustic)
  - Eco-friendly materials and production
  - Fire and weather resistance ratings
  - Security features

#### Product Catalogs Section
- **Layout:** Visual cards with download option
- **Collections:**
  - White Collection (download PDF)
  - Color Collection (download PDF)
  - Modern Collection (download PDF)
- **Implementation:**
  - PDF viewer preview
  - Download tracking

#### Door Types Section
- **Layout:** Image grid with expandable details
- **Types:**
  - Entrance Doors (security features)
  - Exterior Doors (weather resistance)
  - Glass Doors (design options)
  - Apartment Entrance Doors (space-saving designs)
- **Implementation:**
  - Click to expand with detailed specifications
  - Gallery view of each type

#### Technical Specifications Section
- **Layout:** Tabbed interface with data tables
- **Categories:** Security ratings, U-values, noise reduction

#### Installation Process Section
- **Layout:** Step-by-step timeline
- **Steps:** Consultation, Measurement, Production, Installation, Inspection

#### CTA Section
- **Primary CTA:** "Explore Catalog & Get a Free Estimate"
- **Secondary CTA:** "See Completed Door Projects"

---

### 4. **Other Products Page**

#### Hero Section
- **Headline:** "Complete Your Home with Premium Solutions"
- **Subheading:** "Beyond windows and doors — enhance your living space"

#### Products Grid
- **Layout:** Visual card grid with filtering
- **Categories:**
  - External blinds (types, benefits)
  - Internal blinds (types, benefits)
  - Glass balcony railings (styles, safety features)
  - Canopies (designs, materials)
  - Mosquito nets (types, installation options)
- **Implementation:**
  - Filterable grid
  - Quick view modal
  - "Request Info" button for each product

#### Integration Section
- **Content:** How these products integrate with windows and doors
- **Implementation:** Interactive diagram showing combinations

#### Materials & Quality Section
- **Content:** Details about materials, durability, warranties

#### CTA Section
- **Primary CTA:** "Contact us for tailored solutions"

---

### 5. **Projects/Gallery Page**

#### Hero Section
- **Headline:** "Our Work Speaks for Itself"
- **Subheading:** "Browse our completed installations across the country"

#### Project Grid
- **Layout:** Masonry photo grid with project details
- **Each Project Contains:**
  - Multiple high-quality images
  - Brief project description
  - Products used
  - Location
  - Customer testimonial (if available)
- **Implementation:**
  - Lightbox gallery
  - Lazy loading
  - Filter animation

#### Featured Projects Section
- **Content:** Showcase of 3-5 exceptional projects with more details

#### CTA Section
- **Primary CTA:** "Start Your Project Today"

---

### 6. **About Us Page**

#### Company Story Section
- **Content:** History, mission, values

#### Team Section
- **Layout:** Team member cards with roles and brief bios

#### Certifications Section
- **Content:** Industry certifications, partnerships (Cortizo, etc.)

#### Manufacturing Process Section
- **Layout:** Step-by-step visual guide to how products are made

#### Sustainability Section
- **Content:** Environmental initiatives and sustainable practices

---

### 7. **Contact Page**

#### Contact Form Section
- **Fields:** Name, Email, Phone, Subject, Message
- **Implementation:** Form validation, success/error handling

#### Map Section
- **Content:** Interactive map with office/showroom locations

#### Direct Contact Section
- **Content:** Phone numbers, email addresses, physical addresses

#### Opening Hours Section
- **Content:** Business hours for showrooms and support

---

## Additional Website Elements

### Global Components
- **Header:** Responsive navigation with logo, nav links, quote button
- **Footer:** 4-column layout with contact, links, newsletter, social
- **Quote Modal:** Accessible from any page via fixed CTA
- **Cookie Consent:** GDPR-compliant cookie notice
- **Back to Top:** Fixed button appearing after scroll

### Technical SEO Elements
- Meta title and description for all pages
- Structured data for local business
- XML sitemap
- Robots.txt
- Canonical URLs

### Analytics Setup
- Google Analytics 4
- Conversion tracking for form submissions
- Event tracking for downloads and key interactions

---

## Development Approach

### Component Structure
- Atomic design methodology
- Reusable UI components
- Consistent styling system

### Design Reference & Examples
- Use visual examples from `/examples` folder for implementation guidance:
  - `before_after.png`: Shows the expected quality improvement
  - `components1.png` through `components5.png`: Component patterns and design examples
  - Follow these examples for visual styling, spacing, and component architecture
  - Implement similar UI patterns and interactions as shown in examples

### Performance Optimization
- Image optimization strategy
- Code splitting
- Lazy loading of off-screen content
- Critical CSS

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast requirements

---
