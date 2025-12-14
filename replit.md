# Portfolio Website

## Overview

A modern, full-stack portfolio website for showcasing personal projects and skills. Built with React and Express, featuring smooth animations, dark mode design, and a responsive layout. The portfolio includes sections for About, Projects, Services, and Contact, with a downloadable source code feature.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and data fetching
- **Animations**: Framer Motion for smooth page transitions and interactions
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript throughout
- **Development**: Separate entry points for dev (`index-dev.ts`) and production (`index-prod.ts`)
- **Dev Server**: Vite middleware integration for HMR during development
- **Static Serving**: Express serves built files in production

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Located in `shared/schema.ts` with Zod integration via `drizzle-zod`
- **Storage**: Currently uses in-memory storage (`MemStorage` class) with interface ready for database migration
- **Database**: PostgreSQL support via `@neondatabase/serverless` driver

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # UI components (About, Hero, Projects, etc.)
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Backend Express application
│   ├── app.ts        # Express app setup and middleware
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data storage abstraction
├── shared/           # Shared code between client and server
│   └── schema.ts     # Database schema and types
```

### Build Configuration
- TypeScript uses path aliases: `@/*` for client source, `@shared/*` for shared code
- Vite builds to `dist/public` directory
- esbuild bundles server code to `dist/index.js`
- Custom Vite plugin for OpenGraph meta image handling

## External Dependencies

### UI Components
- **shadcn/ui**: Full component library with Radix UI primitives
- **Lucide Icons**: Icon library used throughout the application

### Third-Party Services
- **Neon Database**: Serverless PostgreSQL hosting (configured but optional)
- **Vercel**: Deployment configuration included with security headers

### Key NPM Packages
- `drizzle-orm` / `drizzle-kit`: Database ORM and migrations
- `archiver`: ZIP file creation for portfolio download feature
- `express-session` with `connect-pg-simple`: Session management (available for auth features)
- `zod`: Runtime type validation
- `vaul`: Drawer component for mobile interactions