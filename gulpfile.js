var gulp = require('gulp');
var sass = require('gulp-sass');
//var glob = require('glob-all');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');

gulp.task('useref', function(){
    console.log("running useref");
    return gulp.src('app/**/*.html')
        .pipe(useref())
        //.pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('app/dist'));
});

gulp.task('sass', function(){
  return gulp.src('assets/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
          baseDir: 'app/dist'
        },
    })
});

gulp.task('watch', ['sass', 'useref', 'browserSync'], function(){
    gulp.watch('assets/**/*scss', ['sass']);
    gulp.watch(['app/**/*.html', '!app/dist/**/*'], ['rebuild']);
    gulp.watch(['app/**/*.js', '!app/dist/**/*'], ['rebuild']);
});

gulp.task('default', ['watch']);


gulp.task('testConsole', function(){
    console.log('testConsole');
})


