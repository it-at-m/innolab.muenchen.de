import { defineConfig } from "vitepress";

export default defineConfig({
  title: "it@M InnoLab",
  description: "Website des InnoLab München",
  base: "/",
  lang: "de-DE",

  // Repo-root files that are not part of the website
  srcExclude: ["README.md", "CODE_OF_CONDUCT.md", "LICENSE", "LICENSE.md"],

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/images/logo.svg",
        media: "(prefers-color-scheme: light)",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/images/logo_white.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  ],

  themeConfig: {
    logo: {
      light: "/images/logo.svg",
      dark: "/images/logo_white.svg",
    },

    nav: [
      { text: "Startseite", link: "/" },
      { text: "Blog", link: "/blog/" },
      { text: "Projekte", link: "/projekte/" },
      { text: "Hackathons", link: "/hackathons/" },
      { text: "Team", link: "/team/" },
    ],

    sidebar: {
      "/projekte/": [
        {
          text: "Projekte",
          items: [
            { text: "Übersicht", link: "/projekte/" },
            { text: "Beispielprojekt", link: "/projekte/beispielprojekt" },
          ],
        },
      ],
      "/blog/": [
        {
          text: "Blog",
          items: [
            { text: "Übersicht", link: "/blog/" },
            {
              text: "Beispielbeitrag",
              link: "/blog/2026-01-01-beispielbeitrag",
            },
          ],
        },
      ],
      "/hackathons/": [
        {
          text: "Hackathons",
          items: [
            { text: "Übersicht", link: "/hackathons/" },
            {
              text: "Beispiel-Hackathon",
              link: "/hackathons/beispiel-hackathon",
            },
            {
              text: "Rahmenbedingungen",
              link: "/hackathons/rahmenbedingungen",
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/it-at-m/innolab.muenchen.de",
      },
    ],

    outline: { label: "Auf dieser Seite" },
    docFooter: { prev: "Vorherige Seite", next: "Nächste Seite" },
    darkModeSwitchLabel: "Erscheinungsbild",
    lightModeSwitchTitle: "Zu hellem Design wechseln",
    darkModeSwitchTitle: "Zu dunklem Design wechseln",
    sidebarMenuLabel: "Menü",
    returnToTopLabel: "Zurück nach oben",
    langMenuLabel: "Sprache wechseln",

    footer: {
      message:
        'Made with ❤ by it@M | <a href="/impressum">Impressum & Datenschutz</a>',
    },
  },
});
