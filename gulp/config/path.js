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
	},
	src: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/main.scss`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
		webpImages: `${srcFolder}/img/**/*.{jpg,jpeg,png}`,
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		webpImages: `${srcFolder}/img/**/*.{jpg,jpeg,png}`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
};
