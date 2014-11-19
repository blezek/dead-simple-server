var gulp = require('gulp'),
  uglify = require('gulp-uglify');



// Vended source
gulp.task('default', function() {
  gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/toastr/toastr.js',
    'node_modules/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
    'node_modules/angular-ui-router/release/angular-ui-router.js',
    'node_modules/angular-ui-select/dist/select.js',
    'node_modules/backbone/backbone.js',
    'node_modules/notifyjs/dist/notify-combined.js',
    'node_modules/angular/angular.js',
    'node_modules/angular-bootstrap/ui-bootstrap.js',
    'node_modules/underscore/underscore.js'
    ])
  .pipe(gulp.dest('app/js'));

  gulp.src('node_modules/bootstrap/dist/**')
  .pipe(gulp.dest("app/"));

  gulp.src([
    'node_modules/font-awesome/css/font-awesome*.css',
    'node_modules/toastr/toastr.css'
    ])
  .pipe(gulp.dest('app/css'));
  gulp.src('node_modules/font-awesome/fonts/**').pipe(gulp.dest('app/fonts'));

});
