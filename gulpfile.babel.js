import gulp from 'gulp';
import inject from 'gulp-inject';
import clean from 'gulp-clean';
const distSrc = './dist';

// clean dist
gulp.task('clean', () => {
    return gulp.src(distSrc, {read: false})
        .pipe(clean());
});


// inject to dist and copy
gulp.task('injectToDist', () => {
    var target = gulp.src('./index.html');
    target
        .pipe(inject(gulp.src([
            distSrc + '/**/*.js',
            distSrc + '/**/*.css'
        ], {read: false}), {
            transform: function (filepath) {
                var ext = filepath.split('.').splice(-1)[0];
                filepath = filepath.replace('/dist', '');
                if (ext == 'js') {
                    return '<script src=".' + filepath + '"></script>';
                }
                if (ext == 'css') {
                    return '<link rel="stylesheet" href=".' + filepath + '">';
                }
            }
        }))
        .pipe(gulp.dest(distSrc));
});