// Gulp.js configuration
var gulp = require('gulp'),
    lost = require('lost'),
    cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer')({}),
    watch = require('gulp-watch'),
    rucksack = require('rucksack-css'),
    simplevars = require('postcss-simple-vars'),
    fontmagician = require('postcss-font-magician')({protocol: 'https:'}),
    postcss = require('gulp-postcss');

// apply PostCSS plugins
gulp.task('css', function() {
  return gulp.src('src/style.min.css')
    .pipe(postcss([
      autoprefixer,
      //cssnano,
      lost,
      rucksack,
      fontmagician,
      simplevars
    ]))
    .pipe(gulp.dest('../static/css'));
});

gulp.task('default', ['css', 'watch']);

gulp.task('watch', function() {
    gulp.watch('src/main.css', ['css'])
});
