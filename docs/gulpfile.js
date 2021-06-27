const gulp = require("gulp");
const sass = require("gulp-sass")(require('node-sass'));

gulp.task("sass", () => {
  return gulp
    .src("./vendors/sass/**/*.{sass,scss}")
    .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(gulp.dest("./assets/css"));
});

exports.default = gulp.series("sass");

exports.watch = (a) => {
  gulp.watch('./vendors/sass/**/*.{sass,scss}', gulp.series('sass'));
  return a;
}
