```
npm install --save-dev editorconfig-checker prettier prettier-plugin-astro eslint eslint-plugin-astro eslint-plugin-jsx-a11y @typescript-eslint/parser @typescript-eslint/eslint-plugin stylelint stylelint-config-html stylelint-config-standard postcss-html stylelint-order autoprefixer postcss-preset-env cssnano astro-compress
```

Добавим конфигурацию в файл `astro.config.mjs`:

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
