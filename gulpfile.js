var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var angularTemplateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');

const distPath = 'distGulp';

function vendor(done) {

    gulp.src([
        'dist/my-app/runtime.js',
        'dist/my-app/polyfills.js',
        'dist/my-app/angularjs.js',
        'dist/my-app/angularjs_app.js',
        'dist/my-app/angularjs_smartButton.js',
        'dist/my-app/app.templates.js',
        'dist/my-app/main.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(distPath))
    done();
}

function templates(done) {
    gulp.src('src/angularjsApp/**/*.html')
        //.pipe(htmlmin())
        .pipe(angularTemplateCache('app.templates.js', {
            module: 'angularjs_demo',
            root: ''
        }))
        .pipe(gulp.dest(distPath))
    done();
}


exports.default = gulp.series(templates);
exports.vendor = gulp.series(vendor);