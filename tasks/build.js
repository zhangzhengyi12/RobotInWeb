import gulp from 'gulp';
import gulpSequence from "gulp-sequence";

gulp.task('build',gulpSequence('clean','font','css','pages','scripts',['browser','server']));