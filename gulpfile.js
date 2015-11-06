var
  gulp    = require('gulp'),
  connect = require('gulp-connect'),
  watch   = require('gulp-watch');
 
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: 'src/',
    port: 8012
  });
});

gulp.task('reload', function() {
  gulp
    .src('src/**/*.*')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['reload']);
});
 
gulp.task('default', ['webserver', 'watch']);
