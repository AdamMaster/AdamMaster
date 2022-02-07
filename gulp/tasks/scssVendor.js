import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scssVendor = () => {
    return app.gulp.src(app.path.src.scssVendor, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSSVENDOR",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream());
}