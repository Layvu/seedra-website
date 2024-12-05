import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper";

import eslint from "vite-plugin-eslint2";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    ViteSvgSpriteWrapper({
      icons: "src/assets/icons/**/*.svg",

      outputDir: "public/img",

      generateType: false,
      typeName: "SvgIcons",
      typeFileName: "svg-icons",

      sprite: {
        inline: false,
        prefix: "icon-",
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "_fonts.scss";
          @import "_vars.scss";
          @import "_mixins.scss";
        `,
      },
    },
  },
});
