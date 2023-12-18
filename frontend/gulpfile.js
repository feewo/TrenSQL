"use strict";

// общий плагин для запуска галпа
const gulp = require("gulp");
// import gulp from 'gulp';
// штука, которая автоматически обновляет проект при изменениях в нём
const browserSync = require("browser-sync");
// позволяет делить js-скрипты на модули и собирать их в один файлик
const webpack = require("webpack-stream");
// преобразует файлы sass в css
const sass = require('gulp-sass')(require('sass'));
// позволяет переименовывать файлики по дороге
const rename = require("gulp-rename");
// проставляет автоматически вендорные префиксы. а вендорные префиксы увеличивают поддержку css в разных браузерах
const autoprefixer = require("gulp-autoprefixer");
// нужен для оптимизации css
const cleanCSS = require("gulp-clean-css");
// позволяет переименовывать файлики по дороге
const named = require('vinyl-named');

gulp.task("build-js", () => {
    return gulp.src("./src/js/pages/**.js")
      .pipe(named())
      .pipe(webpack({
        mode: 'production',
        output: {
          filename: '[name].js'
        },
        watch: false,
        // devtool: "source-map",
        // module: {
        //   rules: [
        //     {
        //       test: /\.m?js$/,
        //       exclude: /(node_modules|bower_components)/,
        //       // babel прописывает полифилы для старых браузеров. полифилы это конструкции, которые заменяют молодежные крутые конструкции на старые дедовские, чтобы интернет экслорер справился и не пукнул
        //       // babel оптимизирует код для старых браузеров
        //       use: {
        //         loader: 'babel-loader',
        //         options: {
        //           presets: [['@babel/preset-env', {
        //             debug: true,
        //             corejs: 3,
        //             useBuiltIns: "usage"
        //           }]]
        //         }
        //       }
        //     }
        //   ]
        //   }
      }))
      .pipe(gulp.dest('../public/js/pages'))
      .on("end", browserSync.reload);
});

gulp.task('styles', function() {
  return gulp.src("src/sass/*.sass")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({
      prefix: "",
      suffix: ".min"
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['defaults'],
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest("../public/css"))
    .on("end", browserSync.reload);
})

gulp.task('stylesPages', function() {
  return gulp.src("src/sass/pages/*.sass")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({
      prefix: "",
      suffix: ".min"
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['defaults'],
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest("../public/css"))
    .on("end", browserSync.reload);
});

gulp.task('blocks', function() {
  return gulp.src("src/blocks/*.php")
    .pipe(gulp.dest("../public/blocks"))
    .on("end", browserSync.reload);
});

gulp.task('pages', function() {
  // следит за всеми файликами в одной папочке
  return gulp.src("src/*.php")
    // складывает их в другую папочку
    .pipe(gulp.dest("../resources/views"))
    // в конце обновим браузерсинк
    .on("end", browserSync.reload);
});

gulp.task('pagesAuth', function() {
  // следит за всеми файликами в одной папочке
  return gulp.src("src/auth/*.php")
    // складывает их в другую папочку
    .pipe(gulp.dest("../resources/views/auth"))
    // в конце обновим браузерсинк
    .on("end", browserSync.reload);
});

gulp.task('pagesErrors', function() {
  // следит за всеми файликами в одной папочке
  return gulp.src("src/errors/*.php")
    // складывает их в другую папочку
    .pipe(gulp.dest("../resources/views/errors"))
    // в конце обновим браузерсинк
    .on("end", browserSync.reload);
});

gulp.task('img', function() {
  // следит за всеми файликами в одной папочке
  return gulp.src("src/img/**")
    // складывает их в другую папочку
    .pipe(gulp.dest("../public/img"))
    // в конце обновим браузерсинк
    .on("end", browserSync.reload);
});

gulp.task("watch", () => {
    browserSync.init({
      // proxy: "dashulechka/resources/views"
      proxy: "dashulechka/public"
    });
    gulp.watch("src/js/pages/**.js", gulp.parallel("build-js"));
    gulp.watch("src/sass/*.sass", gulp.parallel("styles"));
    gulp.watch("src/sass/blocks/*.sass", gulp.parallel("styles"));
    gulp.watch("src/sass/pages/*.sass", gulp.parallel("stylesPages"));
    gulp.watch("src/blocks/*.php", gulp.parallel("blocks"));
    gulp.watch("src/*.php", gulp.parallel("pages"));
    gulp.watch("src/auth/*.php", gulp.parallel("pagesAuth"));
    gulp.watch("src/errors/*.php", gulp.parallel("pagesAuth"));
    gulp.watch("src/img/**", gulp.parallel("img"));
});

gulp.task("default", gulp.parallel(
  "watch",
  "build-js",
  "styles",
  "stylesPages",
  "blocks",
  "pages",
  "pagesAuth",
  "pagesErrors",
  "img",
));
