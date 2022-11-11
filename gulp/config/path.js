// Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist"; // Также можно использовать rootFolder
const srcFolder = "./src";

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/main.scss`,
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
};
