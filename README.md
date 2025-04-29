# Crown & Glory Salon Website*

A modern, responsive website for Crown & Glory Salon*, a premier unisex salon in Cleveland, Ohio. This website showcases salon services, team members, gallery, and provides a booking system for appointments.

*NOTE: This site is for demo purposes only. Salon-specific data and information is AI Generated. 

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Pages](#pages)
- [Components](#components)
- [Scripts](#scripts)
- [Styling](#styling)
- [Deployment](#deployment)

## Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) (React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom animations
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives with custom styling
- **Form Handling**: React Hook Form with Zod validation
- **Maps**: Leaflet for location map integration
- **State Management**: React hooks and context
- **Typography**: Poppins font from Google Fonts
- **Icons**: Lucide React

## Project Structure

```
├── app/                   # Next.js app directory with pages and routes
│   ├── about/             # About page
│   ├── booking/           # Booking/appointment page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # Reusable UI components
│   ├── analytics/         # Analytics components
│   ├── booking/           # Booking-related components
│   ├── contact/           # Contact form and map components
│   ├── gallery/           # Gallery and image display components
│   ├── home/              # Homepage-specific components
│   ├── layout/            # Layout components (header, footer)
│   ├── services/          # Service listing components
│   ├── ui/                # UI component library
│   └── widgets/           # Standalone widget components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and shared logic
├── public/                # Static assets
│   ├── images/            # Image assets
│   └── logo/              # Logo files
└── styles/                # Additional styles beyond globals.css
```

## Key Features

- **Responsive Design**: Fully responsive across all device sizes
- **Service Showcase**: Detailed service listings with pricing
- **Online Booking**: Appointment scheduling system
- **Interactive Map**: Location display using Leaflet
- **Gallery**: Showcase of salon's work and space
- **WhatsApp Integration**: Direct message widget for quick contact
- **SEO Optimized**: Metadata configured for search engines
- **Dark/Light Mode**: Theme switching capability
- **Accessibility**: Built with a11y best practices using Radix UI

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/crown-glory-salon.git
cd crown-glory-salon

# Install dependencies
npm install
# or
pnpm install

# Start the development server
npm run dev
# or
pnpm dev
```

The site will be available at http://localhost:3000

## Pages

- **Home** (`/`): Showcase of salon highlights, services overview, and testimonials
- **About** (`/about`): Information about the salon, history, and team
- **Services** (`/services`): Detailed service listings with descriptions and pricing
- **Gallery** (`/gallery`): Portfolio of salon work
- **Booking** (`/booking`): Appointment scheduling system
- **Contact** (`/contact`): Contact form, location map, and business hours

## Components

### Layout Components

- **Header**: Navigation menu with responsive mobile drawer
- **Footer**: Contact information, hours, sitemap, and social links

### Home Page Components

- **HeroSection**: Main banner with call-to-action
- **ServicesOverview**: Preview of salon services
- **WhyChooseUsSection**: Unique selling points
- **TestimonialsSection**: Client reviews carousel
- **InstagramSection**: Social media feed integration
- **CTASection**: Call-to-action for booking

### Service Components

- **ServiceCard**: Individual service display
- **ServicesTabs**: Categorized service listings
- **ServicesBanner**: Hero banner for services page

### Booking Components

- **BookingForm**: Multi-step appointment scheduling form
- **BookingBanner**: Hero banner for booking page

### Widgets

- **WhatsAppWidget**: Floating contact button for direct messaging

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build the production application
- `npm run start`: Start the production server
- `npm run lint`: Lint the codebase

## Styling

The project uses Tailwind CSS for styling with custom configuration in `tailwind.config.js`. Global styles are defined in `app/globals.css`. The design system follows a consistent color scheme and typography defined in the Tailwind configuration.

## Deployment

This Next.js application can be deployed to various platforms:

- **Vercel**: Recommended for Next.js applications
- **Netlify**: Another great option with easy GitHub integration
- **AWS/GCP/Azure**: For more custom hosting requirements

To deploy on Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically detect the Next.js project and deploy it

---

Created with ❤️ for Crown & Glory Salon 