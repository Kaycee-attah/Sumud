# Cassava Flour Co. E-Commerce Design Guidelines

## Design Approach: Modern Glass Morphism
A sophisticated e-commerce experience featuring floating elements, backdrop blur effects, and seamless dark/light mode transitions. The design emphasizes premium quality through translucent layers, depth, and refined visual hierarchy.

## Color Palette

### Light Mode (Exact OKLCH Values)
- **Background:** oklch(0.9529 0.0146 102.4597) - Soft warm white
- **Foreground:** oklch(0.4063 0.0255 40.3627) - Deep warm gray
- **Primary:** oklch(0.6083 0.0623 44.3588) - Earthy cassava tone
- **Primary Foreground:** oklch(1.0000 0 0) - Pure white
- **Secondary:** oklch(0.7473 0.0387 80.5476) - Soft golden accent
- **Secondary Foreground:** oklch(1.0000 0 0) - Pure white
- **Accent/Muted:** oklch(0.8502 0.0389 49.0874) - Light warm neutral
- **Border:** oklch(0.7473 0.0387 80.5476) - Subtle golden edge
- **Chart Colors:** oklch(0.6083 0.0623 44.3588), oklch(0.5416 0.0512 37.2132)

### Dark Mode (Exact OKLCH Values)
- **Background:** oklch(0.2721 0.0141 48.1783) - Deep warm charcoal
- **Foreground:** oklch(0.9529 0.0146 102.4597) - Soft warm white
- **Primary:** oklch(0.7272 0.0539 52.3320) - Brightened earthy tone
- **Primary Foreground:** oklch(0.2721 0.0141 48.1783) - Deep charcoal
- **Secondary:** oklch(0.5416 0.0512 37.2132) - Muted brown
- **Secondary Foreground:** oklch(0.9529 0.0146 102.4597) - Soft white
- **Accent:** oklch(0.7473 0.0387 80.5476) - Warm golden
- **Muted:** oklch(0.4063 0.0255 40.3627) - Mid-tone warm gray
- **Border:** oklch(0.4063 0.0255 40.3627) - Subtle dark edge
- **Chart Colors:** oklch(0.7272 0.0539 52.3320), oklch(0.7473 0.0387 80.5476)

## Typography
- **Sans Serif:** DM Sans (primary interface font)
- **Serif:** Georgia (editorial content, headings)
- **Monospace:** Menlo (code, product SKUs)

## Dark Mode Implementation
- Fully functional toggle button in navigation (sun/moon icon)
- localStorage persistence for user preference
- System preference detection with manual override capability
- Smooth CSS transitions between modes (200-300ms)
- Toggle functional across all pages
- Glass morphism elements adapt backgrounds and borders per mode

## Glass Morphism Design System

### Glass Card Styles
**Light Mode:**
- Background: rgba(255, 255, 255, 0.1)
- Backdrop filter: blur(20px)
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Border radius: 1rem

**Dark Mode:**
- Background: rgba(0, 0, 0, 0.2)
- Backdrop filter: blur(20px)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border radius: 1rem

### Interactive Elements
- Hover effects: Increased blur (blur(30px)), subtle scale transforms
- Buttons over images: Blurred backgrounds, no custom hover states
- Floating animations: Gentle vertical movement (-10px to 10px)
- Gradient borders on testimonial cards

## Layout System
- Tailwind spacing: Primarily p-8, p-12, gap-6, gap-8
- Container max-width: max-w-7xl for main content
- Section padding: py-20 desktop, py-12 mobile
- Grid layouts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for products/features

## Component Library

### Navigation
- Sticky header with glass morphism background
- Dark mode toggle (prominent placement)
- Desktop: Horizontal menu with dropdowns
- Mobile: Hamburger menu with slide-out drawer
- Cart icon with item count badge

### Product Display
Single premium product "Artisan Cassava Flour" with variants:
- 1kg - $8.99 (Stock: 38) - "Essentials"
- 2kg - $16.99 (Stock: 22) - "Family Pack"
- 5kg - $39.99 (Stock: 15) - "Premium Bundle"

Product cards: Glass morphism with floating effect, variant selector, add-to-cart CTA

### Homepage Sections
1. **Hero:** Large glass card with floating cassava illustrations, primary CTA with mode-aware gradient
2. **Features:** 3-4 animated glass cards, icon-title-description, hover blur intensification
3. **Products:** Floating product displays with depth layers and shadows
4. **Process:** Scroll-triggered glass panels revealing traditional methods
5. **Testimonials:** Transparent cards with gradient borders, customer photos
6. **CTA:** Glass button with premium gradient, secondary "Learn More" link

### Forms & Checkout
- Glass input fields with subtle borders
- Floating labels with smooth animations
- Error states: Red accent with glass backdrop
- Success states: Green accent maintaining glass aesthetic
- Payment forms: Secure visual treatment with lock icons

## Images
**Hero Section:** Large background image of cassava roots/flour in natural setting with overlay for glass card placement. Image should convey artisanal, premium quality.

**Product Images:** High-quality photos of packaging (1kg, 2kg, 5kg bags) on transparent/white backgrounds for easy mode adaptation.

**Process Page:** Traditional cassava processing photos (harvesting, grinding, drying) in documentary style.

**Testimonials:** Customer portrait photos (circular crops) within glass cards.

## Page-Specific Designs
- **/shop:** Product grid with filter sidebar, glass morphism cards
- **/process:** Vertical timeline with scroll-triggered reveals
- **/premium:** Elite tier showcase for bulk orders (10kg-100kg), business verification UI
- **/recipes:** Card grid with recipe previews, difficulty tags
- **/sustainability:** Impact metrics with animated counters, community photos
- **/cart:** Floating cart summary, quantity adjusters, variant display
- **/checkout:** Multi-step form with progress indicator, order summary sidebar

## Animations
- Scroll-triggered: Fade-in with slight upward movement (30px)
- Hover: Scale(1.05) with increased backdrop blur
- Page transitions: 300ms fade
- Cart additions: Subtle bounce animation
- Mode toggle: Smooth color transitions (200ms ease-in-out)