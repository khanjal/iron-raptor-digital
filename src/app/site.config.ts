// =============================================================================
// SITE CONFIGURATION — Iron Raptor Digital
// Edit this file to customize your entire site. All content is driven from here.
// =============================================================================

import { IconName } from './shared/icon/icon.component';

export interface NavItem {
  label: string;
  path: string;        // Route, e.g. '/' or '/projects'
  fragment?: string;   // Section id on that route
}

export interface Link {
  label: string;
  url: string;
}

export interface Service {
  icon: IconName;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  kind: string;          // Short label, e.g. 'Web application'
  icon: IconName;
  image?: string;        // Path inside public/; shown instead of the icon
  summary: string;       // One line, used on the home page
  description: string[]; // Paragraphs, used on /projects
  features?: string[];
  tags: string[];
  links: Link[];
  featured?: boolean;    // Shown on the home page
}

export interface SocialLinks {
  email: string | null;
  linkedin: string | null;
  github: string | null;
}

export interface SiteConfig {
  business: {
    name: string;
    legalName: string;
    tagline: string;
    description: string;
    founded: number;
    location: string;
  };
  nav: NavItem[];
  social: SocialLinks;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: Link;
    secondaryCta: NavItem;
  };
  services: Service[];
  approach: Step[];
  stack: string[];
  about: {
    heading: string;
    paragraphs: string[];
    highlights: Highlight[];
  };
  cta: {
    heading: string;
    body: string;
    action: Link;
  };
  projects: Project[];
}

const LINKEDIN = 'https://www.linkedin.com/company/iron-raptor-digital';
const GITHUB   = 'https://github.com/khanjal';

export const SITE_CONFIG: SiteConfig = {

  // ── Business identity ──────────────────────────────────────────────────────
  business: {
    name:        'Iron Raptor Digital',
    legalName:   'Iron Raptor Digital, LLC',
    tagline:     'Custom software. Practical solutions. Built to last.',
    description: 'Custom software and web applications that solve real business problems.',
    founded:     2013,
    location:    'New Castle, PA',
  },

  // ── Navigation ─────────────────────────────────────────────────────────────
  nav: [
    { label: 'Services', path: '/', fragment: 'services' },
    { label: 'Work',     path: '/projects' },
    { label: 'Approach', path: '/', fragment: 'approach' },
    { label: 'About',    path: '/', fragment: 'about' },
  ],

  // ── Social / contact ───────────────────────────────────────────────────────
  social: {
    email:    null,
    linkedin: LINKEDIN,
    github:   GITHUB,
  },

  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Software development · Western Pennsylvania',
    headline:    'Custom software, built to last.',
    subheadline: 'We turn ideas, inefficient processes, and technical challenges into web applications, APIs, and infrastructure that are easy to maintain and ready to grow with your business.',
    primaryCta:   { label: 'Start a conversation', url: LINKEDIN },
    secondaryCta: { label: 'See our work', path: '/projects' },
  },

  // ── Services ───────────────────────────────────────────────────────────────
  services: [
    {
      icon:        'browser',
      title:       'Web Applications',
      description: 'Responsive, installable web apps built with Angular and TypeScript, from customer-facing tools to internal dashboards.',
    },
    {
      icon:        'server',
      title:       'APIs & Backend',
      description: 'C# and .NET services, REST APIs, and integrations with the platforms you already rely on, like Google Workspace.',
    },
    {
      icon:        'cloud',
      title:       'Infrastructure & Deployment',
      description: 'Serverless hosting on AWS (Lambda, API Gateway, S3, DynamoDB), CI/CD with GitHub Actions, and the on-site networks and servers that keep everything running.',
    },
    {
      icon:        'compass',
      title:       'Technical Consulting',
      description: 'A second set of eyes on architecture, tooling, and build-vs-buy decisions before you commit time and money.',
    },
  ],

  // ── Approach ───────────────────────────────────────────────────────────────
  approach: [
    {
      title:       'Understand the problem',
      description: 'We start with how your work actually gets done, and find where time, money, or data is being lost.',
    },
    {
      title:       'Build the right solution',
      description: 'Focused software that solves that problem, shipped in small steps so you see progress early and often.',
    },
    {
      title:       'Built to grow',
      description: 'Clean, tested, documented code on proven technology, so it stays maintainable as your business changes.',
    },
  ],

  stack: ['C#', '.NET Core', 'TypeScript', 'Angular', 'Tailwind CSS', 'AWS Lambda', 'API Gateway', 'S3', 'DynamoDB', 'CloudWatch', 'REST APIs', 'Google Sheets API', 'GitHub Actions', 'xUnit', 'Jasmine & Karma', 'Proxmox', 'UniFi'],

  // ── About ──────────────────────────────────────────────────────────────────
  about: {
    heading: 'Small by design.',
    paragraphs: [
      'Iron Raptor Digital has been building software since 2013, starting as an independent practice in New Castle, Pennsylvania and now operating as Iron Raptor Digital, LLC.',
      'You work directly with the engineer writing your code. There are no hand-offs or account managers, which keeps communication simple, decisions fast, and the result focused on what actually matters to your business.',
    ],
    highlights: [
      { value: '2013',        label: 'Building software since' },
      { value: 'Open source', label: 'Libraries on GitHub & NuGet' },
      { value: 'End to end',  label: 'From the UI to the server rack' },
    ],
  },

  // ── Closing call to action ─────────────────────────────────────────────────
  cta: {
    heading: 'Have a project in mind?',
    body:    'Tell us what you are trying to solve. We will give you an honest take on the best way to get there.',
    action:  { label: 'Message us on LinkedIn', url: LINKEDIN },
  },

  // ── Projects ───────────────────────────────────────────────────────────────
  projects: [
    {
      slug:     'raptor-gig',
      name:     'Raptor Gig',
      kind:     'Web application',
      icon:     'phone',
      featured: true,
      summary:  'A mobile-first app that helps gig workers log trips, shifts, and earnings, synced to their own Google Sheet.',
      description: [
        'Raptor Gig gives rideshare and delivery drivers a fast way to track their work from the road. It runs offline first, so nothing is lost on a bad connection, and syncs everything to a Google Sheet the driver owns.',
        'The Angular front end is an installable PWA backed by AWS Amplify and C# Lambda functions built on our RaptorSheets library.',
      ],
      features: [
        'Trip and shift logging with earnings, tips, and bonuses',
        'Daily, weekly, and monthly reports',
        'Offline-first storage with background sync',
        'Data stays in the user\'s own Google Sheet',
      ],
      tags:  ['Angular', 'PWA', 'AWS Amplify', 'C# Lambda', 'Google Sheets API'],
      links: [
        { label: 'Open the app', url: 'https://gig.raptorsheets.com' },
        { label: 'Source',       url: `${GITHUB}/gig-logger` },
      ],
    },
    {
      slug:     'raptorsheets',
      name:     'RaptorSheets',
      kind:     'Open-source .NET library',
      icon:     'table',
      featured: true,
      summary:  'A .NET library that takes the pain out of the Google Sheets API, published on NuGet.',
      description: [
        'RaptorSheets makes Google Sheets a practical data store for .NET applications. Typed models map straight to sheet columns, and the library handles headers, formatting, validation, and batch operations.',
        'It ships as RaptorSheets.Core for custom integrations and RaptorSheets.Gig, a ready-made schema that powers Raptor Gig.',
      ],
      features: [
        'Strongly typed entities mapped to sheet columns',
        'Header management, formatting, drop-downs, and cell protection',
        'Batch operations for large datasets',
        'Tested in CI with coverage and quality gates',
      ],
      tags:  ['C#', '.NET 8', 'NuGet', 'Google Sheets API'],
      links: [
        { label: 'Website', url: 'https://www.raptorsheets.com' },
        { label: 'NuGet',   url: 'https://www.nuget.org/packages/RaptorSheets.Core' },
        { label: 'Source',  url: `${GITHUB}/RaptorSheets` },
      ],
    },
    {
      slug:    'pgt-customer-portal',
      name:    'PGT Trucking Customer Portal',
      kind:    'Client project · Modernization',
      icon:    'refresh',
      summary: 'A portal where PGT Trucking\'s customers looked up their orders, rebuilt from VB.NET Web Forms on C# MVC.',
      description: [
        'The PGT Customer Portal gave PGT Trucking\'s customers a web view of their orders, backed by data from the company\'s AS/400 system.',
        'We brought the portal forward from VB.NET ASP.NET 2.0 Web Forms to C# on ASP.NET MVC, keeping the data and workflows customers relied on while making the codebase far easier to maintain.',
        'Along the way the portal gained inline editing, self-service user management, and a new location details section.',
      ],
      features: [
        'Stored procedures replaced with Entity Framework and a data access layer',
        'Web Forms grid views rebuilt as MVC web grids with inline edit and delete',
        'New ASP.NET Identity login, user creation, and password resets',
        'Forms for managing properties and location details',
      ],
      tags:  ['C#', 'ASP.NET MVC', 'Entity Framework', 'ASP.NET Identity', 'IBM AS/400'],
      links: [],
    },
    {
      slug:    'craft-helper',
      name:    'Craft Helper',
      kind:    'Alexa skill',
      icon:    'mic',
      image:   'images/craft-helper.jpg',
      summary: 'An unofficial Minecraft assistant for Amazon Alexa that answers crafting questions by voice.',
      description: [
        'Craft Helper lets Minecraft players ask Alexa how to make items, hands-free, without leaving the game to look up a recipe.',
        'Its content comes from an AWS Lambda pipeline that converts source files and Google Sheets into the data the skill serves, so it can be updated without redeploying.',
      ],
      tags:  ['Alexa Skills Kit', 'AWS Lambda', 'TypeScript'],
      links: [
        { label: 'Get it on Amazon', url: 'https://www.amazon.com/Craft-Helper-Unofficial-Minecraft-Assistant/dp/B073GHV3FP/' },
      ],
    },
  ],
};
