var gulp = require('gulp');
var sass = require('gulp-sass');
var glob = require('glob-all');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('useref', function(){
    console.log("running useref");
    return gulp.src(['app/**/*.html','index.html','!app/dist/**/*'])
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'));
});

gulp.task('checkGlob', function(){
    var files = glob.sync([
        'app/**/*.html', 
        '!app/dist/**/*'
//      'files/**',      //include all     files/
//      '!files/x/**',   //then, exclude   files/x/
//      'files/x/z.txt'  //then, reinclude files/x/z.txt
    ]);
    console.log('All globs are shown below');
    console.log(files);
})


gulp.task('rebuild', ['useref'], function(){
    browserSync.reload();
});

gulp.task('sass', function(){
  return gulp.src('assets/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
          baseDir: 'dist'
        },
    })
});

gulp.task('watch', ['clean' ,'sass', 'useref', 'browserSync'], function(){
    gulp.watch('assets/**/*scss', ['sass']);
    gulp.watch(['app/**/*.html', '!app/dist/**/*'], ['rebuild']);
    gulp.watch(['app/**/*.js', '!app/dist/**/*'], ['rebuild']);
});

gulp.task('clean', function() {
  return del.sync('dist');
})

gulp.task('default', ['watch']);


gulp.task('testConsole', function(){
    console.log('testConsole');
})


