const { src, dest } = require("gulp");
const path = require('./config/path.js');
const processes = require('./config/processes.js');

// PLAGINS
const gulpIf = require('gulp-if');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const minify = require('gulp-minify');

const script = () => {
  return src(path.script.src)
    .pipe(babel())
    .pipe(gulpIf(processes.isProd, minify({noSource: true})))
    .pipe(concat('index.js'))
    .pipe(dest(path.script.build))
};

const vendorsScript = () => {
  return src(path.vendorsJS.src)
    .pipe(babel())
    .pipe(gulpIf(processes.isProd, minify({noSource: true})))
    .pipe(concat('vendors.js'))
    .pipe(dest(path.vendorsJS.build))
};

module.exports = {
  script,
  vendorsScript,
};