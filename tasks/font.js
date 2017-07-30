/**
 * Created by zhang on 2017-07-27.
 */
import gulp from 'gulp';

//实现css的合并 与压缩
gulp.task("font",()=>{
    return gulp.src("app/font/*")
        .pipe(gulp.dest("server/public/font"))
})