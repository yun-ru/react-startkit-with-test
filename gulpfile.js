var gulp = require('gulp');
var replace = require('gulp-replace');
var webpack = require('webpack-stream');
gulp.task('webpack', function() {
    return gulp.src('src/app.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('build/js'));
});

gulp.task('index',function(){
    return gulp.src('index.html')
        .pipe(replace(/assets/g, 'js'))
        .pipe(gulp.dest('build/'));
})

gulp.task("watch",function(){
    gulp.watch('./src/**/*',['webpack'])
});

gulp.task('default',['watch']);

