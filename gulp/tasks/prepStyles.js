'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    gulpif = require('gulp-if'),
    clean = require('gulp-clean');

var env = process.env.NODE_ENV  || 'development';

gulp.task('prep-sass', ['clean'], function() {
  return gulp.src(['./app/**/*.scss', '!./app/lib/**'])
    .pipe(sass())
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