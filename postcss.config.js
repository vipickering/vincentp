module.exports = {
  map: false,
  plugins: [
    require('postcss-import')({}),
    require('stylelint')({}),
    require('css-mqpacker')({}),
    require('autoprefixer')({'browsers': '> 5%'}),
    require('cssnano')({})
  ]
}
