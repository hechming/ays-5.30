//先导入需要的插件
const gulp = require("gulp");//gulp插件
const sass = require('gulp-sass');//编译sass插件
const cssnano = require("gulp-cssnano");//压缩css
const rename = require("gulp-rename");//重命名
const uglify = require("gulp-uglify");//压缩js
const concat = require("gulp-concat");//合并Js

//编译scss//寻找源文件//编译sass//重命名//压缩css
gulp.task("sass",function(){
	gulp.src("src/scss/*.scss").pipe(sass().on("error",sass.logError)).pipe(rename({"suffix":".min"})).pipe(cssnano()).pipe(gulp.dest("css"));
})
//压缩js，重命名js，合并js
gulp.task("js",function(){
	gulp.src("src/js/*.js").pipe(uglify()).pipe(rename({"suffix":".min"})).pipe(concat("all.min.js")).pipe(gulp.dest("js"))
})
//监控
gulp.task("watch",function(){
	gulp.watch(["src/scss/*.scss","src/js/*.js"],["sass","js"]);
})
