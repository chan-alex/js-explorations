
const gulp = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");

gulp.task("default", function() {
    // Node source
    gulp.src("./*.js")
        .pipe(eslint())
        .pipe(eslint.format());
    
});
