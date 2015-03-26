'use strict';

var gulp = require('gulp'),
    bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject');

function injectFiles(targetFolder) {
  var bowerOptions = { 
    paths: { bowerDirectory: targetFolder + '/lib' }
  };
  var ignorePath = targetFolder.replace('./', '');

  return gulp.src('./app/index.html')
    .pipe(inject(gulp.src(bowerFiles(bowerOptions), { read: false }), { name: 'bower', ignorePath: ignorePath }))
    .pipe(inject(gulp.src([targetFolder + '/**/*.css', '!' + targetFolder + '/lib/**'], { read: false }), { ignorePath: ignorePath }))
    .pipe(inject(gulp.src([targetFolder + '/**/*.js', '!' + targetFolder + '/lib/**'], { read: false }), { ignorePath: ignorePath }))
    .pipe(gulp.dest(targetFolder));
};

// prepare index.html file
gulp.task('index', ['prepare-sass'], function () {
  return injectFiles('./app');
});

// prepare index.html file for full build
gulp.task('index-build', ['prepare-sass', 'prep-css-files', 'prep-js-files', 'copy-bower-components', 'copy-html-files'], function () {
  return injectFiles('./dist');
});