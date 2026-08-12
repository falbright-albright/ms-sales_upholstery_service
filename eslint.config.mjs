import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // This is a content-heavy marketing/legal site; straight apostrophes
      // in copy ("don't", "M.S.'s") render fine and are far more
      // maintainable to write/edit than &apos;/&rsquo; entities everywhere.
      "react/no-unescaped-entities": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Netlify CLI build output (bundled functions, etc.) — generated,
    // never hand-edited, and not committed (see .gitignore).
    ".netlify/**",
  ]),
]);

export default eslintConfig;
