'use strict';

var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    server = require('gulp-server-livereload');


gulp.task('build', function() {
  browserify({
    entries: './src/app/main.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./dist'));
});


gulp.task('copy', function() {
  gulp.src('src/index.html')
  .pipe(gulp.dest('./dist'));
});


gulp.task('sass', function() {
  gulp.src('src/scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist'));
});


gulp.task('serve', function(done){
  gulp.src('./dist')
  .pipe(server({
    livereload: {
        enable: true
      },
    defaultFile: 'index.html',
    open: true
  }))
});


gulp.task('watch', function(){
  gulp.watch('src/**/*.js', ['build']);
  gulp.watch('src/**/*.html', ['copy']);
  gulp.watch('src/**/*.scss', ['sass']);
})


gulp.task('default', [ 'build', 'serve', 'copy', 'sass', 'watch']);
