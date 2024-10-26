import astroEslintParser from "astro-eslint-parser";
import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
    {
        files: ["src/**/*.{js,ts,astro}"],
        rules: {
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },
    {
        files: ["src/**/*.astro"],
        languageOptions: {
            parser: astroEslintParser,
            parserOptions: {
                parser: typescriptEslintParser,
                ecmaVersion: 2022,
                sourceType: "module",
                extraFileExtensions: [".astro"],
            },
        },
    },
    {
        files: ["src/**/*.{js,ts}"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parser: typescriptEslintParser,
        },
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            astro: eslintPluginAstro,
        },
        env: {
            browser: true,
            node: true,
            es6: true,
        },
        extends: [
            "eslint:recommended",
            "plugin:astro/recommended",
            "plugin:@typescript-eslint/recommended",
        ],
    },
];
