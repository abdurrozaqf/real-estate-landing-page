# Real Estate — Landing Page

A modern real estate landing page built with Next.js. Showcase residential and commercial properties, highlight agency services, and guide visitors through rent listings, about sections, testimonials, and contact — all on a single, scrollable page.

[Live Demo](https://realestate.abdurrozaqf-dev.workers.dev/) · [Quick Start](#getting-started) · [Features](#features) · [Structure](#project-structure)

---

## Features

- **Hero section** — Full-width headline with property highlights (location, type, budget) and call-to-action
- **Property listings** — Curated rent cards with animated grid layout
- **About section** — Animated stats and value proposition with Framer Motion
- **Video showcase** — Embedded property tour with YouTube link
- **Customer testimonials** — Review cards from happy clients
- **Contact & partners** — Contact CTA with partner logo strip
- **Responsive layout** — Mobile-first design with Tailwind CSS and Ant Design
- **Smooth animations** — Scroll-triggered motion via Framer Motion
- **SEO ready** — Open Graph, Twitter cards, sitemap, robots.txt, and web manifest

## Tech Stack

| Category      | Technology                                                |
| ------------- | --------------------------------------------------------- |
| Framework     | [Next.js 15](https://nextjs.org/) (App Router)            |
| Language      | [TypeScript](https://www.typescriptlang.org/)             |
| Styling       | [Tailwind CSS](https://tailwindcss.com/)                  |
| UI Components | [Ant Design](https://ant.design/)                         |
| State         | [Redux Toolkit](https://redux-toolkit.js.org/)            |
| Animation     | [Framer Motion](https://www.framer.com/motion/)           |
| Icons         | [React Icons](https://react-icons.github.io/react-icons/) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or later
- [npm](https://www.npmjs.com/) (or yarn / pnpm)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/abdurrozaqf/real-estate-landing-page.git
cd real-estate-landing-page
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables** _(optional)_

   For production metadata (canonical URLs, sitemap, Open Graph), set your site domain:

| Variable | Description                            |
| -------- | -------------------------------------- |
| `DOMAIN` | Public site URL (e.g. your Vercel URL) |

Example:

```env
DOMAIN=https://realestate.abdurrozaqf-dev.workers.dev/
```

4. **Start the development server**

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start development server   |
| `npm run build` | Create a production build  |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

## Project Structure

```
real-estate-landing-page/
├── public/                  # Static assets (images, icons, OG image)
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout, metadata, fonts
│   │   ├── page.tsx         # Homepage entry
│   │   ├── globals.css      # Global styles
│   │   ├── sitemap.ts       # Dynamic sitemap
│   │   ├── robots.ts        # Robots.txt config
│   │   └── manifest.ts      # Web app manifest
│   ├── common/
│   │   ├── constant/        # Menu items, SEO metadata
│   │   ├── mocks/           # Mock data (rent, customers, about)
│   │   └── types/           # Shared TypeScript types
│   ├── components/
│   │   ├── elements/        # Reusable cards (rent, customer)
│   │   └── layouts/         # Navbar, footer, Redux provider shell
│   ├── modules/
│   │   └── home/            # Homepage sections (hero, rent, about, …)
│   └── utils/               # Redux store, formatters, motion helpers
└── package.json
```

## Page Sections

The app is a single-page layout with anchor-based navigation:

| Section   | Anchor       | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Home      | `#home`      | Hero headline with property search highlights |
| Rent      | `#rent`      | Popular property listings grid                |
| Sell      | `#sell`      | Sell section (nav link)                       |
| About     | `#about`     | Agency stats and brand story                  |
| Contact   | `#contact`   | Contact CTA and partner logos                 |
| Customers | `#customers` | Client testimonial cards                      |

## Deployment

The app is optimized for deployment on [Vercel](https://vercel.com/). Set the `DOMAIN` environment variable in your hosting provider's dashboard before deploying.

```bash
npm run build
npm run start
```

## Author

**Abdur Rozaqi** — [GitHub](https://github.com/abdurrozaqf)

---

<div align="center">
  <img src="https://realestate.abdurrozaqf-dev.workers.dev/og.png" alt="Real Estate Landing Page preview" width="100%">
</div>
