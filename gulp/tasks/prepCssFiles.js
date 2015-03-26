'use strict';

var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css');

gulp.task('prep-css-files', ['clean', 'prepare-sass'], function() {
  var opts = { comments: true, spare: true };
  return gulp.src(['./app/**/*.css', '!./app/lib/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});