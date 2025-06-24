# Mugo Digital Solutions

Mugo Digital Solutions (MugoTech) is a modern web application built with React and Vite, designed to empower businesses with next-generation technology. The platform delivers innovative software, cloud, and cybersecurity services to help organizations scale, secure, and succeed in the digital era.

## Features

- **Modern UI/UX**: Responsive, mobile-friendly design using Tailwind CSS.
- **Service Offerings**: IT Consulting, Cloud Solutions, Custom Software Development, Cybersecurity, Digital Marketing, SEO, and UI/UX Design.
- **Client-Focused**: Showcases client stats, testimonials, and satisfaction metrics.
- **Easy Navigation**: Intuitive navigation with dropdowns for Services and Resources.
- **Contact & Quote**: Prominent call-to-action for getting a quote or contacting the team.
- **Trusted By**: Displays logos of leading companies as trusted partners.

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd mugo_digital_solutions
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as indicated in your terminal).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint the Code

```bash
npm run lint
```

## Project Structure

```
mugo_digital_solutions/
├── public/                # Static assets
│   ├── src/
│   │   ├── assets/            # Images and SVGs
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Page-level components (Home, About, Services, etc.)
│   │   └── main.jsx           # App entry point
│   └── index.html             # Main HTML file
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

## Customization

- **Services & Content**: Update the content in `src/components/` and `src/pages/` to reflect your actual services, team, and case studies.
- **Branding**: Replace logos and images in `public/images/` and `src/assets/`.
- **Navigation**: Edit `src/components/Header.jsx` for menu changes.

## License

This project is for demonstration and internal use. Please contact the author for licensing details if you wish to use it commercially.
