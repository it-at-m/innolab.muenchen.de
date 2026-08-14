import { defineConfig } from "vitepress";

export default defineConfig({
  title: "InnoLab München",
  description: "Website des InnoLab München",
  base: "/innolab.muenchen.de/",

  // Repo-root files that are not part of the website
  srcExclude: ["README.md", "CODE_OF_CONDUCT.md", "LICENSE", "LICENSE.md"],

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Projekte", link: "/projekte/" },
      { text: "Hackathons", link: "/hackathons/" },
      { text: "Blog", link: "/blog/" },
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
      "/hackathons/": [
        {
          text: "Hackathons",
          items: [
            { text: "Übersicht", link: "/hackathons/" },
            {
              text: "Rahmenbedingungen",
              link: "/hackathons/rahmenbedingungen",
            },
            {
              text: "Beispiel-Hackathon",
              link: "/hackathons/beispiel-hackathon",
            },
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
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/it-at-m/innolab.muenchen.de",
      },
    ],

    footer: {
      message: "Made with ❤ by it@M",
    },
  },
});
