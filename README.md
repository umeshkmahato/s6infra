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

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.s6infra.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info.s6infra@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_FROM_EMAIL=info.s6infra@gmail.com
CONTACT_TO_EMAIL=info.s6infra@gmail.com
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id
GOOGLE_SHEETS_SHEET_NAME=Enquiries
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### Contact Form Email Setup

The contact form now posts to `POST /api/contact` and sends an email to `info.s6infra@gmail.com`.

- For Gmail, use an **App Password** for `SMTP_PASS` instead of your regular Gmail password.
- Keep `CONTACT_FROM_EMAIL` aligned with the authenticated SMTP mailbox to avoid delivery issues.
- The sender's email entered in the form is added as the `replyTo` address, so replies go back to the enquirer.
- The API includes basic spam protection with a honeypot field, minimum fill-time check, link-count screening, and IP-based rate limiting.

### Optional Google Sheets Storage

If you want to keep a spreadsheet copy of each enquiry, configure the Google Sheets variables above and then:

1. Create a Google Cloud service account with Sheets API access.
2. Share your target spreadsheet with the `GOOGLE_SHEETS_CLIENT_EMAIL` address.
3. Store the spreadsheet ID and private key in `.env.local`.

When configured, each enquiry is appended to the selected sheet with timestamp, contact details, message, IP address, and user agent.

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

✅ Modular component architecture
✅ Type-safe API calls
✅ Form validation with Zod
✅ Environment variable management
✅ Responsive design patterns
✅ Error handling
✅ Code splitting & lazy loading ready
✅ SEO metadata
✅ Security headers in next.config
✅ Intersection Observer for animations

## Next Steps

1. **API Integration**: Connect to backend API endpoints
2. **Authentication**: Implement user authentication
3. **Database**: Setup database for projects & portfolio
4. **Analytics**: Add Google Analytics or similar
5. **Testing**: Setup Jest & React Testing Library
6. **Deployment**: Deploy to Vercel or similar platform
7. **Performance**: Implement image optimization
8. **PWA**: Add PWA capabilities

## Contributing

Follow the established code structure and conventions. All TypeScript files must have proper type annotations.

## License

ISC
