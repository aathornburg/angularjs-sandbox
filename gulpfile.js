var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
    return browserify(
        {
            entries: ['./src/app/components/app.module.js'],
            debug: true
        })
        .transform(babelify, { presets: ['env'], sourceMaps: true })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        // source maps WILL WORK, at least on node v8.3.0 and **after a page refresh**.  Tested in Chrome/Firefox
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['scripts'], function() {
    gulp.watch('src/**/*.js', ['scripts']);
    gulp.watch('src/app/index.html').on('change', browserSync.reload);
});

gulp.task('serve', ['watch'], function() {
    browserSync.init({
        // serve from the src/app/ and dist/ directories
        server: ["src/app", "dist"]
    });
});

gulp.task('default', ['serve']);