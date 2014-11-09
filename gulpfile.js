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

gulp.task('default', ['styles'], function() {
  gulp.watch('./src/styles/*.css', function() {
    gulp.run('styles');
  });
});
