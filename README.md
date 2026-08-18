<h1 align="center">innolab.muenchen.de</h1>

<p align="center">
  <img src="./public/images/logo.svg" alt="InnoLab München Logo" width="120"/>
</p>

<p align="center">
  <a href="https://opensource.muenchen.de/">
    <img src="https://img.shields.io/badge/made%20with%20%E2%9D%A4%20by-it%40M-yellow?style=for-the-badge" alt="Made with love by it@M" />
  </a>
</p>

<!-- feel free to add more shields, style 'for-the-badge' -> see https://shields.io/badges -->

## Set up

Requirement: Node.js `>=20 <=24`.

```bash
npm install     # install dependencies
npm run dev     # start development server
```

The dev server then runs at `http://localhost:5173`.

Other commands:

```bash
npm run build     # generate the production build
npm run preview   # preview the production build locally
npm run lint      # check formatting (Prettier)
npm run fix    # automatically fix formatting (Prettier)
```

Made with [VitePress](https://vitepress.dev/)

## Structure

```text
innolab.muenchen.de/
├── .vitepress/
│   ├── config.mts        → navigation, sidebar, meta
│   └── theme/            → custom theme and styling
├── public/                → static assets (images, favicon, …), served from site root
├── index.md              → home page
├── projekte/              → project overview + individual projects
├── hackathons/            → hackathon overview, framework conditions, individual entries
├── blog/                  → blog posts
└── team/                  → team page
```

New content pages are added as a Markdown file in the respective folder and linked in the
sidebar configuration (`.vitepress/config.mts`).

## Deployment

The site is automatically built via GitHub Actions (`.github/workflows/deploy-pages.yml`) and
deployed to GitHub Pages on every push to `main`.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please open an issue with the tag "enhancement", fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Open an issue with the tag "enhancement"
2. Fork the Project
3. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
4. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the Branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

More about this in the [CODE_OF_CONDUCT](/CODE_OF_CONDUCT.md) file.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) file for more information.

## Contact

it@M - opensource@muenchen.de
