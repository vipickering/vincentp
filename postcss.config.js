module.exports = {
  map: false,
  plugins: [
    require('postcss-import'),
    require('postcss-css-variables'),
    require('css-mqpacker'),
    require('autoprefixer')({'browsers': 'last 2 versions'}),
    require('cssnano')
  ]
}
