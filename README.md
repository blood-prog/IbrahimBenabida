<div align="center">

<img src="docs/assets/banner.svg" alt="Ibrahim Benabida, Personal Portfolio, the remake. A git diff: the original portfolio is struck through in red and replaced by green lines for the name, the subtitle and the stack: react 19, vite 6, typescript, tailwindcss and lucide-react." width="100%" />

<br />
<br />

**[overview](#overview)** &nbsp;/&nbsp; **[stack](#the-stack)** &nbsp;/&nbsp; **[structure](#project-structure)** &nbsp;/&nbsp; **[quick start](#quick-start)** &nbsp;/&nbsp; **[customize](#customize-it)** &nbsp;/&nbsp; **[deploy](#deploy-it)** &nbsp;/&nbsp; **[roadmap](#roadmap)** &nbsp;/&nbsp; **[license](#license)**

<br />

[![License](https://img.shields.io/github/license/blood-prog/IbrahimBenabida?style=flat-square&color=9ece6a&labelColor=1a1b26)](LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/blood-prog/IbrahimBenabida?style=flat-square&color=7aa2f7&labelColor=1a1b26)](https://github.com/blood-prog/IbrahimBenabida/commits)
[![Stars](https://img.shields.io/github/stars/blood-prog/IbrahimBenabida?style=flat-square&color=e0af68&labelColor=1a1b26)](https://github.com/blood-prog/IbrahimBenabida/stargazers)
![Node](https://img.shields.io/badge/node-18%2B-bb9af7?style=flat-square&labelColor=1a1b26)

</div>

<br />

> [!IMPORTANT]
> **This is the remake.** It is a ground-up rebuild of my original portfolio, and it is going to **replace the old one**. Everything was rebuilt on a modern stack.

```diff
- original portfolio
+ the remake, built on React 19, Vite 6, TypeScript and Tailwind CSS
+ typed content, modular components, responsive layout
```

<br />

## Overview

This is my personal portfolio: a home for my projects and works, built to be quick to load, comfortable on any screen and easy to keep up to date. The remake is organized around four ideas.

| **Fast** | **Responsive** | **Typed** | **Modular** |
|:--|:--|:--|:--|
| Vite gives instant hot reload while developing and an optimized bundle for production. | Layouts adapt from small phones to wide desktop screens. | TypeScript interfaces describe every project and work in the dataset. | Small components, with content kept apart from layout. |

<!-- Add a real screenshot here once you have one: ![Preview](docs/assets/preview.png) -->

<br />

## The stack

<div align="center">
<img src="docs/assets/stack.svg" alt="The stack: React 19 for UI components, Vite 6 for the dev server and build, TypeScript for type safety, Tailwind CSS for utility-first styling and Lucide for icons." width="100%" />
</div>

<details>
<summary><b>Stack details and docs</b></summary>

<br />

| Layer | Technology | Role |
|:--|:--|:--|
| Framework | [React 19](https://react.dev/) | Component-based UI |
| Build tool | [Vite 6](https://vite.dev/) | Dev server, hot reload and production bundling |
| Language | [TypeScript](https://www.typescriptlang.org/) | Type safety across the codebase |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | Utility-first, responsive design |
| Icons | [Lucide React](https://lucide.dev/) | Consistent, crisp SVG icons |

</details>

<br />

## Project structure

Everything in this tree is new in the remake.

```diff
+ IbrahimBenabida/
+ ├── public/              static assets, portfolio imagery and project graphics
+ ├── src/
+ │   ├── components/      modular React UI components
+ │   ├── data/            portfolio projects and works dataset
+ │   ├── App.tsx          main layout and interactions
+ │   ├── main.tsx         application entry point
+ │   └── types.ts         shared TypeScript interfaces
+ ├── docs/assets/         graphics used by this README
+ ├── index.html           HTML entry point
+ ├── package.json         dependencies and scripts
+ ├── tailwind.config.js   Tailwind configuration
+ └── tsconfig.json        TypeScript configuration
```

### How the pieces connect

```mermaid
flowchart LR
    html["index.html"] --> main["main.tsx"] --> app["App.tsx"]
    app --> components["components/"]
    data[("data/")] --> app
    types{{"types.ts"}} -.-> data
    types -.-> components
    public["public/"] -.-> app

    classDef entry fill:#bb9af7,stroke:#7c5cc4,color:#1a1b26
    classDef ui fill:#7aa2f7,stroke:#4f74c9,color:#1a1b26
    classDef content fill:#9ece6a,stroke:#6a9a3a,color:#1a1b26
    classDef asset fill:#ff9e64,stroke:#c9703a,color:#1a1b26
    class html,main entry
    class app,components ui
    class data,types content
    class public asset
```

<sub>Purple is the entry point, blue is the interface, green is content and types, orange is static assets. Dotted lines are supporting relationships.</sub>

<br />

## Quick start

<div align="center">
<img src="docs/assets/terminal.svg" alt="A terminal runs three commands: git clone the repository, npm install the dependencies, then npm run dev. Vite starts and serves the site at localhost 5173." width="100%" />
</div>

Prefer to copy and paste? Here are the same commands:

```bash
git clone https://github.com/blood-prog/IbrahimBenabida.git
cd IbrahimBenabida
npm install
npm run dev
```

You will need **Node.js 18 or newer** and **npm**, **pnpm** or **yarn**. Open the local URL printed in the terminal (Vite uses `http://localhost:5173` by default) and the page reloads as you edit.

### Scripts

| Command | What it does |
|:--|:--|
| `npm run dev` | Starts the development server with hot module replacement |
| `npm run build` | Type-checks the project and creates an optimized production build |
| `npm run preview` | Serves the production build locally so you can test it before deploying |

<details>
<summary><b>Using pnpm or yarn instead?</b></summary>

<br />

```bash
# pnpm
pnpm install
pnpm dev

# yarn
yarn
yarn dev
```

</details>

<details>
<summary><b>Something not working?</b></summary>

<br />

| Problem | Try this |
|:--|:--|
| Install or start fails | Run `node -v` and make sure it prints v18 or higher. |
| Strange errors after switching branches | Delete `node_modules` and your lockfile, then run `npm install` again. |
| Port 5173 is busy | Vite usually picks the next free port. To choose one yourself, run `npm run dev -- --port 3000`. |
| `npm run build` reports type errors | The build type-checks first. Fix the files it lists, and check that your data matches `src/types.ts`. |

</details>

<br />

## Customize it

Content and layout live in different places, so updating the portfolio rarely means touching the UI.

| I want to… | Go to |
|:--|:--|
| Add or edit projects and works | `src/data/` |
| Change the shape of the content | `src/types.ts` |
| Adjust sections, layout or interactions | `src/App.tsx` and `src/components/` |
| Swap images and project graphics | `public/` |
| Change colors, fonts and theme | `tailwind.config.js` |

> [!TIP]
> After you edit the dataset, the TypeScript compiler flags any entry that does not match the interfaces in `src/types.ts`, so mistakes are caught before they reach production.

<br />

## Deploy it

The project builds to plain static files, so any static host will do.

```mermaid
flowchart LR
    src["TSX and Tailwind"] --> tsc["Type-check"] --> bundle["Vite build"] --> dist[("dist/")] --> host["Static host"]

    classDef step fill:#7aa2f7,stroke:#4f74c9,color:#1a1b26
    classDef out fill:#9ece6a,stroke:#6a9a3a,color:#1a1b26
    class src,tsc,bundle step
    class dist,host out
```

| Setting | Value |
|:--|:--|
| Install command | `npm install` |
| Build command | `npm run build` |
| Output directory | `dist` |

This works out of the box on **Vercel**, **Netlify**, **Cloudflare Pages** and **GitHub Pages**.

> [!NOTE]
> On a GitHub Pages project URL such as `username.github.io/repo`, set the `base` option in your Vite config to the repository name so assets load from the right path.

<br />

## Roadmap

The remake is built. What is left is the switch.

- [x] Rebuild the portfolio on React 19, Vite 6 and TypeScript
- [x] Create a typed dataset for projects and works
- [x] Build modular, responsive components
- [ ] Go live and replace the original portfolio
- [ ] Retire the old site

```mermaid
gitGraph
    commit id: "original portfolio"
    branch remake
    checkout remake
    commit id: "React 19 and Vite 6"
    commit id: "typed data layer"
    commit id: "responsive components"
    checkout main
    merge remake id: "go live" tag: "replaces the original"
```

<sub>The final merge is the part still ahead.</sub>

<br />

## Feedback

Found a bug, or have an idea that would make the portfolio better? [Open an issue](https://github.com/blood-prog/IbrahimBenabida/issues). I read all of them.

<br />

## Credits

Built on the work of the people behind [React](https://react.dev/), [Vite](https://vite.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/) and [Lucide](https://lucide.dev/). Thank you.

<br />

## License

Released under the [MIT License](https://github.com/blood-prog/IbrahimBenabida/blob/main/LICENSE).

<br />

<div align="center">
<img src="docs/assets/footer.svg" alt="A git commit message reads: replace the original portfolio with the remake. Thanks for stopping by. Designed and built by Ibrahim Benabida. MIT licensed." width="100%" />
</div>
