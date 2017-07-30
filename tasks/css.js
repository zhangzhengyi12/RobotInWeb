


import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from "gulp-livereload";
import  args from "./util/args";
import concat from "gulp-concat";
import minCss from "gulp-minify-css"

//实现css的合并 与压缩
gulp.task("css",()=>{
    return gulp.src("app/**/*.css")
        .pipe(concat("main.min.css"))
        .pipe(minCss())
        .pipe(gulp.dest("server/public/css"))
        .pipe(gulpif(args.watch,livereload()))
})