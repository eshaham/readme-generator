'use strict';

var gulp = require('gulp');

gulp.task('build', ['lint', 'clean', 'index-build']);