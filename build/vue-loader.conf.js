var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction,
    css: ExtractTextPlugin.extract({
              loader: 'css-loader',
              fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
            })
  })
}
