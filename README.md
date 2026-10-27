# AEGIX — Modern Cybersecurity & AI SaaS Landing Page Template

![AEGIX Version](https://img.shields.io/badge/version-1.0.0-cyan.svg)
![React 19](https://img.shields.io/badge/React-19.x-61dafb.svg)
![Vite 8](https://img.shields.io/badge/Vite-8.x-646cff.svg)
![Tailwind CSS 4](https://img.shields.io/badge/TailwindCSS-v4.x-38bdf8.svg)
![Author](https://img.shields.io/badge/Author-vrajalInnovations-indigo.svg)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=flat-square&logo=vercel)](https://aegix-template.vercel.app/)

**AEGIX** is a modern, high-converting React 19 & Tailwind CSS v4 landing page template designed specifically for next-generation **AI cybersecurity, cloud defense, DevSecOps, and enterprise SaaS startups**. Built with **React 19**, **Vite 8**, and **Tailwind CSS v4**, AEGIX combines dark frosted-glass specular aesthetics, interactive WebGL ambient effects, an interactive "Request Demo" lead capture modal, Formspree/webhook-ready contact forms, and a complete authentication suite.

---

## Table of Contents

1. [Key Features](#key-features)
2. [Technology Stack](#technology-stack)
3. [Prerequisites](#prerequisites)
4. [Installation & Setup](#installation--setup)
5. [Backend & Webhook Integration](#backend--webhook-integration)
6. [Available Scripts](#available-scripts)
7. [Project Structure](#project-structure)
8. [Customization Guide](#customization-guide)
9. [Included Pages & Routes](#included-pages--routes)
10. [Performance & SEO Optimizations](#performance--seo-optimizations)
11. [Browser Support](#browser-support)
12. [Credits & Sources](#credits--sources)
13. [Support & License](#support--license)

---

## Key Features

- **12 Production-Ready Routes:** Complete SaaS landing experience with dedicated marketing pages, full authentication suite (SignIn, SignUp, OTP, Recovery), enterprise error screens, and legal compliance pages.
- **Interactive "Request Demo" Modal:** Built-in modal lead capture dialog with deployment environment selection, form validation, reference ID generation, and simulated dispatch.
- **Formspree / Webhook Ready:** Zero-configuration live form submission via `VITE_CONTACT_FORM_ENDPOINT` environment variable in `ContactPage.jsx`.
- **Unified Frosted Glass Aesthetic:** Cohesive dark visual hierarchy featuring specular sheen overlays, crisp glowing ambient highlights, and zero-clutter typography.
- **Hardware-Accelerated Smooth Scroll:** Integrated Lenis smooth scroll engine wrapped in a dedicated, lightweight `ScrollManager` component.
- **Interactive Dual Marquee Testimonials:** Smooth, gapless infinite scrolling testimonial marquee with pause-on-hover interaction and enterprise verification badges.
- **Pure Tailwind CSS v4:** Zero arbitrary square-bracket classes; standard modern utility classes tailored for optimal readability and rapid maintenance.
- **Single Modern Font System:** Clean, crisp UI powered by Google Fonts' *Plus Jakarta Sans*.
- **Decoupled Data Architecture:** All navigation, pricing tiers, features, testimonials, and company logos are decoupled into clean JSON mock files in `src/mock/`.
- **Instant Client Routing:** Clean standard React Router setup with direct page imports for seamless, instantaneous page transitions.
- **Offline Documentation Portal:** Bundled standalone cyber-dark documentation reader ready in `public/documentation/`.

---

## Technology Stack

- **Framework:** React 19 (`react`, `react-dom`)
- **Routing:** React Router v7 (`react-router-dom`)
- **Build Tool:** Vite 8 with Rollup vendor chunking
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Smooth Scroll:** Lenis (`lenis`)
- **Iconography:** Lucide React (`lucide-react`) & Bootstrap Icons
- **Typography:** Plus Jakarta Sans

---

## Prerequisites

Before running the project, ensure you have the following installed on your machine:

- **Node.js:** v18.0.0 or higher (v20.x or v22.x LTS recommended)
- **Package Manager:** `npm` (v9.x or higher), `pnpm`, or `yarn`

Check your versions by running:
```bash
node -v
npm -v
```

---

## Installation & Setup

1. **Extract the Template Archive**
   Unpack the downloaded zip file to your preferred workspace directory.

2. **Navigate into the Project Folder**
   ```bash
   cd aegix
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Launch the Development Server**
   ```bash
   npm run dev
   ```
   Open your browser to the local server address shown in your terminal (typically `http://localhost:5173`).

---

## Backend & Webhook Integration

### 1. Live Contact Form (Formspree / Custom API)
To receive live contact form submissions directly to your email or webhook:
1. Create a free account at [Formspree.io](https://formspree.io) (or use your custom API endpoint).
2. Create a `.env` file in the root directory:
   ```env
   VITE_CONTACT_FORM_ENDPOINT="https://formspree.io/f/your_form_id"
   ```
3. Restart your dev server (`npm run dev`). `ContactPage.jsx` will automatically transmit form payloads live.

### 2. Authentication Suite Integration (Supabase / Clerk / Firebase)
All views in `src/auth/` (`SignInPage.jsx`, `SignUpPage.jsx`, `VerifyPage.jsx`) contain isolated submit handlers. Simply replace the demonstration handlers with your provider SDK:
```jsx
// Example Supabase client integration
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
});
```

---

## Available Scripts

In the project root, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server with instant HMR. |
| `npm run build` | Compiles and optimizes the React application for production into `dist/`. |
| `npm run preview` | Locally serves the optimized production build from `dist/` for verification. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## Project Structure

```text
aegix/
├── public/
│   ├── documentation/            # Offline cyber-dark documentation portal
│   │   ├── css/app.css           # Standalone documentation styles
│   │   ├── js/main.js            # Live search & filter scripts
│   │   └── index.html            # Documentation master reader
│   ├── favicon.svg               # Vector brand favicon
│   └── logo.png                  # Master brand identity asset
├── src/
│   ├── assets/                   # High-resolution optimized visual assets
│   ├── auth/                     # Dedicated authentication suite
│   │   ├── ForgotPasswordPage.jsx
│   │   ├── ResetPasswordPage.jsx
│   │   ├── SignInPage.jsx
│   │   ├── SignUpPage.jsx
│   │   └── VerifyPage.jsx
│   ├── components/
│   │   ├── common/
│   │   │   └── ScrollManager.jsx # Modular Lenis smooth scroll provider
│   │   ├── layout/               # Global navigation & footer
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── sections/             # Modular landing page sections
│   │   │   ├── Features.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── TrustedCompanies.jsx
│   │   └── ui/                   # Reusable UI primitives
│   │       ├── Card.jsx
│   │       ├── DemoModal.jsx     # Interactive Request Demo dialog
│   │       ├── FloatingBackground.jsx
│   │       ├── GhostFibers.jsx   # WebGL OGL shader background
│   │       └── LogoLoop.jsx      # Infinite 3D logo ticker
│   ├── mock/                     # Decoupled JSON data layers
│   │   ├── about.json
│   │   ├── auth.json
│   │   ├── companies.json
│   │   ├── contact.json
│   │   ├── features.json
│   │   ├── navigation.json
│   │   ├── pricing.json
│   │   └── testimonials.json
│   ├── pages/                    # Route-level page components
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── FeaturesPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── PricingPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   ├── ServerErrorPage.jsx
│   │   └── TermsPage.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx         # Clean client route configuration
│   ├── App.jsx                   # Clean root shell
│   ├── index.css                 # Theme tokens & typography utilities
│   └── main.jsx                  # React entry point with BrowserRouter
├── eslint.config.js              # ESLint 9+ flat configuration
├── index.html                    # SEO meta tags, OpenGraph & font links
├── package.json                  # Dependencies & scripts
└── vite.config.js                # Vite build configuration with chunk splitting
```

---

## Customization Guide

### 1. Changing Brand Name and Logo
- Open `src/mock/navigation.json` and edit the `"brand"` object:
  ```json
  "brand": {
    "name": "AEGIX",
    "subtitle": "Cloud Security"
  }
  ```
- To update the logo, replace `src/assets/logo.png` and `public/logo.png` with your company logo PNG file.

### 2. Customizing Landing Content & Testimonials
- **Testimonials:** Edit `src/mock/testimonials.json` to modify customer quotes, authors, roles, and metric badges.
- **Pricing:** Edit `src/mock/pricing.json` to customize tiers, prices, currency, billing frequencies, and comparison matrix features.
- **Features & Bento Grid:** Edit `src/mock/features.json` to alter technical pillars, metrics, and diagrams.
- **Partner Logos:** Edit `src/mock/companies.json` to update the ticker rows and stat counters.

### 3. Adjusting Fonts and Styling
- Global font tokens and typography classes are configured in `src/index.css`:
  ```css
  @theme inline {
    --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
  }
  ```

---

## Included Pages & Routes

| Route | Source File | Description |
| :--- | :--- | :--- |
| `/` | `src/pages/HomePage.jsx` | Full landing experience (Hero, GhostFibers, Features, Testimonials, Pricing) |
| `/about` | `src/pages/AboutPage.jsx` | Mission statement, leadership team, values, and contact card |
| `/features` | `src/pages/FeaturesPage.jsx` | Deep architectural pillars, capabilities bento grid, and telemetry showcase |
| `/pricing` | `src/pages/PricingPage.jsx` | Monthly/annual billing toggle, enterprise tiers, and interactive FAQ accordion |
| `/contact` | `src/pages/ContactPage.jsx` | SOC Hubs, 24/7 channels, Formspree-ready inquiry form, and knowledge base |
| `/privacy` | `src/pages/PrivacyPage.jsx` | Enterprise privacy policy & zero-knowledge telemetry disclosures |
| `/terms` | `src/pages/TermsPage.jsx` | Compliant website terms of service, acceptable use, and liability terms |
| `/signin` | `src/auth/SignInPage.jsx` | Minimal frosted glass sign-in card with enterprise SSO provider buttons |
| `/signup` | `src/auth/SignUpPage.jsx` | Minimal frosted glass registration card with terms agreement |
| `/forgot-password`| `src/auth/ForgotPasswordPage.jsx` | Credential recovery dispatch interface with instant validation |
| `/verify` | `src/auth/VerifyPage.jsx` | 6-Digit OTP security code entry with clipboard paste & countdown timer |
| `/confirm-password`| `src/auth/ResetPasswordPage.jsx` | New password and confirmation screen with security match checks |
| `/404` | `src/pages/NotFoundPage.jsx` | 404 Node Not Found with simulated diagnostics and return navigation |
| `/500` | `src/pages/ServerErrorPage.jsx` | 500 Mesh Anomaly screen with animated auto-repair & retry flow |

---

## Performance & SEO Optimizations

- **Instant Route Transitions:** Synchronous standard imports eliminate loading delays between screens.
- **Modular Hardware Smooth Scroll:** Powered by Lenis for fluid desktop and trackpad interaction.
- **Search Engine Optimization:** `index.html` includes complete OpenGraph cards, Twitter preview metadata, meta description, and JSON-LD schema markup.

---

## Browser Support

AEGIX is tested and compatible with modern evergreen browsers:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest desktop & iOS)
- Microsoft Edge (latest)
- Opera (latest)

---

## Credits & Sources

All external assets and libraries used in this template are licensed for commercial use:
- **Icons:** [Lucide Icons](https://lucide.dev/) (ISC License) & [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) — *Plus Jakarta Sans* (OFL)
- **Smooth Scroll:** [Lenis](https://github.com/darkroomengineering/lenis) (MIT License)

---

## Support & License

- **Author / Company:** vrajalInnovations
- **Support Email:** [vrajalinnovations@gmail.com](mailto:vrajalinnovations@gmail.com)
- **Website:** [vrajalInnovations.com](https://vrajalInnovations.com)
- **License:** Governed by the official marketplace license terms under which this item was acquired.
