'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('prep-js-files', ['clean'], function() {
  return gulp.src(['./app/app.js', './app/modules/*/*.js', './app/**/*.js', '!./app/lib/**'])
    .pipe(concat('app.js'))
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'))
});