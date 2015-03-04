var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('watch', function () {
	gulp.watch(['./sass/*.sass'], ['default']);
});

gulp.task('default', function () {
	return gulp.src(['sass/*.sass'])
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			indentedSyntax: true,
			errLogToConsole: true
		}))
		.pipe($.autoprefixer('last 3 version'))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('css'));
});