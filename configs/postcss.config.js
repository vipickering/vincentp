module.exports = {
  map: false,
  plugins: [
    require('postcss-import'),
    require('css-mqpacker'),
    require('postcss-custom-media'),
    require('cssnano')({ autoprefixer: false }),
    require('immutable-css') (),
    require("postcss-reporter")()
  ]
}
