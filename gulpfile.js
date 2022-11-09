// Основной модуль
import gulp from 'gulp';
// Импорт путей
import { path } from './gulp/config/path.js';
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Передаем значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins,
};

// Импорт задач
import { clean } from './gulp/tasks/clean.js';
import { server } from './gulp/tasks/server.js';
import { html } from './gulp/tasks/html.js';

// Наблюдатель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.html, html);
}

// Основные задачи
const mainTasks = gulp.parallel(html);

// Построение сценариев выполнение задач
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clean, mainTasks);

// Экспорт сценариев
export { dev };
export { build };

// Выполнения сценария по умолчанию
gulp.task('default', dev);
