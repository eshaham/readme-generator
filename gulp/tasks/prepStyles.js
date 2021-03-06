'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    gulpif = require('gulp-if'),
    clean = require('gulp-clean'),
    path = require('path'),
    bowerFiles = require('main-bower-files'),
    connect = require('gulp-connect');

var env = process.env.NODE_ENV  || 'development';

gulp.task('prep-sass', function() {
    var loadPaths = bowerFiles({
        base: './app/lib',
        filter: '**/_*.scss'
    });

    for (var i = 0; i < loadPaths.length; i++) {
        loadPaths[i] = path.dirname(loadPaths[i]);
    }

    return gulp.src(['./app/**/*.scss', '!./app/lib/**'])
        .pipe(sourcemaps.init())
        .pipe(sass({ includePaths: loadPaths }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('prep-css', ['prep-sass'], function() {
    return gulp.src(['./app/**/*.css', '!./app/lib/**'])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('prep-styles', ['prep-sass', 'prep-css'], function() {
    return gulp.src(['./dist/**/*.css', '!./dist/lib/**'])
        .pipe(gulpif(env === 'production', clean({ force: true })))
        .pipe(gulpif(env === 'production', concat('site.css')))
        .pipe(gulpif(env === 'production', minifyCSS({ comments: true, spare: true })))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});