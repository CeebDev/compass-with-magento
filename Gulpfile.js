//######################## DECLARE YOUR PACKAGE NAME HERE #############################
var packageName = 'rwd',

//######################## DECLARE VARIABLES AND PLUGINS ##############################
    gulp  = require('gulp'),
    watch = require('gulp-watch'),
    compass  = require('gulp-compass'),
    path = require('path'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    pathToProject = path.join(__dirname, 'skin\\frontend\\' + packageName + '\\default\\');

//######################## CONSTRUCT PATHS ############################################
var paths = {
    base: pathToProject,
    sass: [pathToProject + 'scss\\*.scss', pathToProject + 'scss\\**\\*.scss'],
    scss: pathToProject + 'scss\\*.scss',
    scssFolder: pathToProject + 'scss',
    css: pathToProject + 'css',
    img: pathToProject + 'images',
    imgDev: pathToProject + 'images_dev\\*'
};

//######################## COMPASS TASK ###############################################
gulp.task('compass', function() {
    return gulp.src(paths.scss)
        .pipe(compass({
            sourcemap: true,
            project: paths.base,
            css: paths.css,
            sass: paths.scssFolder,
            image: paths.img
        }))
        .pipe(gulp.dest(paths.css))
});

//######################## CLEAN TASK #################################################
gulp.task('clean', ['imageMin'], function() {
    del(paths.imgDev)
});

//######################## IMAGEMIN TASK ##############################################
gulp.task('imageMin', function() {
    return gulp.src(paths.imgDev)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.img))
});

//######################## WATCH TASK #################################################
gulp.task('watch', function() {
    gulp.watch(paths.sass, ['compass']); // Rerun compass on changes
    watch(paths.imgDev, function(file) { // Rerun imageMin on changes but not on delete (Because clean task is running after)
        if (file.event !== 'unlink') {
            gulp.start('imageMin');
            gulp.start('clean');
        }
    });
});

//######################## DEFAULT TASK LOAD ALL TASK (command '$ gulp') ##############
gulp.task('default', ['compass', 'imageMin', 'watch']);