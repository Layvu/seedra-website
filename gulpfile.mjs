import { src, dest, parallel, series, watch } from "gulp";
import gulpSass from "gulp-sass";
import * as sass from "sass";
import gulpNotify from "gulp-notify";
import rename from "gulp-rename";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";
import browserSync from "browser-sync";
import fileinclude from "gulp-file-include";
import svgSprite from "gulp-svg-sprite";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";
import fs from "fs";
import { deleteAsync } from "del";
import webpack from "webpack";
import webpackStream from "webpack-stream";

const sassInstance = gulpSass(sass);
const bs = browserSync.create();

const fonts = () => {
  src("./src/fonts/**.ttf", {
    encoding: false,
    removeBOM: false,
  })
    .pipe(ttf2woff())
    .pipe(dest("./app/fonts/"));
  return src("./src/fonts/**.ttf", {
    encoding: false,
    removeBOM: false,
  })
    .pipe(ttf2woff2())
    .pipe(dest("./app/fonts/"));
};

const cb = () => {};

let srcFonts = "./src/scss/_fonts.scss";
let appFonts = "./app/fonts/";

const fontsStyle = (done) => {
  const fileContent = fs.readFileSync(srcFonts, "utf8");
  const newContent = [];

  fs.readdir(appFonts, function (err, items) {
    if (items) {
      let c_fontname;
      for (var i = 0; i < items.length; i++) {
        let fontname = items[i].split(".");
        fontname = fontname[0];
        if (c_fontname != fontname) {
          const line = `@include font-face("${fontname}", "${fontname}", 400);\r\n`;
          if (!fileContent.includes(line)) {
            newContent.push(line);
          }
        }
        c_fontname = fontname;
      }
    }
  });

  fs.appendFile(srcFonts, newContent.join(""), cb);
  done();
};

const svgSprites = () => {
  return src("./src/img/**.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest("./app/img"));
};

const styles = () => {
  return src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sassInstance
        .sync({
          outputStyle: "expanded",
        })
        .on("error", gulpNotify.onError())
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest("./app/css/"))
    .pipe(bs.stream());
};

const htmlInclude = () => {
  return src("./src/index.html")
    .pipe(
      fileinclude({
        prefix: "@",
        basepath: "@file",
      })
    )
    .pipe(dest("./app/"))
    .pipe(bs.stream());
};

const imgToApp = () => {
  return src(["./src/img/**.jpg", "./src/img/**.png", "./src/img/**.jpeg"], {
    encoding: false,
  }).pipe(dest("./app/img"));
};

const resources = () => {
  return src("./src/resources/**").pipe(dest("./app"));
};

const clean = () => {
  return deleteAsync(["app/*"]);
};

const scripts = () => {
  return src("./src/js/main.js")
    .pipe(
      webpackStream({
        mode: "development",
        output: {
          filename: "main.js",
        },
        module: {
          rules: [
            {
              test: /\.(?:js|mjs|cjs)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [["@babel/preset-env", { targets: "defaults" }]],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
    .pipe(dest("./app/js"))
    .pipe(bs.stream());
};

const watchFiles = () => {
  bs.init({
    server: {
      baseDir: "./app",
    },
  });

  watch("./src/scss/**/*.scss", styles);
  watch("./src/html/*.html", htmlInclude);
  watch("./src/img/**.jpg", imgToApp);
  watch("./src/img/**.png", imgToApp);
  watch("./src/img/**.jpeg", imgToApp);
  watch("./src/img/**/*.svg", svgSprites);
  watch("./src/resources/**", resources);
  watch("./src/fonts/**.ttf", fonts);
  watch("./src/fonts/**.ttf", fontsStyle);
  watch("./src/js/**/*.js", scripts);
};

export { htmlInclude as fileinclude, styles, watchFiles };
export default series(
  clean,
  parallel(htmlInclude, scripts, fonts, resources, imgToApp, svgSprites),
  fontsStyle,
  styles,
  watchFiles
);
