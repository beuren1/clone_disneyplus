const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Minifica scripts JS
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

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
exports.default = gulp.parallel(styles, images, scripts);

// Watch opcional
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
};
