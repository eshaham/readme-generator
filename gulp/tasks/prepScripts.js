'use strict';

var gulp = require('gulp'),
    gulpFilter = require('gulp-filter'),
    streamqueue = require('streamqueue'),
    bowerFiles = require('main-bower-files'),
	gulpif = require('gulp-if'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var env = process.env.NODE_ENV  || 'development';

gulp.task('prep-scripts', ['clean'], function() {
    return streamqueue(
        { objectMode: true },
        gulp.src(bowerFiles({ paths: { bowerDirectory: './app/lib' }}), { base: './app/' }),
        gulp.src(['./app/app.js', './app/modules/*/*.js', './app/**/*.js', '!./app/lib/**'], { base: './app/' })
        )
        .pipe(gulpFilter('**/*.js'))
        .pipe(gulpif(env === 'production', concat('app.js')))
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest('./dist/'));
});