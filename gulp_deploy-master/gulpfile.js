var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

sass.compiler = require('node-sass');

const {watch, series} = require('gulp');

function scriptsconcat(done) {
    return gulp.src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/'));
    done();
};

function sassconcat(done) {
    return gulp.src('./style/*.scss')
        .pipe(concat('style.scss'))
        .pipe(gulp.dest('./dist/'));
    done();
};

function sass(done) {
    return gulp.src('./dist/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
    done();
};

// function sass(done) {
//     return new Promise(function(resolve, reject) {
//         gulp.src('./dist/style.scss')
//             .pipe(sass().on('error', sass.logError))
//             .pipe(gulp.dest('./css'));
//         resolve();
//     });
// };

// gulp.task("sass", sass);
// gulp.task("jscon", scriptsconcat);
// gulp.task("sasscon", sassconcat);
// // gulp.task("default", gulp.parallel(scriptsconcat, sassconcat));
// gulp.task("default", gulp.series(scriptsconcat, sassconcat, sass));

exports.default = function() {
    watch('./style/*.scss', series(sassconcat, sass));
};