export const files = () => {
    return app.gulp.src(`${app.path.srcFolder}/assets/files/*.*`, {})
        .pipe(app.gulp.dest(`${app.path.buildFolder}/assets/files/`))
}
