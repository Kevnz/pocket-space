var gulp = require("gulp");
var amdOptimize = require("amd-optimize");

var concat = require("gulp-concat");
// Main module. With CoffeeScript precompilation, concatenation and minifiying.
gulp.task("scripts", function () {

  return gulp.src(["js/**/*.js", "js/**/**/*.js"])
    // Traces all modules and outputs them in the correct order.
    .pipe(amdOptimize("main"))
    .pipe(concat("index.js"))
    .pipe(gulp.dest("dist/scripts"));

});

gulp.task('default', ['scripts']);