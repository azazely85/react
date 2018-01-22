var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
    watch = require('gulp-watch');
var path = {
    build: {
        root: 'build/',
        html: 'build/',
        css: 'build/css/',
        js: 'build/js/',
        img: 'build/images/',
        fonts: 'build/fonts/',
        assets: 'build/external/'
    },
    src: {
        jade: 'src/templates/**/*.jade',
        sass: 'src/sass/*.scss',
        js: 'src/js/*.js',
        img: 'img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        assets: 'src/external/**/*.*',
    },
    watch: {
        jade: 'src/templates/**/*.jade',
        sass: 'src/**/*.scss',
        js: 'src/js/*.js',
        img: 'img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        assets: 'src/external/**/*.*'
    }
};
gulp.task('image:build', function() {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            interlaced: true
        }))
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 6}),
            imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest(path.build.img));
    return gulp.src('build/images/**/*.*', {
        read: false
    })
});
gulp.task('watch', function() {

    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });


});
gulp.task('default', ['watch', 'image:build']);