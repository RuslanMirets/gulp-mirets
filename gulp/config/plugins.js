import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browserSync from "browser-sync"; // Локальный сервер
import gulpIf from "gulp-if"; // Условное ветвление

// Экспортируем объект
export const plugins = {
	plumber: plumber,
	notify: notify,
	browserSync: browserSync,
	if: gulpIf,
};
