# Femi-Makinsun Praise - Full Stack Developer Portfolio

A modern, responsive web developer portfolio built with Next.js, React, Tailwind CSS, and shadcn/ui components.

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Runtime**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Typography**: Geist Font Family

## 📋 Project Structure

\`\`\`
developer-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage/main portfolio page
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── navigation.tsx      # Header navigation bar
│   ├── hero-section.tsx    # Hero section with introduction
│   ├── about-section.tsx   # About me section with stats
│   ├── projects-section.tsx # Featured projects showcase
│   ├── skills-section.tsx  # Skills with progress bars
│   └── contact-section.tsx # Contact form and information
├── public/
│   └── images/            # Static assets and images
├── lib/
│   └── utils.ts           # Utility functions (cn function for Tailwind)
└── package.json           # Project dependencies
\`\`\`

## 🎨 Design Features

- **Color Scheme**: Navy Blue (#003d82) as primary accent with gray and white neutrals
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Smooth Animations**: Tailwind CSS animations for engaging interactions
- **Modern Typography**: Geist font family for clean, professional appearance
- **Accessibility**: Semantic HTML and proper ARIA attributes

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ (v22.19.0 or higher recommended)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open in browser:**
   \`\`\`
   http://localhost:3000
   \`\`\`

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📝 Customization Guide

### Update Personal Information

1. **Hero Section** (`components/hero-section.tsx`):
   - Update name, title, and description
   - Change profile image path in `public/` folder

2. **About Section** (`components/about-section.tsx`):
   - Modify bio text
   - Update stats (years of experience, projects, etc.)

3. **Contact Information** (`components/contact-section.tsx`):
   - Update email address
   - Add your phone number
   - Update social media links

### Add Your Projects

Edit `components/projects-section.tsx`:

\`\`\`tsx
{
  title: "Your Project Name",
  description: "Project description here",
  technologies: ["Tech1", "Tech2", "Tech3"],
  demoUrl: "https://your-live-demo.com",
  year: 2024
}
\`\`\`

### Update Skills

Edit `components/skills-section.tsx`:

\`\`\`tsx
{
  name: "Your Skill",
  proficiency: 85 // 0-100 percentage
}
\`\`\`

### Change Color Scheme

Edit `app/globals.css` and update the CSS custom properties:

\`\`\`css
@theme inline {
  --color-accent: #003d82; /* Navy Blue */
  /* Update other colors as needed */
}
\`\`\`

## 📞 Contact Form Setup

The contact form in `components/contact-section.tsx` currently displays contact information. To make it fully functional with email sending:

1. **Option A**: Use a service like Formspree or EmailJS
2. **Option B**: Create a backend API route in `app/api/contact/route.ts`

Current email: `konapraise1501@gmail.com`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on every push

\`\`\`bash
npm run build
# Then push to GitHub and deploy via Vercel
\`\`\`

### Deploy to Other Platforms

**Netlify:**
\`\`\`bash
npm run build
# Deploy the `.next` folder
\`\`\`

**Self-Hosted:**
\`\`\`bash
npm run build
npm start
\`\`\`

## 📦 Dependencies Overview

- **@hookform/resolvers**: Form validation utilities
- **lucide-react**: Icon library
- **tailwindcss**: Utility-first CSS framework
- **zod**: TypeScript-first schema validation
- **shadcn/ui**: High-quality React components

## ✨ Features

- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Project showcase with live demos
- ✅ Skills section with proficiency indicators
- ✅ Contact information and social links
- ✅ Fast performance with Next.js optimization
- ✅ SEO optimized with metadata
- ✅ Accessible components (WCAG compliant)

## 🔧 Available Scripts

\`\`\`bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
\`\`\`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Femi-Makinsun Praise**
- Email: konapraise1501@gmail.com
- Phone: +234 8161378825
- Location: Lagos, Nigeria
- Instagram: @codenesx

## 🤝 Contributing

Feel free to fork and modify this portfolio for your own use!

---

Built with ❤️ using Next.js and modern web technologies.
