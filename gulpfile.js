var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('default', function () {
    return gulp.src(['sass/screen.sass'])
        .pipe($.sourcemaps.init())
        .pipe($.sass({
        	indentedSyntax: true,
            errLogToConsole: true
        }))
        .pipe($.autoprefixer('last 3 version'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('css'));
});