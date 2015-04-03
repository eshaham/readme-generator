'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    gulpif = require('gulp-if'),
    clean = require('gulp-clean'),
    path = require('path'),
    bowerFiles = require('main-bower-files');

var env = process.env.NODE_ENV  || 'development';

gulp.task('prep-sass', ['clean'], function() {
    var loadPaths = bowerFiles({
        base: './app/lib',
        filter: '**/_*.scss'
    });

    for (var i = 0; i < loadPaths.length; i++) {
        loadPaths[i] = path.dirname(loadPaths[i]);
    }

    return gulp.src(['./app/**/*.scss', '!./app/lib/**'])
        .pipe(sass({ includePaths: loadPaths }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('prep-css', ['clean', 'prep-sass'], function() {
    return gulp.src(['./app/**/*.css', '!./app/lib/**'])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('prep-styles', ['clean', 'prep-sass', 'prep-css'], function() {
    return gulp.src(['./dist/**/*.css', '!./dist/lib/**'])
        .pipe(gulpif(env === 'production', clean({ force: true })))
        .pipe(gulpif(env === 'production', concat('site.css')))
        .pipe(gulpif(env === 'production', minifyCSS({ comments: true, spare: true })))
        .pipe(gulp.dest('./dist/'));
});