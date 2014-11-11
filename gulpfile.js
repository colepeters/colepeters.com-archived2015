var gulp = require('gulp'),
    rename = require('gulp-rename'),
    mincss = require('gulp-minify-css'),
    basswork = require('gulp-basswork');

gulp.task('styles', function() {
  gulp.src('./src/styles/*.css')
    .pipe(basswork())
    .pipe(mincss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./styles'));
});

gulp.task('images', function() {
  gulp.src('./src/images/*.*')
    .pipe(gulp.dest('./images'));
});

gulp.task('fonts', function() {
  gulp.src('./src/fonts/*.*')
    .pipe(gulp.dest('./fonts'));
});

gulp.task('default', ['styles', 'images', 'fonts'], function() {
  gulp.watch('./src/styles/*.css', ['styles']);
  gulp.watch('./src/images/*.*', ['images']);
});
