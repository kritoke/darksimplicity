// Gulp.js configuration
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss');

// apply PostCSS plugins
gulp.task('css', function() {
  return gulp.src('src/style.min.css')
    .pipe(postcss([
      require('autoprefixer')({}),
      require('cssnano'),
      require('lost'),
      require('postcss-font-magician')({protocol: 'https:'}),
      require('postcss-simple-vars')
    ]))
    .pipe(gulp.dest('dest'));
});

gulp.task('default', ['css']);

gulp.task('watch', function() {
    gulp.watch('src/main.css', ['css'])
});
