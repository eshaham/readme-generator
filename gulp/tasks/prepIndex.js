'use strict';

var gulp = require('gulp'),
    bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject');

// prepare index.html file
gulp.task('prep-index', ['prep-styles', 'prep-scripts', 'copy-bower-components', 'copy-html-files'], function () {
  var bowerOptions = { 
    paths: { bowerDirectory: './dist/lib' }
  };
  return gulp.src('./app/index.html')
    .pipe(inject(gulp.src(bowerFiles(bowerOptions), { read: false }), { name: 'bower', ignorePath: 'dist' }))
    .pipe(inject(gulp.src(['./dist/**/*.css', '!./dist/lib/**'], { read: false }), { ignorePath: 'dist' }))
    .pipe(inject(gulp.src(['./dist/**/*.js', '!./dist/lib/**'], { read: false }), { ignorePath: 'dist' }))
    .pipe(gulp.dest('./dist'));
});