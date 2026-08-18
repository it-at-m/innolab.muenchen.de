import { defineConfig } from "vitepress";

const base = "/innolab.muenchen.de/";

export default defineConfig({
  title: "it@M InnoLab",
  description: "Website des InnoLab München",
  base: "/",

  // Repo-root files that are not part of the website
  srcExclude: ["README.md", "CODE_OF_CONDUCT.md", "LICENSE", "LICENSE.md"],

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: `${base}images/logo.svg`,
        media: "(prefers-color-scheme: light)",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: `${base}images/logo_white.svg`,
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
      { text: "Blog", link: "/blog/" },
      { text: "Projekte", link: "/projekte/" },
      { text: "Hackathons", link: "/hackathons/" },

      { text: "Team", link: "/team/" },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/it-at-m/innolab.muenchen.de",
      },
    ],

    footer: {
      message:
        'Made with ❤ by it@M | <a href="/impressum">Impressum & Datenschutz</a>',
    },
  },
});
