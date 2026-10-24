// Everything that changes lives here, so updating the CV never means opening a
// component.

export const profile = {
  name: 'Nikolai Melnichenko',
  role: 'Front-End Developer',
  location: { city: 'Lisbon', country: 'Portugal', countryCode: 'PT' },

  // \u2011 is a non-breaking hyphen, so no line ends on "front-".
  headline: 'Front\u2011end developer based in Lisbon',
  subhead: 'I build React and TypeScript front\u2011ends that stay easy to change',
  // Meta description and link previews, where the subhead would get cut off.
  tagline: 'React, Next.js and TypeScript front-ends that stay easy to change.',

  focus: [
    {
      title: 'Widget platform',
      icon: 'blocks',
      text: 'Core team since the start of development. A loader driven by remote configs runs each plugin in isolation, and I write the solution designs for its plugins.',
    },
    {
      title: 'Shared UI',
      icon: 'layers',
      text: 'I own the shared component library and the SCSS/BEM architecture behind it, which every app on the platform uses.',
    },
    {
      title: 'Testing',
      icon: 'check',
      text: 'From MSW-backed integration tests to Playwright acceptance tests against staging, on a codebase that started with almost none.',
    },
    {
      title: 'Releases',
      icon: 'branch',
      text: 'Release Captain for my stream, shipping one to three production releases a week. I wrote the branching and code-style rules it follows.',
    },
  ],

  links: {
    email: 'nikolai.melnichenko.fe@gmail.com',
    github: 'https://github.com/nikolaimelni',
    linkedin: 'https://www.linkedin.com/in/nikolai-melnichenko/',
    telegram: 'https://t.me/Nikolaimelni',
    whatsapp: 'https://wa.me/351912078598',
    cv: '/Nikolai_Melnichenko_CV.pdf',
    source: 'https://github.com/nikolaimelni/NikolaiDev',
    form: 'https://formspree.io/f/xyyrkzpq',
  },

  experience: [
    {
      from: 'Jun 2024',
      to: 'Present',
      title: 'Front-End Developer',
      company: 'BrainRocket',
      place: 'Lisbon, Portugal',
      kind: 'On-site',
      earlier: false,
      points: [
        'Develop a new plugin-based widget platform on the core team since the start of development. A host site installs one integration package, and a loader driven by remote configs decides which plugin bundles to load and runs each plugin in isolation.',
        'Write solution designs for plugins on the widget platform and take them through review into implementation. Each design defines the core state model and the REST and WebSocket contracts with the back end.',
        'Built and launched six brand front-ends from scratch under different regulatory regimes, and maintained 10+ live brands. Shipped country-specific builds into seven regulated markets across North America, Europe, Latin America and Africa, including New Jersey, Sweden and Denmark.',
        'Act as Release Captain for my stream, shipping one to three production releases a week and 100+ over two years. Wrote the release, branching and code-style conventions the stream works to. Review merge requests and mentored four developers through onboarding.',
        'Own the shared UI component library and the SCSS/BEM style architecture behind it, used across all applications on the platform.',
        'Drove automated test coverage on a codebase that started with almost none, using Jest/Vitest, React Testing Library and MSW. On the widget platform, write Vitest browser-mode tests in real Chromium and Playwright acceptance tests against sandboxes on local and staging environments.',
        'Spent over a year on the Angular side of the platform with RxJS and NgRx, building shared libraries across the payments, user account and content domains. Integrated a third-party payment gateway widget into the product cashier, from runtime script loading to its mount and teardown lifecycle.',
      ],
    },
    {
      from: 'Jul 2025',
      to: 'Dec 2025',
      title: 'Front-End Mentor',
      company: 'BRO Academy',
      place: 'Remote',
      kind: 'Part-time',
      earlier: false,
      points: [
        'Mentored students of a front-end development course alongside my main role. Reviewed their homework with written feedback and supported them with questions between classes.',
      ],
    },
    {
      from: 'Nov 2023',
      to: 'Jun 2024',
      title: 'Front-End Developer',
      company: 'REnumber Lab',
      place: 'Remote',
      kind: 'Consulting',
      earlier: false,
      points: [
        'Led a complete redesign of a marketplace platform with React, Next.js and TypeScript, from front-end architecture through delivery.',
        'Developed the admin panel and the client-facing front end for a business SMS messaging product.',
        'Added a new SMS operator to a business messaging product end to end, from the NestJS back end to the React front end.',
        'Integrated front-end features with Node.js/Express.js and .NET back ends, refining REST API contracts together with the back-end teams.',
      ],
    },
    {
      from: 'Oct 2022',
      to: 'Nov 2023',
      title: 'Front-End Developer',
      company: 'NumFin Global',
      place: 'Remote',
      kind: 'Full-time',
      earlier: false,
      points: [
        'Built and optimized React, TypeScript and Next.js pages, with MobX stores per page hydrated from server-side rendering.',
        'Localized a server-rendered Next.js product into 27 languages with next-i18next and react-intl, with locale-aware routing and translations loaded per page on the server.',
        'Built the technical SEO layer: schema.org structured data for company, financials and FAQ pages, Open Graph and Twitter cards, canonical and hreflang tags. Served dynamic sitemaps split into chunks across thousands of stock pages.',
        'Integrated Stripe Elements card payments for monthly and annual subscriptions, and built the paywall that blurs premium table data for guests and non-subscribers.',
        'Built and deployed back-end services in Go on MySQL: new REST endpoints, server-side Stripe integration and Google sign-in.',
      ],
    },
    {
      from: 'Apr 2020',
      to: 'Sep 2022',
      title: 'Front-End Developer',
      company: 'Citymobil',
      place: 'Remote',
      kind: 'Full-time',
      earlier: false,
      points: [
        'Developed React and TypeScript components with Redux for corporate client dashboards, built as single-page applications, covering trip limits, employee access controls and invoice exports, from Figma layouts.',
        'Converted legacy JavaScript components in internal tools to TypeScript to reduce runtime type errors.',
        'Covered core form interactions and UI components with unit tests in Jest and React Testing Library.',
      ],
    },
    {
      from: 'Nov 2019',
      to: 'Apr 2020',
      title: 'Web Developer',
      company: 'Self-employed',
      place: 'Remote',
      kind: 'Part-time',
      earlier: false,
      points: [
        'Developed landing pages, web interfaces and interactive components for small business clients using JavaScript, HTML5, CSS3/SCSS and React.',
      ],
    },
    {
      from: '2016',
      to: '2020',
      title: 'Petroleum Engineer',
      company: 'Oil and gas companies',
      place: 'Russia',
      kind: 'Before the switch',
      earlier: true,
      points: [
        'Delivered the full design, construction and operation cycle for fuel depot sites, coordinating contractors, budgets and regulatory approvals.',
      ],
    },
  ],

  skills: [
    {
      label: 'Every day',
      items: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'SCSS',
        'TanStack Query',
        'Zod',
        'Vite',
        'Vitest',
        'React Testing Library',
        'MSW',
        'Playwright',
        'Git',
      ],
    },
    {
      label: 'Also used in production',
      items: [
        'Next.js',
        'Angular',
        'RxJS',
        'Redux Toolkit',
        'MobX',
        'REST API',
        'WebSocket',
        'Tailwind CSS',
        'CSS Modules',
        'Design systems',
        'Responsive layout',
        'Accessibility',
        'Jest',
        'Storybook',
        'Webpack',
        'CI/CD',
        'GitLab CI',
        'GitHub Actions',
        'Docker',
        'Node.js',
        'NestJS',
        'Express',
        'Go',
        'MongoDB',
        'MySQL',
        'PostgreSQL',
      ],
    },
    {
      label: 'From personal projects',
      items: ['Astro', 'Cypress'],
    },
    {
      label: 'AI tooling',
      items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Anthropic Claude API'],
    },
  ],

  education: [
    {
      from: '2016',
      to: '2019',
      school: 'Tyumen State Oil and Gas University',
      place: 'Tyumen, Russia',
      degree: "Master's in Engineering",
      field: 'Oil and gas industry',
      logo: 'tiu',
    },
    {
      from: '2012',
      to: '2016',
      school: 'National Mineral Resources University',
      place: 'Saint Petersburg, Russia',
      degree: "Bachelor's in Engineering",
      field: 'Oil and gas industry',
      logo: 'mining',
    },
  ],

  courses: [
    {
      year: '2022',
      title: 'Python Programming Fundamentals and Databases for Python Developers',
      school: 'Netology',
      note: 'Studied in my own time alongside my main role, to understand the back end of the products I build. Practised on a few small freelance projects in Python and Django, including e-commerce features and PostgreSQL database design.',
    },
  ],

  languages: [
    { name: 'English', level: 'C1, professional working' },
    { name: 'Russian', level: 'Native' },
    { name: 'Portuguese', level: 'A2, learning' },
  ],
} as const;
