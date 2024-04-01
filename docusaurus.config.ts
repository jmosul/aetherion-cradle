import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Aetherion Cradle',
    tagline: 'Eons ago the world exploded. And we were saved ',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://jmosul.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/aetherion-cradle',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'jmosul', // Usually your GitHub org/user name.
    projectName: 'aetherion-cradle', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'moons',
                path: 'moons',
                routeBasePath: 'moons',
                sidebarPath: './sidebars.ts',
            },
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'The Aetherion Cradle',
            logo: {
                alt: 'Cradle',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'wikiSidebar',
                    position: 'left',
                    label: 'The Cradle',
                },
                 {to: '/moons/intro', label: 'The Book of Moons', position: 'left'},
                {
                    href: 'https://github.com/jmosul/athenion-cradle',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Jotun',
                    items: [
                        {
                            label: 'Welcome',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        // {
                        //   label: 'Blog',
                        //   to: '/blog',
                        // },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/jmosul/aetherion-cradle',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
