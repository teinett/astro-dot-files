# How to start your AstroJS project

**Detailed instruction**: 
- Russian (русский язык) - https://habr.com/ru/articles/754878/

### STEP 1.

Install AstroJS: [instruction](https://docs.astro.build/en/install/auto/)

### STEP 2.

Add packages to help make your developing project better:
- editorconfig
- prettier
- eslint
- stylelint
- postcss
- AstroJS package to compress files: astro-compress


```
npm install --save-dev editorconfig-checker prettier prettier-plugin-astro eslint eslint-plugin-astro eslint-plugin-jsx-a11y typescript-eslint @eslint/js @types/eslint__js @typescript-eslint/parser stylelint stylelint-config-html stylelint-config-standard postcss-html stylelint-order autoprefixer postcss-preset-env cssnano astro-compress
```

### STEP 3.

Add scripts to your `package.json`: copy it from the file package-scripts.json in this repository.

### STEP 4.

Copy dot files from this repository to your AstroJS project:
```git clone https://github.com/teinett/astro-dot-files.git```

Now move all files, excepting `package-scripts.json` and `.vscode` folder, to the root of your project.

### STEP 5.

Add integrations and helpful settings to file `astro.config.mjs`.

- Add line `prefetch: true,` for faster page loading.

- Add `@playform/compress` to compress files: `npm i @playform/compress`.

- Add `astro-purgecss` to purge unused styles: `npx astro add astro-purgecss`

- Add sitemap integration: `npm i @astrojs/sitemap`.

- Add environment variables from the `.env` file.

- Change CSS specify strategy. Options: 'where' | 'class' | 'attribute'. I prefer 'class'.


As a result, we get the file `astro.config.mjs`

```
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import purgecss from "astro-purgecss";
import Compress from "@playform/compress";

import { loadEnv } from "vite";
const { FRONTEND_DOMAIN } = loadEnv(import.meta.env.MODE, process.cwd(), "");
// const { ASSETS_CDN_DOMAIN } = loadEnv(import.meta.env.MODE, process.cwd(), "");


export default defineConfig({
    site: FRONTEND_DOMAIN || "https://example.com",
    prefetch: true,
    scopedStyleStrategy: "class",
    integrations: [
        sitemap(),
        purgecss({
            variables: true,

            // for Astro view transitions
            keyframes: false,

            // for Astro view transitions
            safelist: {
                greedy: [
                    /*astro*/
                ],
            },

            // for SSR
            content: [process.cwd() + "/src/**/*.{astro,jsx,tsx,css}"],
        }),
        Compress({
            // CSS: false,
            // HTML: false,
            Image: false,
            // JavaScript: false,
            SVG: false,
        }), // should be last in the list
    ],
    build: {
        // assetsPrefix: ASSETS_CDN_DOMAIN,
    },
});
```

### STEP 6.

Use VSCode editor? 

Move all files from the copied `.vscode` folder to your local `.vscode` folder. 

### STEP 7.

Use TypeScript?

Edit file `tsconfig.json`: add aliases

```
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

### STEP 8.

Use Astro Dev Toolbar?

Move file `.astro/settings.json` to root: it's Dev Toolbar settings.

Recommended apps (check [full list](https://astro.build/integrations/?search=&categories%5B%5D=toolbar)):

- [astro-meta-tags](https://github.com/patrick91/astro-meta-tags)
