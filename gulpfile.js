var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

gulp.task('sass', function () {
	return gulp.src(['sass/*.sass'])
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			indentedSyntax: true,
			errLogToConsole: true
		}))
		// .pipe($.autoprefixer('last 3 version'))
		.pipe($.sourcemaps.write('.'))
		.pipe(gulp.dest('css'));
});

gulp.task('default', function () {
	gulp.run('sass');
	gulp.watch(['./sass/**/*.sass'], ['sass']);
});
