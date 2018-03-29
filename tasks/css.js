import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'

gulp.task('css', () => {
  return gulp.src('app/**/*.css') // 这种形式传递的文件包含css文件夹，也就是所有的*号部分都会传递
    .pipe(gulp.dest('server/public'))
    // .pipe(gulpif(args.watch, livereload()))
})