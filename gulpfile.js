var gulp = require('gulp');

gulp.task('task-name', function() {
  // Stuff here
});

gulp.task('hello', function() {
  console.log('Hello Zell');
});

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src(['src/styles/**/*.scss', 'node_modules/bootstrap/dist/css/bootstrap.css'])
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('src/css'))
});

gulp.task('js', function(){
  return gulp.src('node_modules/bootstrap/dist/js/bootstrap.js')
    .pipe(gulp.dest('src/script'))
});

gulp.task('nowatch', ['sass', 'js']);