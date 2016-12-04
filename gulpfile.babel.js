import gulp from 'gulp';
import inject from 'gulp-inject';
import clean from 'gulp-clean';
const distSrc = './dist/client';

// clean dist
gulp.task('clean', () => {
    return gulp.src(distSrc, {read: false})
        .pipe(clean());
});


// inject static files to dist and copy
gulp.task('injectStaticToDist', () => {
    var target = gulp.src('./src/client/index.html');
    target
        .pipe(inject(gulp.src([
            distSrc + '/**/*.js',
            distSrc + '/**/*.css'
        ], {read: false}), {
            transform: function (filepath) {
                var ext = filepath.split('.').splice(-1)[0];
                console.log(filepath);
                filepath = filepath.replace('/dist/client/', '');
                if (ext == 'js') {
                    return '<script src="' + filepath + '"></script>';
                }
                if (ext == 'css') {
                    return '<link rel="stylesheet" href="' + filepath + '">';
                }
            }
        }))
        .pipe(gulp.dest(distSrc));
});