import { defineConfig } from "vitepress";

export default defineConfig({
  title: "InnoLab München",
  description: "Website des InnoLab München",
  base: "/innolab.muenchen.de/",

  // Repo-root files that are not part of the website
  srcExclude: ["README.md", "CODE_OF_CONDUCT.md", "LICENSE", "LICENSE.md"],

  themeConfig: {
    nav: [{ text: "Home", link: "/" }],

    sidebar: [],

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
