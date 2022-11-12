// Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist"; // Также можно использовать rootFolder
const srcFolder = "./src";

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		images: `${buildFolder}/img/`,
		js: `${buildFolder}/js/`,
		fonts: `${buildFolder}/fonts/`,
		favicon: `${buildFolder}/img/favicon/`,
		root: `${buildFolder}/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/*.scss`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
		webpImages: `${srcFolder}/img/**/*.{jpg,jpeg,png}`,
		js: `${srcFolder}/js/main.js`,
		fonts: `${srcFolder}/fonts/*.woff2`,
		svgicons: `${srcFolder}/img/svg/*.svg`,
		favicon: `${srcFolder}/img/favicon/favicon.svg`,
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		webpImages: `${srcFolder}/img/**/*.{jpg,jpeg,png}`,
		js: `${srcFolder}/js/**/*.js`,
		fonts: `${srcFolder}/fonts/*.woff2`,
		favicon: `${srcFolder}/img/favicon/favicon.svg`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
};
