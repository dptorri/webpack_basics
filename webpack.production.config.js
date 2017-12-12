var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.json$/,loader: "json-loader"},
            {test: /\.js$/,exclude: /node_modules/,loader: 'babel-loader'},
            {test: /\.css$/,loader: ExtractTextPlugin('style','style-loader!css-loader?modules')},
            {test: /\.css$/,loader: ExtractTextPlugin('style','postcss-loader'),
                options: {
                    ident: 'postcss',
                    plugins: (loader) => [
                    require('autoprefixer')()
                    ]
                }
            }         
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + '/app/index.tmpl.html'
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin("style.css")
    ]
}
