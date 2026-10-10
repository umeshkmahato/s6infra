# S6 Infrastructure - Enterprise React Application

Modern, scalable enterprise-level React application for S6 Infrastructure using **Next.js + TypeScript**.

## Project Structure

```
src/
├── app/              # Next.js app router pages & layouts
├── components/       # Reusable React components
├── constants/        # Application constants
├── context/          # React context for state management
├── hooks/            # Custom React hooks
├── lib/              # Utility functions & API client
├── pages/            # Additional pages
├── styles/           # Global CSS & Tailwind styles
└── types/            # TypeScript type definitions
```

## Features

✨ **Enterprise-Ready**
- TypeScript for type safety
- Next.js App Router
- Tailwind CSS for styling
- ESLint & Prettier configured
- Environment variable support

🎨 **Components**
- Responsive Header with navigation
- Hero section with call-to-action
- Services showcase
- Contact form with validation (Zod + React Hook Form)
- Footer with links

🔧 **Developer Experience**
- Hot module reloading
- Type checking with TypeScript
- Code formatting with Prettier
- Linting with ESLint
- RESTful API client with axios interceptors

📱 **Responsive Design**
- Mobile-first approach
- Tailwind CSS utilities
- Smooth scroll behavior
- Accessible components

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Build

```bash
npm run build
npm start
```

## Linting & Type Checking

```bash
npm run lint
npm run type-check
npm run format
```

## Environment Variables

Create `.env.local`: and add feilds from `.env.example`



## Key Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Form Validation**: Zod + React Hook Form
- **HTTP Client**: Axios with interceptors
- **Code Quality**: ESLint + Prettier

## File Organization

### Components (`src/components/`)
- **Header.tsx**: Navigation with mobile menu
- **HeroSection.tsx**: Landing page hero
- **ServicesSection.tsx**: Service cards showcase
- **ContactSection.tsx**: Contact form
- **Footer.tsx**: Footer with links

### Types (`src/types/`)
- Project, Service, TeamMember interfaces
- API response types
- Form data types

### Validations (`src/lib/validations.ts`)
- Zod schemas for form validation
- Type inference for forms

### Constants (`src/constants/`)
- Color definitions
- Layout measurements
- API endpoints
- Service list

### Hooks (`src/hooks/`)
- `useIntersectionObserver`: Reveal animations on scroll

### API (`src/lib/api.ts`)
- Axios instance with interceptors
- Request/response handling
- Authentication token management

## Best Practices Implemented

- ✅ Modular component architecture
- ✅ Type-safe API calls
- ✅ Form validation with Zod
- ✅ Environment variable management
- ✅ Responsive design patterns
- ✅ Error handling
- ✅ Code splitting & lazy loading ready
- ✅ SEO metadata
- ✅ Security headers in next.config
- ✅ Intersection Observer for animations

## Next Steps

1. **API Integration**: Connect to backend API endpoints
2. **Authentication**: Implement user authentication
3. **Database**: Setup database for projects & portfolio
4. **Analytics**: Add Google Analytics or similar
5. **Testing**: Setup Jest & React Testing Library
6. **Deployment**: Deploy to Vercel or similar platform
7. **Performance**: Implement image optimization
8. **PWA**: Add PWA capabilities


