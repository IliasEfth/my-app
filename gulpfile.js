var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var angularTemplateCache = require('gulp-angular-templatecache');

exports.default = gulp.task('templates', function() {
    return gulp.src('src/angularjsApp/**/*.html')
        .pipe(htmlmin())
        .pipe(angularTemplateCache('app.templates.js', {
            module: 'angularjs_demo',
            root: ''
        }))
        .pipe(gulp.dest('distGulp'));
});