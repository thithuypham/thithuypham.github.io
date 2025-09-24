// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Thuy Pham's Page",
  tagline: 'Powered by Catitude & Caffeine',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://thithuypham.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'thithuypham', // Usually your GitHub org/user name.
  projectName: 'thithuypham.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable docs for portfolio site
        blog: {
          path: 'docs/articles',
          routeBasePath: 'blog',
          showReadingTime: true,
          editUrl: 'https://github.com/thithuypham/thithuypham.github.io/tree/main/',
          blogTitle: 'Research Docs',
          blogDescription: 'Documentation, insights, and updates on academic research',
          postsPerPage: 5,
          blogSidebarTitle: 'Recent docs',
          blogSidebarCount: 10,
          exclude: ['**/DEP_*', '**/ai_context/**'],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/search/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.svg',
          navbar: {
        title: 'thuy-pham',
        logo: {
          // alt: 'Thuy Pham Academic Portfolio',
          src: 'img/logo.png',
          width: 48,
        },
        hideOnScroll: false,
        style: 'primary',
        items: [
          {
            to: '/about',
            position: 'left',
            label: 'About',
            'aria-label': 'About Thuy Pham - Academic background and research interests',
          },
          {
            to: '/publications',
            position: 'left',
            label: 'Publications',
            'aria-label': 'Academic publications and research papers',
          },
          // {
          //   to: '/projects',
          //   position: 'left',
          //   label: 'Projects',
          //   'aria-label': 'Research projects and academic work',
          // },
          {
            to: '/blog',
            label: 'Docs',
            position: 'left',
            'aria-label': 'Research documentation and academic insights',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            items: [
              {
                html: `
                  <div style="text-align: center; margin: 2rem 0;">
                    <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                      <a href="mailto:your.email@university.edu" style="color: var(--ifm-color-emphasis-600); transition: color 0.2s ease;" 
                         onmouseover="this.style.color='var(--ifm-color-primary)'" 
                         onmouseout="this.style.color='var(--ifm-color-emphasis-600)'"
                         aria-label="Email">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </a>
                      <a href="https://orcid.org/0009-0005-1258-5952" style="color: var(--ifm-color-emphasis-600); transition: color 0.2s ease;" 
                         onmouseover="this.style.color='#A6CE39'" 
                         onmouseout="this.style.color='var(--ifm-color-emphasis-600)'"
                         aria-label="ORCID">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.588-1.444 3.588-3.722 0-2.016-1.091-3.722-3.569-3.722h-2.316z"/>
                        </svg>
                      </a>
                      <a href="https://scholar.google.com/citations?user=QHi2OngAAAAJ&hl=en" style="color: var(--ifm-color-emphasis-600); transition: color 0.2s ease;" 
                         onmouseover="this.style.color='#008B8B'" 
                         onmouseout="this.style.color='var(--ifm-color-emphasis-600)'"
                         aria-label="Google Scholar">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                        </svg>
                      </a>
                      <a href="https://github.com/thithuypham" style="color: var(--ifm-color-emphasis-600); transition: color 0.2s ease;" 
                         onmouseover="this.style.color='#333'" 
                         onmouseout="this.style.color='var(--ifm-color-emphasis-600)'"
                         aria-label="GitHub">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/thuy-pham-pt/" style="color: var(--ifm-color-emphasis-600); transition: color 0.2s ease;" 
                         onmouseover="this.style.color='#0077b5'" 
                         onmouseout="this.style.color='var(--ifm-color-emphasis-600)'"
                         aria-label="LinkedIn">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} thuy-pham`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // Comprehensive SEO metadata
      metadata: [
        // Primary meta tags
        {name: 'description', content: 'Academic portfolio of Thuy Pham - M.Sc. student in Multimedia Engineering specializing in model-based deep learning, image processing, and computer vision research.'},
        {name: 'keywords', content: 'academic portfolio, research, multimedia engineering, computer vision, image processing, machine learning, deep learning, model-based learning, data analytics & engineering, M.Sc. student'},
        {name: 'author', content: 'Thuy Pham'},
        {name: 'robots', content: 'index, follow'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
        
        // Open Graph / Facebook
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: "Thuy Pham's Academic Portfolio - Research in Machine Learning & Data Science"},
        {property: 'og:description', content: 'M.Sc. student specializing in multimedia engineering, model-based deep learning, and computer vision. Explore my research, publications, and academic projects.'},
        {property: 'og:url', content: 'https://thithuypham.github.io'},
        {property: 'og:site_name', content: "Thuy Pham's Academic Portfolio"},
        {property: 'og:image', content: 'https://thithuypham.github.io/img/social-card.svg'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'og:image:alt', content: 'Thuy Pham - Academic Researcher in Machine Learning'},
        {property: 'og:locale', content: 'en_US'},
        
        // Twitter Card
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: "Thuy Pham's Academic Portfolio - Research in Machine Learning"},
        {name: 'twitter:description', content: 'M.Sc. student specializing in multimedia engineering and computer vision. Explore my research and publications.'},
        {name: 'twitter:image', content: 'https://thithuypham.github.io/img/social-card.svg'},
        {name: 'twitter:image:alt', content: 'Thuy Pham - Academic Portfolio'},
        {name: 'twitter:creator', content: '@thuy_pham_ml'},
        {name: 'twitter:site', content: '@thuy_pham_ml'},
        
        // Academic-specific metadata
        {name: 'citation_author', content: 'Thuy Pham'},
        {name: 'citation_author_institution', content: 'University of Excellence'},
        {name: 'DC.Creator', content: 'Thuy Pham'},
        {name: 'DC.Subject', content: 'Machine Learning; Federated Learning; Data Science; Computer Science'},
        {name: 'DC.Type', content: 'Academic Portfolio'},
        {name: 'DC.Format', content: 'text/html'},
        {name: 'DC.Language', content: 'en'},
        
        // Additional SEO enhancements
        {name: 'theme-color', content: '#1a365d'},
        {name: 'msapplication-TileColor', content: '#1a365d'},
        {name: 'apple-mobile-web-app-capable', content: 'yes'},
        {name: 'apple-mobile-web-app-status-bar-style', content: 'default'},
        {name: 'apple-mobile-web-app-title', content: 'Thuy Pham Portfolio'},
      ],
    }),

  plugins: [
    // SEO and Analytics plugins can be added here
    // Example: Google Analytics, Google Tag Manager, etc.
  ],
  
  // Static directories for additional files
  staticDirectories: ['static'],
  
  // Additional SEO configurations
  headTags: [
    // JSON-LD structured data for academic profile
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Thuy Pham',
        jobTitle: 'M.Sc. Student',
        affiliation: {
          '@type': 'Organization',
          name: 'University of Excellence',
          sameAs: 'https://university.edu',
        },
        alumniOf: {
          '@type': 'Organization',
          name: 'Institute of Technology',
        },
        knowsAbout: [
          'Machine Learning',
          'Federated Learning',
          'Data Science',
          'Computer Science',
          'Artificial Intelligence',
          'Privacy-Preserving Machine Learning',
        ],
        sameAs: [
          'https://github.com/thithuypham',
          'https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID',
          'https://orcid.org/0000-0000-0000-0000',
          'https://linkedin.com/in/thuy-pham-research',
        ],
        url: 'https://thithuypham.github.io',
        email: 'thuy.pham@university.edu',
        image: '/img/profile-placeholder.jpg',
        description: 'M.Sc. student specializing in multimedia engineering, model-based deep learning, and computer vision research with publications in top-tier venues.',
      }),
    },
    // Preconnect to external domains for performance
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    // Canonical URL
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: 'https://thithuypham.github.io',
      },
    },
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config; 