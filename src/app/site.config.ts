// =============================================================================
// SITE CONFIGURATION — Iron Raptor Digital
// Edit this file to customize your entire site. All content is driven from here.
// =============================================================================

export interface NavItem {
  label: string;
  fragment: string;
  path?: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  description: string;
  longDescription?: string[];
  links?: { label: string; url: string }[];
}

export interface Service {
  icon: string;     // Any emoji, or swap for an SVG path in the template
  title: string;
  description: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string | null;   // e.g. 'Owner, Acme Co.' — set null to omit
  quote: string;
  rating: number;        // 1–5 stars
  avatarUrl: string | null; // URL or path inside public/, null for initials fallback
}

export interface SocialLinks {
  email: string | null;
  phone: string | null;
  linkedin: string | null;   // Full URL  e.g. 'https://linkedin.com/company/acme'
  github: string | null;     // Full URL  e.g. 'https://github.com/acme'
  instagram: string | null;  // Full URL  e.g. 'https://instagram.com/acme'
  facebook: string | null;   // Full URL  e.g. 'https://facebook.com/acme'
}

export interface SiteConfig {
  business: {
    name: string;
    tagline: string;
    year: number;
  };
  nav: NavItem[];
  social: SocialLinks;
  hero: {
    headline: string;
    subheadline: string;
    ctaLabel: string;
    ctaFragment: string;
    secondaryCtaLabel: string | null;
    secondaryCtaFragment: string | null;
  };
  services: Service[];
  about: {
    heading: string;
    paragraphs: string[];
    highlights: Highlight[];
    imagePath: string | null; // Path inside public/, e.g. 'about.jpg'
  };
  testimonials: {
    heading: string;
    items: Testimonial[];
    /**
     * Link to your Google Business Profile reviews page.
     * e.g. 'https://g.page/r/YOUR_PLACE_ID/review'
     * Set to null to hide the "See all reviews" button.
     */
    googleReviewsUrl: string | null;
  };
  contact: {
    heading: string;
    subheading: string;
    /**
     * Formspree form ID for serverless email delivery.
     * 1. Sign up free at https://formspree.io
     * 2. Create a new form and copy the ID (e.g. 'xpwzdzzl')
     * 3. Paste it here.
     * If null, clicking Submit opens the visitor's mail client instead.
     */
    formspreeId: string | null;
  };
}

export const SITE_CONFIG: SiteConfig = {

  // ── Business identity ──────────────────────────────────────────────────────
  business: {
    name:    'Iron Raptor Digital',
    tagline: 'Building things with the web.',
    year:    2017,
  },

  // ── Navigation (fragment maps to a section id on the home page) ───────────
  nav: [
    { label: 'Projects', fragment: 'services', path: '/projects' },
    { label: 'About',    fragment: 'about' },
  ],

  // ── Social / contact ───────────────────────────────────────────────────────
  social: {
    email:     null,
    phone:     null,
    linkedin:  'https://www.linkedin.com/company/iron-raptor-digital',
    github:    null,
    instagram: null,
    facebook:  null,
  },

  // ── Hero section ───────────────────────────────────────────────────────────
  hero: {
    headline:             'Iron Raptor Digital',
    subheadline:          'A small team building web applications, Alexa skills, and digital solutions.',
    ctaLabel:             'See Our Projects',
    ctaFragment:          'services',
    secondaryCtaLabel:    'About Us',
    secondaryCtaFragment: 'about',
  },

  // ── Projects section ───────────────────────────────────────────────────────
  services: [
    {
      icon:        '🗣️',
      title:       'Alexa Skills',
      description: 'Published skills on Amazon Alexa including Adventure Craft, Craft Helper, Knowledge Quest, and Minecraft Server List.',
    },
    {
      icon:        '🌐',
      title:       'Web Development',
      description: 'From customer data portals (PGT Customer Portal) to server management tools (Raptor Panel) — we build apps that work.',
    },
    {
      icon:        '🖥️',
      title:       'Systems & Networks',
      description: 'Building, upgrading, and maintaining computer systems and networks for home and small business environments.',
    },
  ],

  // ── About section ──────────────────────────────────────────────────────────
  about: {
    heading: 'About Iron Raptor Digital',
    paragraphs: [
      'Iron Raptor Digital is a small team of developers that work with the latest web technologies. We also work with building, upgrading, and maintaining computer systems and networks.',
      'Got an idea? Let\'s build it. We\'ve shipped Alexa skills, web applications, and tools used by real people.',
    ],
    highlights: [
      { value: '4+', label: 'Alexa Skills'  },
      { value: '2+', label: 'Web Projects'  },
      { value: '∞',  label: 'Lines of Code' },
    ],
    imagePath: null,
  },

  // ── Testimonials — empty array hides the section ───────────────────────────
  testimonials: {
    heading:          'What People Say',
    googleReviewsUrl: null,
    items:            [],
  },

  // Rich projects metadata (used on /projects list and detail pages)
  projects: [
    {
      slug: 'raptor-panel',
      title: 'Raptor Panel',
      description: 'Server management and control panel used for our game servers.',
      longDescription: [
        'Raptor Panel is an internal tool used to manage server instances, perform backups, and view uptime metrics.',
        'It includes user roles, scheduled tasks, and integrations for remote console access.',
      ],
      links: [
        { label: 'Repo / Docs', url: '#' }
      ],
    },
    {
      slug: 'pgt-customer-portal',
      title: 'PGT Customer Portal',
      description: 'A customer portal for PGT that exposes account data and reports.',
      longDescription: [
        'PGT Customer Portal is a web application that provides account management, reporting dashboards, and file uploads for customers.',
      ],
      links: [],
    },
  ],

  // ── Contact section ────────────────────────────────────────────────────────
  contact: {
    heading:    'Get in Touch',
    subheading: 'Interested in working together or have a project in mind? Connect with us on LinkedIn.',
    formspreeId: null,
  },
};
