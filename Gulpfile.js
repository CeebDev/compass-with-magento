var gulp  = require('gulp'),
    compass  = require('gulp-compass'),
    path = require('path'),
    packageName = 'rwd',
    pathToProject = path.join(__dirname, 'skin/frontend/' + packageName + '/default/');

var paths = {
        base: pathToProject,
        sass: [pathToProject + 'scss/*.scss', pathToProject + 'scss/**/*.scss'],
        scss: pathToProject + 'scss/*.scss',
        scssFolder: pathToProject + 'scss',
        css: pathToProject + 'css',
        img: pathToProject + 'images',
    };

gulp.task('compass', function() {
  gulp.src(paths.scss)
  .pipe(compass({
        project: paths.base,
        css: paths.css,
        sass: paths.scssFolder,
        image: paths.img
  }))
  .pipe(gulp.dest(paths.css))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.sass, ['compass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'compass']);