// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');

// lint js files
gulp.task('lint', function() {
  return gulp.src(['./app/**/*.js', '!./app/lib/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

// clean dist folder
gulp.task('clean', function() {
    return gulp.src('./dist/*')
      .pipe(clean({ force: true }));
});

// minify all css files
gulp.task('prep-css-files', ['clean'], function() {
  var opts = { comments: true, spare:true };
  return gulp.src(['./app/**/*.css', '!./app/lib/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});

// minify all js files
gulp.task('prep-js-files', ['clean'], function() {
  return gulp.src(['./app/app.js', './app/modules/*/*.js', './app/**/*.js', '!./app/lib/**'])
    .pipe(concat('app.js'))
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'))
});

// copy the bower lib to dist
gulp.task('copy-bower-components', ['clean'], function () {
  return gulp.src('./app/lib/**')
    .pipe(gulp.dest('./dist/lib'));
});

// copy the html files to dist
gulp.task('copy-html-files', ['clean'], function () {
  return gulp.src(['./app/**/*.html', '!./app/index.html'])
    .pipe(gulp.dest('./dist'));
});

/* Inject files to index */

function injectFiles(targetFolder) {
  var bowerOptions = { 
    paths: { bowerDirectory: targetFolder + '/lib' }
  };
  var ignorePath = targetFolder.replace('./', '');

  return gulp.src('./app/index.html')
    .pipe(inject(gulp.src(bowerFiles(bowerOptions), { read: false }), { name: 'bower', ignorePath: ignorePath }))
    .pipe(inject(gulp.src([targetFolder + '/**/*.js', '!' + targetFolder + '/lib/**'], { read: false }), { ignorePath: ignorePath }))
    .pipe(gulp.dest(targetFolder));
};

// prepare index.html file
gulp.task('index', function () {
  return injectFiles('./app');
});

// prepare index.html file for full build
gulp.task('index-build', ['prep-css-files', 'prep-js-files', 'copy-bower-components', 'copy-html-files'], function () {
  return injectFiles('./dist');
});

/* Connect to server */

gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 3000
  });
});

// default task
gulp.task('default',
  ['lint', 'index', 'connect']
);

// build task
gulp.task('build',
  ['lint', 'clean', 'index-build']
);