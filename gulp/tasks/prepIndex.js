'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject'),
    cdnizer = require('gulp-cdnizer');

var env = process.env.NODE_ENV  || 'development';

// prepare index.html file
gulp.task('prep-index', ['prep-styles', 'prep-scripts', 'copy-bower-components', 'copy-html-files', 'copy-images'], function () {
    var bowerOptions = { 
        paths: { bowerDirectory: './dist/lib' }
    };
    return gulp.src('./app/index.html')
        .pipe(inject(gulp.src(bowerFiles(bowerOptions), { read: false }), { name: 'bower', ignorePath: 'dist' }))
        .pipe(inject(gulp.src(['./dist/**/*.css', '!./dist/lib/**'], { read: false }), { ignorePath: 'dist' }))
        .pipe(inject(gulp.src(['./dist/**/*.js', '!./dist/lib/**'], { read: false }), { ignorePath: 'dist' }))
        .pipe(gulpif(env === 'production', cdnizer([
            'cdnjs:angular.js', 
            { 
                cdn: 'cdnjs:angular-ui-router',
                test: 'window.angular'
            }
        ])))
        .pipe(gulp.dest('./dist'));
});