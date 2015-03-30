'use strict';

var gulp = require('gulp'),
	gulpFilter = require('gulp-filter'),
    streamqueue = require('streamqueue'),
    bowerFiles = require('main-bower-files'),
    sass = require('gulp-sass'),
	concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    gulpif = require('gulp-if'),
    clean = require('gulp-clean');

var env = process.env.NODE_ENV  || 'development';

gulp.task('prep-sass', ['clean'], function() {
    return gulp.src(['./app/**/*.scss', '!./app/lib/**'])
        .pipe(sass())
        .pipe(gulp.dest('./tmp/'));
});

gulp.task('prep-css', ['clean', 'prep-sass'], function() {
    return gulp.src(['./app/**/*.css', '!./app/lib/**'])
        .pipe(gulp.dest('./tmp/'));
});

gulp.task('copy-styles', ['clean', 'prep-sass', 'prep-css'], function() {
    return streamqueue(
        { objectMode: true },
        gulp.src(bowerFiles({ paths: { bowerDirectory: './app/lib' }}), { base: './app/' }),
        gulp.src(['./tmp/**/*.css'], { base: './tmp/' })
        )
        .pipe(gulpFilter('**/*.css'))
        .pipe(gulpif(env === 'production', concat('site.css')))
        .pipe(gulpif(env === 'production', minifyCSS({ comments: true, spare: true })))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('cleanup-styles', ['copy-styles'], function() {
    return gulp.src(['./tmp/**/*'])
        .pipe(clean({ force: true }));
});

gulp.task('prep-styles', ['copy-styles', 'cleanup-styles']);