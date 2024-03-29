const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Chaos Genius Documentation',
  tagline: 'The Open-Source Business Observability Platform',
  url: 'https://docs.chaosgenius.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'chaos-genius', // Usually your GitHub org/user name.
  projectName: 'chaos_genius', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Chaos Genius Documentation',
      logo: {
        alt: 'ChaosGenius Logo',
        src: 'img/logo-light.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          href: 'https://github.com/chaos-genius/chaos_genius',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Chaos Genius',
          items: [
            {
              label: 'Documentation',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/chaos-genius',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © 2021 GoodHealth Technologies, Inc. All rights reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/chaos-genius/chaos-genius-docs/tree/main',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
