const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require("gulp-debug");
const browserSync = require('browser-sync').create();

// compile scss into css

function style() {
    return gulp.src(['./scss/**/*.scss', '!./scss/base/*.scss'])
        .pipe(debug())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;