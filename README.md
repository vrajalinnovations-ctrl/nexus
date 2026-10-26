# NEXUS — Autonomous AI Cybersecurity & Neural Defense Mesh

![NEXUS Version](https://img.shields.io/badge/version-1.0.0-cyan.svg)
![React 19](https://img.shields.io/badge/React-19.x-61dafb.svg)
![Vite 8](https://img.shields.io/badge/Vite-8.x-646cff.svg)
![Tailwind CSS 4](https://img.shields.io/badge/TailwindCSS-v4.x-38bdf8.svg)
![Author](https://img.shields.io/badge/Author-vrajalInnovations-indigo.svg)

**NEXUS** is a cutting-edge, ultra-premium SaaS landing and web application template designed for next-generation AI cybersecurity, cloud defense, DevSecOps, and enterprise tech startups. Built with **React 19**, **Vite 8**, and **Tailwind CSS v4**, NEXUS combines high-converting layouts, unified frosted-glass specular aesthetics, hardware-accelerated Lenis smooth scrolling, and infinite dual-row marquee testimonials.

---

## Table of Contents

1. [Key Features](#key-features)
2. [Technology Stack](#technology-stack)
3. [Prerequisites](#prerequisites)
4. [Installation & Setup](#installation--setup)
5. [Available Scripts](#available-scripts)
6. [Project Structure](#project-structure)
7. [Customization Guide](#customization-guide)
8. [Included Pages & Routes](#included-pages--routes)
9. [Performance & SEO Optimizations](#performance--seo-optimizations)
10. [Browser Support](#browser-support)
11. [Credits & Sources](#credits--sources)
12. [Support & License](#support--license)

---

## Key Features

- **14 Production-Ready Routes:** Complete landing experience with dedicated marketing pages, full authentication suite, enterprise error screens, and legal compliance pages.
- **Unified Frosted Glass Aesthetic:** Built with a cohesive visual hierarchy featuring specular sheen overlays, crisp glowing ambient highlights, and zero-clutter typography.
- **Hardware-Accelerated Smooth Scroll:** Integrated Lenis smooth scroll engine wrapped in a dedicated, lightweight `ScrollManager` component.
- **Interactive Dual Marquee Testimonials:** Smooth, gapless infinite scrolling testimonial marquee with pause-on-hover interaction and enterprise verification badges.
- **Pure Tailwind CSS v4:** Zero arbitrary square-bracket classes; standard modern utility classes tailored for optimal readability and rapid maintenance.
- **Single Modern Font System:** Clean, crisp UI powered by Google Fonts' *Plus Jakarta Sans*.
- **Decoupled Data Architecture:** All navigation, pricing tiers, features, testimonials, and company logos are decoupled into clean JSON mock files in `src/mock/`.
- **Zero-Dead-Link Policy:** Every button, tab, and navigation link connects to an active functional component with interactive state feedback.
- **Offline Documentation Portal:** Bundled standalone cyber-dark documentation ready in `public/documentation/`.

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
- **Package Manager:** `npm` (v9.x or higher) or `pnpm` / `yarn`

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
   cd nexus
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Launch the Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to view the live site with Hot Module Replacement (HMR).

---

## Available Scripts

In the project root, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server on port 5173 with instant HMR. |
| `npm run build` | Compiles and optimizes the React application for production into `dist/`. |
| `npm run preview` | Locally serves the optimized production build from `dist/` for verification. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## Project Structure

```text
nexus/
├── public/
│   ├── documentation/            # Offline cyber-dark documentation portal
│   │   ├── css/app.css           # Standalone documentation styles
│   │   ├── js/main.js            # Live search & filter scripts
│   │   └── index.html            # Documentation master reader
│   ├── favicon.svg               # Vector brand favicon
│   └── logo.png                  # Master brand identity asset
├── src/
│   ├── assets/
│   │   ├── 2.png                 # Hero visual asset
│   │   └── logo.png              # Local logo asset
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
│   │       └── LogoLoop.jsx
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
│   │   └── AppRoutes.jsx         # Declarative route configuration
│   ├── App.jsx                   # Clean root shell
│   ├── index.css                 # Theme tokens & typography utilities
│   └── main.jsx                  # React entry point with BrowserRouter
├── eslint.config.js              # ESLint 9+ flat configuration
├── index.html                    # SEO meta tags, OpenGraph & font links
├── package.json                  # Dependencies & scripts
└── vite.config.js                # Vite build configuration
```

---

## Customization Guide

### 1. Changing Brand Name and Logo
- Open `src/mock/navigation.json` and edit the `"brand"` object:
  ```json
  "brand": {
    "name": "NEXUS",
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
- Ambient lighting colors can be customized by editing the Tailwind background glow classes (e.g. `bg-cyan-600/15`, `bg-indigo-600/25`) in `src/components/sections/` and `src/auth/`.

---

## Included Pages & Routes

| Route | File Location | Purpose |
| :--- | :--- | :--- |
| `/` | `src/pages/HomePage.jsx` | Main landing with Hero, Features, Testimonial Marquee, Pricing, Footer |
| `/about` | `src/pages/AboutPage.jsx` | Mission, core values, leadership team, and contact form |
| `/features` | `src/pages/FeaturesPage.jsx` | Technical pillars, bento interactive grid, and attestation specs |
| `/pricing` | `src/pages/PricingPage.jsx` | Tiers, annual/monthly toggle, in-depth feature comparison table, FAQs |
| `/contact` | `src/pages/ContactPage.jsx` | Direct channels, worldwide hub facilities, interactive inquiry dispatch |
| `/privacy` | `src/pages/PrivacyPage.jsx` | Zero-knowledge telemetry, GDPR/CCPA, encryption & DPO contact |
| `/terms` | `src/pages/TermsPage.jsx` | Enterprise SLA, node licensing, acceptable use, liability terms |
| `/signin` | `src/auth/SignInPage.jsx` | Minimal frosted glass sign-in card with enterprise SSO options |
| `/signup` | `src/auth/SignUpPage.jsx` | Minimal frosted glass registration with terms consent |
| `/forgot-password`| `src/auth/ForgotPasswordPage.jsx` | Recovery dispatch interface with instant validation |
| `/verify` | `src/auth/VerifyPage.jsx` | 6-Digit OTP security code entry with clipboard paste & countdown timer |
| `/confirm-password`| `src/auth/ResetPasswordPage.jsx` | New password and confirmation screen with security checks |
| `/reset-password` | `src/auth/ResetPasswordPage.jsx` | Secondary alias for credential reset flow |
| `/404` | `src/pages/NotFoundPage.jsx` | 404 Node Not Found with simulated kernel telemetry diagnostics |
| `/500` | `src/pages/ServerErrorPage.jsx` | 500 Mesh Anomaly screen with animated auto-repair & retry flow |

---

## Performance & SEO Optimizations

- **Declarative Client-Side Routing:** Fast, flicker-free transitions powered by React Router v7.
- **Modular Hardware Smooth Scroll:** Powered by Lenis for fluid desktop and mobile trackpad interaction.
- **Zero Heavy Render Blockers:** Clean, decoupled UI elements avoiding unnecessary WebGL frame loops when idle.
- **Search Engine Optimization:** `index.html` includes full OpenGraph cards, Twitter preview metadata, meta description, and mobile viewport directives.

---

## Browser Support

NEXUS is tested and compatible with modern evergreen browsers:

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
- **License:** Commercial License. Redistribution or reselling of uncompiled source files is strictly prohibited.
