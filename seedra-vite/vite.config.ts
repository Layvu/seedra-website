import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper";

import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

import eslint from "vite-plugin-eslint2";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    tsconfigPaths(),
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
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "src/styles"),
    },
  },
  css: {
    preprocessorOptions: {
      // оставить только global.scss
      scss: {
        additionalData: ` 
          @import "styles/_fonts.scss";
          @import "styles/_vars.scss";
          @import "styles/_mixins.scss";
          @import "styles/_vendor.scss";
          @import "styles/_settings";
          @import "styles/main.scss";
        `,
      },
    },
  },
});
