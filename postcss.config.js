module.exports = {
  parser: 'sugarss',
  map: false,
  plugins: [
    require('stylelint')({}),
    require('postcss-import')({}),
    require('css-mqpacker')({}),
    require('autoprefixer')({'browsers': '> 5%'}),
    require('cssnano')({})
  ]
}

