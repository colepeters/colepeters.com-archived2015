var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var del = require('del');

gulp.task('clean', function() {
  del.sync(['build/**']);
});

gulp.task('html', function() {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('styles', function() {
  gulp.src('./src/sass/styles.sass')
    .pipe(sass({ style: 'expanded', indentedSyntax: true }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({ suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./build/css'))
    .pipe(connect.reload());
});

gulp.task('fonts', function() {
  gulp.src('./src/fonts/**')
    .pipe(gulp.dest('./build/fonts'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('default', ['clean', 'html', 'fonts', 'styles', 'connect'], function() {
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/sass/**', ['styles']);
});
