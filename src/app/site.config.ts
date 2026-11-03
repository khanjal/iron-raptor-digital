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

export interface Practice {
  icon: IconName;
  title: string;
  body: string;
  points: string[];
}

export interface TestLayer {
  name: string;
  detail: string;
}

export interface ProjectTesting {
  project: string;
  layers: TestLayer[];
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
  engineering: {
    heading: string;
    lead: string;
    stats: Highlight[];
    statsNote: string;
    practices: Practice[];
    visibility: {
      heading: string;
      body: string;
      options: { title: string; points: string[] }[];
    };
    testing: ProjectTesting[];
    skills: { name: string; purpose: string }[];
  };
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
    { label: 'Engineering', path: '/', fragment: 'engineering' },
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

  stack: ['C#', '.NET Core', 'TypeScript', 'Java', 'Angular', 'Tailwind CSS', 'AWS Lambda', 'API Gateway', 'S3', 'DynamoDB', 'CloudWatch', 'REST APIs', 'Google Sheets API', 'GitHub Actions', 'xUnit', 'Jasmine & Karma', 'Proxmox', 'UniFi'],

  // ── Engineering practices ──────────────────────────────────────────────────
  // Numbers are from GitHub and SonarCloud for Wormhole X-Treme, RaptorSheets,
  // and Raptor Gig as of November 2026. Update them now and then.
  engineering: {
    heading: 'How we build',
    lead: 'Plan in issues, land every change through a reviewed pull request, test in layers, and use AI where it makes the work better, with a person accountable for every merge.',
    stats: [
      { value: '1,050+', label: 'Pull requests merged' },
      { value: '6,800+', label: 'Automated tests' },
      { value: '~90%',   label: 'Test coverage' },
      { value: '70+',    label: 'Releases shipped' },
    ],
    statsNote: 'Across Wormhole X-Treme, RaptorSheets, and Raptor Gig. Coverage measured by SonarCloud.',
    practices: [
      {
        icon:  'clipboard',
        title: 'Planned in issues',
        body:  'Work starts as a GitHub issue, not a hallway conversation, so every change has a reason you can find later.',
        points: [
          'Bug and feature templates capture what is needed up front',
          'Labels, milestones per release, and project boards',
          'On larger projects, new reports get an AI triage pass that finds the likely code and the open questions',
        ],
      },
      {
        icon:  'pull',
        title: 'Shipped through pull requests',
        body:  'Nothing goes straight to main. Each change is a pull request with a checklist that must be complete before it merges.',
        points: [
          'Two reviews: one before the PR opens, one of the finished PR',
          'No new code-quality issues or compiler warnings',
          'Tied to the milestone and release notes it ships in',
        ],
      },
      {
        icon:  'layers',
        title: 'Tested in layers',
        body:  'Fast unit tests catch most problems. Slower layers catch what unit tests cannot see.',
        points: [
          'Checks run on every change, before anything merges',
          'Coverage and code-quality tracking alongside the tests',
          'Mutation checks prove a test fails when the code it guards breaks',
        ],
      },
      {
        icon:  'sparkles',
        title: 'AI-assisted, human-owned',
        body:  'We use Claude Code and GitHub Copilot, guided by project skills that write down how each codebase works.',
        points: [
          'Routine changes go to a faster model, judgment calls to a stronger one',
          'Code is never reviewed by the model that wrote it',
          'APIs are checked against real libraries, not answered from memory',
        ],
      },
    ],
    visibility: {
      heading: 'Open source or private, your call',
      body: 'Client projects are private unless you choose otherwise. The process is the same either way; only where it runs changes.',
      options: [
        {
          title: 'Private',
          points: [
            'Code, issues, and pull requests visible only to your team',
            'Tests and quality checks run on our own machines',
            'The default for client work',
          ],
        },
        {
          title: 'Open source',
          points: [
            'Public repository, issues, and release notes',
            'Checks run in public CI with SonarCloud and Codecov',
            'How we run our own libraries and plugins',
          ],
        },
      ],
    },
    // Each project gets the test layers that fit what it is; not every project has all of them.
    testing: [
      {
        project: 'Raptor Gig',
        layers: [
          { name: 'App unit tests', detail: 'Jasmine and Karma for the Angular front end' },
          { name: 'API tests',      detail: 'xUnit and Moq for the .NET Lambda backend' },
          { name: 'Lint',           detail: 'Front end and backend, on every change' },
        ],
      },
      {
        project: 'RaptorSheets',
        layers: [
          { name: 'Unit tests',  detail: 'xUnit across the library and its packages' },
          { name: 'Integration', detail: 'Reads and writes against live Google Sheets' },
          { name: 'Load',        detail: 'Scheduled bulk-write runs to catch rate limits and slowdowns' },
        ],
      },
      {
        project: 'Wormhole X-Treme',
        layers: [
          { name: 'Unit tests',      detail: 'JUnit 5 and Mockito' },
          { name: 'Compatibility',   detail: 'One build tested across Spigot, Paper, and Purpur versions' },
          { name: 'Boot',            detail: 'Real servers start with the plugin and its integrations loaded' },
          { name: 'Player journeys', detail: 'A scripted player travels through gates on a live server' },
        ],
      },
    ],
    skills: [
      { name: 'pr-review',            purpose: 'Two independent model reviews before merge' },
      { name: 'ship-it',              purpose: 'Full test run, changelog, and release steps' },
      { name: 'route-implementation', purpose: 'Matches each change to the right model' },
      { name: 'mutation-check',       purpose: 'Breaks code on purpose to prove tests catch it' },
      { name: 'sonar-check',          purpose: 'Runs quality rules locally before pushing' },
      { name: 'verify-bukkit-api',    purpose: 'Confirms APIs against the actual library jars' },
      { name: 'cross-version-compat', purpose: 'Reviews changes for version-specific breakage' },
      { name: 'triage-sweep',         purpose: 'First-pass investigation of new issues' },
    ],
  },

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
      image:    'images/raptor-gig.png',
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
      image:    'images/raptorsheets.png',
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
      slug:    'wormhole-x-treme',
      name:    'Wormhole X-Treme',
      kind:    'Open-source Minecraft plugin',
      icon:    'refresh',
      image:   'images/wormhole-x-treme.svg',
      summary: 'A modern revival of a classic Stargate-style travel plugin for Minecraft servers.',
      description: [
        'Wormhole X-Treme was a popular Bukkit plugin that went quiet years ago. Our fork brings it to modern servers, supporting Bukkit, Spigot, and Paper on Minecraft 1.20 through 26.3.',
        'Beyond the original Stargates, it adds transport rings, beaming, and quantum mirrors, and it moves minecarts, boats, mounts, projectiles, and mobs through gates along with players.',
      ],
      features: [
        'Four travel systems: Stargates, transport rings, beaming, and quantum mirrors',
        'Plain YAML storage, with import from the SQLite databases of older forks',
        'Tested in CI with SonarCloud coverage and quality gates',
        'Published on GitHub, SpigotMC, Modrinth, Hangar, and CurseForge',
      ],
      tags:  ['Java', 'Bukkit / Spigot / Paper', 'JUnit', 'GitHub Actions'],
      links: [
        { label: 'Modrinth',  url: 'https://modrinth.com/plugin/wormhole-x-treme' },
        { label: 'SpigotMC',  url: 'https://www.spigotmc.org/resources/wormhole-x-treme.138936/' },
        { label: 'Source',    url: `${GITHUB}/Wormhole-X-Treme` },
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
