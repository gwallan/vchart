const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")


const env = process.env.NODE_ENV;

function resolve(dir) {
  return path.join(__dirname, './', dir)
}
let cssLoaderConfig = (env === 'development' ? {
      test: /\.css$/,
      loaders: 'style-loader!css-loader'
    } : {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    })
let config = {
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src'), resolve('test'), resolve('demo')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          'scss': 'vue-style-loader!css-loader!sass-loader'
        }
      }
    }, cssLoaderConfig, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }, {
      test: /\.(jpg|png|gif|woff|woff2|svg|eot|ttf)$/,
      loader: "url-loader?limit=100000&name=[name].[ext]"
    }]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new LodashModuleReplacementPlugin,

    new webpack.ProvidePlugin({
      _: 'lodash'
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
}

if (env === 'development') {
  config.entry = './demo/main.js'

  config.output = {
    path: path.resolve(__dirname, './demo/dist'),
    publicPath: '/demo/dist/',
    filename: 'vchart.js'
  }

  config.devtool = '#eval'
}

if (env === 'production') {
  config.entry = './src/index.js'

  config.output = {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: 'vchart.js'
  }
  
  config.devtool = '#source-map'

  config.plugins = (config.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

    new ExtractTextPlugin({
      filename: 'vchart.css',
      allChunks: true
    })
  ])
}

module.exports = config
