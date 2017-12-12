var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
            test: /\.json$/,
            loader: "json-loader"
            },
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            },
            {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules'
            },
            {
            test: /\.css$/,
            loader: 'postcss-loader',
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
      new webpack.BannerPlugin("Copyright Daniel Palacios 2017"),
      new HtmlWebpackPlugin({
          template: __dirname + '/app/index.tmpl.html'
      })
    ],

    devServer: {
        contentBase: "./public",
        //colors: true,
        historyApiFallback: true,
        inline: true
    }
}
