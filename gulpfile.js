var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// 一次性编译 Sass 
gulp.task('sass', function () {
    return gulp.src('./source/sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'));
});

// 实时编译
gulp.task('default', ['sass'], function () {
    gulp.watch('./source/sass/_partial/*.sass', ['sass']);
    gulp.watch('./source/sass/*.sass', ['sass']);
});