module.exports = {
  map: false,
  plugins: [
     require('postcss-import')({
            plugins: [
                require('stylelint')('./.stylelintrc')
            ]
        }),
    require('postcss-cssnext')({'browsers': 'last 2 versions'}),
    require('postcss-css-variables'),
    require('css-mqpacker'),
    require('cssnano')({ autoprefixer: false }),
    require("postcss-reporter")({ clearReportedMessages: true })
  ]
}
