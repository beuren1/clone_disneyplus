const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Compila SCSS em CSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Otimiza imagens
function images() {
    return gulp.src('./src/images/**/*.{png,jpg,jpeg,svg,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Task padrão
exports.default = gulp.parallel(styles, images);

// Watch opcional
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/images/**/*.{png,jpg,jpeg,svg,gif}', images);
};
