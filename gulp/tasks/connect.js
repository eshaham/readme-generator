'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback');

gulp.task('connect', function () {
    connect.server({
        root: 'dist/',
        port: 3000,
        livereload: true,
        middleware: function(connect, opt) {
            return [ historyApiFallback ];
        }
    });
});