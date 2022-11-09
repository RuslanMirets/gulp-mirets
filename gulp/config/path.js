// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist'; // Также можно использовать rootFolder
const srcFolder = './src';

export const path = {
	build: {
		html: `${buildFolder}/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
};
