import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
