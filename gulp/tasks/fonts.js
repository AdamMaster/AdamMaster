import fs from 'fs';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const fonts = () => {
    return app.gulp.src(`${app.path.srcFolder}/assets/fonts/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FONTS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.gulp.dest(`${app.path.buildFolder}/assets/fonts/`))
}
