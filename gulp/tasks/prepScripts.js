'use strict';

var gulp = require('gulp'),
	gulpif = require('gulp-if'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var env = process.env.NODE_ENV  || 'development';

gulp.task('prep-scripts', ['clean'], function() {
    return gulp.src(['./app/app.js', './app/modules/*/*.js', './app/**/*.js', '!./app/lib/**'], { base: './app/' })
        .pipe(gulpif(env === 'production', concat('app.js')))
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest('./dist/'));
});