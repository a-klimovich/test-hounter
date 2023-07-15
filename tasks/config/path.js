const pathSrc = './src';
const pathBuild = './public';

module.exports = {
  root: pathBuild,
  html: {
    src: pathSrc + '/index.html',
    watch: pathSrc + '/**/*.html',
    build: pathBuild,
  },
  scss: {
    src: pathSrc + '/**/{*.scss, *.sass}',
    watch: pathSrc + '/**/{*.scss, *.sass}',
    build: pathBuild + '/css',
  },
  script: {
    src: pathSrc + '/js/**/*.js',
    watch: pathSrc + '/js/**/*.js',
    build: pathBuild + '/js',
  },
  fonts: {
    src: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    build: pathBuild + '/fonts',
  },
  images: {
    src: pathSrc + '/assets/**/*.*',
    watch: pathSrc + '/assets/**/*.*',
    build: pathBuild + '/assets',
  },
  vendorsJS: {
    src: pathSrc + '/vendors/**/*.js',
    build: pathBuild + '/js',
  },
  vendorsCSS: {
    src: pathSrc + '/vendors/**/*.css',
    build: pathBuild + '/css',
  },
}