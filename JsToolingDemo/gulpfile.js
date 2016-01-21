var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var rm = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');

var Karma = require('karma').Server;

gulp.task('default', ['build', 'test']);

gulp.task('build', ['clean', 'build app']);

gulp.task('test', function (done) {
    new Karma({
        configFile: __dirname + '/karma.conf.js',
    }, done).start();
});

gulp.task('build app', function () {
    return gulp.src(['Scripts/angular.js', 'Content/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('clean', function () { return gulp.src(['public']).pipe(rm()); });