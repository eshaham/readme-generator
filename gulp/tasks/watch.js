'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('reload-js', function () {
  return gulp.src('./app/**/*.js')
    .pipe(connect.reload());
});

gulp.task('reload-css', function () {
  return gulp.src('./app/**/*.css')
    .pipe(connect.reload());
});

gulp.task('reload-html', function () {
  return gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/**/*.js'], ['reload-js']);
  gulp.watch(['./app/**/*.css'], ['reload-css']);
  gulp.watch(['./app/**/*.html'], ['reload-html']);
});