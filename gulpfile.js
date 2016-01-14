var gulp = require('gulp'),
  concat = require('gulp-concat'),
  gutil = require('gulp-util'),
  inject = require('gulp-inject'),
  stripDebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/dev/js/**/*')
});

gulp.task('html', function() {
  gulp.src('builds/dev/*.html')
});

gulp.task('css', function() {
  gulp.src('builds/dev/css/*.css')
});

gulp.task('watch', function() {
  gulp.watch('builds/dev/js/**/*', ['js']);
  gulp.watch('builds/dev/css/*.css', ['css']);
  gulp.watch(['builds/dev/*.html',
    'builds/dev/templates/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/dev/')
    .pipe(webserver({
      livereload: true,
      open: false
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);

gulp.task('jslibdev', function() {
   gulp.src('./bower_components/angular/angular.js')
   .pipe(gulp.dest('./builds/dev/js/lib/'));
   gulp.src('./bower_components/angular-bootstrap/ui-bootstrap-tpls.js')
   .pipe(gulp.dest('./builds/dev/js/lib/'));
   gulp.src('./bower_components/angular-ui-router/release/angular-ui-router.js')
   .pipe(gulp.dest('./builds/dev/js/lib/'));
});

gulp.task('jslibprod', function() {
   gulp.src('./bower_components/angular/angular.min.js')
   .pipe(gulp.dest('./builds/prod/js/lib/'));
   gulp.src('./bower_components/angular/angular.min.js.map')
   .pipe(gulp.dest('./builds/prod/js/lib/'));
   gulp.src('./bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js')
   .pipe(gulp.dest('./builds/prod/js/lib/'));
   gulp.src('./bower_components/angular-ui-router/release/angular-ui-router.min.js')
   .pipe(gulp.dest('./builds/prod/js/lib/'));
});

gulp.task('indexdev', function () {
  return gulp.src('./builds/dev/index.html')
  .pipe(inject(gulp.src(['./builds/dev/js/app/*app.js', './builds/dev/js/app/**/*.js'], {read: false}), {relative: true}))
  .pipe(gulp.dest('./builds/dev'));
});

gulp.task('jsprod', function() {
  gulp.src(['./builds/dev/js/app/*app.js', './builds/dev/js/app/**/*.js'])
    .pipe(concat('example-orcid-spa.min.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./builds/prod/js'));
});

gulp.task('indexprod', function () {
  return gulp.src('./builds/prod/index.html')
  .pipe(inject(gulp.src('./builds/prod/js/example-orcid-spa*.js', {read: false}), {relative: true}))
  .pipe(gulp.dest('./builds/prod'));
});

gulp.task('cssprod', function() {
  gulp.src('builds/dev/css/*.css')
    .pipe(gulp.dest('builds/prod/css'))
});

gulp.task('imagesprod', function() {
  gulp.src('builds/dev/images/*.*')
    .pipe(gulp.dest('builds/prod/images'))
});

gulp.task('templatesprod', function() {
  gulp.src('builds/dev/templates/*.html')
    .pipe(gulp.dest('builds/prod/templates'))
});

gulp.task('webserverprod', function() {
  gulp.src('builds/prod/')
    .pipe(webserver({
      livereload: false,
      open: false
    }));
});

gulp.task('dev', ['jslibdev', 'indexdev']);
gulp.task('prod', ['dev', 'jslibprod', 'jsprod', 'indexprod', 
  'imagesprod', 'cssprod', 'templatesprod', 'webserverprod']);
