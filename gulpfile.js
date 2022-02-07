// Основной модуль
import gulp from "gulp";
// Импорт путей
import {path} from "./gulp/config/path.js";
// Импорт входящих плагинов
import {plugins} from "./gulp/config/plugins.js";

// Передаем значение в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импорт задач
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { scssVendor } from "./gulp/tasks/scssVendor.js";
import { js } from "./gulp/tasks/js.js";
import { jsVendor } from "./gulp/tasks/jsVendor.js";
import { server } from "./gulp/tasks/server.js";
import { reset } from "./gulp/tasks/reset.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { files } from "./gulp/tasks/files.js";

// Наблюдатель за изменениями в файлах
function watcher(){
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.scssVendor, scssVendor);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.jsVendor, jsVendor);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.fonts, fonts);
    gulp.watch(path.watch.svgicons, svgSprive);
    gulp.watch(path.watch.files, files);
}

export { svgSprive }

// Основные задачи
const mainTasks = gulp.parallel(html, scss, scssVendor, js, jsVendor, images, fonts, svgSprive, files);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks,  gulp.parallel(watcher, server));

// Выполнение сценария по умолчанию
gulp.task('default', dev);