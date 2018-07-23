const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
 imagemin = require('gulp-imagemin');

gulp.task('scripts', () => {
    gulp.src('src/js/scripts.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        // .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'))
});
gulp.task('sass', function () {
    return gulp.src(['src/scss/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('updatecss', () => {
    gulp.src('src/scss/**/*.css')
        .pipe(gulp.dest('dist/css'))
});
gulp.task('fonts', () => {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});
gulp.task('updatehtml', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});
gulp.task('updatejs', () => {
    gulp.src('src/js/lib/*.js')
        .pipe(gulp.dest('dist/js'))
});
gulp.task('img', () => {
    gulp.src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/js/*.js'], ['scripts']);
    gulp.watch('src/*.html', ['updatehtml']);
    gulp.watch('src/img/**/*', ['img']);
    gulp.watch("src/*.html").on('change', browserSync.reload)
    gulp.watch("src/js/*.js").on('change', browserSync.reload)
});


gulp.task('default', ['sass',"img", "scripts", "fonts", "updatejs", "updatecss", "updatehtml", 'serve']);
gulp.task('pro', ['pro']);