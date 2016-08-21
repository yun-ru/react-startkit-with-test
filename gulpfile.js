var gulp = require('gulp');
var webpack = require('webpack-stream');
gulp.task('webpack', function() {
    return gulp.src('src/app.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist/'));
});

gulp.task("watch",function(){
    gulp.watch('./src/**/*',['webpack'])
});

gulp.task('default',['watch']);

