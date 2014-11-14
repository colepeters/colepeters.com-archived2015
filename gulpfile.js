var gulp = require('gulp'),
    rename = require('gulp-rename'),
    mincss = require('gulp-minify-css'),
    basswork = require('gulp-basswork'),
    del = require('del');

gulp.task('clean', function() {
  del(['build']);
});

gulp.task('html', function() {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('styles', function() {
  gulp.src('./src/styles/main.css')
    .pipe(basswork())
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('images', function() {
  gulp.src('./src/images/**/*.*')
    .pipe(gulp.dest('./build/images'));
});

gulp.task('fonts', function() {
  gulp.src('./src/fonts/*.*')
    .pipe(gulp.dest('./build/fonts'));
});

gulp.task('default', ['clean', 'html', 'styles', 'images', 'fonts'], function() {
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/styles/*.css', ['styles']);
  gulp.watch('./src/images/**/*.*', ['images']);
});
