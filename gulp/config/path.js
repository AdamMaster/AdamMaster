// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/assets/css/`,
        js: `${buildFolder}/assets/js/`,
        images: `${buildFolder}/assets/img/`,
        fonts: `${buildFolder}/assets/fonts/`,
        files: `${buildFolder}/assets/files/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/assets/scss/style.scss`,
        scssVendor: `${srcFolder}/assets/scss/vendor.scss`,
        js: `${srcFolder}/assets/js/main.js`,
        jsVendor: `${srcFolder}/assets/js/vendor.js`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
        svg: `${srcFolder}/assets/img/**/*.svg`,
        svgicons: `${srcFolder}/assets/svgicons/*.svg`,
        fonts: `${buildFolder}/assets/fonts/**/*.*`,
        files: `${srcFolder}/assets/files/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/assets/scss/**/*.scss`,
        scssVendor: `${srcFolder}/assets/scss/vendor.scss`,
        js: `${srcFolder}/assets/js/**/*.js`,
        jsVendor: `${srcFolder}/assets/js/vendor.js`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,ico,webp,svg}`,
        svgicons: `${srcFolder}/assets/svgicons/*.svg`,
        fonts: `${buildFolder}/assets/fonts/**/*.*`,
        files: `${srcFolder}/assets/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}