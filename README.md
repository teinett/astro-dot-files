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
npm install --save-dev editorconfig-checker prettier prettier-plugin-astro eslint eslint-plugin-astro eslint-plugin-jsx-a11y @typescript-eslint/parser @typescript-eslint/eslint-plugin stylelint stylelint-config-html stylelint-config-standard postcss-html stylelint-order autoprefixer postcss-preset-env cssnano astro-compress
```

Add `astro-compress` to file `astro.config.mjs`:

````
import { defineConfig } from "astro/config";
import Compress from "astro-compress";

export default defineConfig({
    integrations: [
        markdoc(),
        Compress({
            // CSS: false,
            // HTML: false,
            Image: false,
            // JavaScript: false,
            SVG: false,
        }), // should be last in the list
    ],
});

```

### STEP 3.

Add scripts to your `package.json`: copy it from file `package-scripts.json` in this repository.

### STEP 4. 

Copy dot files from this repository to your AstroJS project:

```
git clone https://github.com/teinett/astro-dot-files.git
```

Now move all file, accept `package-scripts.json` and `.vscode` folder to the root of your project.

### STEP 4.

Using VSCode editor? Move all file from copied `.vscode` folder for your local `.vscode` folder. 