const {src, dest, series, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const webpackStream = require('webpack-stream');
const rename = require('gulp-rename');


// Таск компиляции SASS в CSS
function buildSass() {
    return src('site/src/scss//*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: ['./node_modules']}).on('error', sass.logError))
        .pipe(
            postcss([
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ['last 2 versions']
                }),
                cssnano()
            ])
        )
        .pipe(sourcemaps.write())
        .pipe(dest('site/src/css'))
        .pipe(dest('site/dist/css'))
        .pipe(browserSync.stream());
}

// Таск работы с html файлами
function buildHtml() {
    return src('site/src//*.html')
        .pipe(dest('dist'))
        .pipe(browserSync.stream());
}

// Таск копирования статичных файлов
function copy() {
    return src(['site/src/images//*.*'], {base: 'src'}).pipe(dest('dist'));
}

// Таск очистки dist
function cleanDist() {
    return src('dist', {allowEmpty: true}).pipe(clean());
}

// Таск отслеживания изменения файлов
function serve() {
    watch('site/src/scss//*.scss', buildSass);
    watch('site/src//*.html', buildHtml);
    watch(['site/src/js//*.js', '!site/src/js/**/*.min.js'], buildJs);
}

function buildJs() {
    return src('site/src/js/script.js')
        .pipe(webpackStream(require('./webpack.config')))
        .pipe(rename('main.min.js'))
        .pipe(dest('site/src/js'))
        .pipe(dest('site/dist/js'))
        .pipe(browserSync.stream());
}

exports.build = series(cleanDist, parallel(buildSass, buildHtml, copy, buildJs));
exports.default = series([buildSass, buildJs], parallel(serve));