'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

// prepare files distribution
gulp.task('prep', function () {
    return runSequence('clean', 'prep-index');
});