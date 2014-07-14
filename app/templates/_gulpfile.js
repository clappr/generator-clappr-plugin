var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var es6ify = require('es6ify');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var exec = require('child_process').exec;
var args = require('yargs').argv;

var files = {
  css:  'public/*.css',
  scss: 'public/*.scss',
  html: 'public/*.html'
};

gulp.task('pre-build', ['sass', 'copy-html', 'copy-css'], function(done) {
  exec('node bin/hook.js', done);
});

gulp.task('build', ['pre-build'], function(b) {
  var isProd = ['prod', 'production'].indexOf(args.env) !== -1 ? true : false;

  var stream = browserify()
    .transform(es6ify.configure(/^(?!.*node_modules)+.+\.js$/))
    .add(es6ify.runtime)
    .add('./index.js', {entry: true})
    .external('ui_plugin')
    .external('ui_object')
    .external('base_object')
    .bundle()
    .pipe(source('main.js'))
    .pipe(rename( '<%= filename %>' + (isProd ? '.min.js' : '.js')));

  if(isProd) {
    stream.pipe(streamify(uglify()));
  }
  stream.pipe(gulp.dest('./dist'))
});

gulp.task('sass', function () {
    return gulp.src(files.scss)
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest("build"));
});

gulp.task("copy-css", function() {
  return gulp.src(files.css)
    .pipe(minifyCSS())
    .pipe(gulp.dest('build'));
});

gulp.task("copy-html", function() {
  return gulp.src(files.html)
    .pipe(gulp.dest('build'));
});


